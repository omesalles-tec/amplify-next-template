// app/page.tsx

import { revalidatePath } from "next/cache";
import { useForm } from 'react-hook-form';
import { cookiesClient } from "@/app/utils/amplify-utils";
import { cookies } from 'next/headers';
import { fetchUserAttributes } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from '@/app/utils/amplifyServerUtils';

async function App() {
  const session = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => fetchUserAttributes(contextSpec)
  });
  const { data: users } = await cookiesClient.models.User.list({
    filter: {
      householdID: {
        eq: String(session['custom:householdID'] || ""),
      },
    },
  });

  async function adduser(data: FormData) {
    "use server";
    const username = data.get("username") as string;
    // should check if name is already taken
    await cookiesClient.models.User.create({
      email: username,
      householdID: session['custom:householdID'],
      householdName: session['custom:householdName'],
    });
    revalidatePath("/household");
  }

  return (
    <>
      <form action={adduser}>
        <input type="text" name="username" />
        <button type="submit">Add user</button>
      </form>

      <ul>
        {users && users.map((user) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </>
  );
}

export default App;
