import Button from "../ui/Button";
import bannerImage from "../../assets/home/view-futuristic-lighting-lamp-design.png";
import customerImage from "../../assets/home/joint-img.png";

const Banner = () => {
  return (
    <section className="w-full">
      <div
        className="relative mx-auto flex min-h-[850px] w-full items-end overflow-hidden bg-[#20160f] bg-cover bg-center bg-no-repeat p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:min-h-[740px] md:p-10"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
      
        <div className="relative z-10 flex flex-col md:flex-row w-full items-end justify-between gap-8 md:min-h-[520px]">
          <div className="max-w-[580px] rounded-[26px] border border-white/35 bg-[linear-gradient(180deg,rgba(140,149,158,0.34),rgba(217,184,145,0.2)_62%,rgba(55,37,24,0.24))] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl md:mt-auto md:p-7">
            <p className="text-sm font-light tracking-[0.02em] text-white/85 md:text-base">
              Professional Lighting Solutions
            </p>
            <h1 className="mb-2 font-serif text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white md:text-[4rem]">
              Luxury Lighting Destination
            </h1>
            <p className="max-w-full text-base font-light leading-8 text-white/80 md:text-[1.05rem]">
              Precision-engineered LEDs, drivers and architectural fixtures for
              commercial and residential projects of lasting quality.
            </p>
            <div className="mt-8">
              <Button href="/categories">Shop Now</Button>
            </div>
          </div>

          <div className="ml-auto w-full max-w-[290px] rounded-[18px] border border-white/35 bg-[rgba(94,71,51,0.34)] p-3.5 text-white shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <img
                src={customerImage}
                alt="Trusted customers"
                className="w-auto rounded-full object-contain"
              />
              <div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-white/70">
                  Trusted By
                </p>
                <p className="text-lg font-light leading-tight text-white">
                  100K+ Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
