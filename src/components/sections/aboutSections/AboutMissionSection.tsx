import { v4 } from "uuid";
import meetingImage from "../../../assets/sections/engineering-team-meeting.jpg";
import ServicesAboutUsCard from "../../UI/cards/ServicesAboutUsCard";

function AboutMissionSection() {
  return (
    <section className="bg-neutral-0 py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row-reverse">
          <div className="rounded-3 overflow-hidden lg:basis-1/2">
            <img
              src={meetingImage}
              alt="Engineering team meeting"
              width={590}
              height={482}
              className="h-auto w-full object-cover object-center"
            />
          </div>
          <div className="font-inter space-y-5 text-center lg:basis-1/2 lg:text-start">
            <h2 className="text-foundation-brown-darker text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-[clamp(1.875rem,1.7679rem+0.5357vw,2.25rem)] font-semibold">
              Our Mission & Vision
            </h2>
            <p className="text-foundation-gray-normal-active text-[clamp(1.125rem,0.5vw+1rem,1.25rem)] leading-[clamp(1.5rem,1.3571rem+0.7143vw,2rem)] text-pretty">
              We aim to democratize access to quality vehicles by building a
              transparent and trustworthy platform that connects buyers,
              sellers, and renters. Our vision is to become the world’s most
              trusted automotive marketplace, where every car transaction is
              seamless, secure, and satisfying. We believe everyone deserves a
              fair deal, exceptional service, and the ease of finding their
              perfect vehicle with just a few taps.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="font-inter space-y-[0.875rem] text-center">
            <h2 className="text-foundation-brown-darker text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-[clamp(1.875rem,1.7679rem+0.5357vw,2.25rem)] font-semibold">
              Why Choose Our Platform?
            </h2>
            <h4 className="text-foundation-gray-normal-hover text-[clamp(1rem,0.9643rem+0.1786vw,1.125rem)] leading-[clamp(1.375rem,1.3036rem+0.3571vw,1.625rem)]">
              We've built our platform around the four pillars that matter most
              to our customers.
            </h4>
          </div>

          <div className="mt-8 grid gap-[2.5rem] lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr]">
            <ServicesAboutUsCard
              title="Trusted & Secure"
              description="Every transaction is protected with industry-leading security measures and verified listings."
              iconSrc="/icons/security.svg"
              iconAlt="security icon"
              key={v4()}
            />
            <ServicesAboutUsCard
              title="Vast Selection"
              description="From economy to luxury, find the perfect vehicle from our extensive network of dealers and owners."
              iconSrc="/icons/truck.svg"
              iconAlt="truck icon"
              key={v4()}
            />
            <ServicesAboutUsCard
              title="Simple Process"
              description="Browse, compare, and connect with sellers in just a few clicks. No complicated procedures."
              iconSrc="/icons/cloud.svg"
              iconAlt="cloud icon"
              key={v4()}
            />
            <ServicesAboutUsCard
              title="24/7 Support"
              description="Our dedicated team is always ready to help you with any questions or concerns."
              iconSrc="/icons/people.svg"
              iconAlt="people icon"
              key={v4()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionSection;
