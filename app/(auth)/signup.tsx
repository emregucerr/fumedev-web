import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const supabase = createClient('https://ftjimequrvncmgwbzcsh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0amltZXF1cnZuY21nd2J6Y3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3Nzc5NjYsImV4cCI6MjAxOTM1Mzk2Nn0.qOQYWOM9wLrFtQYDVWAf59P3_1zkbmw-FeGrDL_U-kw')

const App = () => <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
