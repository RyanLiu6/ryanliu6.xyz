import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
    description: z.string(),
    link: z.string(),
})

const workSchema = baseSchema.extend({
  employer: z.string(),
  position: z.string(),
  dates: z.string(),
  lastDate: z.date(),
})

const projectSchema = baseSchema.extend({
  name: z.string(),
  order: z.number(),
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
  projects: projectCollection,
  internships: workCollection,
};
