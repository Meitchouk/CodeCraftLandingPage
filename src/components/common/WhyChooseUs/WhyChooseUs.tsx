// components/common/WhyChooseUs.tsx
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Headphones, Star, PencilRuler } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';

export default function WhyChooseUs() {
    const t = useTranslations();

    const reasons = [
        {
            icon: <Star className="w-12 h-12 text-primary" />,
            title: t('EXCEPTIONAL_SERVICE'),
            description: t('EXCEPTIONAL_SERVICE_DESC'),
        },
        {
            icon: <Headphones className="w-12 h-12 text-primary" />,
            title: t('SUPPORT'),
            description: t('SUPPORT_DESC'),
        },
        {
            icon: <PencilRuler className="w-12 h-12 text-primary" />,
            title: t('ADVANCED_TOOLS'),
            description: t('ADVANCED_TOOLS_DESC'),
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {t('WHY_CHOOSE_US')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-lg transition-shadow"
                        >
                            <CardHeader className="flex flex-col items-center">
                                <div className="mb-4">{reason.icon}</div>
                                <CardTitle className="text-2xl">{reason.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{reason.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
