# M4 Development Group Website

## Overview
A professional B2B SaaS landing page for M4 Development Group, specializing in design-build solutions for nursing and rehabilitation homes across the United States.

## Project Architecture
- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **Backend**: Express.js (minimal, serving frontend and handling contact form emails)
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Email**: Nodemailer with Gmail integration for consultation forms

## Recent Changes
- **November 17, 2025**: Made service boxes uniform height across "What We Offer" and Services pages
- **November 17, 2025**: Updated "What We Offer" section background with lobby image
- **November 17, 2025**: Changed Services page grid to 4 columns (matching home page layout)
- **November 17, 2025**: Simplified gallery modal to show only centered title below image
- **November 17, 2025**: Fixed duplicate close buttons and image sizing in gallery modal
- **November 17, 2025**: Redesigned gallery with 5-column grid layout and modal lightbox
- **November 17, 2025**: Expanded gallery from 10 to 30 images with new architectural photos
- **November 17, 2025**: Synchronized consultation forms (home modal and consultation page) with phone number field
- **July 13, 2025**: Fixed slideshow image loading issues by updating problematic image URLs
- **July 13, 2025**: Added background images to "What We Offer" section (construction/development theme)
- **July 13, 2025**: Implemented seamless slideshow transitions without black screens
- **July 13, 2025**: Implemented modal popup windows for service card details instead of inline expansion
- **July 13, 2025**: Created Projects page with portfolio of 6 sample projects
- **July 13, 2025**: Added comprehensive Consultation form with contact, project details, and preferences
- **July 13, 2025**: Connected hero buttons to navigation (Get Free Consultation → /consultation, View Projects → /projects)
- **July 13, 2025**: Updated hero background images to focus specifically on nursing and rehabilitation homes from the United States
- **July 13, 2025**: Implemented responsive navigation with dark theme
- **July 13, 2025**: Created slideshow hero section with 7-second transitions

## Current Status
- ✅ Gallery with 30 professional architectural photos
- ✅ 5-column grid gallery layout with modal lightbox
- ✅ Contact forms with email integration (sends to marv@them4group.com)
- ✅ Hero section with slideshow functionality
- ✅ Navigation between pages
- ✅ Responsive design implemented
- ✅ Unified card sizes across all service sections
- ✅ Professional background images throughout

## User Preferences
- Focus on nursing and rehabilitation homes (not hospitals or general healthcare)
- All images must be from United States locations or user's actual gallery
- Professional, modern design with dark theme
- Comprehensive end-to-end service presentation
- Use actual gallery images for backgrounds throughout site
- Service cards should maintain uniform sizes regardless of text content

## Technical Notes
- Server runs on port 5000
- Uses glass-morphic design elements
- Gallery images stored in attached_assets folder
- Email credentials stored securely in Replit Secrets (EMAIL_USER, EMAIL_PASS)
- Hero section features automatic slideshow with fade transitions
- Gallery uses shadcn Dialog component for modal image viewing
- All service sections use 4-column grid layout on large screens
