import Button from "../common/Button";

interface HeaderProps {
  onOpenDemo: () => void;
}

export default function Header({ onOpenDemo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-700">
            Clarity Demo
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            UX 행동 분석 테스트 페이지
          </h1>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            기능
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            요금제
          </a>
          <a
            href="#form"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            문의
          </a>
          <Button onClick={onOpenDemo}>데모 신청</Button>
        </nav>
      </div>
    </header>
  );
}
