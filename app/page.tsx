import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})
export default function Home() {

  return (
    <div className="h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-100  to-blue-400">
      <nav className=" w-full h-20 flex items-center justify-evenly">
        <img src="/logo.png" alt="" className="h-24 pt-2 w-24 mix-blend-multiply" />
        <ul className="flex px-4 hidden ">
          <li>Home</li>
          <li>Contact</li>
          <li>Project</li>
          <li>About us</li>
        </ul>
        <div>
          <LoginButton>
            <Button className="mx-2" variant={"secondary"}>Sign in</Button>
          </LoginButton>
          <RegisterButton>
            <Button className="mx-2" variant={"outline"}>Sign up</Button>
          </RegisterButton>
        </div>

      </nav>
      <main className="flex h-full flex-col items-center justify-center ">
        <div className="space-y-6 text-center">
          <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>Techno<strong>ML</strong></h1>
          <p className="text-white text-lg">Web Service Providing</p>
        </div>
      </main>
    </div>
  );
}
