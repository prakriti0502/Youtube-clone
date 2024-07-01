//ideally you shouldn't keep the api key here. it should be in an env file while deployment
const GOOGLE_API_KEY = "AIzaSyAIigtXPvjnid7xkl1nwOPVeGVZLo-7CtU"

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}`;