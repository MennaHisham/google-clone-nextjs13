/** @type {import('next').NextConfig} */
const nextConfig = {
    experimenal:{
        appDir: true
    },
    images: {
        domains:["upload.wikimedia.org"]
    },
    env: {
        NEXT_PUBLIC_GOOGLE_API_KEY:'AIzaSyBVKSEVlc97OstT7KMn8ELFE4_LMmM84fM',
        NEXT_PUBLIC_CONTEXT_KEY:'e30eca39f01794ee1'
    }
}

module.exports = nextConfig
