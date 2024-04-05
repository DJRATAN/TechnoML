import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})
export default function Home() {

  return (
    <div className="h-full">
      <nav className=" w-full h-16 flex justify-evenly text-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-pink-600 to-red-950">
        <img src="/logo.png" alt="" />
        <ul className="flex mx-4">
          <li>Home</li>
          <li>Contact</li>
          <li>Project</li>
          <li>About us</li>
        </ul>
        <div>
          <LoginButton>
            <Button className="mx-2" variant={"secondary"}>Sign in</Button>
          </LoginButton>
          <LoginButton>
            <Button className="mx-2" variant={"outline"}>Sign up</Button>
          </LoginButton>
        </div>

      </nav>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-600 to-blue-950">
        <div className="space-y-6 text-center">
          <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>TechnoML</h1>
          <p className="text-white text-lg">Service Provided</p>
        </div>
      </main>
    </div>
  );
}
