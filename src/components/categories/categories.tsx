import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/categoryApi";
import type { Category } from "../../api/types";
import { resolveImageUrl } from "../../utils/resolveImageUrl";
import Button from "../ui/Button";
import CategoryCard from "./category-card";

const Categories = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[520px] text-center">
          <h2 className="text-[3.5rem] font-semibold tracking-[-0.04em] text-stone-950 md:text-5xl">
            Our Categories
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-700 md:text-lg">
            Precision-engineered LEDs, drivers and architectural fixtures for
            commercial and residential projects of lasting quality.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <p className="col-span-full text-center text-stone-500">
              Loading categories...
            </p>
          ) : (
            categories?.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                href={category.href}
                image={resolveImageUrl(category.image)}
              />
            ))
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/categories" variant="dark">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
