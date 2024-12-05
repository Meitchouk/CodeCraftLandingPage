// components/common/NavBar.tsx
'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();

  // Helper function to create localized paths
  const createPath = (path: string) => `/${locale}${path}`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href={createPath('/')}>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              CodeCraft
            </span>
          </Link>
        </div>
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-6">
            <NavigationMenuItem>
              <Link href={createPath('/services')} className="text-gray-800 dark:text-white hover:underline">
                {t('SERVICES')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={createPath('/portfolio')} className="text-gray-800 dark:text-white hover:underline">
                {t('PORTFOLIO')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={createPath('/about')} className="text-gray-800 dark:text-white hover:underline">
                {t('ABOUT_US')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={createPath('/contact')} className="text-gray-800 dark:text-white hover:underline">
                {t('CONTACT')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="default" size="sm">
                {t('REQUEST_QUOTE')}
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LanguageSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
