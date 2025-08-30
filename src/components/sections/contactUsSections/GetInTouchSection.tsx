import GetInTouchInfoItemList from "./GetInTouchInfoItemList";
import ContactUsForm from "../../UI/forms/ContactUsForm";

function GetInTouchSection() {
  return (
    <section className="bg-neutral-0 py-20">
      <div className="container flex flex-col justify-center gap-12 lg:flex-row-reverse">
        <div className="basis-1/2 space-y-[4.0625rem]">
          <div className="font-inter space-y-[0.875rem]">
            <h2 className="get-in-touch w-fit text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-[clamp(1.875rem,1.7679rem+0.5357vw,2.25rem)] font-semibold">
              Get In Touch
            </h2>
            <p className="text-foundation-gray-normal-hover text-[clamp(0.875rem,0.8036rem+0.3571vw,1.125rem)] leading-[1.66]">
              We’re here to answer your questions and help you find exactly what
              you’re looking for reach out anytime!
            </p>
          </div>
          {/* Get in touch info */}
          <div className="space-y-4 sm:space-y-2.5">
            <GetInTouchInfoItemList
              title="Working Hours"
              listItems={[
                "Monday - Friday 11:00 AM - 12:00 PM",
                "Saturday 07:00 AM - 08:00 PM",
              ]}
              iconSrc="/icons/clock-fill.svg"
              iconAlt="clock icon"
            />
            <GetInTouchInfoItemList
              title="Phone Number"
              listItems={["(+888) 123 456 765"]}
              iconSrc="/icons/telephone-fill.svg"
              iconAlt="telephone icon"
            />
          </div>
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
}

export default GetInTouchSection;
