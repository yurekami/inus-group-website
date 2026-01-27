"use client";

import { useEffect } from "react";
import { useLanguage } from "../i18n";

export function HtmlLangUpdater() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", locale);
  }, [locale]);

  return null;
}
