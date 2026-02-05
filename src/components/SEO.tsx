import { Helmet } from "react-helmet-async";

export const SEO = ({ title, desc, path }) => (
  <Helmet>
    <title>{title} | InfraTech</title>
    <meta name="description" content={desc} />
    <link rel="canonical" href={`https://infratech.com${path}`} />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InfraTech",
        url: "https://infratech.com",
        serviceType: ["Software Engineering", "IT Procurement"],
      })}
    </script>
  </Helmet>
);
