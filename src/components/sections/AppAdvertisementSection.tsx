import DownloadApp from "../UI/buttons/DownloadApp";
import FeaturesList from "../UI/FeaturesList";
import mobileAppImage from "../../assets/background/mobile-app.png";

function AppAdvertisementSection() {
  return (
    <section className="font-inter py-[80px]">
      <div className="container flex items-center xl:gap-8">
        <div>
          <img
            src={mobileAppImage}
            alt="mobile app photo"
            className="h-[754px] min-w-[574px]"
          />
        </div>
        <div className="h-full">
          <h2 className="text-foundation-brown-darker text-[30px] leading-[36px] font-semibold">
            Drive Home Your Dream Car with{" "}
            <span className="text-foundation-orange-normal block font-semibold">
              Smart, Flexible Financing
            </span>
          </h2>

          <p className="text-foundation-gray-normal-hover mt-[14px] text-[18px] leading-[30px] font-normal">
            Enjoy flexible payment plans and instant approval for your dream
            car. Our financing experts work with top lenders to secure the best
            rates and terms tailored to your budget.
          </p>

          <ul className="mt-[36px] flex flex-col items-start justify-center gap-5">
            <FeaturesList
              image={{ src: "/icons/checkbox.svg", alt: "checkbox" }}
            >
              Instant pre-approval in minutes
            </FeaturesList>
            <FeaturesList
              image={{ src: "/icons/security.svg", alt: "security" }}
            >
              Instant pre-approval in minutes
            </FeaturesList>
            <FeaturesList image={{ src: "/icons/clock.svg", alt: "clock" }}>
              Instant pre-approval in minutes
            </FeaturesList>
          </ul>

          <div className="mt-[36px] flex gap-[32px]">
            <DownloadApp
              image={{
                src: "/icons/app-store.png",
                alt: "app store icon",
              }}
              heading="Download on the"
              description="App Store"
              size="large"
            />
            <DownloadApp
              image={{
                src: "/icons/google-play.png",
                alt: "google play icon",
              }}
              heading="Download on the"
              description="google play"
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppAdvertisementSection;
