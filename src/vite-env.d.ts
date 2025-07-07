/// <reference types="vite/client" />

// Add module declarations for images

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.JPG' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}
