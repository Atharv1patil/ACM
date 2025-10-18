import { FaLaptopCode, FaRocket, FaUsers, FaLightbulb, FaHandshake, FaCode } from "react-icons/fa";
import CardSwap, { Card } from "../components/CardSwap";
import Pixelcard from "./Pixelcard";
import CCG from "./CCG";
import Team from "./Team";
import ScrollLinkedVideo from "../components/ui/VideoScrollPlayer"
import FrameByFrameHero from "../components/Frame";


const heroEvents = [
  {
    id: 1,
    title: "Coding Workshop",
    description: "Hands-on learning with industry experts.",
    image: "/images/image.png",
    icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
  },
  {
    id: 2,
    title: "Hackathon",
    image: "/images/gathering.jpg",
    icon: <FaRocket className="text-sky-400 text-3xl" />,
  },
  {
    id: 3,
    title: "Networking Event",
    description: "Connect with tech leaders and peers.",
    image: "/images/meeting.jpg",
    icon: <FaUsers className="text-sky-400 text-3xl" />,
  },
];

const Hero = () => {
  return (
    <>
      🌟 HERO SECTION
      <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-screen px-6 md:px-16 py-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ✨ Welcome to{" "}
            <span className="text-sky-400">ACM Student Chapter</span> ✨
          </h1>

          <p className="text-gray-300 text-lg">
            Empowering students through{" "}
            <span className="font-semibold">technology</span>,{" "}
            <span className="font-semibold">innovation</span>, and{" "}
            <span className="font-semibold">collaboration</span>. <br />
            Join our workshops, hackathons, and tech fests to grow as a
            developer, thinker, and leader.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-sky-500 hover:bg-sky-600 transition-all px-6 py-3 rounded-lg text-white font-medium shadow-md">
              🚀 Join Now
            </button>
            <button className="border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all px-6 py-3 rounded-lg font-medium">
              📅 Upcoming Events
            </button>
          </div>
        </div>

        {/* Right Section – Cards */}
        <div className="md:w-1/2 flex justify-around items-center mt-10 md:mt-0">
          <div className="relative w-[90%] max-w-[500px] h-[400px]">
            <CardSwap
              cardDistance={80}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={false}
            >
              {heroEvents.map((event) => (
                <Card
                  key={event.id}
                  className="bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {event.icon}
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                  </div>

                  <img
                    src={event.image}
                    alt={"error"}
                    className="w-full object-cover rounded-lg mb-3"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* 🎞️ CIRCULAR GALLERY SECTION */}
      <div className="mt-20">
        <CCG />
      </div>
     
        
    {/* <ScrollLinkedVideo
      videoSrc="/Sample2.webm"
      sectionHeight="300vh"
      timedContent={[
        { time: 0, text: "Welcome to ACM" },
        { time: 3, text: "Learn. Innovate. Connect." },
        { time: 6, text: "Together We Build the Future" },
      ]}
    /> */}
  {/* <ScrollLinkedVideo
  videoSrc="/images/Sample.mp4"
  // webmSrc="/images/Sample.webm"
  poster="/images/3d-poster.jpg"
  sectionHeight="200vh"
  smoothing={0.5}
  snapToStep={false}
  
/> */}

   
  <FrameByFrameHero
  totalFrames={243}
  framePath="/frames/"
  pinDuration="300vh"
  scrollSpeed={1.5}  // 50% faster than scroll
  smoothing={0.2}    // smooth lerp for natural acceleration
>
  <h1 className="text-white text-5xl font-bold">Welcome!</h1>
</FrameByFrameHero>
      
  
  

  {/* Add a tail section for more scroll testing */}
  {/* <div className="h-[100vh] bg-black flex items-center justify-center text-white text-3xl">
    End of Page
  </div> */}

     
    </>
  );
};

export default Hero;
