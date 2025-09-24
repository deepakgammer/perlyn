// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://zxaldjikakpyawfsield.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YWxkamlrYWtweWF3ZnNpZWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTE3NzAsImV4cCI6MjA3NDI4Nzc3MH0.P_ESy68MkP9DL3EOrwhgxfqUcrDa3R1LXyKAj_eJx-I";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
