import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://waaaxzxiqecibzninkxl.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYWF4enhpcWVjaWJ6bmlua3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4ODE0MjEsImV4cCI6MjA5NTQ1NzQyMX0.GSQ6pIm_3ekawKn2lkr_aZQn5i2nIPq6w8btDkEpnnw";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);