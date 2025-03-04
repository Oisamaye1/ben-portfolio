"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { formSchema } from "@/lib/schema";
import { send } from "@/lib/email";
import { toast } from "sonner";

export default function Email() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>,) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try{
    
    send(values)
    toast.success("Message sent")
    form.reset()

    } catch (error) {
      // Show error toast
      toast.error("Failed to send message. Please try again.")
      console.error("Error submitting form:", error)
    }
  
  // Perform your form submission logic here (e.g., API call)
  
  
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name." className="border-[#3E7B27]/60" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email." className="border-[#3E7B27]/60" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px] border-[#3E7B27]/60" placeholder="Write a message." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <Button type="submit" className="w-full bg-[#123524]">
        Send Message
      </Button>
    </form>
    </Form>
  );
}