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
        <section className="relative py-16 flex flex-col justify-center items-center text-white">
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
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Contenido Principal */}
            <div className="text-center max-w-4xl px-6 md:px-4">
                <h1 className="text-2xl md:text-5xl font-bold mb-6 mt-10">
                    {t('COMPANY_SLOGAN')}
                </h1>
                <p className="text-base md:text-xl mb-10">
                    {t('COMPANY_DESCRIPTION')}
                </p>

                {/* Tarjetas de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white bg-opacity-20 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-md md:text-xl font-semibold mb-2 text-center">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Botón Principal */}
                <div className="mt-10">
                    <Button
                        size="lg"
                        variant="default"
                        className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
                    >
                        {t('LEARN_MORE_BUTTON')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
