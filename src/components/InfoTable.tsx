import type { GuideTable } from "@/data/guides";

export default function InfoTable({ table }: { table: GuideTable }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#3b2a56]">
      <table className="guide-table min-w-full border-collapse text-left text-sm">
        <thead className="bg-[#211432] text-[#f3dda7]">
          <tr>{table.headers.map((header) => <th key={header} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-[#30233f] bg-[#100b1b]/80 text-[#c8bfd1]">
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`} className="min-w-32 px-4 py-3 align-top leading-6">{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
