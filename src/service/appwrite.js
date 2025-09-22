import { Client, Account, ID } from "appwrite";
import { appwriteVar } from "./config";

const client = new Client();

client
  .setEndpoint(appwriteVar.APPWRITE_ENDPOINT)
  .setProject(appwriteVar.APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const appwriteSignup = async ({ name, email, password }) => {
  try {
    const promise = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    return promise;
  } catch (error) {
    console.error("Signup Error ::", error);
    throw error;
  }
};

export const appwriteSignin = async ({ email, password }) => {
  try {
    const session = await account.createEmailPasswordSession({
      email,
      password,
    });
    const user = await account.get();
    return { session, user };
  } catch (error) {
    console.error("Signin Error ::", error);
    throw error;
  }
};

export const appwriteLogout = async () => {
  try {
    await account.deleteSession({ sessionId: "current" });
  } catch (error) {
    console.error("Logout Error ::", error);
  }
};

export const appwriteGetUser = async () => {
  try {
    const result = await account.get();
    return result;
  } catch (error) {
    console.error("Account Detail ::", error);
    throw error;
  }
};

export const appwriteCreateVerification = async ({ url }) => {
  try {
    await account.createVerification({ url });
  } catch (error) {
    console.error("Create Verification Error ::", error);
  }
};

export const appwriteUpdateVerification = async ({ userId, secret }) => {
  try {
    const promise = await account.updateVerification({
      userId,
      secret,
    });
    return promise;
  } catch (error) {
    console.error("Update Verification Error ::", error);
  }
};
