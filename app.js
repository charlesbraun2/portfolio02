/* ─── DATA DEFINITIONS ───────────────────────────────────────── */
const SKILLS_FRONTEND = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  // { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
];

const SKILLS_DESIGN = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Canva", icon: "assets/about/skills/canva_logo.png" },
  { name: "Affinity", icon: "assets/about/skills/affinity_logo.png" },
  { name: "Ibis Paint X", icon: "assets/about/skills/ibispaintx.png" }
];

const CERTS = [
  {
    id: 1,
    title: "Cisco Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "April 17, 2025",
    badge: "https://www.credly.com/badges/0597fd6e-264b-4659-97d5-623bfc9396cb",
    img: "assets/about/certification/networking_basics.png"
  },
  {
    id: 2,
    title: "Cisco Network Addressing & Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    date: "April 18, 2025",
    badge: "https://www.credly.com/badges/b6e62b80-7315-4b41-aa50-e15965e3f2a6",
    img: "assets/about/certification/network_addressing.png"
  },
  {
    id: 3,
    title: "Cisco Networking Devices & Initial Configuration",
    issuer: "Cisco Networking Academy",
    date: "April 18, 2025",
    badge: "https://www.credly.com/badges/da27317b-791c-49e1-8718-5c96fea49674",
    img: "assets/about/certification/network_devices.png"
  },
  {
    id: 4,
    title: "Cisco Network Support and Security",
    issuer: "Cisco Networking Academy",
    date: "May 09, 2025",
    badge: "https://www.credly.com/badges/8f45543e-ab25-4afa-b1c7-72e7143e1bd0",
    img: "assets/about/certification/network_security.png"
  }
];

