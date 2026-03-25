import type {
  CardItem,
  FaqItem,
  PlanItem,
  TabItem,
  TabKey,
} from "../types/clarity";

export const tabs: TabItem[] = [
  { key: "overview", label: "개요" },
  { key: "behavior", label: "행동 분석" },
  { key: "conversion", label: "전환 분석" },
];

export const features: Record<TabKey, string[]> = {
  overview: ["대시보드 미리보기", "주요 CTA 배치", "이탈 지점 관찰"],
  behavior: ["히트맵 테스트", "스크롤 깊이", "반복 클릭 탐색"],
  conversion: ["폼 제출 흐름", "요금제 선택", "문의 전환 측정"],
};

export const faqs: FaqItem[] = [
  {
    q: "이 페이지는 왜 테스트용으로 적합한가요?",
    a: "클릭, 스크롤, 탭 전환, 가격 선택, FAQ 열기, 폼 입력까지 한 페이지에서 모두 실험할 수 있기 때문입니다.",
  },
  {
    q: "왜 랜딩 페이지 형태로 만들었나요?",
    a: "발표나 데모에서 실제 서비스처럼 보이는 구조가 더 자연스럽고, 클릭 편중이나 스크롤 도달률을 설명하기 쉽기 때문입니다.",
  },
  {
    q: "MS Clarity 테스트에 바로 써도 되나요?",
    a: "가능합니다. 클릭, 스크롤, 폼 입력, CTA 전환 같은 행동 데이터를 확인하기 좋게 구성했습니다.",
  },
];

export const cardList: CardItem[] = [
  {
    title: "클릭 분석",
    desc: "버튼과 카드가 어디에 집중되는지 확인하기 좋습니다.",
  },
  {
    title: "스크롤 분석",
    desc: "어느 지점에서 이탈하는지 확인할 수 있습니다.",
  },
  {
    title: "폼 분석",
    desc: "입력 시작 후 어디에서 멈추는지 살펴볼 수 있습니다.",
  },
];

export const plans: PlanItem[] = [
  {
    key: "basic",
    title: "Basic",
    price: "월 0원",
    desc: "간단한 행동 테스트용",
  },
  {
    key: "pro",
    title: "Pro",
    price: "월 19,000원",
    desc: "발표 및 데모에 적합",
  },
  {
    key: "team",
    title: "Team",
    price: "월 49,000원",
    desc: "팀 단위 분석 기능 포함",
  },
];
