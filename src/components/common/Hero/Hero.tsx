// components/common/Hero.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations();
    const { theme } = useTheme();

    return (
        <section
            className={cn(
                'relative overflow-hidden',
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            )}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 z-[-1]">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 w-full h-full animate-gradient-move"></div>
            </div>

            <div className="container mx-auto flex flex-col-reverse items-center px-6 py-24 md:flex-row">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="prose prose-lg dark:prose-invert">
                        <h1>{t('HERO_TITLE')}</h1>
                        <p>{t('HERO_SUBTITLE')}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                        <Button size="lg">{t('EXPLORE_PROJECTS')}</Button>
                        <Button size="lg" variant="outline">
                            {t('CONTACT_US')}
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 mb-12 md:mb-0">
                    <Image
                        src="/images/hero-illustration.png"
                        alt="Hero Illustration"
                        width={500}
                        height={500}
                        className="mx-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
