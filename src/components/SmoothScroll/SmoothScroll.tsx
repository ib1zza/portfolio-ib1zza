import {createContext, useContext, useEffect, useState} from 'react';
import Lenis from '@studio-freight/lenis';
import {useLocation} from "react-router-dom";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisObj = new Lenis({
            lerp: 0.05,
            // syncTouch: true,
        });

        setLenis(lenisObj);

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
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
};

export const useLenis = () => {
    return useContext(LenisContext);
};

export default function SmoothScroll({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    const lenis = useLenis();
    const { pathname } = useLocation();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, {
                immediate: true,
                // duration: 0.1,
                lock: false,

            });
        }
    }, [pathname, lenis]);

    return (
        <>
            {children}
        </>
    );
}
