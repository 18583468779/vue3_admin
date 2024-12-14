// src/env.d.ts
declare module '@vue/cli-service' {
  interface EnvironmentVariables {
    VUE_APP_BASE_API: string;
    // 可以添加其他环境变量
  }
}

interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  VUE_APP_BASE_API: string;
  // 同样，可以添加其他环境变量
}
