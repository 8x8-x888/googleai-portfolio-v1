import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles'; // Import the full bundle
import { gsap } from 'gsap';

const ParticlesComponent = (props) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [particlesContainer, setParticlesContainer] = useState(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Load the full engine
    }).then(() => {
      setIsInitialized(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    setParticlesContainer(container);
  }, []);

  const triggerCascade = useCallback((event) => {
    if (!particlesContainer) return;

    const { particles, pjs } = particlesContainer;
    const position = pjs.interactivity.mouse.clickPosition;

    if (!position) return;

    const epicenter = particles.findClosest(position);
    if (!epicenter) return;

    const queue = [[epicenter, 0]];
    const visited = new Set([epicenter.id]);
    const layers = {};

    while (queue.length > 0) {
      const [currentParticle, layer] = queue.shift();
      if (!layers[layer]) layers[layer] = [];
      layers[layer].push(currentParticle);
      if (layer >= 4) continue;

      currentParticle.links.forEach(link => {
        const neighbor = link.destination;
        if (neighbor && !visited.has(neighbor.id)) {
          visited.add(neighbor.id);
          queue.push([neighbor, layer + 1]);
        }
      });
    }

    const tl = gsap.timeline();

    Object.entries(layers).forEach(([layer, particlesInLayer]) => {
      const layerNum = parseInt(layer, 10);
      const delay = layerNum * 0.08;

      particlesInLayer.forEach(p => {
        const initialOpacity = p.initialOpacity ?? (p.opacity?.value || 0.2);
        const initialSize = p.initialSize ?? p.size.value;
        const initialLinkOpacity = p.initialLinkOpacity ?? 0.2;
        
        tl.to(p.size, { value: initialSize * 2.5, duration: 0.3, ease: 'power2.out', onComplete: () => p.size.value = initialSize }, delay);
        tl.to(p, { opacity: 1, duration: 0.3, ease: 'power2.out', onComplete: () => p.opacity.value = initialOpacity }, delay);
        p.links.forEach(link => {
            tl.to(link, { opacity: 1, duration: 0.3, ease: 'power2.out', onComplete: () => link.opacity = initialLinkOpacity }, delay);
        });
      });
    });

  }, [particlesContainer]);

  const options = useMemo(
    () => ({
      background: { value: { color: 'transparent' } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'attract' }, // Set to attract mode
          onClick: { enable: true, mode: 'manual' }
        },
        modes: {
          attract: { // Configure the attract interaction
            distance: 200, 
            duration: 0.4, 
            easing: 'ease-out-quad', 
            factor: 1, 
            maxSpeed: 50, 
            speed: 1 
          },
        },
        manualParticles: [{
          events: { click: (event) => triggerCascade(event) }
        }]
      },
      particles: {
        color: { value: '#22d3ee' },
        links: {
          color: '#22d3ee',
          distance: 120,
          enable: true,
          opacity: 0.2, 
          width: 1,
        },
        move: {
          enable: true,
          direction: 'none',
          speed: 1, // Increased idle particle speed
          random: true,
          straight: false,
          outModes: { default: 'bounce' }
        },
        number: { density: { enable: true, area: 800 }, value: 120 },
        opacity: { value: { min: 0.2, max: 0.5 } },
        shape: { type: 'circle' },
        size: { value: 2 }, 
      },
      detectRetina: true,
    }),
    [triggerCascade]
  );

  if (!isInitialized) {
    return null;
  }

  return <Particles id={props.id} loaded={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
