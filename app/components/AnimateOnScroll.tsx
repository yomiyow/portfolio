"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  as?: ElementType;
  id?: string;
}

const AnimateOnScroll = ({ children, className = "", animation = "opacity-0 translate-y-8", as: Component = "div", id }: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Component
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : animation} ${className}`}
    >
      {children}
    </Component>
  );
};

export default AnimateOnScroll;
