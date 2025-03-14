
import React, { useEffect, useRef } from 'react';

const SnowAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Snow particles array
        const snowflakes = [];
        const snowballs = [];

        // Create snowflakes (Reduced to 75)
        for (let i = 0; i < 75; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1, // Slightly smaller
                speed: Math.random() * 0.5 + 0.2, // Reduced speed
                wind: Math.random() * 0.3 - 0.15,
                opacity: Math.random() * 0.5 + 0.5
            });
        }

        // Create rolling snowballs (Reduced to 2)
        for (let i = 0; i < 2; i++) {
            snowballs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 12 + 8, // Slightly smaller
                speedX: (Math.random() * 1.5 - 0.75) * 2,
                speedY: (Math.random() * 1.5 - 0.75) * 2,
                rotation: 0,
                rotationSpeed: Math.random() * 0.03 + 0.005 // Reduced rotation speed
            });
        }

        // Animation function
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update snowflakes
            ctx.fillStyle = '#fff';
            snowflakes.forEach((flake, index) => {
                ctx.beginPath();
                ctx.globalAlpha = flake.opacity;
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fill();

                // Update position
                flake.y += flake.speed;
                flake.x += flake.wind;

                // Reset if snowflake reaches bottom
                if (flake.y > canvas.height) {
                    snowflakes[index] = {
                        x: Math.random() * canvas.width,
                        y: 0,
                        radius: flake.radius,
                        speed: flake.speed,
                        wind: Math.random() * 0.3 - 0.15,
                        opacity: flake.opacity
                    };
                }

                // Reset if snowflake goes off sides
                if (flake.x > canvas.width) flake.x = 0;
                if (flake.x < 0) flake.x = canvas.width;
            });

            // Draw and update snowballs
            snowballs.forEach((ball, index) => {
                ctx.save();
                ctx.globalAlpha = 0.8;
                ctx.translate(ball.x, ball.y);
                ctx.rotate(ball.rotation);

                // Draw snowball with some texture
                ctx.beginPath();
                ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.fill();

                ctx.restore();

                // Update position
                ball.x += ball.speedX;
                ball.y += ball.speedY;
                ball.rotation += ball.rotationSpeed;

                // Bounce off edges
                if (ball.x > canvas.width - ball.radius || ball.x < ball.radius) {
                    ball.speedX = -ball.speedX;
                }

                if (ball.y > canvas.height - ball.radius || ball.y < ball.radius) {
                    ball.speedY = -ball.speedY;
                }
            });

            requestAnimationFrame(animate);
        };

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 10
            }}
        />
    );
};

export default SnowAnimation;
