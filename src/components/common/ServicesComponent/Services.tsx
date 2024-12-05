'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { services } from '@/constants/services';

interface Service {
    icon: React.ReactNode;
    titleKey: string;
    descriptionKey: string;
}

export default function Services() {
    const t = useTranslations();

    return (
        <section className="py-16 bg-background">
            <div className="w-full px-0">
                <h2 className="text-4xl font-bold text-center mb-12">{t('OUR_SERVICES')}</h2>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                    className="w-[95%] mx-auto"
                >
                    {services.map((service: Service, index: number) => (
                        <SwiperSlide key={index}>
                            <Card className="text-center hover:shadow-lg transition-transform duration-300 mx-4 h-[250px] flex flex-col justify-between">
                                <CardHeader>
                                    <div className="flex justify-center mb-4 transition-transform duration-300 hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-2xl font-semibold">
                                        {t(service.titleKey)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="line-clamp-4">
                                        {t(service.descriptionKey)}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
