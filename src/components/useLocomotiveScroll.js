import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1.4,
      lerp: 0.06,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
