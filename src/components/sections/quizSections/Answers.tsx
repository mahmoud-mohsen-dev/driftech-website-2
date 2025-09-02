import { Radio, type RadioChangeEvent } from "antd";
import { useState } from "react";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  gap: 20,
};

function Answers({
  answersData,
}: {
  answersData: { label: string; value: string }[];
}) {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    console.log("radio checked", e.target.value);
    console.log("answersData", answersData);
  };
  return (
    <Radio.Group
      style={style}
      onChange={onChange}
      value={value}
      options={answersData}
      className="quiz-answers"
    />
  );
}

export default Answers;
