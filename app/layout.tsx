import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { companyContact, seoConfig } from '@/lib/contact';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: '%s | 中格一蓝环保',
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '中格一蓝环保',
    title: companyContact.name,
    description: '专注于污水处理药剂研发与生态环保解决方案',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization JSON-LD —— 帮助 AI 搜索引擎理解公司实体信息
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyContact.name,
    alternateName: companyContact.shortName,
    url: companyContact.website,
    logo: `${companyContact.website}/logo.png`,
    description: '专注污水处理药剂研发、IES零碳渔业技术及生态环保解决方案的国家级高新技术企业',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyContact.address.full,
      addressRegion: companyContact.address.province,
      addressCountry: 'CN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+86-${companyContact.phone.replace(/-/g, '')}`,
        contactType: 'customer service',
        availableLanguage: 'Chinese',
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased text-dark bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
