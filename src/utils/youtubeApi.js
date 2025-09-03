const GOOGLE_API_KEY = "AIzaSyDEfRMmfXq_MVFisoqMiV6vVVYPP8rnr80";

export const YT_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;