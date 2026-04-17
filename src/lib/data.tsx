import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import SiteNativeLogo from '/public/images/logos/siteNative-logo.webp';
import SpeectoLogo from '/public/images/logos/speectoLogo.png';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import DGSolLogo from '/public/images/logos/dgSol.webp';
import AdrightLogo from '/public/images/logos/adrightly.webp';
import GamicaCloudeLogo from '/public/images/logos/gamicaCloud.jpeg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectBaseNest from '/public/images/basenest.png';
import ProjectOneGreenFilter from '/public/images/onegreenfilter.png';
import ProjectShopilam from '/public/images/shopilam.png';
import ProjectIgnite from '/public/images/ignite.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  LINKEDIN_URL: 'https://www.linkedin.com/in/zaghumabbas',
  GITHUB: 'https://github.com/zaghum-abbas',
  GITHUB_REPO: 'https://github.com/zaghum-abbas/zaghum-dev',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/zaghum-abbas',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/zaghumabbas',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: SiteNativeLogo,
    logoAlt: 'SiteNative logo',
    position: 'Full Stack Engineer / Team Lead',
    startDate: new Date(2025, 10),
    currentlyWorkHere: true,
    summary: [
      'Currently working with SiteNative on building and shipping full-stack features using React and Node.js, contributing directly to a live production codebase that real users depend on every day. Beyond writing code, I actively participate in API architecture decisions and frontend performance improvements, ensuring the product scales cleanly as the user base grows. Collaborating closely with cross-functional product and design teams, bringing both technical depth and clear communication to every sprint making sure nothing gets lost between design intent and final implementation.',
    ],
  },
  {
    logo: SpeectoLogo,
    darkModeLogo: SpeectoLogo,
    logoAlt: 'Greenapex logo',
    position: 'Software Engineer',
    startDate: new Date(2024, 6),
    endDate: new Date(2025, 9),
    summary: [
      'At Speecto, a UK-based SaaS company based in London, I built production-grade MERN stack features that powered the core product. I designed and maintained REST APIs using Node.js, seamlessly integrating them with React frontends to deliver smooth, reliable user experiences. Working asynchronously with the London-based team, I consistently maintained high delivery standards meeting deadlines, communicating proactively, and ensuring code quality throughout every sprint.'
    ],
  },
    {
      logo: DGSolLogo,
      darkModeLogo: DGSolLogo,
      logoAlt: 'DGSol logo',
      position: 'MERN Developer',
      startDate: new Date(2023, 6),
      endDate: new Date(2024, 5),
      summary: [`At DGSOL, a digital marketing agency, I delivered full-stack features across multiple client projects spanning various industries. I built React frontends and Node.js APIs tailored to each platform's unique requirements, working closely with designers and project managers to ensure every product shipped with responsive, pixel-perfect interfaces that matched the original vision down to the last detail.`],
    },
    {
      logo: AdrightLogo,
      darkModeLogo: AdrightLogo,
      logoAlt: 'Adrightly logo',
      position: 'Junior Developer',
      startDate: new Date(2021, 8),
      endDate: new Date(2023, 6),
      summary: ['As a junior developer, I actively engaged in learning and applying the latest web development practices, honing my skills in JavaScript, React, and Node.js. I also contributed to the continuous improvement of existing projects and participated in the development of new features and functionalities.',
        'I served as a React Developer,In this role I got to grips with creating user-friendly interfaces using React.js, learning the art of crafting interactive web elements and responsive designs.'
      ],
    },
    {
      logo: GamicaCloudeLogo,
      darkModeLogo: GamicaCloudeLogo,
      logoAlt: 'Gamica Cloud logo',
      position: 'Frontend Developer',
      startDate: new Date(2021, 2),
      endDate: new Date(2021, 6),
      summary: ['I worked as a dedicated Frontend Developer at Gamica Cloud from March 2021 to August 2021. In this role, I was responsible for crafting the user interface and ensuring a seamless user experience on our web applications. I collaborated closely with our design and backend teams to bring web designs to life, leveraging a wide range of programming languages, libraries, and frameworks to create visually appealing, responsive, and user-friendly web pages.'],
    },
];

export const PROJECTS: ProjectDetails[] = [
  // {
  //   name: 'Onegreen filter',
  //   description:
  //     'A clean and simple website for One Green Filter, built to showcase their mission of providing safe, healthy water for everyday life. The site focuses on clearly explaining their services and making it easy for people to understand how they can improve their water quality.',
  //   url: 'https://www.onegreenfilter.com',
  //   previewImage: ProjectOneGreenFilter,
  //   technologies: [
  //     'Next.js',
  //     'Typescript',
  //     'Sched cn',
  //     'Tailwindcss',
  //     'Express.js',
  //     'MongoDB',
  //     'Node.js',
  //     'Strapi',
  //   ],
  // },
  // {
  //   name: 'Base Nest',
  //   description:
  //     'A modern platform designed to simplify short-term housing for military personnel and government professionals. BaseNest makes it easier to find verified rentals, manage stays, and handle payments securely helping users focus less on logistics and more on their transition.',
  //   url: 'https://basenest.com',
  //   previewImage: ProjectBaseNest,
  //   technologies: [
  //     'Next.js',
  //     'Typescript',
  //     'Tailwindcss',
  //     'Redux Toolkit',
  //     'React Query',
  //     'Express.js',
  //     'NeonDB',
  //     'Node.js',
  //     'Strapi',
  //   ],
  // },
  {
    name: 'Shopilam',
    description:
      'A smart eCommerce platform designed to make selling easier for everyone, especially beginners. Shopilam brings everything inventory, orders, and fulfillment—into one place, and also allows users to resell products, making it simple to start and grow an online business without dealing with complex setup.',
    url: 'https://shopilam.com',
    previewImage: ProjectShopilam,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'MongoDB',
      'Python',
    ],
  },
  {
    name: 'Ignite',
    description:
      'A growth-focused platform designed to help online business owners build a clear and effective marketing system. Ignite guides users through creating their messaging, funnels, and content strategy while providing support and ready-to-use resources to make scaling their business feel more structured and less overwhelming.',
    url: 'https://ignitebyembodied.com',
    previewImage: ProjectIgnite,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'PostgreSQL',
      'Express.js',
      'Node.js',
      'Strapi',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
