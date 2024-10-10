"use server";

import { runWithAmplifyServerContext } from '@/app/utils/amplifyServerUtils';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

export default async function getSessionInfo() {
    try {
      // Get the current authenticated user's session
      const session = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => fetchAuthSession(contextSpec)
      });
      return session.tokens?.idToken?.payload?.householdID || ""

    } catch (error) {
      console.error("Error fetching users:", error);
      return "";
    }
  }