import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

import '../styles/scrollanimation.css';

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const panelRefs = useRef([]);

  contentRefs.current = [];
  panelRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(contentRefs.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    contentRefs.current.forEach((contentRef, i) => {
      const scrollPos = i + 0.3; // Or whatever value works for your layout
      tl.to(contentRef, { opacity: 1, duration: 0.5 }, scrollPos);
      tl.to(contentRef, { opacity: 0, duration: 0.5 }, `+=${scrollPos}`);
    });

    tl.to('.end-section', { opacity: 1, duration: 0.5 });

    panelRefs.current.forEach((panel, i) => {
      const panelHeight = panel.clientHeight;
      const containerHeight = containerRef.current.clientHeight;
      const yPercent = (panelHeight / containerHeight) * 100;
      gsap.to(panel, {
        yPercent: -yPercent * i,
        ease: 'none',
        scrollTrigger: {
          trigger: panel,
          scrub: true,
          start: 'top bottom-=80',
          end: 'bottom top+=80%',
        },
      });
    });
  }, []);

  return (
    <div className='sections' ref={containerRef}>
      <div className='container-page flex-center'>
        <div className='contento one' ref={(el) => contentRefs.current.push(el)} data-scroll='0.5'>
          <h2>This is random content</h2>
        </div>
        <div className='contento two' ref={(el) => contentRefs.current.push(el)} data-scroll='1.5'>
          <h2>This is another content</h2>
        </div>
        <div className='contento three' ref={(el) => contentRefs.current.push(el)} data-scroll='2.5'>
          <h2>This is some content</h2>
        </div>
        <div className='contento four' ref={(el) => contentRefs.current.push(el)} data-scroll='3.5'>
          <h2>This is final content</h2>
        </div>
      </div>

      <div className='panels flex-center'>
        <section style={{ backgroundColor: 'red' }} className='panel red' ref={(el) => panelRefs.current.push(el)}>
          ONE
        </section>
        <section style={{ backgroundColor: 'green' }} className='panel orange' ref={(el) => panelRefs.current.push(el)}>
          TWO
        </section>
        <section
          style={{ backgroundColor: 'yellow' }}
          className='panel purple'
          ref={(el) => panelRefs.current.push(el)}
        >
          THREE
        </section>
        <section className='panel green' style={{ backgroundColor: 'pink' }} ref={(el) => panelRefs.current.push(el)}>
          FOUR
        </section>
      </div>
    </div>
  );
};

export default ScrollAnimation;
