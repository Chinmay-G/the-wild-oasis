
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xlpuudnfkrsepegqkznm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscHV1ZG5ma3JzZXBlZ3Frem5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNjI2NjgsImV4cCI6MjA3ODgzODY2OH0.BtD7RNam4BiNQaPuf0oQSPJy9GXU_x1rbGYZ4Dl6v3A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;