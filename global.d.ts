declare module 'aos' {
    interface AosOptions {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
    }

    function init(options?: AosOptions): void;
    function refresh(): void;
    function refreshHard(): void;

    const Aos: {
        init: typeof init;
        refresh: typeof refresh;
        refreshHard: typeof refreshHard;
    };

    export { init, refresh, refreshHard, AosOptions };
    export default Aos;
}