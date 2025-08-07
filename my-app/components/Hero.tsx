import SearchForm from "./SearchForm";
import heroCar from "../public/images/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background with Car Image */}
      <div
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroCar.src})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Search, Book &
              <br />
              <span className="text-blue-400">Rent A Car Easily</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Take your best car rental service with all new
              facilities and very easy way. We provide the best
              services in the town.
            </p>
          </div>
        </div>
      </div>

      {/* Search Form - Half overlapping the image */}
      <div className="relative z-20 container mx-auto px-4 -mt-32 mb-8">
        <SearchForm />
      </div>


    </div>
  );
};

export default Hero;