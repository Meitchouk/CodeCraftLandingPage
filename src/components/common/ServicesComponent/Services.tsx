'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Code, Smartphone, Monitor } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';

export default function Services() {
    const t = useTranslations();

    const services = [
        {
            icon: <Code className="w-12 h-12 text-primary" />,
            title: t('WEB_DEVELOPMENT'),
            description: t('WEB_DEVELOPMENT_DESC'),
        },
        {
            icon: <Smartphone className="w-12 h-12 text-primary" />,
            title: t('APP_DEVELOPMENT'),
            description: t('APP_DEVELOPMENT_DESC'),
        },
        {
            icon: <Monitor className="w-12 h-12 text-primary" />,
            title: t('SOFTWARE_CONSULTING'),
            description: t('SOFTWARE_CONSULTING_DESC'),
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {t('OUR_SERVICES')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-lg transition-shadow"
                        >
                            <CardHeader>
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
