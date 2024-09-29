import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/clerk-react";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2>Welcome to ai-video-gen</h2>
    <Button>Click me</Button>
    {/* <UserProfile /> */}
   </div>
  );
}
