import { useRef } from "react";
import { SEARCH_DEBOUNCE_DELAY } from "../constants";

//reusable debounce function hook
const useDebounce = () => {
    const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    function debounce(func: Function, delay: number = SEARCH_DEBOUNCE_DELAY) {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            func();
            debounceTimeout.current = null;
        }, delay);
    }

    return debounce;
}

export default useDebounce;