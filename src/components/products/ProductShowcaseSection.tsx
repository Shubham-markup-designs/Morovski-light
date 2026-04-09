import { useQuery } from "@tanstack/react-query";
import Button from "../ui/Button";
import ProductCard from "./ProductCard";
import type { Product } from "../../api/types";

type ProductShowcaseSectionProps = {
  queryKey: string;
  queryFn: () => Promise<Product[]>;
  watermark: string;
  title: string;
  description: string;
  viewAllHref: string;
};

const ProductShowcaseSection = ({
  queryKey,
  queryFn,
  watermark,
  title,
  description,
  viewAllHref,
}: ProductShowcaseSectionProps) => {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: [queryKey],
    queryFn,
  });

  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-auto max-w-[760px] text-center">
          <p className="pointer-events-none absolute left-1/2 top-0 -z-10 w-full -translate-x-1/2 -translate-y-8 text-[3.8rem] font-semibold leading-none tracking-[-0.06em] text-stone-100 md:text-[7rem]">
            {watermark}
          </p>
          <h2 className="text-[3.5rem] font-semibold tracking-[-0.04em] text-stone-950 md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[38ch] text-base leading-8 text-stone-700 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {isLoading ? (
            <p className="col-span-full text-center text-stone-500">
              Loading products...
            </p>
          ) : (
            data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={viewAllHref} variant="dark">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
