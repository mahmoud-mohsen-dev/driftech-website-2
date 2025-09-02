import { Link } from "react-router";
import AppBreadCrumb from "../components/UI/AppBreadCrumb";
import QuizMainSection from "../components/sections/quizSections/QuizMainSection";

function Quiz() {
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Quiz",
    },
  ];

  return (
    <>
      <section className="pt-[86px] pb-20 xl:pt-[156px]">
        <div className="container">
          <AppBreadCrumb items={items} />
          <QuizMainSection />
        </div>
      </section>
    </>
  );
}

export default Quiz;