const SEMINARS = [
  { id: 1, title: "VITSploration: An Exploration of Different IT Industries", date: "December 7, 2023", venue: "PLV- CEIT Lecture Hall", img: "assets/about/seminars/seminar1.jpg" },
  
  { id: 2, title: "Unlocking Innovation: Navigating Digital Transformation in Today's Landscape", date: "April 20, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar2.jpg" },
  { id: 3, title: "Fortifying the Future: Navigating the Landscape of Cybersecurity Essentials", date: "April 20, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar3.jpg" },
  { id: 4, title: "IT Developer Life Hacks: Working SMART as a Computer Programmer", date: "April 20, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar4.jpg" },
  
  { id: 5, title: "Press Start to Level Up:Best Practices in Game Testing", date: "April 24, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar5.jpg" },
  { id: 6, title: "Strategic Project Management: Aligning Projects with Organization Goals", date: "April 24, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar6.jpg" },
  
  { id: 7, title: "Launch your Tech Career: The High Demand Skillset of a Full Stack Developer" , date: "April 25, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar7.jpg" },
  { id: 8, title: "Securing Connections: Strategies for Cybersecurity and Network Operations", date: "April 25, 2024", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar8.jpg" },
  
  { id: 9, title: "Beyond Awareness: Enhancing Cyber Resilience with ESET", date: "April 19, 2025", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar9.jpg" },
  
  { id: 10, title: "Internet of Things: The Future of Smart Living and Industry for the subject", date: "April 23, 2025", venue: "PLV- Main Auditorium", img: "assets/about/seminars/seminar10.jpg" },
  
  { id: 11, title: "Bitskwela : Blockchain Learning Workshop", date: "October 14, 2025", venue: "PLV - College of Education Assembly Hall", img: "assets/about/seminars/seminar11.jpg" },
];


const PROJECTS = [

  //Projects - Systems (UI/UX, Front-end Development):
  { id: 1, 
    title: "PLV-AlumNet", 
    categories: ["frontend", "uiux"], 
    tags: ["HTML", "CSS", "Tailwind", "JavaScript"], 
    date: "March - May 2026", 
    desc: "Role:<span style='font-style: italic; font-weight: 300; font-size: 0.8rem; color: rgba(255,255,255,0.5); display: block; margin-bottom: 0.4rem;'> UI/UX Designer, Front-end Developer</span>An alumni connection website for Pamantasan ng Lungsod ng Valenzuela, featuring an interactive alumni directory, event calendar, and news section with job placement features.",
    imgs: ["assets/projects/system/PLV-AlumNet/1.png", 
           "assets/projects/system/PLV-AlumNet/2.png", 
           "assets/projects/system/PLV-AlumNet/3.png", 
           "assets/projects/system/PLV-AlumNet/4.png", 
           "assets/projects/system/PLV-AlumNet/5.png"], 
    figma: "https://www.figma.com/design/qXlN5EEVI2yd82AWxqonaC/REVISED-PLV-AlumNet-MOCKUP?m=auto&t=Y7IvxydQH5HMSapo-1", 
    live: "https://youtu.be/hphfuzFQ5RQ?si=OpmuRDMAkD52pSMg", 
    type: "frontend" },

  { id: 2, 
    title: "ValSyntrix", 
    categories: ["uiux"], 
    tags: ["Figma", "Prototyping", "Wireframes"],   
    date: "October - December 2025", 
    desc: "Role:<span style='font-style: italic; font-weight: 300; font-size: 0.8rem; color: rgba(255,255,255,0.5); display: block; margin-bottom: 0.4rem;'> UI/UX Designer</span> an ARTA-Compliant Customer Satisfaction Management System for the City Government of Valenzuela, featuring a user-friendly interface for citizens to submit feedback and track their concerns, and an admin dashboard for city officials to manage and respond to feedback efficiently.", 
    imgs: ["assets/projects/system/ValSyntrix/1.png", 
           "assets/projects/system/ValSyntrix/2.png",
           "assets/projects/system/ValSyntrix/3.png",
           "assets/projects/system/ValSyntrix/4.png",
           "assets/projects/system/ValSyntrix/5.png",
           "assets/projects/system/ValSyntrix/6.png",
           "assets/projects/system/ValSyntrix/7.png",
           "assets/projects/system/ValSyntrix/8.png",
           "assets/projects/system/ValSyntrix/9.png"
          ], 
    figma: "https://www.figma.com/design/1WqjMCkOjSyhqxR9j0e6TT/PT-1-APP-DEV-AND-PROJECT-1?m=auto&t=Y7IvxydQH5HMSapo-1", 
    live: null, 
    type: "uiux" },
  
  { id: 3, 
    title: "MyHomeVault", 
    categories: ["frontend", "uiux"], 
    tags: ["Figma", "HTML", "CSS" , "Bootstrap"], 
    date: "October - December 2025", 
    desc: "Role:<span style='font-style: italic; font-weight: 300; font-size: 0.8rem; color: rgba(255,255,255,0.5); display: block; margin-bottom: 0.4rem;'> UI/UX Designer, Front-end Developer</span> a home inventory management system for homeowners to organize and keep track of their belongings, featuring a user-friendly interface for adding items, categorizing them, and generating reports for insurance purposes.", 
    imgs: ["assets/projects/system/MyHomeVault/1.jpg",
           "assets/projects/system/MyHomeVault/2.jpg",
           "assets/projects/system/MyHomeVault/3.jpg"
          ], 
    figma: "https://www.figma.com/design/uxw7Z1n2AsscsLZeX66CKA/mobileMockup_event_driven?m=auto&t=Y7IvxydQH5HMSapo-1", 
    live: null, 
    type: "uiux"  },
  
  { id: 4, 
    title: "Travis Sweets & Baked Goodies", 
    categories: ["uiux", "frontend"], 
    tags: ["Figma", "Prototyping", "Wireframes", "HTML", "CSS", "JavaScript"], 
    date: "February - May 2025", 
    desc: "Role:<span style='font-style: italic; font-weight: 300; font-size: 0.8rem; color: rgba(255,255,255,0.5); display: block; margin-bottom: 0.4rem;'> UI/UX Designer, Front-end Developer</span> A website for a local bakery and cake customizing business located in Bignay, Valenzuela City, featuring an online menu, ordering system, and contact information to enhance customer engagement and drive sales as a Client-based Final Project for Web Systems and Technology subject.", 
    imgs: ["assets/projects/system/Travis/1.png", 
           "assets/projects/system/Travis/2.png",
            "assets/projects/system/Travis/3.png",
            "assets/projects/system/Travis/4.png",
            "assets/projects/system/Travis/5.png",
            "assets/projects/system/Travis/6.png"
          ], 
    figma: "https://www.figma.com/design/4pfYTivqpwjkcqyLQEsqwF/Travis-Sweets-and-Baked-Goodies_WebsiteMockup?m=auto&t=mzbCX05FWiq9VCru-1", 
    live: null, 
    type: "uiux" },

    //Projects - Arts & Graphic Design (Photoshop, Illustrator, Canva, 3DS Max, IbisPaintX):        
  
    //LOGOS
  { id: 5, 
    title: "CHARL.ES Logo Design", 
    categories: ["graphic"], 
    tags: ["Photoshop" , "Illustrator"], 
    date: "May 2025", 
    desc: "CHARL.ES logo design for portfolio website using Adobe Illustrator and Photoshop.", 
    imgs: ["assets/projects/arts & graphic design/logo/charles_logo/2ndLOGO.png",
            "assets/projects/arts & graphic design/logo/charles_logo/2ndLOGO2.png"
    ], 
    view: "#", 
    type: "graphic" },
  
  { id: 6, 
    title: "ColoNide Tabletop, Hybrid & Spin-Off Game Logo Design", 
    categories: ["graphic"], 
    tags: ["IbisPaintX"], 
    date: "August 2025", 
    desc: "Logo design for a tabletop,hybrid and spin-off game, incorporating game's unique visual elements and mechanics.", 
    imgs: ["assets/projects/arts & graphic design/logo/colonide/1.png",
            "assets/projects/arts & graphic design/logo/colonide/2.png"
    ], 
    view: "#",  
    type: "graphic" },
  
    //3DS Modeling - (3ds Max - Game Developement)

  { id: 7, 
    title: "3D Modeling - Game Development Activity", 
    categories: ["graphic"], 
    tags: ["3D", "3ds Max", "Game Development", "UVW Unwrapping"], 
    date: "October 2025", 
    desc: "text placeholder", 
    imgs: ["assets/projects/arts & graphic design/3ds/1.jpg",
            "assets/projects/arts & graphic design/3ds/2.png",
          ], 
    view: "#", 
    type: "graphic" },
  
    

  { id: 8, 
    title: "Geometric Digital Art", 
    categories: ["graphic"], 
    tags: ["IbisPaintX"], 
    date: "September 2024", 
    desc: "Geometric Art using IbisPaintX for Reading Visual Arts Subject. <br>Art reference: <a href='https://pin.it/RTU7zQnUf' target='_blank' style='color:#AECC97; font-weight:600;'>View Reference</a>", 
    imgs: ["assets/projects/arts & graphic design/digital works/geometric.jpg"], 
    view: "#", 
    type: "graphic" },

  { id: 9, 
    title: "Pointillism Digital Art", 
    categories: ["graphic"], 
    tags: ["IbisPaintX"], 
    date: "September 2024", 
    desc: "Pointillism Art using IbisPaintX for Reading Visual Arts Subject. <br>Art reference: <a href='https://pin.it/1E7S7P7KA' target='_blank' style='color:#AECC97; font-weight:600;'>View Reference</a>", 
    imgs: ["assets/projects/arts & graphic design/digital works/pointillism.jpg"], 
    view: "#", 
    type: "graphic" },
    
  { id: 10, 
    title: "Typography Digital Art", 
    categories: ["graphic"], 
    tags: ["IbisPaintX"], 
    date: "September 2024", 
    desc: "Typography Art using IbisPaintX for Reading Visual Arts Subject. <br>Art reference: <a href='https://pin.it/7cqdkKnbC' target='_blank' style='color:#AECC97; font-weight:600;'>View Reference</a>", 
    imgs: ["assets/projects/arts & graphic design/digital works/typography.jpg"], 
    view: "#", 
    type: "graphic" },
    

  //MULTIMEDIA WORKS - Graphic Designs (Photoshop)
    { id: 11, 
    title: "Minimalist Berry Poster", 
    categories: ["graphic"], 
    tags: ["Photoshop"], 
    date: "February 2025", 
    desc: "Minimalist poster design for a fictional berry product using Adobe Photoshop for Multimedia subject, showcasing clean lines and vibrant colors.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/berry.png"], 
    view: "#", 
    type: "graphic" },

    { id: 12, 
    title: "Book Cover Design", 
    categories: ["graphic"], 
    tags: ["Photoshop"], 
    date: "February 2025", 
    desc: "Book cover design for a fictional novel using Adobe Photoshop for Multimedia subject, showcasing a how a poster/design can be used for book cover mock up.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/bookcover.png"], 
    view: "#", 
    type: "graphic" },

    { id: 13, 
    title: "Letter on Image Poster", 
    categories: ["graphic"], 
    tags: ["Photoshop"], 
    date: "February 2025", 
    desc: "Letter on Image Poster design using Adobe Photoshop for Multimedia subject, showcasing how to creatively integrate typography with imagery to convey a message effectively.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/letterimage.png"], 
    view: "#", 
    type: "graphic" },

    { id: 14, 
    title: "Paris Poster Design", 
    categories: ["graphic"], 
    tags: ["Photoshop"], 
    date: "February 2025", 
    desc: "Paris Poster Design using Adobe Photoshop for Multimedia subject, showcasing the city's iconic landmarks and atmosphere, applying visual effects with text behind.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/paris.png"], 
    view: "#", 
    type: "graphic" },
    
    { id: 15, 
    title: "Punk Grunge Poster Design", 
    categories: ["graphic"], 
    tags: ["Photoshop"], 
    date: "February 2025", 
    desc: "Punk Grunge Poster Design using Adobe Photoshop for Multimedia subject, showcasing a rebellious and edgy aesthetic with bold typography and striking visuals.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/punkgrunge poster copy.png"], 
    view: "#", 
    type: "graphic" },
    
    // TRADITIONAL WORKS - (MIXED MEDIAS, COLORED PENCIL, TOUCH MARKERS, WATERCOLRO ETC.)

    { id: 16, 
    title: "Joker Fanart", 
    categories: ["traditional"], 
    tags: ["Movie","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "January 2025", 
    desc: "Joker Fanart from the movie Joker(2019) created with colored pencils, markers, and mixed media techniques on Vellum Board.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/joker.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 17, 
    title: "John Wick Fanart", 
    categories: ["traditional"], 
    tags: ["Movie","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "March 2022", 
    desc: "John Wick Fanart from the movie John Wick(2014) created with colored pencils, markers, and mixed media techniques on Strathmore Toned Gray.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/johnwick.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 18, 
    title: "Umbrella Academy- Five Fanart", 
    categories: ["traditional"], 
    tags: ["TV Series","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "June 2022", 
    desc: "Umbrella Academy- Five Fanart from the TV series Umbrella Academy, created with colored pencils, markers, and mixed media techniques on Vellum Board.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/five.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 19, 
    title: "Buzz Lightyear - Fanart", 
    categories: ["traditional"], 
    tags: ["Movie","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "January 2024", 
    desc: "Buzz Lightyear and Sox from the movie Lightyear(2022) Fanart created with colored pencils, markers, and mixed media techniques on Vellum Board.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/buzz.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 19, 
    title: "Michael Scofield Fanart", 
    categories: ["traditional"], 
    tags: ["TV Series","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "October 2021", 
    desc: "Michael Scofield Fanart from TV Series Prison Break, created with colored pencils, markers, and mixed media techniques on Vellum Board.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/scofield.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 20, 
    title: "Jake Peralta Fanart", 
    categories: ["traditional"], 
    tags: ["Sitcom","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "January 2022", 
    desc: "Jake Peralta Fanart from TV Series/Sitcom Brooklyn Nine-Nine, created with colored pencils, markers, and mixed media techniques on Vellum Board.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/jake.jpg"], 
    view: "#", 
    type: "traditional" },

    { id: 21, 
    title: "BLACKPINK Fanarts", 
    categories: ["traditional"], 
    tags: ["K-pop","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "2020-2023", 
    desc: "BLACKPINK Fanarts from the biggest K-pop Girlgroup, created with colored pencils, markers, and mixed media techniques on Vellum Board, Kraft Paper and Strathmore Toned Gray.", 
    imgs: ["assets/projects/arts & graphic design/trad works/fanarts/jenniehylt.jpg",
            "assets/projects/arts & graphic design/trad works/fanarts/lisa.jpg",
            "assets/projects/arts & graphic design/trad works/fanarts/jisoo.jpg",
            "assets/projects/arts & graphic design/trad works/fanarts/rose.jpg"
          ], 
    view: "#", 
    type: "traditional" },

    { id: 22, 
    title: "Demon Slayer:Kimetsu No Yaiba Fanarts", 
    categories: ["traditional"], 
    tags: ["Anime","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "June 2024", 
    desc: "Hashira Fanarts from the popular anime series Demon Slayer:Kimetsu No Yaiba, created with colored pencils, markers, and mixed media techniques on Sketch pad.", 
    imgs: ["assets/projects/arts & graphic design/trad works/demonslayer/gyomei.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/sanemi.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/muichiro.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/giyu.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/obanai.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/rengoku.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/mitsuri.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/tengen.jpg",
            "assets/projects/arts & graphic design/trad works/demonslayer/shinobu.jpg"
          ], 
    view: "#", 
    type: "traditional" }, 
    
    { id: 23, 
    title: "Akaza Fanart", 
    categories: ["traditional"], 
    tags: ["Anime","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "April 2022", 
    desc: "Akaza - Upper Moon 3 from the popular anime series Demon Slayer:Kimetsu No Yaiba Fanarts, created with colored pencils, markers, and mixed media techniques on Strathmore Toned Gray.", 
    imgs: ["assets/projects/arts & graphic design/trad works/demonslayer/akaza.jpg"], 
    view: "#", 
    type: "traditional" },
    
    { id: 24, 
    title: "Mobile Legends Fanart", 
    categories: ["traditional"], 
    tags: ["Game","Colored Pencil", "Colored Markers","Mixed Media"], 
    date: "2020-2022", 
    desc: "Game hero fanarts from the popular MOBA game Mobile Legends, created with colored pencils, graphite pencils, markers, and mixed media techniques on Vellum Board and Strathmore Colored Pencil Paper.", 
    imgs: ["assets/projects/arts & graphic design/trad works/mobilelegends/lunox.jpg",
            "assets/projects/arts & graphic design/trad works/mobilelegends/pharsa.jpg",
            "assets/projects/arts & graphic design/trad works/mobilelegends/guin.jpg",
            "assets/projects/arts & graphic design/trad works/mobilelegends/odette.jpg",
            "assets/projects/arts & graphic design/trad works/mobilelegends/selenastun.jpg",
            "assets/projects/arts & graphic design/trad works/mobilelegends/esmeralda.jpg",
          ], 
    view: "#", 
    type: "traditional" },

    { id: 25, 
    title: "Client-based Brand board Design", 
    categories: ["graphic"], 
    tags: ["Brandboard","Photoshop", "Multimedia","Adobe"], 
    date: "2025", 
    desc: "Client-based brand board design for a fictional client, created with Photoshop for a Midterm Project in Multimedia subject.", 
    imgs: ["assets/projects/arts & graphic design/multimedia works/gelo_mangoshake.png"], 
    view: "#", 
    type: "graphic" },

];


const FILTER_TABS = [
  { key: "all", label: "All Projects" },
  { key: "uiux", label: "UI/UX Design" },
  { key: "frontend", label: "Front-end" },
  { key: "graphic", label: "Arts & Graphic Design" },
  { key: "traditional", label: "Traditional Artworks" }
];

const TAG_COLOR = { uiux: "#40605A", frontend: "#EB4437", graphic: "#AECC97", traditional: "#F7ECB3" };
const TAG_TEXT = { uiux: "#ffffff", frontend: "#ffffff", graphic: "#0B2428", traditional: "#0B2428" };
const TAG_LABEL = { uiux: "UI/UX", frontend: "Front-end", graphic: "Graphic", traditional: "Traditional" };

/* ─── STATE MANAGEMENT ──────────────────────────────────────── */
let activeFilter = "all";
let featuredProject = PROJECTS[0];
let activeSeminarIdx = 0;
let modalOpenType = null; // 'cert', 'seminar', 'graphic'
let modalActiveItem = null;

// Slideshow tracking for featured project
let slideshowIdx = 0;
let slideshowTimer = null;

/* ─── TYPING ANIMATION ──────────────────────────────────────── */
function initTypewriter() {
  const textEl = document.getElementById("hero-typewriter-text");
  if (!textEl) return;

  const words = ["Upcoming 4th Year BSIT Student.", "Aspiring Front-end Dev.", "Aspiring UI/UX Designer.", "Graphic Artist.", "Traditional Artist."];
  let wordIdx = 0;
  let currentText = "";
  let isDeleting = false;

  function tick() {
    const word = words[wordIdx];
    if (!isDeleting) {
      currentText = word.slice(0, currentText.length + 1);
      textEl.textContent = currentText;

      if (currentText === word) {
        isDeleting = true;
        setTimeout(tick, 1400); // Pause on typed word
        return;
      }
    } else {
      currentText = word.slice(0, currentText.length - 1);
      textEl.textContent = currentText;

      if (currentText === "") {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
    }

    setTimeout(tick, isDeleting ? 55 : 90);
  }

  tick();
}

/* ─── RENDER SKILLS SECTION ──────────────────────────────────── */
function renderSkills() {
  const rowFrontend = document.getElementById("skills-frontend-container");
  const rowDesign = document.getElementById("skills-design-container");

  const buildItem = (s) => `
    <div class="skill-item flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-gray-200 shadow-sm cursor-default transition-all duration-200">
      <img src="${s.icon}" alt="${s.name}" class="w-7 h-7 md:w-8 md:h-8 object-contain pointer-events-none">
      <span class="skill-tooltip">${s.name}</span>
    </div>
  `;

  if (rowFrontend) rowFrontend.innerHTML = SKILLS_FRONTEND.map(buildItem).join("");
  if (rowDesign) rowDesign.innerHTML = SKILLS_DESIGN.map(buildItem).join("");
}
/* ─── RENDER EDUCATION CARDS ─────────────────────────────────── */
const EDUCATION_DATA = [
  {
    school: "Senior High School",
    track: "Science, Technology, Engineering and Mathematics (STEM) – Strand",
    org: "Technological Institute of the Philippines – Manila",
    city: "Manila City",
    year: "Graduated",
    logo: "assets/about/education/tip_logo.png"
  },
  {
    school: "Bachelor of Science in Information Technology",
    track: "Upcoming 4th Year Student",
    org: "Pamantasan ng Lungsod ng Valenzuela",
    city: "Valenzuela City",
    year: "Currently Enrolled",
    logo: "assets/about/education/plv_logo.png"
  }
];

function renderEducation() {
  const container = document.getElementById("education-cards-container");
  if (!container) return;

  container.innerHTML = EDUCATION_DATA.map(e => `
    <div class="flex-1 min-w-[280px] bg-gray-50 rounded-2xl p-5 flex gap-4 items-start border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm">
        <img src="${e.logo}" alt="${e.org} logo" class="w-full h-full object-contain">
      </div>
      <div>
        <p class="font-extrabold text-sm md:text-base text-portfolio-dark mb-0.5">${e.school}</p>
        <p class="text-xs text-portfolio-teal font-semibold mb-0.5">${e.track}</p>
        <p class="text-xs text-black italic font-medium font-[Inter]">${e.org}</p>
        <p class="text-xs text-gray-400 mb-2">${e.city}</p>
        <span class="inline-block bg-portfolio-red text-white font-bold text-[10px] md:text-xs px-2.5 py-0.5 rounded">${e.year}</span>
      </div>
    </div>
  `).join("");
}

/* ─── RENDER CERTIFICATIONS & SEMINARS ──────────────────────── */
function renderCerts() {
  const container = document.getElementById("certs-grid-container");
  if (!container) return;

  container.innerHTML = CERTS.map((c, i) => `
    <div class="gallery-card bg-white rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
      <div class="cert-img-wrap h-40 cursor-pointer" onclick="openCertModal(${i})">
        <img src="${c.img}" alt="${c.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-5 flex flex-col justify-between flex-grow">
        <div>
          <p class="font-medium text-sm md:text-base text-portfolio-dark mb-1">${c.title}</p>
          <p class="text-xs text-portfolio-teal mb-4">${c.issuer} · ${c.date}</p>
        </div>
        <div>
          <a href="${c.badge}" target="_blank" rel="noreferrer" 
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-100"
            style="border: 1.5px solid #0B2428; background: transparent; color: #0B2428;"
            onmouseover="this.style.background='#0B2428'; this.style.color='#fff';"
            onmouseout="this.style.background='transparent'; this.style.color='#0B2428';">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            View Badge
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSeminars() {
  const carousel = document.getElementById("seminars-carousel");
  const indicatorsContainer = document.getElementById("seminars-indicators");
  if (!carousel) return;

  // Render cards
  carousel.innerHTML = SEMINARS.map((s, i) => `
    <div class="gallery-card relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[16/10] flex-shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer border border-white/10 group bg-portfolio-dark/40" onclick="openSeminarModal(${i})">
      // <!-- Gradient Shimmer Background -->
      // <div class="w-full h-full shimmer-bg flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 group-hover:scale-105 select-none">
      //   <span class="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">🎓</span>
      //   <span class="text-portfolio-cream/70 font-black text-xs sm:text-sm uppercase tracking-wider px-4 line-clamp-2">${s.title}</span>
      // </div>
      
      ${s.img
        ? `<img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover absolute inset-0">`
        : `<div class="w-full h-full shimmer-bg absolute inset-0"></div>`
      }

      <!-- Overlay details with sleek gradient transition -->
      <div class="absolute inset-0 bg-gradient-to-t from-portfolio-dark/95 via-portfolio-dark/45 to-transparent flex items-end p-5 transition-opacity duration-300 opacity-90 group-hover:opacity-100 select-none">
        <div class="w-full">
          <p class="text-xs sm:text-sm font-black text-portfolio-cream group-hover:text-white transition-colors duration-200 line-clamp-1">${s.title}</p>
          <div class="flex justify-between items-center mt-1">
            <span class="text-[10px] sm:text-xs text-portfolio-green font-bold tracking-wider">${s.date}</span>
            <span class="text-[10px] text-white/40 uppercase tracking-widest font-extrabold flex items-center gap-1">
              Certificate <span class="group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
          </div>
        </div>
      </div>
      
      <!-- Premium Hover Highlight Border -->
      <div class="absolute inset-0 border border-portfolio-red/0 group-hover:border-portfolio-red/40 rounded-2xl pointer-events-none transition-all duration-300"></div>
    </div>
  `).join("");

  // Setup indicators
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = SEMINARS.map((_, i) => `
      <button onclick="scrollToSeminarCard(${i})" 
        class="seminar-dot w-2 h-2 rounded-full border-none cursor-pointer p-0 bg-portfolio-dark/15 hover:bg-portfolio-red/50 transition-all duration-300"
        data-index="${i}"
        aria-label="Go to seminar ${i + 1}">
      </button>
    `).join("");
  }

  // Setup scroll event listener to update active dot in real-time
  carousel.addEventListener("scroll", updateActiveSeminarDot);

  // Set initial active dot
  updateActiveSeminarDot();

  // Setup click listeners for left/right navigation arrows
  setupCarouselControls();
}

window.scrollToSeminarCard = function (idx) {
  const carousel = document.getElementById("seminars-carousel");
  if (!carousel) return;

  const cards = carousel.querySelectorAll(".gallery-card");
  if (cards[idx]) {
    const cardWidth = cards[idx].offsetWidth;
    const gap = 24; // gap-6 is 24px
    carousel.scrollTo({
      left: idx * (cardWidth + gap),
      behavior: "smooth"
    });
  }
};

function updateActiveSeminarDot() {
  const carousel = document.getElementById("seminars-carousel");
  const dots = document.querySelectorAll(".seminar-dot");
  if (!carousel || dots.length === 0) return;

  const scrollLeft = carousel.scrollLeft;
  const cards = carousel.querySelectorAll(".gallery-card");
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 24;

  // Calculate index of currently visible card based on scroll position
  const activeIdx = Math.round(scrollLeft / (cardWidth + gap));

  dots.forEach((dot, i) => {
    if (i === activeIdx) {
      dot.classList.add("bg-portfolio-red", "scale-125");
      dot.classList.remove("bg-portfolio-dark/15");
    } else {
      dot.classList.remove("bg-portfolio-red", "scale-125");
      dot.classList.add("bg-portfolio-dark/15");
    }
  });
}

function setupCarouselControls() {
  const prevBtn = document.getElementById("seminars-prev-btn");
  const nextBtn = document.getElementById("seminars-next-btn");
  const carousel = document.getElementById("seminars-carousel");

  if (!carousel || !prevBtn || !nextBtn) return;

  const getScrollAmount = () => {
    const card = carousel.querySelector(".gallery-card");
    if (!card) return 320;
    return card.offsetWidth + 24; // card width + gap-6
  };

  // Clean event listeners to prevent duplicate bindings if rendered multiple times
  prevBtn.replaceWith(prevBtn.cloneNode(true));
  nextBtn.replaceWith(nextBtn.cloneNode(true));

  const newPrevBtn = document.getElementById("seminars-prev-btn");
  const newNextBtn = document.getElementById("seminars-next-btn");

  newPrevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });
  });

  newNextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });
  });
}


/* ─── RENDER PROJECTS SECTION ────────────────────────────────── */
function renderFilterTabs() {
  const container = document.getElementById("filter-tabs-container");
  if (!container) return;

  container.innerHTML = FILTER_TABS.map(t => `
    <button onclick="setProjectFilter('${t.key}')" 
      class="filter-tab px-4 py-2 rounded-full border border-white/15 text-white/60 font-semibold text-xs md:text-sm tracking-wider cursor-pointer ${activeFilter === t.key ? 'active' : ''}">
      ${t.label}
    </button>
  `).join("");
}

function startSlideshow(imgs, title) {
  if (slideshowTimer) clearInterval(slideshowTimer);
  slideshowIdx = 0;
  updateSlideshowUI(imgs, title);

  if (imgs.length > 1) {
    slideshowTimer = setInterval(() => {
      slideshowIdx = (slideshowIdx + 1) % imgs.length;
      updateSlideshowUI(imgs, title);
    }, 3200);
  }
}

function updateSlideshowUI(imgs, title) {
  const container = document.getElementById("featured-slideshow-img");
  const dotsContainer = document.getElementById("featured-slideshow-dots");
  if (!container) return;
 
  const src = imgs[slideshowIdx];
  const isPath = src && (src.startsWith("assets/") || src.startsWith("/") || src.startsWith("http"));
 
  container.innerHTML = isPath
    ? `<img src="${src}" alt="${title}" class="w-full h-full object-cover object-top" style="min-height:280px;">`
    : `<div class="w-full h-full shimmer-bg flex items-center justify-center text-center px-6">
        <span class="text-portfolio-cream/50 font-bold text-sm tracking-widest uppercase">
          ${title}<br/><span class="text-xs opacity-60">(${src})</span>
        </span>
      </div>`;
 
  if (dotsContainer) {
    dotsContainer.innerHTML = imgs.map((_, i) => `
      <button onclick="setSlideshowIndex(${i})" 
        class="w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200 ${i === slideshowIdx ? 'bg-portfolio-red scale-125' : 'bg-white/35'}">
      </button>
    `).join("");
  }
}

window.setSlideshowIndex = function (idx) {
  slideshowIdx = idx;
  if (featuredProject) {
    updateSlideshowUI(featuredProject.imgs, featuredProject.title);
  }
};

function renderFeaturedProject() {
  const container = document.getElementById("featured-project-container");
  if (!container) return;

  const hasFigma = featuredProject.figma;
  const hasLive = featuredProject.live;
  const hasView = featuredProject.view;

  container.innerHTML = `
    <div class="flex flex-wrap w-full">
      <!-- Image / Slideshow section -->
      <div class="w-full md:w-1/2 relative overflow-hidden bg-black/20 self-stretch min-h-[260px] h-[260px] md:h-[420px]">
        <div id="featured-slideshow-img" class="w-full h-full absolute inset-0"
          ${(featuredProject.categories.includes("graphic") || featuredProject.categories.includes("traditional"))
            ? `onclick="openGraphicModal(${featuredProject.id}, 0)" style="cursor:pointer;"`
            : ""
          }
        ></div>
        
        <!-- Category Badges (supports multiple) -->
        <div class="absolute top-4 left-4 z-10 flex gap-1.5 flex-wrap">
            ${featuredProject.categories.map(cat => `
              <span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded"
                    style="background-color: ${TAG_COLOR[cat]}; color: ${TAG_TEXT[cat]};">
                ${TAG_LABEL[cat]}
              </span>
            `).join('')}
        </div>

        <!-- Indicators -->
        <div id="featured-slideshow-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5"></div>
      </div>

      <!-- Info Details -->
      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <p class="text-white/40 text-xs tracking-wider mb-1.5">${featuredProject.date}</p>
          <h3 class="font-extrabold text-xl md:text-2xl text-portfolio-cream mb-3">${featuredProject.title}</h3>
          <div class="text-white/60 text-sm leading-relaxed mb-5">${featuredProject.desc}</div>
          
          <!-- Tags list -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${featuredProject.tags.map(t => `
              <span class="px-2.5 py-1 rounded-full bg-portfolio-teal/20 text-portfolio-green text-xs font-semibold tracking-wider border border-portfolio-green/20">${t}</span>
            `).join("")}
          </div>
        </div>

        <!-- Call to Actions -->
        <div class="flex flex-wrap gap-3">
          ${hasLive ? `
            <a href="${hasLive}" target="_blank" 
                    class="inline-flex items-center gap-1.5 px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    style="border: 1.5px solid #fff; background: transparent; color: #fff;"
                    onmouseover="this.style.background='#fff'; this.style.color='#0B2428';"
                    onmouseout="this.style.background='transparent'; this.style.color='#fff';">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View System
            </a>
          ` : ""}
          ${hasFigma ? `
            <a href="${hasFigma}" target="_blank" 
                    class="inline-flex items-center gap-1.5 px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    style="border: 1.5px solid #fff; background: transparent; color: #fff;"
                    onmouseover="this.style.background='#fff'; this.style.color='#0B2428';"
                    onmouseout="this.style.background='transparent'; this.style.color='#fff';">
              View on Figma
            </a>
          ` : ""}
          ${hasView ? `
            <button onclick="openGraphicModal(${featuredProject.id})" 
                      class="px-8 py-2.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200"
                      style="border: 1.5px solid #fff; background: transparent; color: #fff;"
                      onmouseover="this.style.background='#fff'; this.style.color='#0B2428';"
                      onmouseout="this.style.background='transparent'; this.style.color='#fff';">
              View Artwork
            </button>
          ` : ""}
        </div>
      </div>
    </div>
  `;

  // Start image cycling
  startSlideshow(featuredProject.imgs, featuredProject.title);
}

function renderOtherProjects() {
  const grid = document.getElementById("other-projects-grid");
  if (!grid) return;

  const filtered = activeFilter === "all" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(activeFilter));
  const others = filtered.filter(p => p.id !== featuredProject.id);

  if (others.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-8 text-center text-white/35 font-semibold text-xs tracking-wider uppercase">
        No other projects in this category
      </div>
    `;
    return;
  }

  grid.innerHTML = others.map(p => {
    const firstImg = p.imgs && p.imgs[0] && (p.imgs[0].startsWith("assets/") || p.imgs[0].startsWith("/") || p.imgs[0].startsWith("http"));
    return `
    <div class="proj-card bg-white/5 rounded-2xl overflow-hidden cursor-pointer border border-white/8 flex flex-col justify-between" onclick="handleProjectCardClick(${p.id})">
      <div class="h-36 relative ${firstImg ? '' : 'shimmer-bg'}">
        ${firstImg
          ? `<img src="${p.imgs[0]}" alt="${p.title}" class="w-full h-full object-cover object-top absolute inset-0">`
          : `<div class="w-full h-full flex items-center justify-center text-center p-3 text-portfolio-cream/40 font-extrabold text-xs uppercase tracking-widest leading-tight">${p.title}</div>`
        }
        <div class="absolute top-3 left-3 flex gap-1 flex-wrap">
            ${p.categories.map(cat => `
              <span class="px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded"
                    style="background-color: ${TAG_COLOR[cat]}; color: ${TAG_TEXT[cat]};">
                ${TAG_LABEL[cat]}
              </span>
            `).join('')}
      </div>
      </div>
      <div class="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p class="font-extrabold text-sm text-portfolio-cream mb-1.5">${p.title}</p>
          <p class="text-[10px] text-white/40 mb-3">${p.date}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${p.tags.slice(0, 2).map(tag => `
            <span class="px-2.5 py-1 rounded-full bg-portfolio-teal/20 text-portfolio-green text-xs font-semibold tracking-wider border border-portfolio-green/20">${tag}</span>
          `).join("")}
        </div>
      </div>
    </div>
    `;
  }).join("");
}

window.handleProjectCardClick = function (id) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  // Always swap into featured first
  featuredProject = proj;
  renderFeaturedProject();
  renderOtherProjects();
};

window.setProjectFilter = function (filterKey) {
  activeFilter = filterKey;

  const filtered = filterKey === "all" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(filterKey));

  renderFilterTabs();

  const featuredContainer = document.getElementById("featured-project-container");
  const otherGrid = document.getElementById("other-projects-grid");

  if (filtered.length === 0) {
    if (featuredContainer) featuredContainer.innerHTML = `
      <div class="py-16 text-center text-white/35 font-semibold text-xs tracking-wider uppercase">
        No projects in this category yet
      </div>`;
    if (otherGrid) otherGrid.innerHTML = "";
    return; // exit before renderFeaturedProject runs
  }

  // Only update featuredProject if current one isn't in the new filter
  if (filterKey === "all") {
    featuredProject = PROJECTS[0];
  } else if (!featuredProject.categories.includes(filterKey)) {
    featuredProject = filtered[0];
  }

  renderFeaturedProject();
  renderOtherProjects();
};

/* ─── LIGHTBOX MODALS SYSTEM ────────────────────────────────── */
function showModal(contentHtml) {
  const modalContainer = document.getElementById("modal-overlay-root");
  if (!modalContainer) return;

  modalContainer.innerHTML = contentHtml;
  modalContainer.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // disable background scroll
}

window.closeModal = function () {
  const modalContainer = document.getElementById("modal-overlay-root");
  if (modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.classList.add("hidden");
  }
  document.body.style.overflow = "";
  modalOpenType = null;
  modalActiveItem = null;
};

// Cert zoom modal
window.openCertModal = function (idx) {
  const cert = CERTS[idx];
  modalOpenType = "cert";
  modalActiveItem = idx;

  const html = `
    <div class="fixed inset-0 z-[1000] bg-portfolio-dark/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onclick="closeModal()">
      <div class="relative max-w-2xl w-full bg-portfolio-black/20 rounded-2xl overflow-hidden p-2 flex flex-col items-center justify-center" onclick="event.stopPropagation()">
        <!-- Close -->
        <button onclick="closeModal()" class="absolute -top-3 -right-3 md:top-3 md:right-3 w-8 h-8 rounded-full bg-portfolio-red text-white flex items-center justify-center font-bold text-sm cursor-pointer border-none z-50 hover:bg-portfolio-cream hover:text-portfolio-dark transition-colors">✕</button>

        <!-- Zoomed Certificate Image -->
        <div class="w-full aspect-[4/3] rounded-xl overflow-hidden">
          <img 
            src="${cert.img}" 
            alt="${cert.title}" 
            class="w-full h-full object-contain bg-white">
        </div>
        
        <div class="p-4 text-center">
          <p class="text-portfolio-cream font-bold text-sm uppercase tracking-wider">${cert.title}</p>
          <p class="text-portfolio-green text-xs mt-1">${cert.issuer} · ${cert.date}</p>
        </div>
      </div>
    </div>
  `;
  showModal(html);
};

// Seminar zoom modal (with Next / Prev controls)
window.openSeminarModal = function (idx) {
  modalOpenType = "seminar";
  modalActiveItem = idx;
  renderSeminarModalUI();
};

function renderSeminarModalUI() {
  const sem = SEMINARS[modalActiveItem];
  const count = SEMINARS.length;
 
  const html = `
    <div class="fixed inset-0 z-[1000] bg-portfolio-dark/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onclick="closeModal()">
      <div class="relative max-w-2xl w-full bg-portfolio-black/20 rounded-2xl p-2 flex flex-col items-center justify-center" onclick="event.stopPropagation()">
        <!-- Close -->
        <button onclick="closeModal()" class="absolute -top-3 -right-3 md:top-3 md:right-3 w-8 h-8 rounded-full bg-portfolio-red text-white flex items-center justify-center font-bold text-sm cursor-pointer border-none z-50 hover:bg-portfolio-cream hover:text-portfolio-dark transition-colors">✕</button>
 
        <!-- Prev -->
        <button onclick="navigateSeminarModal(-1)" class="absolute -left-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-xl cursor-pointer hover:bg-portfolio-red hover:border-portfolio-red hover:scale-105 transition-all hidden md:flex">‹</button>
 
        <!-- Next -->
        <button onclick="navigateSeminarModal(1)" class="absolute -right-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-xl cursor-pointer hover:bg-portfolio-red hover:border-portfolio-red hover:scale-105 transition-all hidden md:flex">›</button>
 
        <div class="w-full aspect-[4/3] rounded-xl overflow-hidden">
          ${sem.img
            ? `<img src="${sem.img}" alt="${sem.title}" class="w-full h-full object-contain">`
            : `<div class="w-full h-full shimmer-bg flex flex-col items-center justify-center p-6 text-center">
                <span class="text-4xl mb-4">🎤</span>
                <h4 class="font-extrabold text-xl text-portfolio-cream">${sem.title}</h4>
              </div>`
          }
        </div>
 
        <!-- Dot Navigation for mobile and desktop -->
        <div class="flex justify-center gap-1.5 mt-4">
          ${SEMINARS.map((_, i) => `
            <button onclick="jumpToSeminarModal(${i})" 
              class="w-2.5 h-2.5 rounded-full p-0 border-none transition-all duration-200 cursor-pointer ${i === modalActiveItem ? 'bg-portfolio-red scale-125' : 'bg-white/30'}">
            </button>
          `).join("")}
        </div>
 
        <p class="text-portfolio-cream text-center font-bold text-[10px] sm:text-xs mt-3 uppercase tracking-wider">${sem.title} · ${modalActiveItem + 1} of ${count}</p>
 
        <!-- Venue & Date -->
        <div style="display:flex; justify-content:space-between; width:100%; margin-top:0.5rem; padding:0 4px;">
          <div>
            <p class="text-portfolio-cream text-left text-[9px] font-black uppercase tracking-widest">Venue</p>
            <p class="text-white text-center text-xs font-semibold mt-0.5">${sem.venue}</p>
          </div>
          <div>
            <p class="text-portfolio-cream text-right text-[9px] font-black uppercase tracking-widest">Date</p>
            <p class="text-white text-center text-xs font-semibold mt-0.5">${sem.date}</p>
          </div>
        </div>
        
        <!-- Mobile bottom arrows for navigation -->
        <div class="flex gap-4 mt-3 md:hidden">
          <button onclick="navigateSeminarModal(-1)" class="px-4 py-1.5 rounded bg-white/10 border border-white/20 text-white font-bold text-xs">◀ Prev</button>
          <button onclick="navigateSeminarModal(1)" class="px-4 py-1.5 rounded bg-white/10 border border-white/20 text-white font-bold text-xs">Next ▶</button>
        </div>
      </div>
    </div>
  `;
  showModal(html);
}

window.navigateSeminarModal = function (dir) {
  if (modalOpenType !== "seminar") return;
  const count = SEMINARS.length;
  modalActiveItem = (modalActiveItem + dir + count) % count;
  renderSeminarModalUI();
};

window.jumpToSeminarModal = function (idx) {
  if (modalOpenType !== "seminar") return;
  modalActiveItem = idx;
  renderSeminarModalUI();
};

// Graphic/Traditional Artwork zoom modal with internal slideshow
window.openGraphicModal = function (id, startIdx) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  modalOpenType = "graphic";
  modalActiveItem = id;

  const imgs = proj.imgs.filter(src =>
    src && (src.startsWith("assets/") || src.startsWith("/") || src.startsWith("http"))
  );

  let currentIdx = startIdx || 0;

  function renderGraphicModalUI() {
    const total = imgs.length;
    const src = imgs[currentIdx] || null;

    const html = `
      <div class="fixed inset-0 z-[1000] bg-portfolio-dark/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onclick="closeModal()">
        <div class="relative w-full max-w-lg bg-[#0d1e21] rounded-2xl overflow-hidden flex flex-col" onclick="event.stopPropagation()">

          <!-- Close -->
          <button onclick="closeModal()" class="absolute top-3 right-3 w-7 h-7 rounded-full bg-portfolio-red text-white flex items-center justify-center font-bold text-xs cursor-pointer border-none z-50 hover:bg-portfolio-cream hover:text-portfolio-dark transition-colors">✕</button>

          <!-- Image area -->
          <div class="relative w-full aspect-[4/3] bg-black/40 overflow-hidden">
            ${src
              ? `<img id="graphic-modal-img" src="${src}" alt="${proj.title}" class="w-full h-full object-contain transition-opacity duration-300">`
              : `<div class="w-full h-full shimmer-bg flex items-center justify-center">
                  <span class="text-4xl">🎨</span>
                </div>`
            }

            <!-- Prev -->
            ${total > 1 ? `
              <button onclick="graphicModalNav(-1)"
                class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg cursor-pointer hover:bg-portfolio-red transition-all border-none z-10">
                ‹
              </button>
            ` : ""}

            <!-- Next -->
            ${total > 1 ? `
              <button onclick="graphicModalNav(1)"
                class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg cursor-pointer hover:bg-portfolio-red transition-all border-none z-10">
                ›
              </button>
            ` : ""}

            <!-- Counter -->
            ${total > 1 ? `
              <div data-graphic-counter class="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                ${currentIdx + 1} / ${total}
              </div>
            ` : ""}

            <!-- Dots -->
            ${total > 1 ? `
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                ${imgs.map((_, i) => `
                  <div data-graphic-dot class="w-1.5 h-1.5 rounded-full transition-all duration-200"
                    style="background: ${i === currentIdx ? '#EB4437' : 'rgba(255,255,255,0.35)'};">
                  </div>
                `).join("")}
              </div>
            ` : ""}
          </div>

          <!-- Info (static, never re-renders) -->
          <div class="p-4">
            <div class="flex gap-1.5 flex-wrap mb-2">
              ${proj.categories.map(cat => `
                <span class="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-widest"
                      style="background-color: ${TAG_COLOR[cat]}; color: ${TAG_TEXT[cat]};">
                  ${TAG_LABEL[cat]}
                </span>
              `).join('')}
            </div>
            <h3 class="text-portfolio-cream font-extrabold text-base mb-0.5">${proj.title}</h3>
            <p class="text-white/40 text-[11px] mb-1.5">${proj.date}</p>
            <div class="text-white/60 text-xs leading-relaxed mb-2.5">${proj.desc}</div>
            <div class="flex flex-wrap gap-1">
              ${proj.tags.map(tag => `
                <span class="px-2 py-0.5 rounded-full bg-portfolio-teal/20 text-portfolio-green text-[11px] font-semibold border border-portfolio-green/20">${tag}</span>
              `).join("")}
            </div>
          </div>

        </div>
      </div>
    `;
    showModal(html);
  }

  window.graphicModalNav = function (dir) {
    if (modalOpenType !== "graphic") return;
    currentIdx = (currentIdx + dir + imgs.length) % imgs.length;

    // Only swap the image — no full re-render
    const imgEl = document.getElementById("graphic-modal-img");
    const counter = document.querySelector(".graphic-counter");
    if (imgEl && imgs[currentIdx]) {
      imgEl.style.opacity = "0";
      setTimeout(() => {
        imgEl.src = imgs[currentIdx];
        imgEl.style.opacity = "1";

        // Update counter text
        const counterEl = document.querySelector("[data-graphic-counter]");
        if (counterEl) counterEl.textContent = `${currentIdx + 1} / ${imgs.length}`;

        // Update dots
        document.querySelectorAll("[data-graphic-dot]").forEach((dot, i) => {
          dot.style.background = i === currentIdx ? "#EB4437" : "rgba(255,255,255,0.35)";
        });
      }, 150);
    }
  };

  renderGraphicModalUI();
};

// Artwork fullscreen image viewer modal (with prev/next if multiple imgs)
window.openArtworkViewer = function (id, startIdx) {
  const proj = PROJECTS.find(p => p.id === id);
  if (!proj) return;

  const imgs = proj.imgs.filter(src =>
    src && (src.startsWith("assets/") || src.startsWith("/") || src.startsWith("http"))
  );
  if (imgs.length === 0) return;

  let currentIdx = startIdx || 0;
  modalOpenType = "artwork";
  modalActiveItem = id;

  function renderArtworkModal() {
    const total = imgs.length;
    const src = imgs[currentIdx];

    const html = `
      <div class="fixed inset-0 z-[1100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onclick="closeModal()">
        <div class="relative max-w-4xl w-full flex flex-col items-center" onclick="event.stopPropagation()">

          <!-- Close -->
          <button onclick="closeModal()" 
            class="absolute -top-10 right-0 w-8 h-8 rounded-full bg-portfolio-red text-white flex items-center justify-center font-bold text-sm cursor-pointer border-none z-50 hover:bg-portfolio-cream hover:text-portfolio-dark transition-colors">
            ✕
          </button>

          <!-- Prev -->
          ${total > 1 ? `
            <button onclick="artworkNav(-1)" 
              class="absolute -left-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-xl cursor-pointer hover:bg-portfolio-red hover:border-portfolio-red hover:scale-105 transition-all hidden md:flex">
              ‹
            </button>
          ` : ""}

          <!-- Next -->
          ${total > 1 ? `
            <button onclick="artworkNav(1)" 
              class="absolute -right-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center text-xl cursor-pointer hover:bg-portfolio-red hover:border-portfolio-red hover:scale-105 transition-all hidden md:flex">
              ›
            </button>
          ` : ""}

          <!-- Image -->
          <img src="${src}" alt="${proj.title}" 
            class="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl">

          <!-- Counter + Title -->
          <div class="mt-4 text-center">
            <p class="text-portfolio-cream font-bold text-sm">${proj.title}</p>
            ${total > 1 ? `<p class="text-white/40 text-xs mt-1">${currentIdx + 1} of ${total}</p>` : ""}
          </div>

          <!-- Dots -->
          ${total > 1 ? `
            <div class="flex gap-2 mt-3">
              ${imgs.map((_, i) => `
                <button onclick="artworkNav(${i - currentIdx})"
                  class="w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200"
                  style="background: ${i === currentIdx ? '#EB4437' : 'rgba(255,255,255,0.3)'};">
                </button>
              `).join("")}
            </div>
          ` : ""}

          <!-- Mobile arrows -->
          ${total > 1 ? `
            <div class="flex gap-4 mt-4 md:hidden">
              <button onclick="artworkNav(-1)" class="px-4 py-1.5 rounded bg-white/10 border border-white/20 text-white font-bold text-xs">◀ Prev</button>
              <button onclick="artworkNav(1)" class="px-4 py-1.5 rounded bg-white/10 border border-white/20 text-white font-bold text-xs">Next ▶</button>
            </div>
          ` : ""}

        </div>
      </div>
    `;
    showModal(html);
  }

  window.artworkNav = function (dir) {
    if (modalOpenType !== "artwork") return;
    currentIdx = (currentIdx + dir + imgs.length) % imgs.length;
    renderArtworkModal();
  };

  renderArtworkModal();
};


/* ─── SCROLL EVENTS & INTERSECTIONS ──────────────────────────── */
function initScrollTrackers() {
  const progressBar = document.getElementById("scroll-progress-bar");
  const headerNav = document.getElementById("header-nav-container");
  const backTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", () => {
    const el = document.documentElement;
    const scrollPercent = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);

    // Update Progress bar
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Toggle Header Blur/Border
    if (headerNav) {
      if (window.scrollY > 40) {
        headerNav.classList.add("bg-white", "backdrop-blur-md", "border-b", "border-white/10", "shadow-lg");
        const hamburgerIcon = document.getElementById("hamburger-icon");
        if (hamburgerIcon) hamburgerIcon.setAttribute("stroke", "#EB4437");
      } else {
        headerNav.classList.remove("bg-white", "backdrop-blur-md", "border-b", "border-white/10", "shadow-lg");
        const hamburgerIcon = document.getElementById("hamburger-icon");
        if (hamburgerIcon) hamburgerIcon.setAttribute("stroke", "white");
      }
    }

    // Toggle Back to Top Button
    if (backTopBtn) {
      if (window.scrollY > 300) {
        backTopBtn.classList.remove("hidden");
      } else {
        backTopBtn.classList.add("hidden");
      }
    }

    // Dynamic Navigation link highlight based on active viewport section
    highlightNavOnScroll();
  });
}

function highlightNavOnScroll() {
  const sections = ["about", "projects", "certifications", "contact"];
  const scrollPos = window.scrollY + 120;

  sections.forEach(secId => {
    const section = document.getElementById(secId);
    const linkDesktop = document.getElementById(`nav-lnk-${secId}`);
    const linkMobile  = document.getElementById(`nav-lnk-mob-${secId}`);
    const linkFooter  = document.getElementById(`nav-lnk-footer-${secId}`);  // ← new

    if (section) {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const isActive = scrollPos >= top && scrollPos < top + height;

      if (linkDesktop) linkDesktop.classList.toggle("active", isActive);
      if (linkMobile)  linkMobile.classList.toggle("text-portfolio-red", isActive);

      // Footer: toggle opacity and color to signal active state
      if (linkFooter) {
        linkFooter.style.opacity = isActive ? "1" : "0.7";
        linkFooter.style.textDecoration = isActive ? "underline" : "none";
        linkFooter.style.textUnderlineOffset = "4px";
      }
    }
  });
}

function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // trigger animation once
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
}

/* ─── MOBILE DRAWER MENU ─────────────────────────────────────── */
window.toggleMobileMenu = function (open) {
  const menu = document.getElementById("mobile-menu-drawer");
  if (!menu) return;

  if (open) {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  }
};

window.scrollToSection = function (id) {
  window.toggleMobileMenu(false);
  closeModal();

  const section = document.getElementById(id);
  if (!section) return;

  const headerOffset = 70;
  let offsetPosition;

  if (id === "contact") {
    offsetPosition =
      section.offsetTop -
      (window.innerHeight * 0.17);
  } else {
    offsetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;
  }

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};

/* ─── KEYBOARD EVENT LISTENER FOR LIGHTBOX MODALS ────────────── */
function initKeyboardEvents() {
  document.addEventListener("keydown", (e) => {
    const modalContainer = document.getElementById("modal-overlay-root");
    if (!modalContainer || modalContainer.classList.contains("hidden")) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      if (modalOpenType === "seminar") navigateSeminarModal(-1);
      if (modalOpenType === "graphic") graphicModalNav(-1);
    } else if (e.key === "ArrowRight") {
      if (modalOpenType === "seminar") navigateSeminarModal(1);
      if (modalOpenType === "graphic") graphicModalNav(1);
    }
  });
}

/* ─── INITIALIZATION ON LOAD ─────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initScrollTrackers();
  initIntersectionObserver();
  initKeyboardEvents();
  initTypewriter();

  // Dynamic content renders
  renderSkills();
  renderEducation();
  renderCerts();
  renderSeminars();
  setProjectFilter("all");
});
