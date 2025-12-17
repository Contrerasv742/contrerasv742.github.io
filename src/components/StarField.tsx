// Credit: Stars (interactive) by Thibaut Foussard 
// Link: https://codepen.io/Thibka/pen/BRzgOM
// Code is heavily based on Foussard's code 'Stars (interactive)'

import React, { useEffect, useRef } from 'react';

// Star class
class Star {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  WIDTH: number;
  HEIGHT: number;
  backgroundSpeed: number;

  constructor(id: number, x: number, y: number, ctx: CanvasRenderingContext2D, WIDTH: number, HEIGHT: number, backgroundSpeed: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 2) + 1;
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = `rgba(255,255,255,${alpha})`;
    this.ctx = ctx;
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
    this.backgroundSpeed = backgroundSpeed;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.shadowBlur = this.r * 2;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  move() {
    this.y -= 0.15 + this.backgroundSpeed / 100;
    if (this.y <= -10) this.y = this.HEIGHT + 10;
    this.draw();
  }
}

// Dot class
class Dot {
  id: number;
  x: number;
  y: number;
  r: number;
  maxLinks: number;
  speed: number;
  a: number;
  aReduction: number;
  color: string;
  linkColor: string;
  dir: number;
  ctx: CanvasRenderingContext2D;
  dotsSpeed: number;
  dots: (Dot | null)[];

  constructor(id: number, x: number, y: number, ctx: CanvasRenderingContext2D, dotsSpeed: number, dots: (Dot | null)[]) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 5) + 1;
    this.maxLinks = 2;
    this.speed = 0.5;
    this.a = 0.5;
    this.aReduction = 0.005;
    this.color = `rgba(255,255,255,${this.a})`;
    this.linkColor = `rgba(255,255,255,${this.a / 4})`;
    this.dir = Math.floor(Math.random() * 140) + 200;
    this.ctx = ctx;
    this.dotsSpeed = dotsSpeed;
    this.dots = dots;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.shadowBlur = this.r * 2;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  link() {
    if (this.id === 0) return;
    const previousDot1 = this.getPreviousDot(this.id, 1);
    const previousDot2 = this.getPreviousDot(this.id, 2);
    const previousDot3 = this.getPreviousDot(this.id, 3);
    if (!previousDot1) return;
    this.ctx.strokeStyle = this.linkColor;
    this.ctx.moveTo(previousDot1.x, previousDot1.y);
    this.ctx.beginPath();
    this.ctx.lineTo(this.x, this.y);
    if (previousDot2) this.ctx.lineTo(previousDot2.x, previousDot2.y);
    if (previousDot3) this.ctx.lineTo(previousDot3.x, previousDot3.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  getPreviousDot(id: number, stepback: number): Dot | null {
    if (id === 0 || id - stepback < 0) return null;
    if (this.dots[id - stepback]) return this.dots[id - stepback];
    return null;
  }

  move() {
    this.a -= this.aReduction;
    if (this.a <= 0) {
      this.die();
      return;
    }
    this.color = `rgba(255,255,255,${this.a})`;
    this.linkColor = `rgba(255,255,255,${this.a / 4})`;
    this.x = this.x + Math.cos(this.degToRad(this.dir)) * (this.speed + this.dotsSpeed / 100);
    this.y = this.y + Math.sin(this.degToRad(this.dir)) * (this.speed + this.dotsSpeed / 100);

    this.draw();
    this.link();
  }

  die() {
    this.dots[this.id] = null;
  }

  degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

interface StarFieldProps {
  className?: string;
}

const StarField: React.FC<StarFieldProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const starsRef = useRef<Star[]>([]);
  const dotsRef = useRef<(Dot | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moving: false });
  const mouseMoveCheckerRef = useRef<number | null>(null);

  // Parameters
  const params = useRef({
    maxDistFromCursor: 50,
    dotsSpeed: 0,
    backgroundSpeed: 0
  });

  const initStarsPopulation = 80;
  const dotsMinDist = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      return { WIDTH, HEIGHT };
    };

    const { WIDTH, HEIGHT } = setCanvasSize();

    // Initialize stars
    ctx.strokeStyle = "white";
    ctx.shadowColor = "white";
    for (let i = 0; i < initStarsPopulation; i++) {
      starsRef.current[i] = new Star(
        i,
        Math.floor(Math.random() * WIDTH),
        Math.floor(Math.random() * HEIGHT),
        ctx,
        WIDTH,
        HEIGHT,
        params.current.backgroundSpeed
      );
    }
    ctx.shadowBlur = 0;

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.moving = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (mouseMoveCheckerRef.current) {
        clearTimeout(mouseMoveCheckerRef.current);
      }
      mouseMoveCheckerRef.current = setTimeout(() => {
        mouseRef.current.moving = false;
      }, 100);
    };

    const drawIfMouseMoving = () => {
      if (!mouseRef.current.moving) return;

      if (dotsRef.current.length === 0) {
        dotsRef.current[0] = new Dot(0, mouseRef.current.x, mouseRef.current.y, ctx, params.current.dotsSpeed, dotsRef.current);
        dotsRef.current[0]?.draw();
        return;
      }

      const previousDot = dotsRef.current[dotsRef.current.length - 1];
      if (!previousDot) return;

      const prevX = previousDot.x;
      const prevY = previousDot.y;

      const diffX = Math.abs(prevX - mouseRef.current.x);
      const diffY = Math.abs(prevY - mouseRef.current.y);

      if (diffX < dotsMinDist || diffY < dotsMinDist) return;

      const xVariation = Math.random() > 0.5 ? -1 : 1;
      const xVar = xVariation * Math.floor(Math.random() * params.current.maxDistFromCursor) + 1;
      const yVariation = Math.random() > 0.5 ? -1 : 1;
      const yVar = yVariation * Math.floor(Math.random() * params.current.maxDistFromCursor) + 1;
      
      const newDot = new Dot(
        dotsRef.current.length,
        mouseRef.current.x + xVar,
        mouseRef.current.y + yVar,
        ctx,
        params.current.dotsSpeed,
        dotsRef.current
      );
      dotsRef.current[dotsRef.current.length] = newDot;
      newDot.draw();
      newDot.link();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      // Update stars with current background speed
      starsRef.current.forEach(star => {
        star.backgroundSpeed = params.current.backgroundSpeed;
        star.move();
      });

      // Update dots with current dots speed
      dotsRef.current.forEach((dot) => {
        if (dot) {
          dot.dotsSpeed = params.current.dotsSpeed;
          dot.move();
        }
      });

      drawIfMouseMoving();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add mouse event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mouseMoveCheckerRef.current) {
        clearTimeout(mouseMoveCheckerRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarField;
