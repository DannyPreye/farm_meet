/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "media.istockphoto.com",
            "dummyimage.com",
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "external-content.duckduckgo.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
