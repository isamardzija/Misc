import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Recipes: CollectionConfig = {
  slug: "recipes",
  admin: {
    useAsTitle: "recipes",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "instructions",
      type: "textarea",
    },
  ],
};

export default Recipes;
