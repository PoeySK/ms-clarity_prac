import Button from "../common/Button";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-blue-700">POPUP TEST</p>
            <h4 className="mt-1 text-2xl font-bold text-slate-950">
              데모 신청 팝업
            </h4>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            닫기
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          팝업 열기와 닫기 행동도 기록 대상입니다. 사용자가 팝업을 열고 바로
          닫는지, 추가 행동으로 이어지는지 확인할 수 있습니다.
        </p>

        <div className="mt-6 flex gap-3">
          <Button className="flex-1">신청 계속하기</Button>
          <Button variant="secondary" onClick={onClose}>
            다음에
          </Button>
        </div>
      </div>
    </div>
  );
}
