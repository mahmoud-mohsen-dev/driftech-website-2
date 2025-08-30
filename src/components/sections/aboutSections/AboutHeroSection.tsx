import bgImg from "../../../assets/backgrounds/metting-on-table-1.jpg";

function AboutHeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div
        className="about-hero-overlay absolute inset-0"
        // style={{ background: "var(--gradient-foundation-orange-hero-1)" }}
      ></div>
      {/* Content on top of overlay */}
      <div className="font-poppins relative z-10 mx-auto flex h-full flex-col items-center justify-center gap-1 px-5 lg:max-w-[844px] lg:px-0">
        <h1 className="text-foundation-orange-lighter text-center leading-[clamp(38px,3vw+28px,72px)] font-semibold">
          Who We Are ?
        </h1>
        <h3 className="text-foundation-orange-lighter text-center leading-[clamp(26px,1.25vw+20px,36px)] lg:text-2xl">
          We’re more than just a car platform . we connect drivers with the best
          deals, trusted reviews, and a seamless car experience.
        </h3>
      </div>
    </section>
  );
}

export default AboutHeroSection;
