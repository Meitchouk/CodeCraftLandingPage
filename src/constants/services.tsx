import { Code, Smartphone, Monitor, Globe, Settings, Cloud, Database, Shield } from 'lucide-react';
import React from 'react';

export const services = [
    {
        icon: <Code className="w-12 h-12 text-primary" />,
        titleKey: 'WEB_DEVELOPMENT',
        descriptionKey: 'WEB_DEVELOPMENT_DESC',
    },
    {
        icon: <Smartphone className="w-12 h-12 text-primary" />,
        titleKey: 'APP_DEVELOPMENT',
        descriptionKey: 'APP_DEVELOPMENT_DESC',
    },
    {
        icon: <Monitor className="w-12 h-12 text-primary" />,
        titleKey: 'SOFTWARE_CONSULTING',
        descriptionKey: 'SOFTWARE_CONSULTING_DESC',
    },
    {
        icon: <Globe className="w-12 h-12 text-primary" />,
        titleKey: 'GLOBAL_REACH',
        descriptionKey: 'GLOBAL_REACH_DESC',
    },
    {
        icon: <Settings className="w-12 h-12 text-primary" />,
        titleKey: 'TECH_SUPPORT',
        descriptionKey: 'TECH_SUPPORT_DESC',
    },
    {
        icon: <Shield className="w-12 h-12 text-primary" />,
        titleKey: 'CYBER_SECURITY',
        descriptionKey: 'CYBER_SECURITY_DESC',
    },
    {
        icon: <Cloud className="w-12 h-12 text-primary" />,
        titleKey: 'CLOUD_SERVICES',
        descriptionKey: 'CLOUD_SERVICES_DESC',
    },
    {
        icon: <Database className="w-12 h-12 text-primary" />,
        titleKey: 'DATA_MANAGEMENT',
        descriptionKey: 'DATA_MANAGEMENT_DESC',
    },
];
