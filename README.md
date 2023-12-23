# YouTube Clone
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

## Limitations
- **Long Lived HTTP Requests**: Mismatch between Pub/Sub and Cloud Run time limits can cause message delivery issues.
- **Video Processing Failure**: Potential for messages to get stuck in the Pub/Sub queue if processing fails.
- **File Upload Time Limit**: Signed URL's 15-minute limit isn't a significant issue as uploads continue once initiated.
- **Video Streaming**: Lacks advanced streaming solutions like YouTube's DASH or Netflix's HLS.
- **Content Delivery Network**: Absence of CDN impacts latency and user experience.
- **Illegal Videos**: No mechanism to check video legality before serving, posing risks.

## Future Work
- Add user profile pictures and emails to the Web Client.
- Enable uploading multiple videos without page refresh.
- Implement video thumbnail uploads.
- Allow users to add titles and descriptions to their videos.
- Display video uploaders.
- Enable channel subscriptions for users.
- Clean up raw videos in Cloud Storage after processing.
- Use a CDN for video serving.
- Add unit and integration tests for robustness.
