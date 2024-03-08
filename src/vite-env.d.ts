/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CUSTOMER: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
