// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const prestationsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        period: z.string(),
        duration: z.string(),
        description: z.string(),
        price: z.string(),
        // author: z.string(),
        // image: z.object({
        //     url: z.string(),
        //     alt: z.string()
        // }),
        // tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    prestations: prestationsCollection,
};