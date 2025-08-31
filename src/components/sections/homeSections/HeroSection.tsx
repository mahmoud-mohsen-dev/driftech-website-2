import Btn from "../../UI/buttons/Btn";
import Search from "../../UI/Search";

function HeroSection() {
  return (
    <div className="min-h-dvh bg-[url('../assets/backgrounds/3d-car-vibrant-city-night-1.png')] bg-cover bg-center py-5 pt-[229px]">
      <section className="container h-full">
        <div className="text-foundation-gray-lighter font-inter flex flex-col items-center gap-12 text-center md:items-start md:text-start lg:max-w-[649px]">
          <h1 className="font-semibold">
            Drive Today, Pay Your Way, Enjoy Every Mile
          </h1>
          <h3 className="leading-[35.88px] font-normal">
            From sedans to SUVs, find your perfect car with great deals and
            flexible financing.
          </h3>
          <Search />
          <Btn
            to="quiz"
            className="mt-5 rounded-lg md:mt-0"
            variant="for-bg-dark-without-border"
          >
            Start Quiz
          </Btn>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
