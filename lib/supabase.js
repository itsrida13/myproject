// supabase.js
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project details
const SUPABASE_URL = 'https://tcdbazxjnvpcfmhhvygu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZGJhenhqbnZwY2ZtaGh2eWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MjUxODMsImV4cCI6MjA2MzAwMTE4M30.vrEn6r_9A2iatRRpG6GB59VPWVPTlhcyTvA5L9Gw_q4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
