import { Link } from "react-router-dom";

type CategoryCardProps = {
  name: string;
  image: string;
  href: string;
};

const CategoryCard = ({ name, image, href }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className="group relative block min-h-[300px] overflow-hidden rounded-[18px] bg-stone-200 md:min-h-[320px]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,13,12,0.08),rgba(15,13,12,0.24)_52%,rgba(15,13,12,0.5))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(218,171,104,0.14),rgba(218,171,104,0.34))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full items-end justify-center p-6 text-center">
        <div className="translate-y-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-[2rem] font-normal leading-none tracking-[-0.03em]">
            {name}
          </h3>
          <span className="mt-4 inline-block text-sm font-light underline underline-offset-4">
            Explore Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
