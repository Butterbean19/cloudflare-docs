const productIconKey = "time-services";

module.exports = {
  product: "Time Services",
  pathPrefix: "/time-services",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/time-services",
  logoSVGContent: '<svg width="48" height="49" viewBox="0 0 48 49"  xmlns="http://www.w3.org/2000/svg"><path d="M24 5.04004C20.1433 5.04004 16.3731 6.18369 13.1664 8.32638C9.95963 10.4691 7.46027 13.5146 5.98436 17.0777C4.50845 20.6409 4.12228 24.5617 4.8747 28.3443C5.62711 32.1269 7.4843 35.6015 10.2114 38.3286C12.9386 41.0557 16.4131 42.9129 20.1957 43.6654C23.9784 44.4178 27.8992 44.0316 31.4623 42.5557C35.0255 41.0798 38.071 38.5804 40.2137 35.3737C42.3564 32.1669 43.5 28.3968 43.5 24.54C43.5 19.3683 41.4456 14.4084 37.7886 10.7515C34.1316 7.0945 29.1717 5.04004 24 5.04004ZM24 41.04C20.7366 41.04 17.5465 40.0723 14.8331 38.2593C12.1197 36.4462 10.0048 33.8693 8.756 30.8543C7.50715 27.8393 7.1804 24.5217 7.81705 21.321C8.45371 18.1204 10.0252 15.1803 12.3327 12.8728C14.6403 10.5652 17.5803 8.99374 20.781 8.35708C23.9817 7.72043 27.2993 8.04718 30.3143 9.29603C33.3293 10.5449 35.9062 12.6597 37.7193 15.3731C39.5323 18.0865 40.5 21.2766 40.5 24.54C40.5 28.9161 38.7616 33.113 35.6673 36.2073C32.5729 39.3017 28.3761 41.04 24 41.04Z" /><path d="M25.5 11.715H22.5V25.62L30.6 34.0425L32.76 31.965L25.5 24.4125V11.715Z" /></svg>',
  externalLinks: [
    {
      title: "Cloudflare Time Services homepage",
      url: "https://www.cloudflare.com/time/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:time-services"]' },
  },
  siteMetadata: {
    title: "Cloudflare Time Services docs",
    description:
      "Cloudflare’s suite of time services: NTP, NTS, and Roughtime.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/time-services",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
