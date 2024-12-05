'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Footer() {
    const t = useTranslations();

    // Refs para las secciones
    const footerRef = useRef<HTMLDivElement>(null);
    const isFooterVisible = useIntersectionObserver(footerRef, { threshold: 0.2 });

    return (
        <footer
            ref={footerRef}
            className={`bg-primary text-primary-foreground ${isFooterVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-6 py-12">
                {/* Logo and Description */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/images/Logo.png"
                                alt="CodeCraft Logo"
                                width={50}
                                height={50}
                                className="mr-3"
                            />
                            <span className="text-2xl font-bold">CodeCraft</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-muted-foreground">
                            {t('FOOTER_DESCRIPTION')}
                        </p>
                    </div>
                    {/* Newsletter Subscription */}
                    <div className="max-w-md">
                        <h3 className="text-xl font-bold mb-4">{t('SUBSCRIBE')}</h3>
                        <p className="mb-4 text-muted-foreground">{t('SUBSCRIBE_DESCRIPTION')}</p>
                        <form className="flex">
                            <Input
                                type="email"
                                placeholder={t('YOUR_EMAIL')}
                                className="rounded-l-lg"
                                required
                            />
                            <Button type="submit" className="rounded-r-lg transition-transform duration-300 hover:scale-105">
                                {t('SUBSCRIBE_BUTTON')}
                            </Button>
                        </form>
                    </div>
                </div>
                {/* Links and Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">{t('QUICK_LINKS')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:underline transition-colors duration-300">
                                    {t('HOME')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline transition-colors duration-300">
                                    {t('ABOUT_US')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:underline transition-colors duration-300">
                                    {t('SERVICES')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline transition-colors duration-300">
                                    {t('CONTACT')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">{t('OUR_SERVICES')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/web-development" className="hover:underline transition-colors duration-300">
                                    {t('WEB_DEVELOPMENT')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/app-development" className="hover:underline transition-colors duration-300">
                                    {t('APP_DEVELOPMENT')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/software-consulting" className="hover:underline transition-colors duration-300">
                                    {t('SOFTWARE_CONSULTING')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">{t('CONTACT_INFO')}</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3" />
                                123 Tech Street, City, Country
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3" />
                                +123 456 7890
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3" />
                                email@example.com
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Social Media and Copyright */}
                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row md:justify-between items-center">
                    {/* Social Media */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#" aria-label="Facebook" className="hover:text-accent transition-transform duration-300 hover:scale-110">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-accent transition-transform duration-300 hover:scale-110">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-accent transition-transform duration-300 hover:scale-110">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                    {/* Copyright */}
                    <p className="text-sm text-center md:text-right text-muted-foreground">
                        © {new Date().getFullYear()} CodeCraft. {t('ALL_RIGHTS_RESERVED')}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
