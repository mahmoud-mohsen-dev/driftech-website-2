import bgImg from "../../../assets/backgrounds/man-in-a-call-smiling.png";

function ContactUsHeroSection() {
  return (
    <section className="relative h-svh">
      {/* Background image with opacity */}
      <div className="absolute inset-0 h-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-top opacity-[0.71]"
          src={bgImg}
        />
      </div>

      {/* Overlay */}
      <div className="contact-us-hero-overlay absolute inset-0" />

      {/* Content on top of overlay */}
      <div className="font-poppins relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-1 px-5 lg:max-w-[844px] lg:px-0">
        <h1 className="text-foundation-orange-lighter text-center leading-[clamp(38px,3vw+28px,72px)] font-semibold">
          Contact Us
        </h1>
        <h3 className="text-foundation-orange-lighter text-center leading-[clamp(26px,1.25vw+20px,36px)] lg:text-2xl">
          Get in touch with us for more details and assistance.
        </h3>
      </div>
    </section>
  );
}

export default ContactUsHeroSection;
