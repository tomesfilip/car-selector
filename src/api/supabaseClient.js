import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_APP_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_CAR_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
