import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHeart, HiOutlineHeart, HiStar } from "react-icons/hi2";
import Button from "../ui/Button";
import type { Product } from "../../api/types";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

type ProductCardProps = {
  product: Product;
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN").format(value);

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const imageUrl = resolveImageUrl(product.image);
  const rating = product.rating ?? 4.5;
  const roundedRating = Math.round(rating);

  return (
    <article className="group rounded-[18px] border border-stone-300 bg-white p-1.5 shadow-[0_10px_30px_rgba(24,18,12,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-[14px]">
        <Link to={product.href ?? "#"} className="block">
          <img
            src={imageUrl}
            alt={product.name}
            className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <button
          type="button"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => setIsWishlisted((current) => !current)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#b38a4f] text-white shadow-[0_8px_20px_rgba(34,24,17,0.18)] transition hover:bg-[#9d7640]"
        >
          {isWishlisted ? (
            <HiHeart className="text-lg" />
          ) : (
            <HiOutlineHeart className="text-lg" />
          )}
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center opacity-0 transition-all duration-300 group-hover:bottom-5 group-hover:opacity-100">
          <Button
            className="pointer-events-auto border-[#b38a4f] bg-[#b38a4f] px-4 py-2 text-sm text-white hover:bg-[#9d7640]"
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="px-1 pb-3 pt-3 text-left">
        <p className="text-xs uppercase tracking-[0.08em] text-stone-700">
          {product.sku}
        </p>
        <Link
          to={product.href ?? "#"}
          className="mt-1 block text-stone-950"
        >
          <span className="block text-[1.05rem] font-medium leading-[1.35] tracking-[-0.02em] md:text-[1.15rem]">
            {product.name}
          </span>
        </Link>

        <div className="mt-2 flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <HiStar
              key={index}
              className={`text-sm ${
                index < roundedRating ? "opacity-100" : "opacity-30"
              }`}
            />
          ))}
          <span className="ml-1 text-sm text-stone-700">({rating.toFixed(1)})</span>
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-[1.2rem] font-semibold leading-none text-[#b38a4f] md:text-[1.35rem]">
            Rs{formatPrice(product.price)}
          </span>
          {product.originalPrice ? (
            <span className="text-sm text-stone-500 line-through md:text-base">
              Rs{formatPrice(product.originalPrice)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
