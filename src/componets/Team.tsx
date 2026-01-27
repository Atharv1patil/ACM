"use client";

import { Linkedin } from "lucide-react";
import Footer from "./Footer";

// =========================
// 📌 TEAM MEMBER TYPE
// =========================
interface TeamMember {
  Name: string;
  Image: string;
  Role: string;
  "LinkedIn Profile Link": string;
}

// =========================
// 📌 TEAM CARD COMPONENT
// =========================
const TeamCard = ({
  Name,
  Image,
  Role,
  "LinkedIn Profile Link": linkedIn,
}: TeamMember) => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 w-64">
    <div
  className={`mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400/50 
    ${Role.toLowerCase().includes("faculty") 
      ? "w-44 h-44 bg-gray-800"  // Bigger image for faculty
      : "w-32 h-32 bg-gray-700"  // Normal size for others
    }
  `}
>
  <img
  src={Image || "/api/placeholder/128/128"}
  alt={Name}
  className={`
    w-full h-full object-cover
    ${Role.toLowerCase().includes("faculty") ? "object-top scale-94.8" : ""}
  `}
/>

</div>

    <h3 className="text-xl font-bold text-white mb-2">{Name}</h3>
    <p className="text-cyan-400 text-sm mb-4 font-semibold">{Role}</p>

   <a
  href={linkedIn && linkedIn !== "." ? linkedIn : "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
>
  <Linkedin className="w-4 h-4" />
  LinkedIn
</a>
  </div>
);

// =========================
// 📌 TEAM DATA
// =========================
const teamData: TeamMember[] = [
  { Name: "Aditya Kapgate", Image: "/images/aditya_kapgate.jpg", Role: "Video Editor", "LinkedIn Profile Link": "https://www.linkedin.com/in/aditya-kapgate-87864a30a" },
  { Name: "Sujal Lole", Image: "/images/sujal_lole.jpg", Role: "Marketing Manager", "LinkedIn Profile Link": "." },
  { Name: "Harshit Kapgate", Image: "/images/harshit_kapgate.jpg", Role: "Cinematographer", "LinkedIn Profile Link": "https://www.linkedin.com/in/harshit-kapgate-0b7b6a359" },
  { Name: "Shruti Narsulwar", Image: "/images/shruti_narsulwar.jpg", Role: "Webmaster", "LinkedIn Profile Link": "https://www.linkedin.com/in/shrutinarsulwar" },
  { Name: "Kashish Bhiwapurkar", Image: "/images/kashish_bhiwapurkar.png", Role: "Operations Manager", "LinkedIn Profile Link": "https://www.linkedin.com/in/kashish-bhiwapurkar/" },
  { Name: "Maithili Korke", Image: "/images/maithili_korke.jpg", Role: "Webmaster", "LinkedIn Profile Link": "http://www.linkedin.com/in/maithili-korke" },
  { Name: "Atharv Patil", Image: "/images/atharv_patil.jpg", Role: "Technical Lead", "LinkedIn Profile Link": "https://www.linkedin.com/in/atharv-patil-97b24b2a5/" },
  { Name: "Khushalika Aaglave", Image: "/images/Khushalika_Aglawe.jpg", Role: "Domain Lead (JAVA)", "LinkedIn Profile Link": "https://www.linkedin.com/in/khushalika-aglawe-aa0913349/" },
  {
  Name: "Vedant Chinchulkar",
  Image: "/images/vedeant_chi.jpg",
  "LinkedIn Profile Link": "https://www.linkedin.com/in/vedant-chichulkar-97297637b/",
  Role: "Domain Lead (Python)"
},
  { Name: "Mansi Malekar", Image: "/images/Mansi Malekar.jpg", Role: "Editorial In-Charge", "LinkedIn Profile Link": "https://www.linkedin.com/in/mansi-malekar-75752a236" },
  { Name: "Tanishq Parate", Image: "/images/Tanishq Parate.jpg", Role: "Newsletter Editor", "LinkedIn Profile Link": "https://www.linkedin.com/in/tanishq-parate-a1556b353" },
  { Name: "Bharti Dhanushwan", Image: "/images/bharti_dhanushwan.jpg", Role: "Event Co-Ordinator", "LinkedIn Profile Link": "https://www.linkedin.com/in/bharti-dhanushban-741b47234/" },
  { Name: "Lokesh Bavistale", Image: "/images/lokesh_bavistale.jpg", Role: "Social Media Manager", "LinkedIn Profile Link": "https://www.linkedin.com/in/lokesh-bavistale-19b6ab335/" },
  { Name: "Siddhi Jaiswal", Image: "/images/siddhi_jaiswal.jpg", Role: "Graphic Designer", "LinkedIn Profile Link": "https://www.linkedin.com/in/siddhi-jaiswal-246462397" },
  { Name: "Divyani Tripathi", Image: "/images/divyani_tripathi.jpg", Role: "Creative Designer", "LinkedIn Profile Link": "https://www.linkedin.com/in/divyani-tripathi-a52178327" },
  { Name: "Soham Kale", Image: "/images/soham_kale.jpg", Role: "Treasurer", "LinkedIn Profile Link": "https://www.linkedin.com/in/soham-kale-60134a2b0/" },
  { Name: "Om Awadhoot", Image: "/images/om2.jpg", Role: "Chairperson", "LinkedIn Profile Link": "https://www.linkedin.com/in/om-awadhoot/" },
  { Name: "Shreyash Bahe", Image: "/images/Shre.jpg", Role: "Vice Chairperson", "LinkedIn Profile Link": "https://www.linkedin.com/in/shreyash-bahe-636749255/" },
  { Name: "Vedant Dadhure", Image: "/images/vedant_dadhure.jpg", Role: "Outreach Manager", "LinkedIn Profile Link": "https://www.linkedin.com/in/vedant-dadhure-043a15278/" },
  { Name: "Khushi Umale", Image: "/images/Khushi Umale.png", Role: "Secretary", "LinkedIn Profile Link": "https://www.linkedin.com/in/khushi-umale-959601271" },
  { Name: "Kunal Selokar", Image: "/images/kunal_selokar.jpg", Role: "UI/UX Designer", "LinkedIn Profile Link": "" },
  { Name: "Ishanya Dikshit", Image: "/images/ishanya_dikshit.jpg", Role: "Anchor", "LinkedIn Profile Link": "" },
  { Name: "Nishant Dhoble", Image: "/images/nishant_dhoble.jpg", Role: "Content Writer", "LinkedIn Profile Link": "" },
  { Name: "Krishna Batra", Image: "/images/krishna_batra.jpg", Role: "Event Co-Ordinator", "LinkedIn Profile Link": "" },
  { Name: "Khushbu Dongare", Image: "/images/khushbu_dongare.jpg", Role: "Event Co-Ordinator", "LinkedIn Profile Link": "" },
];

