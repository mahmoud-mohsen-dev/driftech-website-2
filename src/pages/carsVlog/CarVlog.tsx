import { Link, useParams } from "react-router";
import AppBreadCrumb from "../../components/UI/AppBreadCrumb";
import VlogMainContent from "../../components/sections/carVlogSection/VlogMainContent";
import NavigateToContactUsSection from "../../components/sections/NavigateToContactUsSection";
import RelatedVlogsSection from "../../components/sections/carVlogSection/RelatedVlogsSection";

function CarVlog() {
  const { vlogName } = useParams<{ vlogName: string }>();
  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: <Link to="/vlogs">Cars Vlogs</Link>,
    },
    {
      title: vlogName,
    },
  ];

  return (
    <>
      <section className="pt-[9.75rem] pb-20">
        <div className="container">
          <AppBreadCrumb items={items} />
          <VlogMainContent />
          <RelatedVlogsSection />
        </div>
      </section>
      <NavigateToContactUsSection />
    </>
  );
}

export default CarVlog;
