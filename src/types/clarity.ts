export type TabKey = "overview" | "behavior" | "conversion";

export interface TabItem {
  key: TabKey;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CardItem {
  title: string;
  desc: string;
}

export interface PlanItem {
  key: "basic" | "pro" | "team";
  title: string;
  price: string;
  desc: string;
}
