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

// ✅ Validation Schema (بدون status)
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Le nom complet doit contenir au moins 3 caractères." }),
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide." }),
  remarque: z.string().min(3, { message: "La remarque doit contenir au moins 3 caractères." }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      remarque: "",
    },
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await res.json()

      if (!res.ok || !data.success) throw new Error(data.message || "Erreur d’envoi")

      setSuccess(true)
      form.reset()
    } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('Something went wrong')
  }
} finally {
  setLoading(false)
}
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md border rounded-md bg-black/80 border-white p-6 m-auto"
      >
        {/* Nom complet */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre nom complet" {...field} />
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

        {/* ✅ Remarque */}
        <FormField
          control={form.control}
          name="remarque"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarque</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ajoutez une remarque sur le site ou le portfolio..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bouton */}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </Button>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">✅ Envoyé avec succès !</p>}
      </form>
    </Form>
  )
}
