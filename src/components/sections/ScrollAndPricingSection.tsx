import { useState } from "react";
import { plans } from "../../data/clarityTestData";
import type { PlanItem } from "../../types/clarity";
import Button from "../common/Button";

export default function ScrollAndPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PlanItem["key"]>("pro");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <p className="text-sm font-bold text-blue-300">SCROLL TEST</p>
          <h3 className="mt-2 text-3xl font-bold">
            스크롤을 유도하는 정보형 블록
          </h3>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
            <p>
              상단에서만 클릭이 일어나는지, 아래 설명을 읽은 뒤 전환이
              발생하는지 비교하기 좋게 만든 구간입니다.
            </p>
            <p>
              설명형 섹션이 있으면 사용자의 스크롤 깊이와 도달률을 보기
              좋습니다.
            </p>
            <p>
              발표 시에는 상단 CTA와 하단 CTA 중 어디가 더 효과적인지도 설명할
              수 있습니다.
            </p>
            <p>
              일부 사용자는 가격표를 본 뒤 행동하고, 일부는 FAQ를 읽은 뒤 문의
              폼으로 이동할 수 있습니다.
            </p>
          </div>
        </div>

        <aside
          id="pricing"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-bold text-blue-700">PLAN PICKER</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">
            요금제 선택 테스트
          </h3>

          <div className="mt-6 space-y-3">
            {plans.map((plan) => (
              <button
                key={plan.key}
                onClick={() => setSelectedPlan(plan.key)}
                className={
                  selectedPlan === plan.key
                    ? "w-full rounded-2xl border border-blue-700 bg-blue-50 p-4 text-left shadow-sm"
                    : "w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left hover:bg-slate-100"
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-950">{plan.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{plan.desc}</p>
                  </div>

                  <p
                    className={
                      selectedPlan === plan.key
                        ? "text-sm font-bold text-blue-800"
                        : "text-sm font-bold text-slate-800"
                    }
                  >
                    {plan.price}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <Button fullWidth className="mt-5">
            {selectedPlan === "pro"
              ? "Pro로 시작하기"
              : selectedPlan === "team"
              ? "Team 문의하기"
              : "Basic 시작하기"}
          </Button>
        </aside>
      </div>
    </section>
  );
}
