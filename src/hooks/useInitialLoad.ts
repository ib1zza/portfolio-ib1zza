import { useEffect, useState } from "react";
import { disableScroll, enableScroll } from "../helpers/scroll";
import { useAnimationStore } from "../store/store";

const minDelayTime = 3000;

export const useInitialLoad = () => {
    const [isReady, setIsReady] = useState(false);
    const { endTransition } = useAnimationStore();

    useEffect(() => {
        disableScroll();
        document.body.classList.add("overflow-hidden");

        const minDelay = new Promise((res) => setTimeout(res, minDelayTime));
        const preloadComponents = Promise.all([
            import("../pages/HomePage"),
            import("../pages/ProjectsPage/ProjectsPage"),
            import("../pages/ProjectInfoPage/ProjectInfoPage"),
            import("../pages/NotFoundPage/NotFoundPage"),
        ]);

        Promise.all([minDelay, preloadComponents]).then(() => {
            enableScroll();
            setIsReady(true);

            setTimeout(() => {
                endTransition();
            })

            document.body.classList.remove("overflow-hidden");
        });

        return () => {
            enableScroll();
            document.body.classList.remove("overflow-hidden");
        };
    }, [endTransition]);

    return isReady;
};
