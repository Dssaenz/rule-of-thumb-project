import { DataProps } from './src/types/app';

export const data: DataProps[] = [
  {
    id: '1',
    name: 'Kanye West',
    isVoting: false,
    likeActive: false,
    dislikeActive: false,
    description:
      'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
    category: 'entertainment',
    picture: 'https://elexpress.com.mx/wp-content/uploads/2022/03/Kanye-West.png',
    lastUpdated: '2020-03-10T23:08:57.892Z',
    votes: {
      positive: 23,
      negative: 36,
    },
  },
  {
    id: '2',
    name: 'Mark Zuckerberg',
    isVoting: true,
    likeActive: false,
    dislikeActive: false,
    description:
      'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
    category: 'business',
    picture: './src/assets/img/mark.jpeg',
    lastUpdated: '2021-02-14T23:10:19.134Z',
    votes: {
      positive: 418,
      negative: 324,
    },
  },
  {
    id: '3',
    name: 'Cristina Fernández de Kirchner',
    isVoting: false,
    likeActive: false,
    dislikeActive: false,
    description:
      'Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.',
    category: 'politics',
    picture: './src/assets/img/cristina.jpeg',
    lastUpdated: '2020-12-10T23:41:07.120Z',
    votes: {
      positive: 45,
      negative: 97,
    },
  },
  {
    id: '4',
    name: 'Malala Yousafzai',
    isVoting: false,
    likeActive: false,
    dislikeActive: false,
    description:
      'The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.',
    category: 'politics',
    picture: './src/assets/img/malala.jpeg',
    lastUpdated: '2020-12-10T23:41:07.120Z',
    votes: {
      positive: 18,
      negative: 3,
    },
  },
  {
    id: '5',
    name: 'Elon Musk',
    isVoting: true,
    likeActive: false,
    dislikeActive: false,
    description:
      'In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.',
    category: 'business',
    picture: './src/assets/img/elon.jpeg',
    lastUpdated: '2020-12-20T23:43:38.041Z',
    votes: {
      positive: 1237,
      negative: 894,
    },
  },
  {
    id: '6',
    name: 'Greta Thumberg',
    isVoting: false,
    likeActive: false,
    dislikeActive: false,
    description:
      'Thunbergs activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.',
    category: 'environment',
    picture: './src/assets/img/greta.jpeg',
    lastUpdated: '2021-02-26T23:44:50.326Z',
    votes: {
      positive: 118,
      negative: 45,
    },
  },
];
