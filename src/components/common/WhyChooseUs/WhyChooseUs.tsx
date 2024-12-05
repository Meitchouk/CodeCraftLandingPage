'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Headphones, Star, PencilRuler } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function WhyChooseUs() {
    const t = useTranslations();

    // Ref para animaciones con Intersection Observer
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

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
        <section
            ref={sectionRef}
            className="py-16 bg-background"
        >
            <div className="container mx-auto px-6">
                {/* Título de la Sección */}
                <h2
                    className={`text-4xl font-bold text-center mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {t('WHY_CHOOSE_US')}
                </h2>
                {/* Tarjetas con Razones */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className={`text-center transition-all duration-500 transform ${isVisible
                                    ? `opacity-100 translate-y-0 delay-${index * 200}`
                                    : 'opacity-0 translate-y-10'
                                }`}
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
