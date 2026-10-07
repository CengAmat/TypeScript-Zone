declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_API_KEY?: string;
  }
}

declare const process: {
  env: {
    GOOGLE_API_KEY?: string;
  };
};
