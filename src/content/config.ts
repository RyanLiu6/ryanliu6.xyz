import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
  description: z.string(),
  link: z.string(),
});

const workSchema = baseSchema.extend({
  employer: z.string(),
  lastDate: z.date().nullable(),
  logo: z.string().optional(),
});

const projectSchema = baseSchema.extend({
  name: z.string(),
  order: z.number(),
  languages: z.array(z.string()),
});

const workCollection = defineCollection({
  type: "content",
  schema: workSchema,
});

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  work: workCollection,
  projects: projectCollection,
  internships: workCollection,
};
