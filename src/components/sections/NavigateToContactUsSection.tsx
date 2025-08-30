import Anchor from "../UI/buttons/Anchor";

function NavigateToContactUsSection() {
  return (
    <section className="contact-us-background text-neutral-0 font-poppins py-[5.625rem]">
      <div className="container flex flex-col items-center justify-center gap-8 text-center">
        <div className="space-y-4">
          <h2 className="text-[clamp(28px,1.5vw+20px,39px)] leading-[clamp(2.125rem,1.6786rem+2.2321vw,3.6875rem)] font-semibold">
            we’re here to help!
          </h2>
          <p>
            We’re here to answer your questions and help you find exactly what
            you’re looking for reach out anytime!
          </p>
        </div>
        <Anchor
          href="/contact-us"
          className="font-poppins rounded-lg text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[clamp(1.25rem,0.5vw+1rem,1.5rem)] font-semibold"
          width="w-[145px] lg:w-[10.9375rem]"
        >
          Contact us
        </Anchor>
      </div>
    </section>
  );
}

export default NavigateToContactUsSection;
