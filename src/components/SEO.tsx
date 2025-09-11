import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEO = ({
  title = "Bihar Makhana | Premium Foxnuts Exporter | #1 Organic Lotus Seeds Supplier India",
  description = "🥇 Bihar's #1 Premium Makhana Exporter | 100% Organic Foxnuts | Bulk Orders | Export to 50+ Countries | Best Quality Lotus Seeds | Sustainable Farming | ISO Certified | Free Shipping India",
  keywords = "bihar makhana, foxnuts exporter india, organic lotus seeds, premium makhana bulk order, bihar foxnuts supplier, makhana export company, lotus seeds bihar, organic makhana, foxnuts wholesale, premium quality makhana, makhana manufacturer bihar, lotus seeds exporter, foxnuts bulk supplier, organic foxnuts bihar, makhana direct from farmers, premium lotus seeds india, bihar agricultural products, makhana export quality, foxnuts premium grade, lotus seeds organic farming",
  canonical = "https://makario.in",
  ogImage = "https://makario.in/images/bihar-makhana-og.jpg",
  ogType = "website",
  noindex = false,
  structuredData,
  breadcrumbs
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Bihar Makhana",
      "url": "https://makario.in"
    },
    "about": {
      "@type": "Organization",
      "name": "Bihar Makhana",
      "description": "Premium Makhana Exporter from Bihar, India"
    }
  };

  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bihar Makhana" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@biharmakhana" />
      
      {/* Additional SEO Meta */}
      <meta name="author" content="Bihar Makhana Export Company" />
      <meta name="publisher" content="Bihar Makhana" />
      <meta name="copyright" content="© 2025 Bihar Makhana. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Bihar, India" />
      <meta name="geo.position" content="25.0961;85.3131" />
      <meta name="ICBM" content="25.0961, 85.3131" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
