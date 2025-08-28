import { message } from "antd";
import { ToastContext } from "./ToastContext";

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text: string) =>
    messageApi.open({ type: "success", content: text });
  const error = (text: string) =>
    messageApi.open({ type: "error", content: text });
  const warning = (text: string) =>
    messageApi.open({ type: "warning", content: text });

  return (
    <ToastContext.Provider value={{ success, error, warning }}>
      {contextHolder} {/* 👈 only once here */}
      {children}
    </ToastContext.Provider>
  );
};
