const AppConfig = {
  /**
   * App base url
   */
  baseUrl: String(process.env.NEXT_PUBLIC_APP_URL),

  version: Number(process.env.NEXT_PUBLIC_APP_VERSION ?? 0),
};

export default AppConfig;
