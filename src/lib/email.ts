"use server"

import { z } from "zod"
import { formSchema } from "./schema"
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailformData: z.infer<typeof formSchema>) => {

    try{
        const { error } = await resend.emails.send({
            from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
            to: "ovibenz@gmail.com",
            subject: `Portfolio message from ${emailformData.name}`,
            react: EmailTemplate({
                name: emailformData.name,
                email: emailformData.email,
                message: emailformData.message
            }),
          });
        
          if (error) {
                throw(error)
          }
    } catch (e){
        throw(e)
    }
}

