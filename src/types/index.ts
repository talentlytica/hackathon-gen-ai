import { BaseHTMLAttributes, ReactNode } from "react";

export type PropBaseT<T = any> = {
  className?: string;
  children?: ReactNode;
  ref?: any;
} & Partial<BaseHTMLAttributes<T>>

export type UserDataT = {
  name: string;
  position: string;
  company: string;
  jobDesc: string;
}

export type ChatDataT = {
  name: string;
  message: ReactNode;
  isBot?: boolean;
}

export type ChatGrouppedT = {
  isBot?: boolean;
  name: string;
  messages: ChatDataT[];
}