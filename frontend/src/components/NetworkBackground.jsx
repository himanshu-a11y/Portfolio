import React, { useEffect, useRef } from 'react';
import './NetworkBackground.css';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Instead of drawing instantly, we ensure parent element provides dimensions or we use window
    const setCanvasSize = () => {
      if (canvas && canvas.parentElement) {
        // We want it to be fullscreen or at least fill the hero section
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasSize();
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Colors that fit the requested cyan/blue cybersecurity theme
    const nodeColor = 'rgba(0, 255, 204, 0.8)'; 
    const lineColorBase = '0, 212, 255'; // RGB for interpolation
    
    // Mouse config
    const mouse = {
      x: null,
      y: null,
      radius: 120 // Interaction radius
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    const handleResize = () => {
      setCanvasSize();
      init(); // Reinitialize particles for new size to maintain density
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = nodeColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = nodeColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
      
      update() {
        // Bounce off walls gently
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }
        
        // Parallax / interaction with mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Gentle repel
            const force = (mouse.radius - distance) / mouse.radius;
            const dirX = dx / distance;
            const dirY = dy / distance;
            
            // Push away
            this.x -= dirX * force;
            this.y -= dirY * force;
          }
        }

        // Standard movement
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
      }
    }

    const init = () => {
      particles.length = 0;
      // Adjust density based on screen size
      const numberOfParticles = (canvas.width * canvas.height) / 10000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 1.5 + 0.5; // small nodes
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        // Slow and elegant movement
        let dx = (Math.random() - 0.5) * 0.4;
        let dy = (Math.random() - 0.5) * 0.4;
        
        particles.push(new Particle(x, y, dx, dy, size));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = dx * dx + dy * dy;
          
          // Connect if within threshold
          if (distance < 15000) {
            let opacityValue = 1 - (distance / 15000);
            ctx.strokeStyle = `rgba(${lineColorBase}, ${opacityValue * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-background" />;
};

export default NetworkBackground;
