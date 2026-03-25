import { cardList } from "../../data/clarityTestData";

export default function DashboardPreviewSection() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
      <div className="rounded-3xl bg-slate-900 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-300">실시간 요약</p>
            <h3 className="mt-1 text-2xl font-bold">행동 분석 대시보드</h3>
          </div>

          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
            LIVE
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
            <p className="text-sm text-slate-300">반복 클릭 구간</p>
            <p className="mt-2 text-3xl font-bold text-white">14</p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
            <p className="text-sm text-slate-300">폼 이탈 비율</p>
            <p className="mt-2 text-3xl font-bold text-white">31%</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {cardList.map((card) => (
          <button
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50"
          >
            <p className="text-sm font-bold text-slate-900">{card.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
