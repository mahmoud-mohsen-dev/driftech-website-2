import Anchor from "../../UI/buttons/Anchor";
import Search from "../../UI/Search";

function HeroSection() {
  return (
    <div className="min-h-screen bg-[url('../assets/backgrounds/3d-car-vibrant-city-night-1.png')] bg-cover bg-center py-5 pt-[229px]">
      <section className="container h-full">
        <div className="text-foundation-gray-lighter font-inter flex max-w-[649px] flex-col items-start gap-12">
          <h1 className="font-semibold">
            Drive Today, Pay Your Way, Enjoy Every Mile
          </h1>
          <h3 className="leading-[35.88px] font-normal">
            From sedans to SUVs, find your perfect car with great deals and
            flexible financing.
          </h3>
          <Search />
          <div className="flex w-full items-center gap-[34.25px]">
            <Anchor href="#">Start Quiz</Anchor>
            {/* <Anchor href="#" variant="outline-for-bg-dark">
              Create Account
            </Anchor> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
