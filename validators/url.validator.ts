import z from "zod";

export const urlValidator = z.object(
    {
        url: z.string().trim().toLowerCase()
        .min(1, {message: "URL is required"})
        .max(2048, {message: "URL is too long"})
        .url({message: "Invalid URL"})
        .refine((url) => {
            const allowedProtocols = new URL(url).protocol;
            return allowedProtocols === "http:" || allowedProtocols === "https:";
        },{
            message: "only Http or Https URL are allowed"
        })
    }
)

export type UrlValidator = z.infer<typeof urlValidator>;