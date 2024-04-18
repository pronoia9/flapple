import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from '../utils';

export const navLists = [
  // { title: 'Store', link: 'https://www.apple.com/shop/goto/store' },
  { title: 'Mac', link: 'https://www.apple.com/mac' },
  { title: 'iPad', link: 'https://www.apple.com/ipad' },
  { title: 'iPhone', link: 'https://www.apple.com/iphone' },
  { title: 'Watch', link: 'https://www.apple.com/watch' },
  // { title: 'Vision', link: 'https://www.apple.com/apple-vision-pro/' },
  { title: 'AirPods', link: 'https://www.apple.com/airpods/' },
  // { title: 'TV & Home', link: 'https://www.apple.com/tv-home/' },
  // { title: 'Entertainment', link: 'https://www.apple.com/entertainment/' },
  { title: 'Accessories', link: 'https://www.apple.com/us/shop/goto/buy_accessories' },
  { title: 'Support', link: 'https://support.apple.com/?cid=gn-ols-home-hp-tab' },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ['Enter A17 Pro.', 'Game‑changing chip.', 'Groundbreaking performance.'],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['Titanium.', 'So strong. So light. So Pro.'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: ['iPhone 15 Pro Max has the', 'longest optical zoom in', 'iPhone ever. Far out.'],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['All-new Action button.', 'What will yours do?.'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro in Blue Titanium',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in White Titanium',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro in Black Titanium',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
];

export const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'];
