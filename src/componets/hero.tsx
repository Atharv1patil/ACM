
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";
import CardSwap, { Card } from "../components/CardSwap";
// import { ReactNode } from "../../public/images/";
// import DecryptedText from "../components/DecryptedText";
import Pixelcard from "./Pixelcard";
import CCG from "./CCG";
import Team from "./Team";


// Array of event data
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
    <><div className="flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-screen px-6 md:px-16 py-10">

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
                {/* Header with icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  {event.icon}
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>

                {/* Image Body */}
                <img src={event.image} alt={"error"} className="w-full  object-cover rounded-lg mb-3" />
                {/* Description */}


              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
    
    <div className="mt-20">
      <CCG/>
      </div>
      </>
    

  );
};

export default Hero;
