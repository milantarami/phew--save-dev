namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string;

    NEXT_PUBLIC_APP_VERSION: string;
    NEXT_PUBLIC_ZUSTAND_PERSIST_VERSION;

    APPWRITE_PROJECT_ID: string;
    APPWRITE_URL: string;

    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
  }
}
