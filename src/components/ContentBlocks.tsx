import type { ContentBlock, PriceTable } from "@/types";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.t === "p" ? (
          <p key={i} className="mt-4 text-[16px] leading-[24px] text-brand-text">
            {block.text}
          </p>
        ) : (
          <ul
            key={i}
            className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[24px] text-brand-text"
          >
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export function PriceTableView({ table }: { table: PriceTable }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-[15px]">
        <thead>
          <tr className="bg-brand-dark text-white">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border border-black/10 px-4 py-3 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-black/[0.03]" : "bg-white"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-black/10 px-4 py-2.5 text-brand-text"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
