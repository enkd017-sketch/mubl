-- Create table for event registrations
CREATE TABLE public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  current_status TEXT NOT NULL,
  university_or_workplace TEXT NOT NULL,
  questions_for_speaker TEXT,
  event_name TEXT NOT NULL DEFAULT 'Quantum ML Event',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can register for events" 
ON public.event_registrations 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading own registration (or admins later)
CREATE POLICY "Users can view registrations" 
ON public.event_registrations 
FOR SELECT 
USING (true);