const cardItems = {
  status: "ok",
  totalResults: 8677,
  articles: [
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "barrons.com",
      title:
        "Tesla Warns EV Tax Credit Reduction Is Coming. It Could Hit Ford and GM Too",
      description:
        "Tesla has a new notice on its website. The EV leader expects to lose some of the $7,500 federal subsidies in 2024. #tesla",
      url: "https://biztoc.com/x/3f65f4a4ca83fe22",
      urlToImage:
        "https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
      publishedAt: "2023-07-13T18:26:07Z",
      content:
        "Tesla has a new notice on its website. The EV leader expects to lose some of the $7,500 federal subsidies in 2024.\r\n#tesla\r\nThis story appeared on barrons.com, .",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Al Root",
      title: "Tesla Warns EV Tax Credit Reduction Is Coming",
      description:
        "Tesla has a new notice on its website. The EV leader expects to lose some of the $7,500 federal subsidies in 2024.",
      url: "https://www.barrons.com/articles/tesla-stock-price-tax-credit-ffb351ca",
      urlToImage: "https://images.barrons.com/im-582929/social",
      publishedAt: "2023-07-13T18:22:39Z",
      content:
        "Tesla\r\n is warning on its website that reductions to federal tax credits for EV purchases may be coming next year. The notice states that buyers who take delivery of a qualified new Tesla and meet al… [+2409 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Dani Di Placido, Senior Contributor, \n Dani Di Placido, Senior Contributor\n https://www.forbes.com/sites/danidiplacido/",
      title: "Elon Musk Vs. Mark Zuckerberg: The Bizarre Feud, Explained",
      description:
        "The feud between Elon Musk and Mark Zuckerberg has been brewing for years, now escalating into fighting talk and playground insults.",
      url: "https://www.forbes.com/sites/danidiplacido/2023/07/13/elon-musk-vs-mark-zuckerberg-the-bizarre-feud-explained/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/64b036fda96175d48cde7bb1/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2023-07-13T18:17:24Z",
      content:
        "Tech titans Zuckerberg and Musk are in a fierce business rivalry that has spilt over into a ... [+] playground spat, with the two men offering to fight each other in a cage. (Photo by Mandel NGAN and… [+8984 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Zac Hall",
      title:
        "Apple AirPlay found in latest version of Tesla iPhone app after Musk signaled support",
      description:
        "Apple CarPlay is probably never coming to Tesla EVs, but it looks like next best thing is on the way.\n more…\nThe post Apple AirPlay found in latest version of Tesla iPhone app after Musk signaled support appeared first on 9to5Mac.",
      url: "https://9to5mac.com/2023/07/13/tesla-airplay-audio/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/not-a-tesla-app.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-07-13T18:10:28Z",
      content:
        "Apple CarPlay is probably never coming to Tesla EVs, but it looks like next best thing is on the way.\r\nIt’s been over a year since Elon Musk said Tesla would consider adding AirPlay support to enhanc… [+1357 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Corinne Reichert",
      title:
        "Elon Musk Launches Artificial Intelligence Company xAI: What to Know - CNET",
      description:
        "The company's goal is to \"understand the true nature of the universe,\" but there's little info on what it'll actually do.",
      url: "https://www.cnet.com/tech/elon-musk-launches-artificial-intelligence-company-xai-what-to-know/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/a0d2e51b4e919ee49297946dc9fda07dac69b681/hub/2023/07/12/51a17895-547c-46ec-b4a7-39e3c78bd937/elon-musk-gettyimages-1258889149.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-07-13T18:09:00Z",
      content:
        "Twitter owner and Tesla CEO Elon Musk has announced a new artificial intelligence company, xAI. The launch comes after Musk earlier this year filed to incorporate an AI company amid reports he's plan… [+2022 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Ramish Cheema",
      title:
        "Billionaire David Tepper’s Investment Strategy and 10 Favorite Stocks",
      description:
        "In this piece, we will take a look at billionaire David Tepper’s investment strategy and ten favorite stocks. If you want to skip our introduction of the...",
      url: "https://finance.yahoo.com/news/billionaire-david-tepper-investment-strategy-180653426.html",
      urlToImage:
        "https://media.zenfs.com/en/insidermonkey.com/aa3aa5fece6f518c0559ae92e65a79fd",
      publishedAt: "2023-07-13T18:06:53Z",
      content:
        "In this piece, we will take a look at billionaire David Tepper's investment strategy and ten favorite stocks. If you want to skip our introduction of the billionaire investor and a background of what… [+10554 chars]",
    },
  ],
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sebtember",
  "October",
  "November",
  "December",
];

const handleDateFormat = (unformattedDate) => {
  const dia = unformattedDate.slice(8, 10);
  const mes = unformattedDate.slice(5, 7);
  const ano = unformattedDate.slice(0, 4);

  const handleFindMonth = (monthNumber) => {
    return months[monthNumber - 1];
  };

  return `${handleFindMonth(mes)} ${dia}, ${ano}`;
};

module.exports = {
  cardItems,
  handleDateFormat,
};
