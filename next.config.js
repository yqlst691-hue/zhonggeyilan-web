/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，用于 GEO 优化部署
  output: 'export',

  // 图片域名白名单
  images: {
    domains: ['www.zhonggeyilan.com'],
  },

  // 禁用尾随斜杠，保持 URL 规范
  trailingSlash: false,
};

module.exports = nextConfig;
