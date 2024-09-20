import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
        sites: [
      
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Kyouma960"
      },
      
      
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:gautamnitesh960@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "arxiv",
        title: "arXiv",
        img: "img/sites/arxiv.png",
        link: "https://arxiv.org/"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "art-station",
        title: "ArtStation",
        img: "img/sites/artstation.svg",
        link: "https://www.artstation.com//"
      },
    
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
     
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
      
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
