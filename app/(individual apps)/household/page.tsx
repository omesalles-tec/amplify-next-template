// app/page.tsx

import { revalidatePath } from "next/cache";

import { AuthGetCurrentUserServer, cookiesClient } from "@/app/utils/amplify-utils";

import Logout from "@/app/components/Logout";

async function App() {
  const user = await AuthGetCurrentUserServer();
  const { data: users } = await cookiesClient.models.User.list();

  async function adduser(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.User.create({
      email: title,
    });
    revalidatePath("/");
  }

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      {user && <Logout />}
      <form action={adduser}>
        <input type="text" name="title" />
        <button type="submit">Add user</button>
      </form>

      <ul>
        {users && users.map((user) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </>
  );
}

export default App;