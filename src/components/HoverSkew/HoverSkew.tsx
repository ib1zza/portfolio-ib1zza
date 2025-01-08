import React, {forwardRef} from "react";
import s from "./HoverSkew.module.scss";

import {motion} from "framer-motion";

interface TiltSettings {
    max: number;
    perspective: number;
    scale: number;
    speed: number;
    easing: string;
}

type TiltProps = Partial<Omit<TiltSettings, "easing">>;

interface Props {
    children: React.ReactNode;
    settings?: TiltProps;
    withoutShine?: boolean;
    className?: string;
    index?: number;
    noYmove?: boolean;
}



const HoverSkew: React.FC<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
        index = 0,
        noYmove = false,
        children,
        settings = {},
        withoutShine = false,
        className = '',
    } = props;
    const [tiltEffectSettings] = React.useState<TiltSettings>({
        max: 7, // max tilt rotation (degrees (deg))
        perspective: 1500, // transform perspective, the lower, the more extreme the tilt gets (pixels (px))
        scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
        speed: 800, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
        easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition,
        ...settings,
    });

    const shineRef = React.useRef<HTMLDivElement>(null);

    function cardMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
        setTransition(event);
        if (withoutShine) return;
        mouseEnterDotAnimation();
    }

    function cardMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const card = event.currentTarget;
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        const boundingClientRect = card.getBoundingClientRect();

        const centerX = boundingClientRect.left + cardWidth / 2;
        const centerY = boundingClientRect.top + cardHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

        if (!withoutShine) {
            mouseMoveDotAnimation(mouseX, mouseY);
        }

        const rotateXUncapped =
            (+1 * tiltEffectSettings.max * mouseY) / (cardHeight / 2);
        const rotateYUncapped =
            (-1 * tiltEffectSettings.max * mouseX) / (cardWidth / 2);

        const rotateX =
            rotateXUncapped < -tiltEffectSettings.max
                ? -tiltEffectSettings.max
                : rotateXUncapped > tiltEffectSettings.max
                    ? tiltEffectSettings.max
                    : rotateXUncapped;
        const rotateY =
            rotateYUncapped < -tiltEffectSettings.max
                ? -tiltEffectSettings.max
                : rotateYUncapped > tiltEffectSettings.max
                    ? tiltEffectSettings.max
                    : rotateYUncapped;

        card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                          scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
    }

    function cardMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
        event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        setTransition(event);
        if (withoutShine) return;
        mouseLeaveDotAnimation();
    }

    function setTransition(event: React.MouseEvent<HTMLDivElement>) {
        const card = event.currentTarget;
        clearTimeout(card.dataset.transitionTimeoutId);
        card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
        // @ts-ignore
        card.dataset.transitionTimeoutId = setTimeout(() => {
            card.style.transition = "";
        }, tiltEffectSettings.speed);
    }

    function mouseLeaveDotAnimation() {
        const shineElement = shineRef.current as HTMLDivElement;
        shineElement.style.opacity = "0.7";
        shineElement.style.transform = `translateX(0px) translateY(0px)`;
    }

    function mouseEnterDotAnimation() {
        const shineElement = shineRef.current as HTMLDivElement;
        shineElement.style.opacity = "1.0";
        shineElement.style.transform = `translateX(0px) translateY(0px)`;
    }

    function mouseMoveDotAnimation(mouseX: number, mouseY: number) {
        const shineElement = shineRef.current as HTMLDivElement;
        shineElement.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
    }

    return (
        <motion.div
            ref={ref}
            className={s.card + " " + className}
            onMouseEnter={cardMouseEnter}
            onMouseMove={cardMouseMove}
            onMouseLeave={cardMouseLeave}
            // variants={animationVariants}
            custom={{index, noYmove}}
            whileHover={"hovered"}
            initial="initial"
        >
            {!withoutShine && (
                <div
                    className={s.shine}
                    ref={shineRef}
                    style={{
                        transition: `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}, opacity 0.4s ease-in`,
                    }}
                />
            )}
            {children}
        </motion.div>
    );
});

export default motion(HoverSkew);
