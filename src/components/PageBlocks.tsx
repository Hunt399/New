import type { PageBlock } from "@/types";

export function PageBlocks({ blocks }: { blocks: PageBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.t === "h") {
          return (
            <h2
              key={i}
              className="mt-8 font-heading text-[22px] font-semibold text-brand-text"
            >
              {block.text}
            </h2>
          );
        }
        if (block.t === "list") {
          return (
            <ul
              key={i}
              className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[24px] text-brand-text"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-4 text-[16px] leading-[24px] text-brand-text">
            {block.text}
          </p>
        );
      })}
    </>
  );
}
