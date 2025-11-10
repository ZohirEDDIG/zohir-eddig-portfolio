'use client';

import { useRef, useEffect} from 'react';

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedX: number;
  speedY: number;
  glow: number;
  flickerDir: number;
};

const GalaxyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const stars = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const numStars = 40;

        const createStars = () => {
            stars.current = Array.from({ length: numStars }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                speedX: (Math.random() - 0.5) * 0.05,
                speedY: (Math.random() - 0.5) * 0.05,
                glow: Math.random() * 15 + 5,
                flickerDir: Math.random() > 0.5 ? 1 : -1,
            }));
        };

        createStars();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (const star of stars.current) {
                // Flickering
                star.opacity += star.flickerDir * 0.005;
                if (star.opacity <= 0.1 || star.opacity >= 1) {
                    star.flickerDir *= -1;
                }

                // Movement
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around edges
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = star.glow;
                ctx.fill();
            }

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars(); // recreate stars for new size
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10'/>
    );
};

export default GalaxyBackground;