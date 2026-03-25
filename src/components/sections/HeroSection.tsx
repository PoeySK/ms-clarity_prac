import { useState } from "react";
import Button from "../common/Button";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export default function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
        Heatmap · Session · Scroll
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
        사용자가 어디서 멈추고,
        <br />
        어디서 클릭하는지 확인하세요.
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
        이 페이지는 MS Clarity 테스트를 위해 만든 샘플 페이지입니다. 버튼 클릭,
        카드 선택, 스크롤 이동, FAQ 열기, 폼 입력 같은 행동을 한 화면에서 확인할
        수 있습니다.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={onOpenDemo}>무료로 시작하기</Button>

        <Button
          variant={liked ? "subtle" : "secondary"}
          onClick={() => setLiked((prev) => !prev)}
        >
          {liked ? "관심 등록됨" : "관심 있어요"}
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          맨 아래까지 이동
        </Button>
      </div>

      <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-950">72%</p>
          <p className="mt-1 text-sm text-slate-500">스크롤 도달률</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-950">3.2x</p>
          <p className="mt-1 text-sm text-slate-500">CTA 클릭 차이</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-950">18s</p>
          <p className="mt-1 text-sm text-slate-500">평균 체류 시간</p>
        </div>
      </div>
    </div>
  );
}
