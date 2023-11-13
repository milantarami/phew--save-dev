const appConfig = {
  name: "App Name",
  /**
   * App base url
   */
  baseUrl: String(process.env.NEXT_PUBLIC_APP_URL),

  version: Number(process.env.NEXT_PUBLIC_APP_VERSION ?? 0),

  zustandPersistVersion: Number(process.env.pu),

  isServer: typeof window === undefined,
};

export default appConfig;
