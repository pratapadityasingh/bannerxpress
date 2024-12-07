
import { Button } from "@/components/Common-ui/button"
import { Input } from "@/components/Common-ui/input"
import { Label } from "@/components/Common-ui/label"
import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter your password" required />
                    </div>
                    <Button className="bg-[#18181b] text-[#fff] font-semibold w-full p-3"type="submit">Sign In</Button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

