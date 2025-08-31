import { message } from "antd";
import { ToastContext } from "./ToastContext";

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const MESSAGE_KEY = "global-toast"; // 👈 one key to control the same toast

  const success = (text: string) =>
    messageApi.open({
      key: MESSAGE_KEY,
      type: "success",
      content: text,
      duration: 1,
    });

  const error = (text: string) =>
    messageApi.open({
      key: MESSAGE_KEY,
      type: "error",
      content: text,
      duration: 1,
    });

  const warning = (text: string) =>
    messageApi.open({
      key: MESSAGE_KEY,
      type: "warning",
      content: text,
      duration: 1,
    });

  const loading = ({
    text = "Action in progress...",
    isLoading = false,
  }: {
    text?: string;
    isLoading: boolean;
  }) => {
    if (isLoading) {
      messageApi.open({
        key: MESSAGE_KEY,
        type: "loading",
        content: text,
        duration: 0, // stay until replaced
      });
    }
    //  else {
    //   messageApi.destroy(MESSAGE_KEY);
    // }
  };

  // const success = (text: string) =>
  //   messageApi.open({ type: "success", content: text });
  // const error = (text: string) =>
  //   messageApi.open({ type: "error", content: text });
  // const warning = (text: string) =>
  //   messageApi.open({ type: "warning", content: text });

  // const loading = ({
  //   text = "Action in progress...",
  //   isLoading = false,
  // }: {
  //   text?: string;
  //   isLoading: boolean;
  // }) => {
  //   // messageApi.open({
  //   //   type: "loading",
  //   //   content: text,
  //   //   duration: 0,
  //   // });

  //   setTimeout(() => {
  //     if (isLoading) {
  //       messageApi.open({
  //         type: "loading",
  //         content: text,
  //         duration: 0,
  //       });
  //     } else {
  //       messageApi.destroy();
  //     }
  //   }, 0);
  // };

  return (
    <ToastContext.Provider value={{ success, error, warning, loading }}>
      {contextHolder} {/* 👈 only once here */}
      {children}
    </ToastContext.Provider>
  );
};
