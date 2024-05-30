/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'img.clerk.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
        ]
    }
};

export default nextConfig;
