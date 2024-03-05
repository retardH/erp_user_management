import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = 'https://srxlzmjejaipcdfhlazb.supabase.co';
const supabase = createClient<Database>(
  supabaseUrl,
  process.env.SUPABASE_API_KEY!,
);

export default supabase;
