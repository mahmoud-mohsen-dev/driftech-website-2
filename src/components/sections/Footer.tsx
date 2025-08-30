import DownloadApp from "../UI/buttons/DownloadApp";
import FooterLink from "../UI/FooterLink";

function Footer() {
  return (
    <footer className="bg-foundation-brown-medium py-13">
      <div className="container">
        <section className="font-poppins lg:flex lg:gap-20">
          {/* Logo and description */}
          <div className="max-w-[286px]">
            <img src="/logos/Logo-2.svg" alt="drifttech logo" />
            <h5 className="text-neutral-50">
              Discover a wide range of cars that match your style, needs, and
              budget all in one place. Whether you're looking for speed,
              comfort, or reliability, your perfect ride is just a click away.
            </h5>
          </div>
          {/* <div className="w-full lg:grid lg:grid-cols-[1fr_1fr_306px] lg:gap-[38px]"> */}
          <div className="mt-[38px] flex w-full flex-col justify-between gap-[38px] lg:mt-0 lg:flex-row">
            {/* Footer links */}
            <div>
              <h5 className="text-neutral-0 text- mb-[20px] uppercase lg:mb-[30px]">
                Company
              </h5>
              <ul className="flex flex-col gap-2.5 lg:gap-4">
                <FooterLink href="#">Cars</FooterLink>
                <FooterLink href="#">Vlogs</FooterLink>
                <FooterLink href="#">My Finance Status</FooterLink>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </ul>
            </div>
            {/* Additional links */}
            <div>
              <h5 className="text-neutral-0 mb-[20px] uppercase lg:mb-[30px]">
                Company
              </h5>
              <ul className="flex flex-col gap-2.5 lg:gap-4">
                <FooterLink href="#">Help center</FooterLink>
                <FooterLink href="#">How it works</FooterLink>
              </ul>
            </div>
            {/* Newsletter subscription */}
            <div>
              <h5 className="text-neutral-0 mb-[20px] min-w-[306px] uppercase lg:mb-[30px]">
                Newsletter
              </h5>
              <form>
                <div className="bg-neutral-0 text-gray-medium-600 mb-3 flex h-[55px] items-center gap-2.5 rounded-[9px] p-4">
                  <img src="/icons/sms.svg" alt="sms icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md p-2 px-2.5 text-sm leading-[22px] font-normal text-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="border-neutral-0 text-neutral-0 h-[55px] w-full rounded-xl border-2 bg-transparent text-sm leading-[22px] font-medium capitalize transition-colors duration-200 ease-linear outline-none hover:border-neutral-300 hover:text-neutral-300"
                >
                  Subscribe Now
                </button>
              </form>

              {/* Mobile Application*/}
              <div className="mt-[37px]">
                <h5 className="text-neutral-0 mb-[20px] !leading-[18px] uppercase lg:mb-[30px]">
                  Our Mobile App
                </h5>

                <div className="flex items-center gap-[21.41px]">
                  <DownloadApp
                    image={{
                      src: "/icons/app-store.png",
                      alt: "app store icon",
                    }}
                    heading="Download on the"
                    description="App Store"
                    className="w-[124px]"
                  />
                  <DownloadApp
                    image={{
                      src: "/icons/google-play.png",
                      alt: "google play icon",
                    }}
                    heading="Download on the"
                    description="google play"
                    className="w-[124px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="text-gray-medium-400 my-9 block" />

        <p className="text-center leading-[22px] text-neutral-50 capitalize">
          © 2023, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
