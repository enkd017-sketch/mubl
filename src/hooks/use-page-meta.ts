import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

const SITE_NAME = "MUBL — Mirzo Ulugh Beg's Legacy";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/jDY42mmzzjTQVbocfe8c7hcuLJB2/social-images/social-1769939749864-MUBL_black.png";

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const fullTitle = title === "Home" ? SITE_NAME : `${title} — MUBL`;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", OG_IMAGE);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", OG_IMAGE);
    setMetaTag("name", "twitter:card", "summary_large_image");
  }, [title, description]);
}
