import { useEffect, useState } from 'react';

export function useIntersectionObserver(ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Para activar solo una vez
            }
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return isVisible;
}