// =========================
// 📌 FACULTY CARD (MANUAL)
// =========================
const facultyMember: TeamMember = {
  Name: "Swati Tiwari",
  Role: "Faculty Co-ordinator",
  Image: "/images/mam.jpg", // you will replace with real image
  "LinkedIn Profile Link": "https://www.linkedin.com/in/swati-tiwari-74108b43/",
};

// =========================
// 📌 CATEGORY FILTERS
// =========================
const isCoreTeam = (r: string) =>
  ["chairperson", "vice chairperson", "secretary", "treasurer"].some((x) =>
    r.toLowerCase().includes(x)
  );

const isTechnical = (r: string) =>
  ["technical lead", "domain lead (python)", "domain lead (java)", "webmaster", "tech team",].some((x) =>
    r.toLowerCase().includes(x)
  );

const isDesign = (r: string) =>
  ["designer", "design"].some((x) => r.toLowerCase().includes(x));

const isContentTeam = (r: string) =>
  ["newsletter", "content", "editorial"].some((x) =>
    r.toLowerCase().includes(x)
  );

const isMediaTeam = (r: string) =>
  ["video", "cinematograph", "social media"].some((x) =>
    r.toLowerCase().includes(x)
  );

const isManagementTeam = (r: string) =>
  ["marketing", "operations", "event", "outreach"].some((x) =>
    r.toLowerCase().includes(x)
  );

// =========================
// 📌 SORTING RULES
// =========================
const corePriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("chairperson")) return 1;
  if (r.includes("vice chairperson")) return 2;
  if (r.includes("secretary")) return 3;
  if (r.includes("treasurer")) return 4;
  return 5;
};

const techPriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("technical lead") || r.includes("tech lead")) return 1;
  if (r.includes("webmaster")) return 2;
  if (r.includes("tech team")) return 3;
  return 4;
};

const designPriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("creative")) return 1;
  if (r.includes("ui/ux")) return 2;
  if (r.includes("graphic")) return 3;
  return 4;
};

const contentPriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("editorial")) return 1;
  if (r.includes("newsletter")) return 2;
  if (r.includes("content")) return 3;
  return 4;
};

const mediaPriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("cinematographer")) return 1;
  if (r.includes("video")) return 2;
  if (r.includes("social media")) return 3;
  return 4;
};

const managementPriority = (r: string) => {
  r = r.toLowerCase();
  if (r.includes("operations")) return 1;
  if (r.includes("outreach")) return 2;
  if (r.includes("marketing")) return 3;
  if (r.includes("event")) return 4;
  return 5;
};

// =========================
// 📌 TEAM PAGE COMPONENT
// =========================
export default function Team() {
  // Grouping
  const coreTeam = teamData.filter((m) => isCoreTeam(m.Role)).sort((a, b) => corePriority(a.Role) - corePriority(b.Role));
  const technicalTeam = teamData.filter((m) => isTechnical(m.Role)).sort((a, b) => techPriority(a.Role) - techPriority(b.Role));
  const designTeam = teamData.filter((m) => isDesign(m.Role)).sort((a, b) => designPriority(a.Role) - designPriority(b.Role));
  const contentTeam = teamData.filter((m) => isContentTeam(m.Role)).sort((a, b) => contentPriority(a.Role) - contentPriority(b.Role));
  const mediaTeam = teamData.filter((m) => isMediaTeam(m.Role)).sort((a, b) => mediaPriority(a.Role) - mediaPriority(b.Role));
  const managementTeam = teamData.filter((m) => isManagementTeam(m.Role)).sort((a, b) => managementPriority(a.Role) - managementPriority(b.Role));

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-black py-24 px-6 sm:px-10 lg:px-12 text-center">
        
       
        <div className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight">
             Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
            The GHRCE ACM team is a dynamic blend of innovators, creators, leaders, and visionaries 
            working together to inspire students and build a thriving technical community.
          </p>
          <div className="mt-5 h-1 w-32 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-24">

          
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Faculty
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <TeamCard {...facultyMember} />
            </div>
          </div>

          
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Core Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {coreTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

         
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Technical Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {technicalTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

          {/* DESIGN TEAM */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Design Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {designTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

          {/* CONTENT TEAM */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Content & Newsletter Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {contentTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

          {/* MEDIA TEAM */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Media Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {mediaTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

          {/* MANAGEMENT TEAM */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Management Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {managementTeam.map((m, i) => (
                <TeamCard key={i} {...m} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

