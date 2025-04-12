import React, { ReactNode } from 'react';
import styles from './gradient.style.module.css'; // we'll add the animation here

interface Props {
  children: ReactNode;
  className?: string;
}

const GradientBg = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`${styles.movingGradient} w-full ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent 1%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 1%, black 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default GradientBg;
