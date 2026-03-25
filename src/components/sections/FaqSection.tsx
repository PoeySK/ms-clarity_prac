import { useState } from "react";
import { faqs } from "../../data/clarityTestData";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div>
          <p className="text-sm font-bold text-blue-700">FAQ</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-950">
            자주 여는 아코디언 구간
          </h3>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((faq, idx) => {
            const open = openFaq === idx;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <span className="text-xl font-bold text-blue-700">
                    {open ? "−" : "+"}
                  </span>
                </button>

                {open && (
                  <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
