"use client" //client-side component

import { useState } from "react"
import {Input} from "@/components/ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const LoginForm = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:' ,{email, password})

 }
 return(
    
    <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                 />
            </div>
            <div className="space-y-2">
                <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <Button type="submit" className="w-full" onClick={()=> alert("Thanks for login!")}>Login</Button>
          </form>
        </CardContent>

    </Card>
 )
}

export default LoginForm