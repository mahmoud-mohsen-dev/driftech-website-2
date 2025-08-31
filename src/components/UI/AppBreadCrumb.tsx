import { Breadcrumb } from "antd";

type PropsType = { items: { title: string | React.ReactNode }[] };

function AppBreadCrumb({ items }: PropsType) {
  return (
    <Breadcrumb
      items={items}
      separator={
        <img
          src={"/icons/arrow-right-2.svg"}
          alt=">"
          className="inline-block h-4 w-4"
        />
      }
    />
  );
}

export default AppBreadCrumb;
