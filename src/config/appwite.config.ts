import AppConfig from "./app.config";

const AppwriteConfig = {
  /**
   * Appwrite Project ID
   *
   */
  projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),

  /**
   * Appwrite base url
   *
   */
  baseUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),

  /**
   * Oauth2
   *
   */
  oauth2: {
    successCallback: `${AppConfig.baseUrl}/dashboard`,
    failureCallback: `${AppConfig.baseUrl}/failure`,
  },
};

export default AppwriteConfig;
