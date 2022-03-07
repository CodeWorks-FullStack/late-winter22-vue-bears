import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  arrayExample: ['hey', 'sup', 'yo'],
  bears:[
    {
      id: 1,
      name: 'Hank',
      hunger: 0,
      catchphrase: 'Thanks for all the food dude.',
      imgUrl: 'https://s.yimg.com/ny/api/res/1.2/adUUooHhHllyOvCVLTlWNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg4NA--/https://s.yimg.com/uu/api/res/1.2/5zYDUKUtbf04GluIjuNj8A--~B/aD0xMDQzO3c9NzU1O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/the_new_york_times_articles_158/46c78e673df3a9f675ad687a0c5058fe'
    },
    { id: 2,
      name: 'Smokey',
      hunger: 0,
      catchphrase: 'Only you can feed me... to prevent forrest fires.',
      imgUrl: 'https://d.newsweek.com/en/full/1927705/bear-takes-dip-pool-roams-neighborhood.jpg'
    },
    {
      id: 3,
      name: 'Yogi',
      hunger: 0,
      catchphrase: 'Yo booboo, wheres-a da pic-a-nick bas-a-ket?',
      imgUrl: 'https://media1.s-nbcnews.com/i/MSNBC/Components/Video/201810/d_ov_grizzlyhunter_181026.jpg'
    }
  ]
})
