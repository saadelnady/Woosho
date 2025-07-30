// get the numeric date
export const getFullDate = (date, locale) => {
  if (!date) return;
  return new Date(date).toLocaleDateString(
    locale === "ar" ? "ar-EG" : "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
};
//handle the image link if it is not a full link then add the base url
export const handleMediaLink = (media) => {
  if (media?.includes("http")) {
    return media;
  } else {
    // eslint-disable-next-line no-undef
    return `${process.env.NEXT_PUBLIC_MEDIA_URL}/${media}`;
  }
};
