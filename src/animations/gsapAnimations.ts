import { gsap } from 'gsap';

export const fadeIn = (element: HTMLElement) => {
  gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
};

export const slideIn = (element: HTMLElement, direction: 'left' | 'right') => {
  const xValue = direction === 'left' ? -100 : 100;
  gsap.fromTo(element, { x: xValue, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
};

export const scaleUp = (element: HTMLElement) => {
  gsap.fromTo(element, { scale: 0 }, { scale: 1, duration: 0.5 });
};