-- Add email column to event_registrations
ALTER TABLE public.event_registrations 
ADD COLUMN email TEXT NOT NULL DEFAULT '';