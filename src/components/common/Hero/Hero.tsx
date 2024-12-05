'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
    const t = useTranslations();

    const services = [
        {
            title: t('SERVICE_1_TITLE'),
            description: t('SERVICE_1_DESC'),
        },
        {
            title: t('SERVICE_2_TITLE'),
            description: t('SERVICE_2_DESC'),
        },
        {
            title: t('SERVICE_3_TITLE'),
            description: t('SERVICE_3_DESC'),
        },
    ];

    return (
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-white">
            {/* Imagen de Fondo */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/images/banner.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-50"></div>
            </div>

            {/* Contenido Principal */}
            <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('COMPANY_SLOGAN')}</h1>
                <p className="text-lg mb-8">{t('COMPANY_DESCRIPTION')}</p>

                {/* Tarjetas de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 sm:bg-opacity-10 md:bg-opacity-20"
                        >
                            <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Botón Principal */}
                <div className="mt-8">
                    <Button
                        size="lg"
                        variant="default"
                        className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
                    >
                        {t('LEARN_MORE_BUTTON')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
