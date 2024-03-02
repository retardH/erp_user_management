import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://srxlzmjejaipcdfhlazb.supabase.co';
const supabase = createClient(supabaseUrl, process.env.SUPABASE_API_KEY!);

export default supabase;
