export default function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-xl border border-[#3b2a56] bg-[#120c20]/80 p-5 open:border-[#705092]">
          <summary className="cursor-pointer list-none pr-8 font-semibold text-[#f5f0e8] marker:hidden">{item.question}<span aria-hidden="true" className="float-right text-[#e2c27a] group-open:rotate-45">+</span></summary>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#b8afc8]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
