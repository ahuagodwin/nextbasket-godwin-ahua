"use client";

import Toastify from "@/notify/Toastify";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children} <Toastify /></Provider>;
}
