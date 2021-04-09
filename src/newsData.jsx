const newsData = [
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Engadget",
    title: "The Morning After: The best wireless headphones you can find",
    description:
      "We're lining up the best wireless headphones we can find, and looking at Best Buy's Amazon Prime rival.",
    url:
      "https://www.engadget.com/best-wireless-anc-headphones-tma-112538648.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-04/84031a10-9855-11eb-be47-68f63e44b06b",
    publishedAt: "2021-04-08T11:25:38Z",
    content:
      "Apples Find My network, which lets you track your lost iPhone as it runs away on the taxi backseat you left it on (or just ring it from your PC when its lost behind your couch cushions), is expanding… [+4998 chars]",
  },
  {
    source: {
      id: "mashable",
      name: "Mashable",
    },
    author: "Stan Schroeder",
    title:
      "Xiaomi Mi 11 Ultra's rear display looks strangely familiar, and now we know why",
    description:
      "Imagine if Apple put an Apple Watch on the back of its iPhone?\nWell, Xiaomi did do something like that. The company's latest flagship smartphone, the Xiaomi Mi 11 Ultra, has a tiny display on the back. Now, Xiaomi CEO Lei Jun (via TechRadar) revealed that thi…",
    url: "https://mashable.com/article/xiaomi-mi-11-ultra-display/",
    urlToImage:
      "https://mondrian.mashable.com/2021%252F04%252F08%252Fbf%252Fda79537e546a422e9804124696c9be93.5f6f7.png%252F1200x630.png?signature=IlZBHwlTVwN8HDz_0HknHrQx7SM=",
    publishedAt: "2021-04-08T07:47:59Z",
    content:
      "Imagine if Apple put an Apple Watch on the back of its iPhone?\r\nWell, Xiaomi did do something like that. The company's latest flagship smartphone, the Xiaomi Mi 11 Ultra, has a tiny display on the ba… [+1269 chars]",
  },
  {
    source: {
      id: "mashable",
      name: "Mashable",
    },
    author: "Amanda Yeo",
    title:
      "Tech retailer Newegg finally scraps 15-year ban on the name 'Mohammad'",
    description:
      'Newegg users can now give their name as "Mohammad" when leaving reviews, because apparently they couldn\'t do that before. \nThe online tech retailer is revising its language filter after it was called out for banning one of the most popular names in the world …',
    url: "https://mashable.com/article/newegg-mohammad-language-filter/",
    urlToImage:
      "https://mondrian.mashable.com/2021%252F04%252F08%252F4d%252F704a5c2c893545408a0b0c0ae670e661.0c4e0.jpg%252F1200x630.jpg?signature=BmKZkXjbdoQXcWtxrF07w4A-8uA=",
    publishedAt: "2021-04-08T04:36:51Z",
    content:
      'Newegg users can now give their name as "Mohammad" when leaving reviews, because apparently they couldn\'t do that before. \r\nThe online tech retailer is revising its language filter after it was calle… [+4378 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Beijing now has more billionaires than any city",
    description:
      "The city has overtaken New York as it bounced back quickly from the pandemic, according to Forbes.",
    url: "https://www.bbc.co.uk/news/business-56671638",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15E57/production/_117878698_gettyimages-953919536.jpg",
    publishedAt: "2021-04-08T02:48:51Z",
    content:
      "image copyrightGetty Images\r\nimage captionBeijing added 33 billionaires last year, according to Forbes\r\nBeijing is now home to more billionaires than any other city in the world, according to the lat… [+2060 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title:
      "MacBook, iPad production delayed as supply crunch hits Apple - Nikkei - Reuters",
    description:
      "Production of some Apple Inc's MacBooks and iPads has been postponed due to a global component shortage, the Nikkei reported on Thursday.",
    url: "https://www.reuters.com/article/us-chip-shortage-apple-idUSKBN2BV0V8",
    urlToImage:
      "https://static.reuters.com/resources/r/?m=02&d=20210408&t=2&i=1557684267&r=LYNXMPEH370E5&w=800",
    publishedAt: "2021-04-08T07:16:00Z",
    content:
      "By Reuters Staff\r\nFILE PHOTO: Apple company logos are seen as two MacBooks stand next to each other in an office in Vienna, Austria January 3, 2019. REUTERS/Leonhard Foeger\r\n(Reuters) - Production of… [+419 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Stephen Nellis",
    title:
      "Apple to argue it faces competition in video game market in Epic lawsuit - Reuters UK",
    description:
      'Apple Inc said it plans to argue that it faces abundant competition in the market for video game transactions to defend itself against antitrust allegations by "Fortnite" maker Epic Games, the iPhone maker said on Thursday.',
    url: "https://www.reuters.com/article/us-apple-epic-games-idUSKBN2BV0TH",
    urlToImage:
      "https://static.reuters.com/resources/r/?m=02&d=20210408&t=2&i=1557682847&r=LYNXMPEH370D5&w=800",
    publishedAt: "2021-04-08T07:03:00Z",
    content:
      "(Reuters) - Apple Inc said it plans to argue that it faces abundant competition in the market for video game transactions to defend itself against antitrust allegations by Fortnite maker Epic Games, … [+1819 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Shivani Kumaresan",
    title:
      "Nasdaq futures gain 1% ahead of weekly jobless claims data - Reuters",
    description:
      "Futures tracking the Nasdaq jumped about 1% on Thursday, as tech-related stocks climbed ahead of weekly jobless claims data, while reassurance that the Federal Reserve will maintain its ultra dovish stance for a longer period supported sentiment.",
    url: "https://www.reuters.com/article/us-usa-stocks-idUSKBN2BV1LI",
    urlToImage:
      "https://static.reuters.com/resources/r/?m=02&d=20210408&t=2&i=1557708900&r=LYNXMPEH370QP&w=800",
    publishedAt: "2021-04-08T11:21:00Z",
    content:
      "(Reuters) - Futures tracking the Nasdaq jumped about 1% on Thursday, as tech-related stocks climbed ahead of weekly jobless claims data, while reassurance that the Federal Reserve will maintain its u… [+1688 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Douglas Busvine",
    title:
      "Europe should invest in chip design, not a mega-fab: think tank - Reuters",
    description:
      "Europe's ambition to make the most powerful computer chips risks wasting billions of euros, a German think tank said in a report on Thursday, urging policy makers to focus instead on rebuilding the region's chip design industry.",
    url:
      "https://www.reuters.com/article/us-semiconductors-europe-idUSKBN2BV1K2",
    urlToImage:
      "https://static.reuters.com/resources/r/?m=02&d=20210408&t=2&i=1557708370&r=LYNXMPEH370PE&w=800",
    publishedAt: "2021-04-08T11:09:00Z",
    content:
      "BERLIN (Reuters) - Europes ambition to make the most powerful computer chips risks wasting billions of euros, a German think tank said in a report on Thursday, urging policy makers to focus instead o… [+2598 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Central",
    },
    author: "Adam Oram",
    title:
      "Granada vs Man United live stream: How to watch UEFA Europa League football",
    description:
      "The UEFA Europa League returns today as La Liga's Granada CF host Premier League giants Manchester United in this quarter-final clash. Don't miss a moment with our Granada vs Man United live stream guide.\n\n\n\nThis is Granada's first European campaign in their …",
    url:
      "https://www.androidcentral.com/granada-man-united-live-stream-europa-league",
    urlToImage:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/04/granada-manchester-united.jpg",
    publishedAt: "2021-04-08T10:00:02Z",
    content:
      "The UEFA Europa League returns today as La Liga's Granada CF host Premier League giants Manchester United in this quarter-final clash. Don't miss a moment with our Granada vs Man United live stream g… [+6389 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Tim Hardwick",
    title:
      "Work Continues on Apple's Second Berlin Store in Eastern Part of German Capital",
    description:
      "While the German cities of Cologne, Hamburg, Munich, and Frankfurt have more than one Apple Store, the capital Berlin has only one – Apple Kurfürstendamm, which opened in 2013. However, that looks set to change soon.Render of 43-45 Rosenthaler Straße by p…",
    url:
      "https://www.macrumors.com/2021/04/08/work-continues-apple-second-berlin-store/",
    urlToImage:
      "https://images.macrumors.com/t/BMKmrUaZv8EYTzyWyiAU8WCNBHw=/2000x/https://images.macrumors.com/article-new/2021/04/eingeruestet-apple-berlin-store-rosenthaler.jpg",
    publishedAt: "2021-04-08T10:27:39Z",
    content:
      "While the German cities of Cologne, Hamburg, Munich, and Frankfurt have more than one Apple Store, the capital Berlin has only one Apple Kurfürstendamm, which opened in 2013. That looks set to change… [+1323 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Sami Fathi",
    title:
      "iPad and MacBook Production Reportedly Delayed Due to Global Chip Shortage",
    description:
      "Apple is facing a global shortage of certain components for some of its MacBook Pro and iPad models, causing the Cupertino tech giant and its suppliers to postpone production of the products, according to a new report from Nikkei Asia.\n\n\n\n\n\nAccording to the r…",
    url:
      "https://www.macrumors.com/2021/04/08/ipad-macbook-production-postponed-nikkei/",
    urlToImage:
      "https://images.macrumors.com/t/9x-wt5MBlK44pdxtQjRzWk9r4Lo=/1600x/http://images.macrumors.com/article-new/2019/10/ipad-pro-and-macbook-pro.jpg",
    publishedAt: "2021-04-08T09:31:14Z",
    content:
      "Apple is facing a global shortage of certain components for some of its MacBook Pro and iPad models, causing the Cupertino tech giant and its suppliers to postpone production of the products, accordi… [+1546 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Juli Clover",
    title:
      "Epic Games Began Planning Antitrust Lawsuit Against Apple Two Years Ago With 'Project Liberty'",
    description:
      "Ahead of its upcoming bench trial against Epic Games, Apple today filed 500 pages of documents covering findings of fact and conclusions of law, which basically summarizes the information exchanged between Apple and Epic, presents the relevant facts to the ju…",
    url:
      "https://www.macrumors.com/2021/04/08/epic-games-apple-conclusions-of-law/",
    urlToImage:
      "https://images.macrumors.com/t/HCTYA4_jFFjlIKTUeFU_KUIYx24=/1600x/https://images.macrumors.com/article-new/2020/08/fortnite-apple-logo-2.5.jpg",
    publishedAt: "2021-04-08T07:01:19Z",
    content:
      "Ahead of its upcoming bench trial against Epic Games, Apple today filed 500 pages of documents covering findings of fact and conclusions of law, which basically summarizes the information exchanged b… [+5691 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Tim Hardwick",
    title:
      "Leaked Dummy Units Show iPad Mini 6 With Thick Bezels and Home Button, New iPad Pro Models",
    description:
      "Rumors suggest Apple will release refreshed versions of the iPad mini and iPad Pro models in the first half of this year, potentially as soon as this month, and a new leak today has provided us with a possible preview of what to expect in terms of the devices…",
    url:
      "https://www.macrumors.com/2021/04/08/leaked-ipad-pro-triple-cameras-ipad-mini/",
    urlToImage:
      "https://images.macrumors.com/t/AGk3vrwCKQ5t6EMuQQeqYMgSbC0=/1920x/https://images.macrumors.com/article-new/2021/04/sonny-2021-ipad-mini-pro-dummies.jpeg",
    publishedAt: "2021-04-08T09:11:33Z",
    content:
      "Rumors suggest Apple will release refreshed versions of the iPad mini and iPad Pro models in the first half of this year, potentially as soon as this month, and a new leak today has provided us with … [+3817 chars]",
  },
  {
    source: {
      id: null,
      name: "China.org.cn",
    },
    author: "张军棉",
    title:
      "Apple's Find My app to work with third-party products - China.org.cn",
    description:
      "<ol><li>Apple's Find My app to work with third-party products  China.org.cn\r\n</li><li>Serious Warning Issued For Millions Of iPad, iPhone Users  Forbes\r\n</li><li>Apple to start enforcing new app privacy notifications in coming weeks  Toronto Sun\r\n</li><li>App…",
    url: "http://www.china.org.cn/business/2021-04/08/content_77387222.html",
    urlToImage: "https://picsum.photos/500",
    publishedAt: "2021-04-08T02:09:35Z",
    content:
      "Apple company on Wednesday introduced the updated Find My app, allowing third-party products to use the finding capabilities of Apple's Find My network.\r\n\"Now we're bringing the powerful finding capa… [+557 chars]",
  },
  {
    source: {
      id: null,
      name: "Hipertextual",
    },
    author: "Nicolás Rivera",
    title:
      "Comprar un iPad o un MacBook se complica: la escasez de chips golpea a Apple",
    description:
      "Comprar un iPad o un MacBook podría complicarse en las próximas semanas. La escasez de chips que están atravesando diversos sectores también ha golpeado a Apple. Y, según recoge Nikkei, eso ha causado que la empresa norteamericana retrase parte de la producci…",
    url:
      "https://hipertextual.com/2021/04/comprar-un-ipad-se-complica-la-escasez-de-chips-golpea-a-apple",
    urlToImage:
      "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/ipad-pro-scaled.jpg?fit=2560%2C1675&ssl=1",
    publishedAt: "2021-04-08T10:40:59Z",
    content:
      "Comprar un iPad o un MacBook podría complicarse en las próximas semanas. La escasez de chips que están atravesando diversos sectores también ha golpeado a Apple. Y, según recoge Nikkei, eso ha causad… [+1933 chars]",
  },
  {
    source: {
      id: "the-next-web",
      name: "The Next Web",
    },
    author: "The Conversation",
    title:
      "Listen up: Streaming popular music playlists hurts smaller artists’ revenue",
    description:
      "When music fans listen to their favorite album, there’s a certain satisfaction derived from knowing that they paid for the music they love – they’re giving back to the artists who made it. That’s not the case on music streaming platforms, where artists aren’t…",
    url: "https://thenextweb.com/?p=1345891",
    urlToImage:
      "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F04%2FPlaylist-Spotify-music-hed-Omid-Armin.jpg&signature=249ad57b54db75d6ff1520fea352a746",
    publishedAt: "2021-04-08T06:36:54Z",
    content:
      "When music fans listen to their favorite album, theres a certain satisfaction derived from knowing that they paid for the music they love theyre giving back to the artists who made it.\r\nThats not the… [+5744 chars]",
  },
  {
    source: {
      id: null,
      name: "Fast Company",
    },
    author: "KC Ifeanyi",
    title: "How social media star Zach King builds creative momentum",
    description:
      "The internet’s favorite “magician” explains how he stopped holding himself back and found a rhythm to his creativity.\nListen to the latest episode of Fast Company’s Creative Conversation podcast on Apple Podcasts, Spotify, RadioPublic, Google Podcasts, or Sti…",
    url:
      "https://www.fastcompany.com/90620480/how-social-media-star-zach-king-builds-creative-momentum?partner=feedburner&utm_source=feedburner&utm_medium=feed&utm_campaign=feedburner+fastcompany&utm_content=feedburner",
    urlToImage:
      "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2021/04/p-1-creative-conversation-podcast-Zach-King.jpg",
    publishedAt: "2021-04-08T07:00:11Z",
    content:
      "Listen to the latest episode of Fast Company’s Creative Conversation podcast on Apple Podcasts, Spotify, RadioPublic, Google Podcasts, or Stitcher.\r\nOne of the long-standing tenets for social media c… [+4237 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "HYUNG-JIN KIM",
    title: "South Korea's opposition party wins 2 key local elections",
    description:
      "South Korea’s conservative opposition party has won sweeping victories in mayoral by-elections in the country’s two biggest cities, votes seen as a test of...",
    url:
      "https://news.yahoo.com/south-koreas-opposition-party-wins-062629671.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/LtP7SRiazzYpooXt5ylNgw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xNDI5/https://s.yimg.com/uu/api/res/1.2/MwLToFNJdmYvpSdqhh3Xkg--~B/aD0yNTAxO3c9MzUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/cd291dbe524f66fca3de07631025aa31",
    publishedAt: "2021-04-08T06:26:29Z",
    content:
      "President Joe Biden has just four days left to save SK Innovations electric vehicle battery plant in Georgia, which is set to create more than 2,600 local jobs if it is not shut down by a U.S. Intern… [+6073 chars]",
  },
  {
    source: {
      id: null,
      name: "Freakonomics.com",
    },
    author: "Stephen J. Dubner",
    title: "Is Dialysis a Test Case of Medicare for All? (Ep. 457)",
    description:
      "Kidney failure is such a catastrophic (and expensive) disease that Medicare covers treatment for anyone, regardless of age. Since Medicare reimbursement rates are fairly low, the dialysis industry had to find a way to tweak the system if they wanted to make b…",
    url: "https://freakonomics.com/podcast/dialysis/",
    urlToImage:
      "https://freakonomics.com/wp-content/uploads/2020/08/fr.fbthumbnail.png",
    publishedAt: "2021-04-08T03:00:34Z",
    content:
      "Kidney failure is such a catastrophic (and expensive) disease that Medicare covers treatment for anyone, regardless of age. Since Medicare reimbursement rates are fairly low, the dialysis industry ha… [+55041 chars]",
  },
  {
    source: {
      id: null,
      name: "Iconfactory.com",
    },
    author: "John Gruber",
    title: "Frenzic: Overtime",
    description:
      "Today we’re pleased to announce that Frenzic: Overtime is coming soon to Apple Arcade. This new game combines fast-paced and engaging play with stunning visuals and sound. It’s an arcade style puzzler that players can easily pick up and enjoy for a few minute…",
    url:
      "https://blog.iconfactory.com/2021/04/frenzic-overtime-coming-soon-to-apple-arcade/",
    urlToImage:
      "https://blog.iconfactory.com/wp-content/uploads/2021/03/Frenzic-Header-1920x720-1.png",
    publishedAt: "2021-04-08T01:01:38Z",
    content:
      "Today we’re pleased to announce that Frenzic: Overtime is coming soon to Apple Arcade. This new game combines fast-paced and engaging play with stunning visuals and sound. It’s an arcade style puzzle… [+1100 chars]",
  },
];


export default newsData;