import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qhphxxvfqaizzhneaawb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFocGh4eHZmcWFpenpobmVhYXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NjY1NzAsImV4cCI6MjAyMzQ0MjU3MH0.Wd_GYFbXXwPPOxGXGLxJZbFBnxXhKBxfPDjBGPPDXQY';

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL não está definida. Por favor, configure esta variável de ambiente.');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY não está definida. Por favor, configure esta variável de ambiente.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);