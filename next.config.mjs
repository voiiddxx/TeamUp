/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'img.clerk.com' , 'static.vecteezy.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
            {
                protocol:'https',
                hostname:'static.vecteezy.com'
            },
        ]
    }
};

export default nextConfig;
