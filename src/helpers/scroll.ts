const keys: Record<number, number> = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e: any) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e: any) {
    if (keys[e.keyCode as number]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event


// call this to Disable
export function disableScroll() {
    let supportsPassive = false;
    try {
        // @ts-ignore
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? {passive: false} : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll() {
    let supportsPassive = false;
    try {
        // @ts-ignore
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? {passive: false} : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    // @ts-ignore
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    // @ts-ignore
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
