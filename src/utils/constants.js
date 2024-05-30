//ideally you shouldn't keep the api key here. it should be in an env file while deployment
const GOOGLE_API_KEY = "AIzaSyAE_j2wRP0D4QI2Kblli5hn9bpXf0jVrls"

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}`;