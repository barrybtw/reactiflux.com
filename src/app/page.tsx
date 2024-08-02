import { auth } from "@/auth";

export default async function Home() {
  const user = await auth();

  console.log(user);

  return (
    <main className="flex flex-col items-center justify-between">
      <div>
        <h1 className="font-poppins">Welcome to Reactiflux</h1>
      </div>
    </main>
  );
}
