import React, { useEffect } from "react";
import s from "./InitialTransitionCSS.module.scss";
import { useAnimationStore } from "../../store/store";
import { disableScroll, enableScroll } from "../../helpers/scroll";

const InitialTransitionCSS = () => {

    return (
        <div className={s.container}>
            <div className={`${s.motion} ${s.animate}`}>
                <div className={s.logoWrapper}>
                    <svg className={s.icon} width="70" height="70" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.99763 16.0278C11.9013 12.1241 16.9941 6.53133 16.9941 7.03133C16.9941 7.53133 16.9941 36.5197 16.9941 37.0195C16.9941 37.5193 32.488 22.0254 31.9882 22.0254C31.4884 22.0254 2 22 2 22"
                            stroke="currentColor"
                            strokeLinecap="round"
                            className={s.path}
                        />
                        <circle cx="17" cy="2" r="2" fill="currentColor" className={s.circle} />
                    </svg>
                </div>

                <div className={s.background} />
                <div className={s.cover} />
            </div>
        </div>
    );
};

export default InitialTransitionCSS;
