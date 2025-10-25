"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ✅ Validation Schema
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Le nom complet doit contenir au moins 3 caractères." }),
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", phone: "", message: "" },
  })

  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)

async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true)
  try {
    const res = await fetch("api/send-email", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(values),
    })

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    const data: { success: boolean; message?: string } = await res.json()

    if (data.success) {
      setSent(true)
      form.reset()
      alert("✅ Message envoyé avec succès !")
    } else {
      throw new Error(data.message || "Failed to send email")
    }
  } catch (error: unknown) {
    if (error instanceof Error) alert(`❌ Error: ${error.message}`)
    else alert("❌ Unknown error occurred")
  } finally {
    setIsLoading(false)
  }
}


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md border-1 rounded-md bg-black/80 border-white p-6 m-auto"
      >
        {/* Nom complet */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="exemple@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Téléphone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+212600000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez votre message ici..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Envoyer le message"}
        </Button>

        {sent && (
          <p className="text-green-400 text-center mt-2">
            ✅ Message envoyé avec succès !
          </p>
        )}
      </form>
    </Form>
  )
}
