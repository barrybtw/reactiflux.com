import { auth, signOut } from "@/auth";
import { SignInWithDiscord } from "@/components/auth/signin-button";
import { SignOut } from "@/components/auth/signout-button";
import { JobForm } from "@/components/job-form";
import { Button } from "@/components/ui/button";

export default async function JobBoard() {
  const user = await auth();

  console.log(user);

  if (user) {
    return (
      <main
        className="container
    "
      >
        <div className="flex justify-between items-center py-4">
          <h1 className="font-poppins font-bold tracking-wide text-3xl text-white">
            Reactiflux Jobs
          </h1>
          <SignOut />
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <aside className="">
            <JobForm></JobForm>
          </aside>
          <div className="flex-1 bg-black">stuf</div>
        </div>
      </main>
    );
  }

  return (
    <main className="container text-white">
      <h1 className="font-poppins font-bold tracking-wide text-3xl text-white pb-8">
        Reactiflux Jobs
      </h1>
      Sign in with Discord to continue
      <SignInWithDiscord />
    </main>
  );
}
