declare module "react" {
  export const useEffect: any;
  export function useRef<T>(initialValue: T | null): { current: T | null };
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module "gsap" {
  const gsap: any;
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'react-router' {
  export const Outlet: any;
  export const Link: any;
  export const useNavigate: any;
  export const useLocation: any;
  export const useParams: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}