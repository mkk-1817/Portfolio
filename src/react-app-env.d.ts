/// <reference types="react-scripts" />

declare module 'react-animate-on-scroll' {
    const ScrollAnimation: any;
    export default ScrollAnimation;
}

declare module 'react-dom/client' {
    const ReactDOM: any;
    export default ReactDOM;
    export const createRoot: any;
}
