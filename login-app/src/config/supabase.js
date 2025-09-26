import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eimcthioeexnakbxewza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbWN0aGlvZWV4bmFrYnhld3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMzg0ODEsImV4cCI6MjA3MzkxNDQ4MX0.pu811re_U5idwwjVwehh1dh2O-oUlPpm-OPbXVXxfBs";
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})