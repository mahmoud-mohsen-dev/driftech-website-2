import ContactUsInfoCard from "../../UI/cards/ContactUsInfoCard";

function ContactUsSection() {
  return (
    <section className="pt-[126.63px] pb-[128px]">
      <div className="container grid grid-cols-1 items-center gap-[2.1875rem] lg:grid-cols-2">
        <div className="font-inter">
          <h2 className="contact-us-title-left text-[30px] leading-[36px] font-semibold">
            📞 Get in Touch
          </h2>
          <p className="text-foundation-gray-normal-hover mt-[14px] text-[18px] leading-[30px] font-normal">
            We’re here to answer your questions and help you find exactly what
            you’re looking for reach out anytime!
          </p>
        </div>
        <ContactUsInfoCard />
      </div>
    </section>
  );
}

export default ContactUsSection;
