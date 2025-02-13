import { useEffect, useRef, ReactNode } from 'react';
import { useAnimation, motion } from 'framer-motion';

const ScrollAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const handleScroll = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;