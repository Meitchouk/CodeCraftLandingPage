'use client';

import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const createPath = (path: string) => `/${locale}${path}`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href={createPath('/')}>
            <span className="text-2xl font-bold text-primary dark:text-primary-foreground">
              CodeCraft
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href={createPath('/services')} className="hover:underline text-gray-800 dark:text-white">
            {t('SERVICES')}
          </Link>
          <Link href={createPath('/portfolio')} className="hover:underline text-gray-800 dark:text-white">
            {t('PORTFOLIO')}
          </Link>
          <Link href={createPath('/about')} className="hover:underline text-gray-800 dark:text-white">
            {t('ABOUT_US')}
          </Link>
          <Link href={createPath('/contact')} className="hover:underline text-gray-800 dark:text-white">
            {t('CONTACT')}
          </Link>
          <Button variant="default" size="sm">
            {t('REQUEST_QUOTE')}
          </Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-6 py-4 space-y-6">
            {/* Main Links */}
            <div className="space-y-4">
              <Link href={createPath('/services')} className="block text-gray-800 dark:text-white hover:underline">
                {t('SERVICES')}
              </Link>
              <Link href={createPath('/portfolio')} className="block text-gray-800 dark:text-white hover:underline">
                {t('PORTFOLIO')}
              </Link>
              <Link href={createPath('/about')} className="block text-gray-800 dark:text-white hover:underline">
                {t('ABOUT_US')}
              </Link>
              <Link href={createPath('/contact')} className="block text-gray-800 dark:text-white hover:underline">
                {t('CONTACT')}
              </Link>
            </div>
            {/* Request Quote */}
            <Button variant="default" size="lg" className="w-full">
              {t('REQUEST_QUOTE')}
            </Button>
            {/* Language Switcher */}
            <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">{t('LANGUAGE')}</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
