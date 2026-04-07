const localImages = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const isAbsoluteUrl = (value: string) =>
  /^https?:\/\//i.test(value) || value.startsWith("//") || value.startsWith("data:");

export const resolveImageUrl = (image: string) => {
  if (!image) return "";

  if (isAbsoluteUrl(image) || image.startsWith("/")) {
    return image;
  }

  const matchedImage = Object.entries(localImages).find(([path]) =>
    path.endsWith(`/${image}`)
  );

  return matchedImage?.[1] ?? image;
};
