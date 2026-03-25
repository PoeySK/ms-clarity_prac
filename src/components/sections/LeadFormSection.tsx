import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

interface FormState {
  name: string;
  email: string;
  role: string;
  interest: string;
  memo: string;
  agree: boolean;
}

const initialForm: FormState = {
  name: "",
  email: "",
  role: "frontend",
  interest: "heatmap",
  memo: "",
  agree: false,
};

export default function LeadFormSection() {
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div
          id="form"
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          <p className="text-sm font-bold text-blue-700">LEAD FORM</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-950">
            문의 폼 테스트
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            이름, 이메일, 역할, 관심 항목, 메모까지 입력할 수 있게 만든
            섹션입니다.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                이름
              </label>
              <Input
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="홍길동"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                이메일
              </label>
              <Input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="demo@example.com"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  직무
                </label>
                <select
                  value={form.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600"
                >
                  <option value="frontend">프론트엔드</option>
                  <option value="pm">기획/PM</option>
                  <option value="designer">디자이너</option>
                  <option value="data">데이터 분석</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  관심 기능
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-600"
                >
                  <option value="heatmap">히트맵</option>
                  <option value="scroll">스크롤 분석</option>
                  <option value="recording">세션 리플레이</option>
                  <option value="form">폼 분석</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                메모
              </label>
              <Textarea
                rows={5}
                value={form.memo}
                onChange={(e) => handleChange("memo", e.target.value)}
                placeholder="어떤 테스트를 해보고 싶은지 적어보세요."
              />
            </div>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-800">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => handleChange("agree", e.target.checked)}
                className="accent-blue-600"
              />
              개인정보 수집 및 데모 연락에 동의합니다.
            </label>

            <div className="flex gap-3">
              <Button
                className="flex-1"
                onClick={() => alert("임시 제출되었습니다.")}
              >
                제출하기
              </Button>

              <Button variant="secondary" onClick={() => setForm(initialForm)}>
                초기화
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
