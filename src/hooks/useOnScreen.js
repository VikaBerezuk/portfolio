import {useEffect, useRef, useState} from "react";

export function useOnScreen(options) {
    const ref = useRef();//<HTMLInputElement>;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let observerRefValue = null;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if(ref.current) {
            observer.observe(ref.current);
            observerRefValue = ref.current;
        }

        return () => {
            if(observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        }
    }, [options, ref]);
    return [ref, visible];
}