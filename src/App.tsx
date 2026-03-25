import React from "react";

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState("overview");
  const [selectedPlan, setSelectedPlan] = React.useState("pro");
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [showModal, setShowModal] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    role: "frontend",
    interest: "heatmap",
    memo: "",
    agree: false,
  });

  const cards = [
    {
      title: "클릭 분석",
      desc: "버튼, 카드, CTA의 클릭 편중을 테스트할 수 있습니다.",
    },
    {
      title: "스크롤 분석",
      desc: "길게 구성된 섹션으로 이탈 구간과 도달률을 보기 좋습니다.",
    },
    {
      title: "폼 분석",
      desc: "입력, 선택, 체크박스, 제출 흐름을 실험할 수 있습니다.",
    },
  ];

  const faqs = [
    {
      q: "이 페이지는 왜 테스트용으로 적합한가요?",
      a: "클릭, 스크롤, 탭 전환, 아코디언, 가격 선택, 폼 제출 등 다양한 상호작용이 한 화면에 모여 있기 때문입니다.",
    },
    {
      q: "실제 서비스처럼 보이나요?",
      a: "네. 단순 버튼 모음보다 랜딩 페이지 구조가 자연스러워 사용자 행동 데이터 설명에 더 유리합니다.",
    },
    {
      q: "발표 데모에도 사용할 수 있나요?",
      a: "가능합니다. 특정 구간에서 사용자가 어디를 많이 누르는지, 어디서 멈추는지 설명하기 좋습니다.",
    },
  ];

  const features = {
    overview: ["대시보드 미리보기", "주요 CTA 배치", "이탈 지점 관찰"],
    behavior: ["히트맵 테스트", "스크롤 깊이", "반복 클릭 탐색"],
    conversion: ["폼 제출 흐름", "요금제 선택", "문의 전환 측정"],
  };

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Clarity Demo
            </p>
            <h1 className="text-xl font-bold">UX 행동 분석 테스트 페이지</h1>
          </div>
          <nav className="hidden gap-6 md:flex text-sm font-medium">
            <a href="#features" className="hover:text-slate-600">
              기능
            </a>
            <a href="#pricing" className="hover:text-slate-600">
              요금제
            </a>
            <a href="#form" className="hover:text-slate-600">
              문의
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-full bg-slate-900 px-4 py-2 text-white hover:opacity-90"
            >
              데모 신청
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-3 w-fit rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold">
              Heatmap · Session · Scroll
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              사용자가 어디서 머무르고,
              <br />
              어디서 이탈하는지 바로 확인하세요.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              이 페이지는 MS Clarity 테스트를 위해 설계된 샘플입니다. 버튼 클릭,
              카드 선택, 스크롤 이동, 폼 입력, FAQ 열기 같은 행동을 한 번에
              수집할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                무료로 시작하기
              </button>
              <button
                onClick={() => setLiked((prev) => !prev)}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                {liked ? "관심 등록됨" : "관심 있어요"}
              </button>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                맨 아래까지 이동
              </button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-bold">72%</p>
                <p className="mt-1 text-sm text-slate-500">스크롤 도달률</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-bold">3.2x</p>
                <p className="mt-1 text-sm text-slate-500">CTA 클릭 차이</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-bold">18s</p>
                <p className="mt-1 text-sm text-slate-500">평균 머문 시간</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-xl ring-1 ring-slate-200">
            <div className="rounded-[22px] bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">실시간 요약</p>
                  <h3 className="mt-1 text-xl font-bold">행동 분석 대시보드</h3>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  LIVE
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">반복 클릭 구간</p>
                  <p className="mt-2 text-3xl font-bold">14</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">폼 이탈 비율</p>
                  <p className="mt-2 text-3xl font-bold">31%</p>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {cards.map((card) => (
                <button
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="border-y bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  INTERACTIVE SECTION
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  탭과 카드 선택이 있는 구간
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  ["overview", "개요"],
                  ["behavior", "행동 분석"],
                  ["conversion", "전환 분석"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTab(key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedTab === key
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {features[selectedTab as keyof typeof features].map(
                (item, idx) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-slate-200 p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <h4 className="mt-4 text-lg font-semibold">{item}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      사용자의 선택 행동을 분산시키기 위해 유사한 요소를 배치한
                      테스트 영역입니다.
                    </p>
                    <button className="mt-5 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200">
                      자세히 보기
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white">
              <p className="text-sm font-semibold text-slate-300">
                SCROLL TEST
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                스크롤을 유도하는 정보형 블록
              </h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
                <p>
                  사용자는 첫 화면에서 CTA를 누르기도 하지만, 조금 더 아래로
                  내려가 상세 설명을 확인한 뒤 행동하는 경우도 많습니다.
                </p>
                <p>
                  그래서 테스트 페이지에는 짧은 요약, 선택 카드, 비교 섹션, FAQ,
                  문의 폼처럼 서로 다른 성격의 블록을 함께 배치하는 편이
                  좋습니다.
                </p>
                <p>
                  Clarity에서는 단순 클릭 수뿐 아니라 어느 지점까지 내려왔는지,
                  어떤 영역에서 머뭇거렸는지도 함께 볼 수 있습니다.
                </p>
                <p>
                  특히 발표용 데모라면 사용자가 많이 누르는 버튼과 거의 눌리지
                  않는 버튼을 의도적으로 섞어 두는 것이 설명에 유리합니다.
                </p>
                <p>
                  이 섹션은 그런 목적을 위해 길이를 확보해 둔 영역입니다. 일부
                  사용자는 여기까지 읽고 나서 가격표를 보러 내려갈 가능성이
                  있습니다.
                </p>
              </div>
            </div>

            <aside
              id="pricing"
              className="rounded-[28px] bg-white p-6 shadow-lg ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-500">
                PLAN PICKER
              </p>
              <h3 className="mt-2 text-2xl font-bold">요금제 선택 테스트</h3>
              <div className="mt-6 space-y-3">
                {[
                  ["basic", "Basic", "월 0원", "간단한 행동 테스트용"],
                  ["pro", "Pro", "월 19,000원", "발표/데모용으로 적합"],
                  ["team", "Team", "월 49,000원", "팀 단위 분석 기능 포함"],
                ].map(([key, title, price, desc]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selectedPlan === key
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p
                          className={`mt-1 text-sm ${
                            selectedPlan === key
                              ? "text-slate-300"
                              : "text-slate-500"
                          }`}
                        >
                          {desc}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">{price}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90">
                {selectedPlan === "pro"
                  ? "Pro로 시작하기"
                  : selectedPlan === "team"
                  ? "Team 문의하기"
                  : "Basic 시작하기"}
              </button>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-500">FAQ</p>
                <h3 className="mt-2 text-3xl font-bold">
                  자주 여는 아코디언 구간
                </h3>
                <div className="mt-6 space-y-3">
                  {faqs.map((faq, idx) => {
                    const open = openFaq === idx;
                    return (
                      <div
                        key={faq.q}
                        className="rounded-2xl border border-slate-200"
                      >
                        <button
                          onClick={() => setOpenFaq(open ? null : idx)}
                          className="flex w-full items-center justify-between px-5 py-4 text-left"
                        >
                          <span className="font-semibold">{faq.q}</span>
                          <span className="text-xl">{open ? "−" : "+"}</span>
                        </button>
                        {open && (
                          <div className="border-t px-5 py-4 text-sm leading-6 text-slate-600">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                id="form"
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold text-slate-500">
                  LEAD FORM
                </p>
                <h3 className="mt-2 text-3xl font-bold">문의 폼 테스트</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  이름, 이메일, 역할, 관심 항목, 메모까지 입력해 볼 수 있게 만든
                  섹션입니다.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      이름
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="홍길동"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      이메일
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="demo@example.com"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        직무
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
                      >
                        <option value="frontend">프론트엔드</option>
                        <option value="pm">기획/PM</option>
                        <option value="designer">디자이너</option>
                        <option value="data">데이터 분석</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        관심 기능
                      </label>
                      <select
                        value={form.interest}
                        onChange={(e) =>
                          handleChange("interest", e.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
                      >
                        <option value="heatmap">히트맵</option>
                        <option value="scroll">스크롤 분석</option>
                        <option value="recording">세션 리플레이</option>
                        <option value="form">폼 분석</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      메모
                    </label>
                    <textarea
                      value={form.memo}
                      onChange={(e) => handleChange("memo", e.target.value)}
                      placeholder="어떤 테스트를 해보고 싶은지 적어보세요."
                      rows={5}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-900"
                    />
                  </div>
                  <label className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => handleChange("agree", e.target.checked)}
                    />
                    개인정보 수집 및 데모 연락에 동의합니다.
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => alert("임시 제출되었습니다.")}
                      className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
                    >
                      제출하기
                    </button>
                    <button
                      onClick={() =>
                        setForm({
                          name: "",
                          email: "",
                          role: "frontend",
                          interest: "heatmap",
                          memo: "",
                          agree: false,
                        })
                      }
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold hover:bg-slate-100"
                    >
                      초기화
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[32px] bg-slate-900 px-8 py-10 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  FINAL CTA
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  마지막 CTA 구간까지 내려오는지 확인해보세요.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  스크롤 테스트에서는 이 구간 도달률도 의미가 있습니다. 상단 CTA
                  대비 하단 CTA 클릭 비율을 비교하면 페이지 설계 방향을 설명하기
                  좋습니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                  상담 요청
                </button>
                <button className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  자료 다운로드
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Clarity Test Playground</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">
              이용약관
            </a>
            <a href="#" className="hover:text-slate-700">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-slate-700">
              고객센터
            </a>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90"
      >
        ↑ TOP
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  POPUP TEST
                </p>
                <h4 className="mt-1 text-2xl font-bold">데모 신청 팝업</h4>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm hover:bg-slate-200"
              >
                닫기
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              팝업 열기와 닫기 행동도 기록 대상입니다. 발표 시에는 사용자가
              팝업을 열고 바로 닫는 비율 같은 해석도 예시로 들 수 있습니다.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90">
                신청 계속하기
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                다음에
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
