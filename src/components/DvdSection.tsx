import { getFilmsInnerHtml } from "@/lib/productions";

export function DvdSection() {
  const innerHtml = getFilmsInnerHtml();

  return (
    <div
      data-barba-namespace="films"
      data-barba="container"
      className="dvd-section main-wrapper"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
