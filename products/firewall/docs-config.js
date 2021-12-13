const productIconKey = "firewall";

module.exports = {
  product: "Firewall",
  pathPrefix: "/firewall",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/firewall",
  logoSVGContent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd"><path d="M1.5 2l.5-.5h5.5L8 2v3l-.5.5H5.149v2.032L6.08 6.6l.566.566-1.897 1.897L2.85 7.166l.566-.566.932.932V5.5H2L1.5 5V2zM7 4.5v-2H2.5v2H7z"/><path d="M2 14h12l.5-.5v-9L14 4h-3.25l-.5.5V7H8.5l-.5.5V10H2l-.5.5v3l.5.5zm.5-3h2.25v2H2.5v-2zm3.25 2v-2h4.5v2h-4.5zm7.75-5H9v2h4.5V8zm0-1V5h-2.25v2h2.25zm-2.25 4h2.25v2h-2.25v-2z"/></g></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:firewall"]' },
  },
  siteMetadata: {
    title: "Cloudflare Firewall Rules docs",
    description:
      "Create rules that examine incoming HTTP traffic against a set of powerful filters to block, challenge, log, or allow matching requests.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/firewall",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
