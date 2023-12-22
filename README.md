# YouTube Clone

## Introduction
This project is part of a Full Stack Development course, aiming to create a simplified YouTube clone. The primary objective is learning and addressing scalability, rather than creating a production-ready system.

## Key Features
- **Authentication**: Google account sign-in/out.
- **Video Uploads**: Available for signed-in users.
- **Viewing**: List and individual video viewing for all users.

## Architecture
- **Storage**: Google Cloud Storage for videos.
- **Event Handling**: Cloud Pub/Sub for upload events.
- **Processing**: Cloud Run with ffmpeg for video transcoding.
- **Metadata**: Firestore for video details.
- **API**: Firebase Functions for video-related operations.
- **Client**: Next.js web client on Cloud Run.
- **Auth**: Firebase Auth for user authentication.

## Design Details
- **User Sign Up**: Firebase Auth and Firestore for additional user info.
- **Video Upload**: Secure uploads via signed URLs for authenticated users.
- **Video Processing**: Managed through Cloud Pub/Sub, scaled with Cloud Run.
