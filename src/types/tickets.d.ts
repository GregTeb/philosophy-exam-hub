declare module "*.json" {
  const value: any;
  export default value;
}

export interface Ticket {
  title: string;
  question: string;
  answer: string;
  userAnswer?: string;
}

export interface TabContentData {
  [key: string]: Ticket[];
}
