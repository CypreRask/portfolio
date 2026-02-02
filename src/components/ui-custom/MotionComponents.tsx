import React from 'react';
import { motion } from 'framer-motion';

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    className = '',
    staggerDelay = 0.1
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = ''
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1]
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.5
}) => {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
