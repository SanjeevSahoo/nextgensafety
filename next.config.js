/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        'MYSQL_HOST': '127.0.0.1',
        'MYSQL_PORT': '3306',
        'MYSQL_DATABASE': 'nextgendb',
        'MYSQL_USER': 'root',
        'MYSQL_PASSWORD': 'admin123',
    }
}

module.exports = nextConfig
