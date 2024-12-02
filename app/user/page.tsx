"use client"
import LoginForm from "@/components/LoginForm"
import SignupForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function User() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center content-center bg-gray-50">
            <div className="mb-4">
                <Button className="text-sm"
                    onClick={() => setIsLogin(!isLogin)}
                    variant={"ghost"}
                >
                    {isLogin ? "Need a account: Create" : "Login with your current account"}
                </Button>

            </div>
            {isLogin ? <LoginForm/> : <SignupForm/> } 


        </div>
    )
}