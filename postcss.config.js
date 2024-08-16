import process from "process";

export default {
  plugins: {
    "tailwindcss/nesting": {},
    "tailwindcss/postcss7-compat": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
