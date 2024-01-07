import { create } from 'zustand';

export const useStore = create((set) => ({
  myUser: {
    id: 1,
    username: 'FanOfClaudeMonet',
    passwordOne: 'asdasd1',
  },
  users: [
    {
      id: 1,
      username: 'FanOfClaudeMonet',
      passwordOne: 'asdasd1',
    },
    {
      id: 2,
      username: 'VincentWhoGogh',
      passwordOne: 'qweqwe1',
    },
    {
      id: 3,
      username: 'WhoReallyKnewPaulCezanne',
      passwordOne: 'zxczxc1',
    },
  ],
  register: (user) => set((state) => ({ users: [...state.users, user] })),
  saveUpdatedUsers: (user) => set((state) => ({ users: [...user] })),

  setMyUser: (user) => set((state) => ({ myUser: user })),

  posts: [
    {
      id: 6,
      userId: 1,
      img: 'https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg',
      title: 'Water Lilies. 1906',
      username: 'FanOfClaudeMonet',
      date: new Date(2024, 1, 6, 20, 41, 59).toString(),
    },
    {
      id: 2,
      userId: 1,
      img: 'https://www.artic.edu/iiif/2/66f95ea3-a11a-1cf4-6599-d0a49bb25744/full/843,/0/default.jpg',
      title: 'On the Bank of the Seine, Bennecourt. 1868',
      username: 'FanOfClaudeMonet',
      date: new Date(2024, 0, 6, 14, 41, 59).toString(), // 0 represents January
    },
    {
      id: 3,
      userId: 1,
      img: 'https://www.artic.edu/iiif/2/350b7e7f-e1d8-e58b-8890-0ef6b04afe18/full/843,/0/default.jpg',
      title: 'Étretat: The Beach and the Falaise d’Amont. 1885',
      username: 'FanOfClaudeMonet',
      date: new Date(2024, 0, 6, 12, 41, 59).toString(),
    },
    {
      id: 4,
      userId: 2,
      img: 'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg',
      title: 'The Bedroom. 1889',
      username: 'VincentWhoGogh',
      date: new Date(2024, 0, 5, 18, 41, 59).toString(),
    },
    {
      id: 5,
      userId: 3,
      img: 'https://www.artic.edu/iiif/2/2e6d6a89-61bd-5098-59d3-b41d14bf7973/full/843,/0/default.jpg',
      title: 'The Plate of Apples. 1877',
      username: 'WhoReallyKnewPaulCezanne',
      date: new Date(2024, 0, 5, 22, 41, 59).toString(),
    },
    {
      id: 1,
      userId: 2,
      img: 'https://www.artic.edu/iiif/2/f11bd233-6cc3-4221-59eb-f7363be4119e/full/843,/0/default.jpg',
      title: 'Grapes, Lemons, Pears, and Apples. 1887',
      username: 'VincentWhoGogh',
      date: new Date(2024, 0, 6, 14, 48, 59).toString(),
    },
    {
      id: 7,
      userId: 3,
      img: 'https://www.artic.edu/iiif/2/d4ca6321-8656-3d3f-a362-2ee297b2b813/full/843,/0/default.jpg',
      title: 'The Bay of Marseille, Seen from L’Estaque. 1885',
      username: 'WhoReallyKnewPaulCezanne',
      date: new Date(2024, 1, 6, 18, 41, 59).toString(),
    },
  ],

  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  saveUpdatedPosts: (post) => set((state) => ({ posts: [...post] })),
}));
