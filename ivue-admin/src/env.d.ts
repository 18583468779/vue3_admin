// src/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VUE_APP_BASE_API: string;
  // 这里可以添加更多的环境变量声明
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
