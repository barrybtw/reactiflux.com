import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignInWithDiscord() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <Button type="submit" className="flex items-center" variant={"secondary"}>
        <img src="/discord.svg" alt="discord logo" className="h-6 w-6 mr-2" />
        <span>Continue with Discord</span>
      </Button>
    </form>
  );
}
