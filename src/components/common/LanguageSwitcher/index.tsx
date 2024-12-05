"use client";

import React, { useState } from "react";
import { usePathname } from "@/lib/translations";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const startTransition = useTransition()[1];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => router.replace(`/${newLocale}${pathname}`));
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex md:items-center md:justify-center">
      {/* Mobile View: Horizontal Buttons */}
      <div className="flex items-center space-x-4 md:hidden">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`px-4 py-2 text-sm font-medium rounded ${locale === language.code
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              } transition`}
          >
            {language.label}
          </button>
        ))}
      </div>

      {/* Desktop View: Dropdown Menu */}
      <div className="hidden md:block relative">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center justify-center p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition"
        >
          <Globe className="w-5 h-5" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md">
            {languages
              .filter((language) => language.code !== locale)
              .map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="block w-full px-4 py-2 text-left hover:bg-primary hover:text-primary-foreground transition"
                >
                  {language.label}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
