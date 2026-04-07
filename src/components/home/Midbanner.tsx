import Button from "../ui/Button";
import midbannerImage from "../../assets/home/mid-banner.png";

const Midbanner = () => {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div
          className="relative overflow-hidden rounded-[32px] border border-stone-200 bg-stone-950 px-6 py-14 text-white shadow-[0_24px_80px_rgba(20,14,10,0.18)] md:px-10 md:py-20"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(24, 17, 12, 0.86) 0%, rgba(24, 17, 12, 0.58) 38%, rgba(24, 17, 12, 0.18) 100%), url(${midbannerImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,210,140,0.22),transparent_32%)]" />

          <div className="relative z-10 max-w-[620px] text-left">
            <div className="mt-8 mt-auto">
              <Button href="/categories">Explore All Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midbanner;
