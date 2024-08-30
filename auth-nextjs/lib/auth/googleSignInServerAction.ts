"use server";

import { signIn } from "@/lib/auth";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", { redirectTo: "/dashboard1" });
  } catch (error) {
    throw error;
  }
};
