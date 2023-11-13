import appConfig from "./app.config";

const appwriteConfig = {
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
    successCallback: `${appConfig.baseUrl}/dashboard`,
    failureCallback: `${appConfig.baseUrl}/failure`,
  },
};

export default appwriteConfig;
