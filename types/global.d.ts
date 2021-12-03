import type {
  ComponentRenderProxy,
  VNode,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue';

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };
  interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;

    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }

  // vue
  type PropType<T> = VuePropType<T>;

  type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = T | null;
  type NonNullable<T> = T extends null | undefined ? never : T;
  type Recordable<T = any> = Record<string, T>;
  interface ReadonlyRecordable<T = unknown> {
    readonly [key: string]: T;
  }
  interface Indexable<T = unknown> {
    [key: string]: T;
  }
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  interface WheelEvent {
    path?: EventTarget[];
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_TITLE: string;
    VITE_VERSION: string;
    VITE_USE_MOCK: boolean;
    VITE_USE_PWA: boolean;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: Array<[string, string]>;
    VITE_USE_CDN: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_LEGACY: boolean;
    VITE_USE_IMAGEMIN: boolean;
    VITE_GENERATE_UI: string;
    VITE_USER_NODE_ENV: string;
  }

  declare interface ServerConfigs {
    Version?: string;
    Title?: string;
    FixedHeader?: boolean;
    HiddenSideBar?: boolean;
    MultiTagsCache?: boolean;
    KeepAlive?: boolean;
    Locale?: string;
    Layout?: string;
    Theme?: string;
    Grey?: boolean;
    Weak?: boolean;
    HideTabs?: boolean;
    MapConfigure?: {
      amapKey?: string;
      baiduKey?: string;
      options: {
        resizeEnable?: boolean;
        center?: number[];
        zoom?: number;
      };
    };
  }

  function parseInt(s: string | number, radix?: number): number;

  function parseFloat(string: string | number): number;

  namespace JSX {
    type Element = VNode;
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: unknown;
    }
    interface IntrinsicElements {
      [elem: string]: unknown;
    }
    interface IntrinsicAttributes {
      [elem: string]: unknown;
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = unknown> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
