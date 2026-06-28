// Downloads all assets from avtocare.com.ua to public/. Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://avtocare.com.ua";
const OUT = "public";

// [remoteUrl, localPath]
const ASSETS = [
  // logos + favicon
  ["/wp-content/uploads/2022/01/avto_kar_logo-vikup.png", "images/logo.png"],
  ["/wp-content/uploads/2022/01/shablon-master-f-favicon.ico", "seo/favicon.ico"],
  // decorative
  ["/wp-content/uploads/2015/08/home_taxi_heading_sep.png", "images/heading-sep.png"],
  ["/wp-content/uploads/2015/08/home_taxi_form_bg.png", "images/form-bg.png"],
  ["/wp-content/uploads/2015/08/home_taxi_phone.png", "images/phone-icon.png"],
  ["/wp-content/uploads/2015/08/home_taxi_pricingbox_1.png", "images/pricingbox.png"],
  ["/wp-content/uploads/2015/08/home_taxi_section_bg1.png", "images/section-bg1.png"],
  ["/wp-content/uploads/2015/08/home_taxi_section_bg2.png", "images/section-bg2.png"],
  ["/wp-content/uploads/2015/08/home_taxi_submit_bg.png", "images/submit-bg.png"],
  // advantages (Почему мы)
  ["/wp-content/uploads/2022/01/advantages-1.png", "images/advantages-1.png"],
  ["/wp-content/uploads/2022/01/advantages-2.png", "images/advantages-2.png"],
  ["/wp-content/uploads/2022/01/advantages-3.png", "images/advantages-3.png"],
  ["/wp-content/uploads/2022/01/advantages-4.png", "images/advantages-4.png"],
  // process plan
  ["/wp-content/uploads/2022/01/plan-1.png", "images/plan-1.png"],
  ["/wp-content/uploads/2022/01/plan-2.png", "images/plan-2.png"],
  ["/wp-content/uploads/2022/01/plan-3.png", "images/plan-3.png"],
  ["/wp-content/uploads/2022/01/plan-4.png", "images/plan-4.png"],
  // variant icons
  ["/wp-content/uploads/2022/01/clock-auto-u456756-fr2.png", "images/variant-clock.png"],
  ["/wp-content/uploads/2022/01/auto-dtp-u456752-fr3.png", "images/variant-dtp.png"],
  ["/wp-content/uploads/2022/01/car-repair-u456759-fr.png", "images/variant-repair.png"],
  // CTA
  ["/wp-content/uploads/2022/01/telegka1.jpg", "images/telegka.jpg"],
  ["/wp-content/uploads/2022/02/pozhatie-ruk-na-glavnuyu.jpg", "images/handshake.jpg"],
  // testimonials
  ["/wp-content/uploads/2022/02/otzyv-1.jpg", "images/otzyv-1.jpg"],
  ["/wp-content/uploads/2022/02/otzyv-2.jpg", "images/otzyv-2.jpg"],
  ["/wp-content/uploads/2022/02/otzyv-3.jpg", "images/otzyv-3.jpg"],
  ["/wp-content/uploads/2022/02/otzyv-4.jpg", "images/otzyv-4.jpg"],
  // slider — last bought cars (in order, slide 1..9)
  ["/wp-content/uploads/slider/cache/a09e1d9ac73c659b107cdd4eea04c295/img_6614.jpg", "images/slider/slide-1.jpg"],
  ["/wp-content/uploads/slider/cache/14434843dae84b3d7ebeab3cd28d9cb8/img_2229.jpg", "images/slider/slide-2.jpg"],
  ["/wp-content/uploads/slider/cache/9fa35bcb309e84a318c4fbf8ddc22ce8/img_4997.jpg", "images/slider/slide-3.jpg"],
  ["/wp-content/uploads/slider/cache/dce6e5aeecfffa43abcb0031ec955c41/img_3994.jpg", "images/slider/slide-4.jpg"],
  ["/wp-content/uploads/slider/cache/94254c2fc9025daa24bc93af116ca5d5/img_4863.jpg", "images/slider/slide-5.jpg"],
  ["/wp-content/uploads/slider/cache/ec61334afdda06d6cfc5e59e7fc2c93a/img_2153.jpg", "images/slider/slide-6.jpg"],
  ["/wp-content/uploads/slider/cache/8050e856b6c35b285a3dfdbcce422f30/img_0710.jpg", "images/slider/slide-7.jpg"],
  ["/wp-content/uploads/slider/cache/b0e091cda7b35c24bf86eb31b9d287bd/img_6274.jpg", "images/slider/slide-8.jpg"],
  ["/wp-content/uploads/slider/cache/917fbead5e0646b99a3191c5778a7b00/img_1008.jpg", "images/slider/slide-9.jpg"],
];

async function download([remote, local]) {
  const url = remote.startsWith("http") ? remote : BASE + remote;
  const dest = join(OUT, local);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return { local, ok: true, size: buf.length };
  } catch (err) {
    return { local, ok: false, error: err.message };
  }
}

// batched, 4 at a time
const results = [];
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = ASSETS.slice(i, i + 4);
  results.push(...(await Promise.all(batch.map(download))));
}

const ok = results.filter((r) => r.ok);
const fail = results.filter((r) => !r.ok);
console.log(`Downloaded ${ok.length}/${results.length} assets`);
ok.forEach((r) => console.log(`  ✓ ${r.local} (${(r.size / 1024).toFixed(1)}kb)`));
if (fail.length) {
  console.log(`FAILED ${fail.length}:`);
  fail.forEach((r) => console.log(`  ✗ ${r.local}: ${r.error}`));
  process.exit(1);
}
