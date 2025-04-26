import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const lerp = (start, end, factor) => (1 - factor) * start + factor * end;

export default function BlurryCursor({ isActive }) {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef();
    const circles = useRef([]);
    const size = isActive ? 150 : 20;  // Remove px units, use numbers instead
    const scale = isActive ? 1.5 : 1;  // Add scale factor

    const colors = [
        "#c32d27",
        "#f5c63f",
        "#457ec4",
        "#356fdb",
    ];

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = { x: clientX, y: clientY };
    }

    const moveCircles = React.useCallback((x, y) => {
        if(circles.current.length < 1) return;
        circles.current.forEach((circle, i) => {
            gsap.to(circle, {
                x,
                y,
                scale: scale,
                xPercent: -50,
                yPercent: -50,
                duration: 0.15 + (i * 0.04),
                ease: "power2.out"
            })
        })
    }, [scale]);

    useEffect(() => {
        const animate = () => {
            const { x, y } = delayedMouse.current;
            
            delayedMouse.current = {
                x: lerp(x, mouse.current.x, 0.075),
                y: lerp(y, mouse.current.y, 0.075)
            }

            moveCircles(delayedMouse.current.x, delayedMouse.current.y);
            rafId.current = window.requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current)
        }
    }, [isActive, moveCircles])

    return (
        <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none', 
            zIndex: 1,
            overflow: 'hidden'
        }}>
            {[...Array(4)].map((_, i) => (
                <div 
                    style={{
                        position: 'absolute',
                        backgroundColor: colors[i],
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: '50%',
                        filter: `blur(${isActive ? 20 : 2}px)`,
                        opacity: isActive ? 0.8 - (i * 0.1) : 0.6 - (i * 0.1),
                        transition: 'width 0.3s ease-out, height 0.3s ease-out, filter 0.3s ease-out'
                    }}
                    key={i} 
                    ref={ref => circles.current[i] = ref}
                />
            ))}
        </div>
    )
}