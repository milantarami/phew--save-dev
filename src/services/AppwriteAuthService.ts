import { Client, Account } from "appwrite";
import AppwriteConfig from "@/config/appwite.config";
import { Appwrite } from "@/types/appwrite";

const client = new Client()
  .setEndpoint(AppwriteConfig.baseUrl)
  .setProject(AppwriteConfig.projectId);

const account = new Account(client);

export class AppwriteAuthService {
  /**
   * login with github
   */
  loginWithGithub(): void {
    account.createOAuth2Session(
      "github",
      AppwriteConfig.oauth2.successCallback,
      AppwriteConfig.oauth2.failureCallback
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

  async getSession() {
    try {
      const session = await account.getSession("current");
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
