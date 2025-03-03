import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import * as React from "react";

export default function Email() {
  return (
    <form className="space-y-4">
      <Input placeholder="Name" className="border-[#3E7B27]/60"/>
      <Input type="email" placeholder="Email" className="border-[#3E7B27]/60"/>
      <Textarea className="min-h-[100px] border-[#3E7B27]/60" placeholder="Message"  />
      <Button type="submit" className="w-full bg-[#123524]">
        Send Message
      </Button>
    </form>
  );
}