import { Linkedin } from "lucide-react";

// Define the type for team member
interface TeamMember {
  Name: string;
  Image: string;
  Role: string;
  "LinkedIn Profile Link": string;
}

// TeamCard Component with proper typing
const TeamCard = ({ Name, Image, Role, "LinkedIn Profile Link": linkedIn }: TeamMember) => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 w-64">
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700 border-2 border-cyan-400/50">
      <img 
        src={Image || "/api/placeholder/128/128"} 
        alt={Name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{Name}</h3>
    <p className="text-cyan-400 text-sm mb-4 font-semibold">{Role}</p>
    {linkedIn && linkedIn !== "." && (
      <a 
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
    )}
  </div>
);

const teamData: TeamMember[] = [
    {
        "Name": "Aditya kapgate",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/aditya-kapgate-87864a30a",
        "Image": "/images/aditya_kapgate.jpg",
        "Role": "Video Editor"
    },
    {
        "Name": "Sujal lole",
        "LinkedIn Profile Link": ".",
        "Image": "/images/sujal_lole.jpg",
        "Role": "Management"
    },
    {
        "Name": "Harshit Kapgate",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/harshit-kapgate-0b7b6a359",
        "Image": "/images/harshit_kapgate.jpg",
        "Role": "VideoGraphy inCharge"
    },
    {
        "Name": "Shruti Narsulwar",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/shrutinarsulwar",
        "Image": "/images/shruti_narsulwar.jpg",
        "Role": "Tech Team"
    },
    {
        "Name": "Kashish Bhiwapurkar",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/kashish-bhiwapurkar/",
        "Image": "/images/kashish_bhiwapurkar.png",
        "Role": "Tech Team"
    },
    {
        "Name": "Maithili Korke",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/arpit-bawankar-513476274/",
        "Image": "/images/maithili_korke.jpg",
        "Role": "Tech Team"
    },
    {
        "Name": "Atharv Patil",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/manish-wanjari-968b6b278",
        "Image": "/images/atharv_patil.jpg",
        "Role": "Tech Lead"
    },
    {
        "Name": "Khushalika Aglawe",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/atharva-lade-1823902b3",
        "Image": "/images/khushalika_aglawe.jpg",
        "Role": "Member"
    },
    {
        "Name": "Mansi Rajendra Bhiwapur",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/jayant-wagh-1b2039234/",
        "Image": "/images/mansi_bhiwapur.jpg",
        "Role": "Management Lead"
    },
    {
        "Name": "Tanishq Narender Parate",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/atharv-wani-4065b2253",
        "Image": "/images/tanishq_parate.jpg",
        "Role": "Content Writer"
    },
    {
        "Name": "Vedant Chinchulkar",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/jayant-mahajan-64b184285",
        "Image": "/images/vedant_chinchulkar.jpg",
        "Role": "tech team"
    },
    {
        "Name": "Bharti Dhanushwan",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/aayush-deshmukh-8968b5256",
        "Image": "/images/bharti_dhanushwan.jpg",
        "Role": "Member"
    },
    {
        "Name": "Lokesh Bavistale",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/harsh-rajan-b335a4282",
        "Image": "/images/lokesh_bavistale.jpg",
        "Role": "Video Editor"
    },
    {
        "Name": "Siddhi Jaiswal",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/siddhi-jaiswal-246462397",
        "Image": "/images/siddhi_jaiswal.jpg",
        "Role": "Design Team"
    },
    {
        "Name": "Divyani tripathi",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/divyani-tripathi-a52178327",
        "Image": "/images/divyani_tripathi.jpg",
        "Role": "Design Team"
    },
    {
        "Name": "Soham kale",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/niharika-tiwari-960250278",
        "Image": "/images/soham_kale.jpg",
        "Role": "Treasurer"
    },
    {
        "Name": "Om awadhoot",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/niharika-tiwari-960250278",
        "Image": "/images/om.jpg",
        "Role": "Chairman"
    },
    {
        "Name": "Shreyash bahe",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/niharika-tiwari-960250278",
        "Image": "/images/shreyash_bahe.jpg",
        "Role": "Vice Chair"
    },
    {
        "Name": "Vedant dadhure",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/niharika-tiwari-960250278",
        "Image": "/images/vedant_dadhure.jpg",
        "Role": "Marketing team"
    },
    {
        "Name": "Khushi Umale",
        "LinkedIn Profile Link": "https://www.linkedin.com/in/niharika-tiwari-960250278",
        "Image": "/images/khushi_umale.jpg",
        "Role": "Secretary"
    }
];

export default function Team() {
  // Helper function to get role priority for core team
  const getCoreTeamPriority = (role: string) => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes('chairman')) return 1;
    if (lowerRole.includes('vice chair')) return 2;
    if (lowerRole.includes('secretary')) return 3;
    if (lowerRole.includes('treasurer')) return 4;
    return 5;
  };

  // Helper function to get role priority for tech team
  const getTechTeamPriority = (role: string) => {
    const lowerRole = role.toLowerCase();
    if (lowerRole.includes('tech lead')) return 1;
    return 2;
  };

  // Organize team members into categories
  const coreTeam = teamData
    .filter(member => 
      member.Role.toLowerCase().includes('chairman') || 
      member.Role.toLowerCase().includes('vice chair') || 
      member.Role.toLowerCase().includes('treasurer') || 
      member.Role.toLowerCase().includes('secretary') ||
      member.Role.toLowerCase().includes('core team')
    )
    .sort((a, b) => getCoreTeamPriority(a.Role) - getCoreTeamPriority(b.Role));

  const techTeam = teamData
    .filter(member => 
      member.Role.toLowerCase().includes('tech')
    )
    .sort((a, b) => getTechTeamPriority(a.Role) - getTechTeamPriority(b.Role));

  const designTeam = teamData.filter(member => 
    member.Role.toLowerCase().includes('design') || 
    member.Role.toLowerCase().includes('video') ||
    member.Role.toLowerCase().includes('content')
  );

  const members = teamData.filter(member => 
    member.Role.toLowerCase().includes('member') ||
    member.Role.toLowerCase().includes('management') ||
    member.Role.toLowerCase().includes('marketing')
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Team Section */}
      <section className="bg-black py-24 px-6 sm:px-10 lg:px-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-24">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Our <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Meet the creative minds and technical innovators driving ACM GHRCE forward — 
              a passionate group committed to excellence, collaboration, and innovation.
            </p>
            <div className="mt-5 h-1 w-28 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto rounded-full" />
          </div>

          {/* Core Team */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Core Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {coreTeam.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          {/* Tech Team */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Tech Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {techTeam.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          {/* Design Team */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Design Team
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {designTeam.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">
              Members
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {members.map((member, idx) => (
                <TeamCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-500">
            ACM GHRCE
          </h3>
          <p className="text-gray-400 mb-4">Innovation. Collaboration. Excellence.</p>
          <p className="text-gray-500 text-sm">© 2024 ACM GHRCE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}