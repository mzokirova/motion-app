"use client"

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";

import { useScrollTop } from "@/hooks/use-scroll-top"
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar=()=>{
    const {isAuthenticated,isLoading}=useConvexAuth();
    const scrolled=useScrollTop();
return(

    <div className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex item-center w-full p-6",
        scrolled && "border-b shadow-sm"
    )}>
        <Logo/>
        <div className="md:ml-auto md:justify-end
        justify-between w-full flex items-center gap-x-2">
            {isLoading && (
              <Spinner/>
            )}
            {!isAuthenticated && !isLoading && (
                <>
                <SignInButton mode="modal">
                    <Button variant={"ghost"} size={"sm"}>
                        Login
                    </Button>
                </SignInButton>

                <SignInButton mode="modal">
                    <Button  size={"sm"}>
                      Get Motion Free
                    </Button>
                </SignInButton>
                </>
            )}
            {isAuthenticated && !isLoading && (
                <>
                <Button size={"sm"} variant={"ghost"} asChild>
                    <Link href="/documents">
                    Enter Motion
                    </Link>
                </Button>
                <UserButton afterSwitchSessionUrl="/login"/>
                </>
            )}
            <ModeToggle/>
        </div>
    </div>
)

}