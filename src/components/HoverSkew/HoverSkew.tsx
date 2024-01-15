import React from "react";
import s from "./HoverSkew.module.scss";

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
}

const HoverSkew: React.FC<Props> = ({ children, settings = {} }) => {
  const [tiltEffectSettings] = React.useState<TiltSettings>({
    max: 7, // max tilt rotation (degrees (deg))
    perspective: 1500, // transform perspective, the lower, the more extreme the tilt gets (pixels (px))
    scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 800, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition,
    ...settings,
  });
  function cardMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
    setTransition(event);
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

  return (
    <div
      className={s.card}
      onMouseEnter={cardMouseEnter}
      onMouseMove={cardMouseMove}
      onMouseLeave={cardMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverSkew;
