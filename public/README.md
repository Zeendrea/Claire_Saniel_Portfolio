# Assets Folder

This folder contains static assets for your portfolio.

## Folder Structure

### `/images/`
Place your profile photo here:
- **File name**: `profile-photo.jpg` (or `.png`)
- **Recommended size**: 600x600px or larger
- **Format**: Square format works best for the circular display
- **Location**: `public/images/profile-photo.jpg`

### `/documents/`
Place your resume PDF here:
- **File name**: `SANIEL_RESUME.pdf`
- **Location**: `public/documents/SANIEL_RESUME.pdf`

## How to Add Your Files

1. **Profile Photo**:
   - Save your portrait photo
   - Place it in `public/images/`
   - Name it `profile-photo.jpg` (or update the filename in `src/components/Hero.jsx` if you use a different name)

2. **Resume**:
   - Save your resume as a PDF
   - Place it in `public/documents/`
   - Name it `SANIEL_RESUME.pdf` (or update the filename in `src/components/Hero.jsx` and `src/components/Contact.jsx` if you use a different name)

## Notes

- Files in the `public` folder are served from the root path
- The profile photo path in code: `/images/profile-photo.jpg`
- The resume path in code: `/documents/SANIEL_RESUME.pdf`
- These files will be included in the build and deployed with your portfolio


