
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '../Common-ui/card'
import { Button } from '../Common-ui/button'

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>My Wall Listings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">You have 3 active wall listings.</p>
                        <Link href="/my-walls">
                            <Button>Manage Listings</Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>My Ad Campaigns</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">You have 2 ongoing ad campaigns.</p>
                        <Link href="/my-campaigns">
                            <Button>View Campaigns</Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">You have 5 unread messages.</p>
                        <Link href="/messages">
                            <Button>Check Messages</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

