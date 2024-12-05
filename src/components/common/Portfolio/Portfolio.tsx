'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants/projects';

export default function Portfolio() {
    const t = useTranslations();

    return (
        <section className="py-16 bg-background">
            <div className="w-full px-0">
                <h2 className="text-4xl font-bold text-center mb-12">{t('OUR_PORTFOLIO')}</h2>
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
                    className="w-full"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Card className="overflow-hidden hover:shadow-lg transition-transform duration-300 mx-4 h-[400px] flex flex-col">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="line-clamp-3">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button variant="link">{t('VIEW_PROJECT')}</Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
