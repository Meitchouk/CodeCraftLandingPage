// components/common/Portfolio.tsx
'use client';

import React from 'react';
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

export default function Portfolio() {
    const t = useTranslations();

    const projects = [
        {
            image: 'https://via.placeholder.com/500x300?text=Project+One',
            title: 'Project One',
            description: 'Description of Project One.',
        },
        {
            image: 'https://via.placeholder.com/500x300?text=Project+Two',
            title: 'Project Two',
            description: 'Description of Project Two.',
        },
        {
            image: 'https://via.placeholder.com/500x300?text=Project+Three',
            title: 'Project Three',
            description: 'Description of Project Three.',
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    {t('OUR_PORTFOLIO')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
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
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button variant="link">{t('VIEW_PROJECT')}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
