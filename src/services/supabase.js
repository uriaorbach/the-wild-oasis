import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzkteudrzqaibpouakdw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6a3RldWRyenFhaWJwb3Vha2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDcxNjksImV4cCI6MjAyMjcyMzE2OX0.Rp89fOSPMNUM0nwQ1x2Swn0RZR32_CV5zVgNWjQCt7g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
