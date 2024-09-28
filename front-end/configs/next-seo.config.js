const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | Xổ số SandSGP",
  defaultTitle: "Xổ số SandSGP",
  description: "SandSGP - Hệ thống chơi xổ số trực tuyến",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "megalott, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "Keno số tự chọn SandSGP",
    description: "Keno SandSGP - Hệ thống chọn số may mắn và dễ dàng. Nhanh chóng, uy tín và rộng khắp",
    images: [
      {
        url: "https://i.imgur.com/G4mubC5.jpeg",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@SandSGP",
    site: "@SandSGP",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
