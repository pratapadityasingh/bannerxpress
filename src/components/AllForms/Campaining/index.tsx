import { Button } from "@/components/Common-ui/button";
import { Input } from "@/components/Common-ui/input";
import { Label } from "@/components/Common-ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Common-ui/select";
import { Textarea } from "@/components/Common-ui/textarea";

export default function CreateCampaignPage() {
    return (
        <>
        <section className="py-[50px] md:px-0 px-5"> 
            <div className="container mx-auto ">
            <h1 className="text-3xl font-bold mb-8 text-center">Create Ad Campaign</h1>
            <form className="space-y-6 max-w-2xl mx-auto">
                <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input id="campaign-name" placeholder="Enter campaign name" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" required type="date" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" required type="date" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget">Budget ($)</Label>
                    <Input id="budget" placeholder="Enter campaign budget" required type="number" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="target-audience">Target Audience</Label>
                    <Select>
                        <SelectTrigger id="target-audience">
                            <SelectValue placeholder="Select target audience" />
                        </SelectTrigger>
                        <SelectContent position="popper" className="bg-[#18181b] text-white">
                            <SelectItem value="young-adults">Young Adults (18-35)</SelectItem>
                            <SelectItem value="families">Families</SelectItem>
                            <SelectItem value="professionals">Professionals</SelectItem>
                            <SelectItem value="seniors">Seniors</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="campaign-goals">Campaign Goals</Label>
                    <Textarea id="campaign-goals" placeholder="Describe your campaign goals" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="ad-design">Upload Ad Design</Label>
                    <Input accept="image/*" id="ad-design" required type="file" />
                </div>
                <Button className="w-full bg-[#18181b] text-[#fff] " type="submit" size="lg">Create Campaign</Button>
            </form>
        </div></section>
        </>
       
    )
}

