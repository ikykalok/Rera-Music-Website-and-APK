"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RuntimeLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/" || !document.querySelector('[data-barba="container"]')) return;
    (window as unknown as { Lenis?: unknown }).Lenis = undefined;
    if (document.querySelector("script[data-a24-runtime]")) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "/_astro/ExportPage.astro_astro_type_script_index_0_lang.DQlUkOwJ.js";
    script.setAttribute("data-a24-runtime", "true");
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
