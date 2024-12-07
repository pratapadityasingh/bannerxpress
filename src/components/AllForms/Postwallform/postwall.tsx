import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Textarea } from "@/components/Common-ui/textarea";



export default function PostWallPage() {
    return (
        <>
        <section className="py-[50px] md:px-0 px-5">
        <div className="container mx-auto ">
            <h1 className="text-3xl font-bold mb-8 text-center">List Your Wall</h1>
            <form className="space-y-6 max-w-xl mx-auto">
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter the wall's location" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="size">Size (in feet)</Label>
                    <div className="flex gap-4">
                        <Input id="width" placeholder="Width" required type="number" />
                        <Input id="height" placeholder="Height" required type="number" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="rate">Daily Rate ($)</Label>
                    <Input id="rate" placeholder="Enter daily rate" required type="number" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="availability">Available From</Label>
                    <Input id="availability" required type="date" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="min-booking">Minimum Booking (days)</Label>
                    <Input id="min-booking" placeholder="Enter minimum booking period" required type="number" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Describe your wall space" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="images">Upload Images</Label>
                    <Input accept="image/*" id="images" multiple required type="file" />
                </div>
                <Button className="w-full border rounded-lg py-[10px] bg-[#18181b] text-[#fff] " type="submit">Submit Listing</Button>
            </form>
        </div>
        </section>
        </>
      
    )
}

