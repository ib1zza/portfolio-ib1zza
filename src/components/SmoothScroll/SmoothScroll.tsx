import {ReactLenis, useLenis} from '@studio-freight/react-lenis'
import Lenis from '@studio-freight/lenis';
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

export default function SmoothScroll({
                          children
                      }: {
                          children: React.ReactNode
                      }
) {
    const lenis = useRef<Lenis | null>(null);
    const {pathname} = useLocation();

    useEffect(() => {
        if (lenis.current) {

            lenis.current!.scrollTo(0,  {
                immediate: true,
            });

        }
    }, [pathname, lenis]);

    useEffect(() => {
        const lenisObj = new Lenis({
            lerp: 0.05,
        });

        lenis.current = lenisObj;

        lenisObj.on('scroll', (e: any) => {
            // console.log(e);
        });

        function raf(time: number) {
            lenisObj.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);


        return () => {
            lenisObj.destroy();
        };
    }, []);

    return (
        <>
            {children}
        </>
    )
}
