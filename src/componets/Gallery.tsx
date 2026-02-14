import InfiniteMenu from '@/components/InfiniteMenu';
// import { ComicText } from "@/components/ui/comic-text"
import Footer from './Footer';


const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://yourcollegewebsite.com/events/codefiesta',
    title: 'CodeFiesta 2025',
    description: 'Join our annual coding hackathon! Compete in teams to solve real-world problems, showcase your programming skills, and win exciting prizes.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
    link: 'https://yourcollegewebsite.com/events/techsymposium',
    title: 'TechSymposium',
    description: 'A day-long event featuring guest lectures, panel discussions, and workshops on AI, cybersecurity, and emerging tech trends.'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://yourcollegewebsite.com/events/algorithm-arena',
    title: 'Algorithm Arena',
    description: 'Test your problem-solving skills in this competitive programming contest. Solve challenging algorithmic problems and climb the leaderboard!'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://yourcollegewebsite.com/events/techforge',
    title: 'TechForge ',
    description: 'Hands-on workshops on web development, machine learning, and cloud computing. Learn from experts and build your own projects!'
  }
];

const Gallery = () => {
  return (
    <div>
    <h1 id="about" className="text-4xl font-bold text-center my-8"></h1>
    <InfiniteMenu items={items}/>
    <div className="mt-10"></div>
    <Footer />
     </div>
  )
}

export default Gallery