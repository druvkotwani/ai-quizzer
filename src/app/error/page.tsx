"use client";

import { useSearchParams } from "next/navigation";
import { Waves } from "@/components/waves-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
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
    <main className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <Waves
            lineColor={"rgba(255, 255, 255, 0.3)"}
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-black">
              Authentication Error
            </h1>
            <p className="mt-4 text-lg text-gray-600">{errorMessage}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="w-full flex justify-center items-center py-3 px-4 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/sign-in">Try Again</Link>
            </Button>
            <Button className="w-full flex justify-center items-center py-3 px-4 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
