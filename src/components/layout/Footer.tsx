export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Clarity Test Playground</p>

        <div className="flex gap-4">
          <a
            href="#"
            className="font-medium text-slate-600 hover:text-blue-700"
          >
            이용약관
          </a>
          <a
            href="#"
            className="font-medium text-slate-600 hover:text-blue-700"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="font-medium text-slate-600 hover:text-blue-700"
          >
            고객센터
          </a>
        </div>
      </div>
    </footer>
  );
}
