"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ErrorClient() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "An error occurred";

  if (error === "AccessDenied") {
    errorMessage =
      "Access denied. You don't have permission to access this resource.";
  } else if (error === "Configuration") {
    errorMessage = "There is a problem with the server configuration.";
  } else if (error === "Verification") {
    errorMessage =
      "The verification link may have expired or has already been used.";
  } else if (error === "OAuthSignin") {
    errorMessage = "Error in the OAuth sign-in process.";
  } else if (error === "OAuthCallback") {
    errorMessage = "Error in the OAuth callback process.";
  } else if (error === "OAuthCreateAccount") {
    errorMessage = "Error creating OAuth account.";
  } else if (error === "EmailCreateAccount") {
    errorMessage = "Error creating email account.";
  } else if (error === "Callback") {
    errorMessage = "Error in the callback handler.";
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage = "This email is already associated with another account.";
  } else if (error === "EmailSignin") {
    errorMessage = "Error sending the email for sign in.";
  } else if (error === "CredentialsSignin") {
    errorMessage = "The credentials you provided were invalid.";
  } else if (error === "SessionRequired") {
    errorMessage = "You must be signed in to access this page.";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full max-w-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl p-8 shadow-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold tracking-tight text-black"
          >
            Authentication Error
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600"
          >
            {errorMessage}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button className="w-full flex justify-center items-center py-3 px-4 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/sign-in">Try Again</Link>
            </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button className="w-full flex justify-center items-center py-3 px-4 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/">Go Home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
