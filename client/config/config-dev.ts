const dev = process.env.NODE_ENV !== "production";

export const API_URL = dev
  ? "http://localhost:5500" 
  : "https://example.com/api";