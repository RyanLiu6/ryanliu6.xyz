import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
    dates: z.string(),
    lastDate: z.date(),
    description: z.string(),
    link: z.string(),
})

const workSchema = baseSchema.extend({
  employer: z.string(),
  position: z.string(),
})

const projectSchema = baseSchema.extend({
  name: z.string(),
})

const workCollection = defineCollection({
  type: "content",
  schema: workSchema
});

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema
})

export const collections = {
  work: workCollection,
  project: projectCollection
};
