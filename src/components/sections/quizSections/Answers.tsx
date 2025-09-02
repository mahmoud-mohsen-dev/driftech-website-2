import { Radio, type RadioChangeEvent } from "antd";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  gap: 20,
};

type AnswerType = { label: string; value: string };

function Answers({
  answersData,
  currentSelectedAnswer,
  handleChange,
}: {
  answersData: AnswerType[];
  currentSelectedAnswer: AnswerType | undefined;
  handleChange: (e: RadioChangeEvent) => void;
}) {
  return (
    <Radio.Group
      style={style}
      onChange={handleChange}
      value={currentSelectedAnswer?.value ?? undefined}
      options={answersData}
      className="quiz-answers"
    />
  );
}

export default Answers;
