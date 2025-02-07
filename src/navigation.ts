import { getPermalink } from './utils/permalinks';

//project current&planning>>main page; history-whatwedo
//campaign curren>>main page&donation(history/current/planning)

export const headerData = {
  links: [
    
  ],                       //Shop 
  actions: [{ text: 'Dona', href: 'https://donorbox.org/omnesgentesproject', target: '_blank',  }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCZi70I4cl1Dp1KXFEVmbIQA' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/omnes_gentes_project/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/OmnesGentesProject1/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@omnesgentesproject.com' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },  NOTE: need import getAsset
    // { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://chat.whatsapp.com/CG4xxpAh8Y7FhAj2kOuNiK' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://res.cloudinary.com/dqk5ejjai/image/upload/v1736551564/ChurchMilitiaICON_xswmw2.jpg" loading="lazy"></img>
    by <a class="text-blue-600 underline dark:text-muted" href="#">Militia+Ecclesiae</a> · All rights reserved.
  `,
};

//   text: 'Blog List',
//   href: getBlogPermalink(),
//   text: 'Article',
//   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//   text: 'Category Page',
//   href: getPermalink('tutorials', 'category'),
//   text: 'Tag Page',
//   href: getPermalink('astro', 'tag'),
// links: [
//   {
//     title: 'Company',
//     links: [
//       { text: 'About', href: '#' },
//       { text: 'Blog', href: '#' },
//       { text: 'Careers', href: '#' },
//       { text: 'Press', href: '#' },
//       { text: 'Inclusion', href: '#' },
//       { text: 'Social Impact', href: '#' },
//       { text: 'Shop', href: '#' },
//     ],
//   },
// ],