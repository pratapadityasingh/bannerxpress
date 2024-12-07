import { Button } from "@/components/Common-ui/button"
import { Input } from "@/components/Common-ui/input"
import { Label } from "@/components/Common-ui/label"
import Link from "next/link"

export default function SignUpPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" type="text" placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Create a password" required />
                    </div>
                    <div>
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                    </div>
                    <Button  type="submit"className="bg-[#18181b] text-[#fff] font-semibold w-full p-3">Sign Up</Button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    )
}

