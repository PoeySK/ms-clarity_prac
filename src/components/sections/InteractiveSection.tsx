import { useState } from "react";
import { features, tabs } from "../../data/clarityTestData";
import type { TabKey } from "../../types/clarity";
import Button from "../common/Button";

export default function InteractiveSection() {
  const [selectedTab, setSelectedTab] = useState<TabKey>("overview");

  return (
    <section id="features" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold text-blue-700">
              INTERACTIVE SECTION
            </p>
            <h3 className="mt-2 text-3xl font-bold text-slate-950">
              탭과 카드 선택이 있는 구간
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                variant={selectedTab === tab.key ? "primary" : "secondary"}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features[selectedTab].map((item, idx) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {idx + 1}
              </div>

              <h4 className="mt-5 text-2xl font-bold text-slate-950">{item}</h4>

              <p className="mt-3 text-base leading-7 text-slate-600">
                사용자의 선택 행동을 분산시키기 위해 유사한 요소를 배치한 테스트
                영역입니다.
              </p>

              <Button variant="subtle" className="mt-5">
                자세히 보기
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
