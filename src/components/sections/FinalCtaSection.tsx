export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-blue-600 px-8 py-10 text-white shadow-lg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold text-blue-100">FINAL CTA</p>
            <h3 className="mt-2 text-3xl font-bold text-white">
              마지막 CTA 구간까지 내려오는지 확인해보세요.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50">
              상단 CTA와 하단 CTA의 클릭 비율을 비교하면, 사용자가 어떤 맥락에서
              행동하는지 설명하기 좋습니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-white bg-white px-5 py-3 text-sm font-semibold text-blue-800 shadow-sm hover:bg-blue-50">
              상담 요청
            </button>
            <button className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-900 shadow-sm hover:bg-white">
              자료 다운로드
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
