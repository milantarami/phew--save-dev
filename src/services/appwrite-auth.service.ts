import { Client, Account } from "appwrite";

import { Appwrite } from "@/types/appwrite";
import AppwriteConfig from "@/config/appwite.config";

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(AppwriteConfig.baseUrl)
  .setProject(AppwriteConfig.projectId);

export const account = new Account(appwriteClient);

export class AppwriteAuthService {
  /**
   * login with github
   */
  loginWithGithub(): void {
    account.createOAuth2Session(
      "github",
      AppwriteConfig.oauth2.successCallback,
      AppwriteConfig.oauth2.failureCallback,
    );
  }

  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getSession(req: any) {
    try {
      const session = await account.getSession(req);
      return session as Appwrite.Session;
    } catch (error) {
      throw error;
    }
  }

  async updateSession() {
    try {
      const session = await account.updateSession("current");
      return session as Appwrite.Session;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error: " + error);
    }
  }
}

const appwriteAuthService = new AppwriteAuthService();

export default appwriteAuthService;
