import { Link } from "react-router";
import AppBreadCrumb from "../components/UI/AppBreadCrumb";
import TypeOfDriftersMain from "../components/sections/typeOfDriftersSections/TypeOfDriftersMain";

function TypeOfDrifters() {
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Type Of Drifters",
    },
  ];

  return (
    <>
      <section className="pt-[156px] pb-20">
        <div className="container">
          <AppBreadCrumb items={items} />
          <TypeOfDriftersMain />
        </div>
      </section>
    </>
  );
}

export default TypeOfDrifters;
