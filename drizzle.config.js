
/** @type { import("drizzle-kit").Config } */

export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/config/schema.js",
//   out: "./drizzle",
  dbCredentials: {
    url: "postgresql://ai-video-gen_owner:Gg8KZYBiPz4p@ep-long-sea-a5e5pqdd.us-east-2.aws.neon.tech/ai-video-gen?sslmode=require",
  }
};