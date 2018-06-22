/*** 
THIS FILE CONTAINS ALL INFORMATION NEEDED FOR THE COMPONENTS:
- Brotherhood
- Executives
- BrotherImage
- Brother
- PageHandler
***/

const VP_LIST = [
  "catie_fan",
  "dhakshi_balakumar",
  "harika_kalluri",
  "kelvin_xu",
  "kevin_lee",
  "yixuan_lu"
];

const ALL_EXECS_LIST = [
  "sean_yu",
  "catie_fan",
  "dhakshi_balakumar",
  "harika_kalluri",
  "kelvin_xu",
  "kevin_lee",
  "yixuan_lu"
];

/***
this is an Object of every brother's information
***/
const BROTHER_INFO = {
  /* 1 */
  aaron_corona: {
    name: "Aaron Corona",
    position: "",
    year: "Senior",
    hometown: "Los Angeles, CA",
    class: "Iota",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting & Marketing",
    previous_positions: "Vice President of Public Relations",
    bio:
      "Aaron greatly values the consulting and marketing interview skills he learned as a prospective member last semester. His role model is Nathan Aminpour, PSE's former president. Aaron spends the majority of his free time working out and playing basketball at the RSF in his free time.",
    media_links: {
      linkedin: "https://linkedin.com/in/aaronmcorona"
    }
  },

  /* 2 */
  abhi_nathan: {
    name: "Abhi Nathan",
    position: "Director of Alumni Relations",
    year: "Sophomore",
    hometown: "San Diego, CA",
    class: "Iota",
    major: "Intended Business & Cognitive Science",
    minor: "",
    career_interests: "Technology Consulting",
    previous_positions: "Director of External Recruitment",
    bio:
      "PSE has helped Abhi grow personally and professionally. She initially joined with hopes of learning the skills she would need to be successful in the business world. She has gained that and more. In addition to her newfound communication skills and exposure to the various fields within business, PSE has given Abhi the opportunity to make lasting friendships with people who inspire her to be her best self. Her role model is her mother. Abhi loves to make art, run, and explore new places in her free time.",
    media_links: { linkedin: "https://linkedin.com/in/abhinathan" }
  },

  /* 3 */
  akshay_madane: {
    name: "Akshay Madane",
    position: "",
    year: "Senior",
    hometown: "Singapore",
    class: "Epsilon",
    major: "Political Economy",
    minor: "",
    career_interests: "Healthcare Management/Strategy & Law",
    previous_positions: "Vice President of Finance",
    bio:
      "In addition to invaluable business skills, PSE has taught Akshay to develop a healthy balance of fun and professionalism, and to let his charming character shine in the workplace. His role model is Punit Renjen, CEO of Deloitte. Akshay is a member of the International Students at Berkeley, and a Marketing Director for both Google@Berkeley and the ASUC Office of the Chief Technology Officer. He was a finalist for the Deloitte Consulting case competition, and attended both the Deloitte Freshman Leadership Conference and FullBridge Leadership Summit. Akshay loves to read, swim, and travel throughout Southeast Asia.",
    media_links: { linkedin: "https://linkedin.com/in/madaneakshay" }
  },

  /* 4 */
  alex_dao: {
    name: "Alex Dao",
    position: "",
    year: "Junior",
    hometown: "Irvine, CA",
    class: "Lambda",
    major: "EECS",
    minor: "",
    career_interests: "Software Development, Product Management",
    previous_positions: "",
    bio:
      "Through PSE, Alex learned the foundations of brotherhood, consulting, and finance. His role models are his parents. Alex is involved in AFX and VSA. He loves to golf, listen to music, and travel.",
    media_links: { linkedin: "www.linkedin.com/in/adao1" }
  },

  /* 5 */
  cathy_an: {
    name: "Cathy An",
    position: "",
    year: "Sophomore",
    hometown: "Philadelphia, Pennsylvania",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Consulting, Finance",
    previous_positions: "",
    bio:
      "Through PSE, Cathy has learned how to collaborate with others in professional environments as well as gained insights into the different industries in business. She looks to activist Malala Yousifazi as a role model. Cathy is in Dance Maraton and AFX. She enjoys dancing, playing soccer, and listening to music.",
    media_links: {
      linkedin: "https://www.linkedin.com/in/cathy-an/"
    }
  },

  /* 6 */
  catie_fan: {
    name: "Catie Fan",
    position: "Vice President of Public Relations",
    year: "Sophomore",
    hometown: "San Diego, CA",
    class: "Iota",
    major: "Intended Business",
    minor: "",
    career_interests: "Management Consulting",
    previous_positions: "Director of Projects, Prospective Member Trainer",
    bio:
      "Through PSE, Catie has learned invaluable professional skills to help her tackle interviews, presentations, and more. She's also learned the value of hard work, and every brother inspires her in a unique way to be a better person every day. She looks to Beyonce as a role model. Catie is also on the Cal Mock Trial team here at Berkeley, and won 2nd place at the 2016 PwC case competition. She loves to sing, travel, and visit art museums.",
    media_links: {
      linkedin: "https://linkedin.com/in/catie-fan"
    }
  },

  /* 7 */
  charissa_saputra: {
    name: "Charissa Saputra",
    position: "",
    year: "Junior",
    hometown: "Irvine, CA",
    class: "Kappa",
    major: "Media Studies",
    minor: "Environmental Science",
    career_interests: "Brand Marketing & Social Impact Consulting",
    previous_positions: "Director of Technology",
    bio:
      "PSE has allowed Charissa to grow personally and professionally. When joining PSE, she acquired many skills applicable in the workforce that classes never taught her, such as interview and networking tips. Learning from her peers, Charissa became more aware of different fields of business that she was not comfortable with, such as finance. Learning from the companies PSE has networked with, she gained exposure to the many positions available within one sector of business that she is interested in. Personally, PSE allowed Charissa to see her potential and become more confident in her abilities. Charissa's role model is Michelle Obama, and enjoys running and reading in her free time. She is also involved in CalTV.",
    media_links: { linkedin: "https://linkedin.com/in/charissasaputra" }
  },

  /* 8 */
  clevian_hsia: {
    name: "Clevian Hsia",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "San Ramon, CA",
    class: "Kappa",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Strategy Consulting & Project Management",
    previous_positions: "",
    bio:
      "PSE has given Clevian professional development, expanded her knowledge about different facets of business, taught her the importance of teamwork and time management, and most importantly, provided her with a family that motivates her to continue to learn and succeed. Her role models are her parents. She enjoys hiking, vlogging, and listening to music in her free time, and was previously involved in the ASUC and Spoon University.",
    media_links: { linkedin: "https://linkedin.com/in/clevianhsia" }
  },

  /* 9 */
  connor_smith: {
    name: "Connor Smith",
    position: "",
    year: "Sophomore",
    hometown: "Los Angeles, CA",
    class: "Iota",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Investment Banking & Consulting",
    previous_positions: "Director of Brotherhood, Director of Scholarship",
    bio:
      "Through PSE, Connor has learned to improve upon his weaknesses and capitalize on his strengths. PSE has taught him the importance of cooperation in group settings and the essential role of leadership in all situations. Everything he has learned from PSE gives him a deeper understanding of business and prepares him for the real world. His role model is serial entrepreneur and businessman Elon Musk. Connor is also a member of Enactus, an entrepreneurship club at Berkeley, and works in the Office of the Registrar. He has received the Eagle Scout Award, and spends his free time running, camping, or woodworking.",
    media_links: { linkedin: "https://linkedin.com/in/connordsmith" }
  },

  /* 10 */
  daniel_yoon: {
    name: "Daniel Yoon",
    position: "",
    year: "Sophomore",
    hometown: "Chino Hills, CA",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Consulting, Marketing",
    previous_positions: "",
    bio:
      "PSE has given Daniel the tools to help him achieve his future goals. He looks to his mother as his role model. Daniel enjoys listening to music, trying new food, and traveling. ",
    media_links: {
      linkedin: "https://www.linkedin.com/in/daniel-yoon-6738a6141/"
    }
  },

  /* 11 */
  dhakshi_balakumar: {
    name: "Dhakshi Balakumar",
    position: "Vice President of Human Resources",
    year: "Sophomore",
    hometown: "Alpharetta, GA",
    class: "Iota",
    major: "Cognitive Science",
    minor: "",
    career_interests: "Consulting",
    previous_positions:
      "Director of External Recruitment, Director of Philanthropy",
    bio:
      "PSE has helped Dhakshi develop her professional skills and expose her to several industries in the business world. She has made new friends with diverse backgrounds and interests, enhancing her college experience with broadened perspectives. Her role model is former Starbucks CEO Howard Schultz. She is a facilitator for the Introduction to Leadership & Culture Decal, a dancer in Maya at Cal, a Golder Bear Orientation Leader, and involved in the Cal Rotaract organization at Berkeley. She loves to cook, sing karaoke, and travel in her free time.",
    media_links: { linkedin: "https://linkedin.com/in/dhakshib" }
  },

  /* 12 */
  emma_tsuneishi: {
    name: "Emma Tsuneishi",
    position: "Director of Internal Recruitment",
    year: "Sophomore",
    hometown: "Torrance, CA",
    class: "Kappa",
    major: "Economics",
    minor: "Data Science",
    career_interests: "Marketing & Public Relations",
    previous_positions: "",
    bio:
      "PSE has improved Emma's public speaking and presentation skills. She's learned to work efficiently and better manage her time. Her role model is actress Emma Watson. She enjoys teaching, singing, and playing basketball. Emma is involved in Wonderworks and Intervarsity, and is a recipient of the Association of Torrance School Administration Scholarship.",
    media_links: { linkedin: "https://linkedin.com/in/emmatsuneishi" }
  },

  /* 13 */
  eva_su: {
    name: "Eva Su",
    position: "Director of Scholarship",
    year: "Sophomore",
    hometown: "Kansas City, Missouri",
    class: "Iota",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Strategy Consulting & Digital Marketing",
    previous_positions: "",
    bio:
      "PSE has given Eva a close network of friends who she can not only rely on for business advice, but unending support through college. PSE helped her gain exposure to the marketing world through numerous case competitions, mock interviews, resume workshops, and networking events. Her role model is Michelle Obama. Eva is involved in several other campus organizations, including Berkeley Women in Business, Enactus, Dance the Bay, and Freshmen Sophomore Business Club. She is a top-rated eBay seller and has sold to all 50 states and 4 continents. She recently made her 6,000th transaction while maintaining a 100% positive feedback rating. She loves Broadway and performed with the NYU Tisch performance troupe last summer. She greatly enjoys musical theatre, yoga, and hiking.",
    media_links: { linkedin: "https://linkedin.com/in/sueva" }
  },

  /* 14 */
  harika_kalluri: {
    name: "Harika Kalluri",
    position: "Vice President of Professional Development",
    year: "Sophomore",
    hometown: "San Jose, CA",
    class: "Iota",
    major: "Economics",
    minor: "",
    career_interests: "Management Consulting",
    previous_positions:
      "Prospective Member Trainer, Director of Professional Development",
    bio:
      "PSE has introduced Harika to a group of intelligent, creative, and determined individuals - each willing to share their experiences to help one another grow professionally and personally. Furthermore, being in a fraternity that focuses on marketing has taught her not only to develop effective marketing strategies, but also to market herself as an individual. Her role models is Rushil Desai, her big in PSE. Harika was awarded 2nd place in both the 2016 PwC case competition and the 2017 Deloitte Case Competition. She enjoys hand lettering, dance, and photography in her free time.",
    media_links: { linkedin: "https://linkedin.com/in/harikakalluri" }
  },

  /* 15 */
  howard_huang: {
    name: "Howard Huang",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "Arcadia, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Consulting",
    previous_positions: "Director of Brotherhood",
    bio:
      "As a transfer student, PSE has given Howard the confidence and skills that helped him transition socially and professionally into a new environment at Cal. Cases, info sessions, and mock interviews have better prepared him for real-world experiences. Howard's role models are his parents. He is an avid musician and athlete - he collects vinyls, and plays piano and volleyball. Howard is also a member of Voyager Consulting, and was a brother of PSE Beta Kappa at Cal Poly Pomona.",
    media_links: { linkedin: "https://linkedin.com/in/chinhaohowardhuang" }
  },

  /* 16 */
  jacqueline_tsang: {
    name: "Jacqueline Tsang",
    position: "Director of Social Media",
    year: "Junior",
    hometown: "La Canada, CA",
    class: "Iota",
    major: "Business Administraton",
    minor: "",
    career_interests: "Product Management & Digital Marketing",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "PSE has taught Jacqueline the importance of and practice of better communication, especially when convey messages and ideas or pitching startups and providing case solutions. Her role models are her father, and Facebook COO Sheryl Sandberg. Jacqueline was a finalist in the CITRIS Mobile App Challenge, and is an active member in Dance the Bay and Circle K. She enjoys dancing, drawing, and journaling in her free time.",
    media_links: { linkedin: "https://linkedin.com/in/tsangjacqueline" }
  },

  /* 17 */
  john_van: {
    name: "John Van",
    position: "Director of Brotherhood",
    year: "Freshman",
    hometown: "San Marino, CA",
    class: "Lambda",
    major: "Intended Business & Intended Computer Science",
    minor: "",
    career_interests: "Software Development",
    previous_positions: "",
    bio:
      "Through PSE, John developed professionalism as well as analytical and public speaking skills. His role model is his father. John is in the Cal Aquatics Swim Club. He enjoys swimming, playing the piano, and eating.",
    media_links: { linkedin: "www.linkedin.com/in/johnvan1" }
  },

  /* 18 */
  joshua_nuesca: {
    name: "Joshua Nuesca",
    position: "Director of External Recruitment",
    year: "Sophomore",
    hometown: "Redlands, CA",
    class: "Lambda",
    major: "Environmental Economics & Intended Data Science",
    minor: "Certificate in Entrepreneurship and Technology",
    career_interests: "Management Consulting, Product Management",
    previous_positions: "",
    bio:
      "Josh was able to unlock his creative potential and presentation skills with numerous case study presentations answering complex questions spanning a variety of industries. PSE also taught him the meaning of brotherhood through teamwork and trust. His role model is Mark Zuckerberg. Josh is in the student-run newspaper group of Cal, The Daily Californian, and is a Resident Assistant. He enjoys exploring new cultures, reading novels, and philosophical conversations on long car rides.",
    media_links: { linkedin: "www.linkedin.com/in/joshnuesca" }
  },

  /* 19 */
  jonathan_duan: {
    name: "Jonathan Duan",
    position: "",
    year: "Senior",
    hometown: "Short Hills, NJ",
    class: "Eta",
    major: "Economics & Political Science",
    minor: "",
    career_interests: "Consulting & Project Management",
    previous_positions: "Director of Projects, Director of Philanthropy",
    bio:
      "PSE has taught Jonathan that learning about business is more fun with those who share similar mindsets and passions. His role model is professional bodybuilder Jeff Nippard. Jonathan is very involved in the UC Berkeley community, as he is also a member of the ASUC Office of the Academic Affairs Vice President, campus political party Student Action, Cal Club Tennis team, technology consulting organization DiversaTech, and a brother of Chi Psi social fraternity. He loves to play tennis, lift weights, and listen to music whenever he can.",
    media_links: { linkedin: "https://linkedin.com/in/jonduan" }
  },

  /* 20 */
  justin_tan: {
    name: "Justin Tan",
    position: "",
    year: "Junior",
    hometown: "Newbury Park, CA",
    class: "Kappa",
    major: "Intended Business & Environmental Economics",
    minor: "",
    career_interests: "Investment Banking & Consulting",
    previous_positions: "Director of Brotherhood",
    bio:
      "Justin's biggest lesson from PSE is that communication is the key to holding a group together. In PSE, he's found a family that will motivate him and push him to do his best. Justin's role model is his father. He enjoys traveling around the world, meeting new people and hearing their stories, and playing sports such as soccer and volleyball. He is one of Berkeley's three MicMen and an active member in Cal Rotaract.",
    media_links: { linkedin: "https://linkedin.com/in/justintan14" }
  },

  /* 21 */
  kailin_li: {
    name: "Kailin Li",
    position: "",
    year: "Senior",
    hometown: "Granada Hills, CA",
    class: "Theta",
    major: "Economics & Cognitive Science",
    minor: "",
    career_interests: "Human Resources Consulting & Product Design",
    previous_positions:
      "Director of External Recruitment, Vice President of Human Relations",
    bio:
      "Kailin has learned to stay curious; professionally, PSE has exposed her to new career paths with its networking dinners and info sessions. And socially, she loves the fact that she gets to work and grow with the PSE family. Whether it's going to a Kanye concert together or heading to the city together, getting to know her brothers has been the most rewarding aspect PSE has given her. Her role model is professional player Rafael Nadal. Kailin won 2nd place at the Infosys Design Thinking competition, and is involved in the Philosophy Forum at Berkeley. Her hobbies include hiking, photography, and learning new languages.",
    media_links: { linkedin: "https://linkedin.com/in/kailinli" }
  },

  /* 22 */
  kelvin_xu: {
    name: "Kelvin Xu",
    position: "Vice President of Administration",
    year: "Sophomore",
    hometown: "Shanghai, China",
    class: "Kappa",
    major: "Economics & Statistics",
    minor: "",
    career_interests: "Management Consulting & Data Analysis",
    previous_positions: "",
    bio:
      "Through PSE, Kelvin has learned useful skills in professinal service industries and to utilize his strengths within a team. His role model is film director Stephen Chow, and he is a captain of two intramural soccer teams. Kelvin used to serve as the Public Relations Chair of the Chinese People Union. He also enjoys stock trading in his free time.",
    media_links: { linkedin: "https://linkedin.com/in/kelvinxu97" }
  },

  /* 23 */
  kevin_lee: {
    name: "Kevin Lee",
    position: "Vice President of Finance",
    year: "Junior",
    hometown: "Fullerton, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Tax M&A",
    previous_positions: "Chapter Secretary",
    bio:
      "PSE has taught Kevin that the people you meet mold and shape your future; PSE has given him the opportunity to realize his dreams. Kevin's role model is his father. He enjoys playing tennis, trying out new food, and singing. Kevin is also an active member of Korean American Student Association (KASA) and Coaching Corps.",
    media_links: { linkedin: "https://linkedin.com/in/kevinkeyhyunlee/" }
  },

  /* 24 */
  kian_kiasaleh: {
    name: "Kian Kiasaleh",
    position: "Director of Professional Development",
    year: "Sophomore",
    hometown: "San Clemente, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Strategy Consulting",
    previous_positions: "Director of Alumni Relations",
    bio:
      "PSE introduced Kian to a community that inspires him to improve himself, and taught him to develop his personal brand. His role models are Robert Downey Jr. and Tyra Banks. He enjoys trying new foods, riding roller coasters, and doing impressions. Kian is also working as a Senior Consultant in 180 Degrees Consulting.",
    media_links: { linkedin: "https://linkedin.com/in/kiankiasaleh" }
  },

  /* 25 */
  kyle_lu: {
    name: "Kyle Lu",
    position: "",
    year: "Junior",
    hometown: "Cerritos, CA",
    class: "Iota",
    major: "Economics & Statistics",
    minor: "",
    career_interests: "Consulting & Investment Banking",
    previous_positions: "Director of Technology, Prospective Member Trainer",
    bio:
      "Through PSE, Kyle has learned many professional skills, especially how to market himself. His role model is Chinese martial artist Ip Man, mentor to Bruce Lee. Kyle is also involved in Cal Dragon Boat and Innovative Design. He won 2nd place in the Fall 2016 PwC case competition, and was a finalist in the Spring 2016 Deloitte case competition. He hobbies include photography, graphic design, and paddling.",
    media_links: { linkedin: "https://linkedin.com/in/kylewongkailu" }
  },

  /* 26 */
  linda_li: {
    name: "Linda Li",
    position: "Director of Philanthropy",
    year: "Junior",
    hometown: "Davis, CA",
    class: "Iota",
    major: "Business",
    minor: "Public Health",
    career_interests: "Healthtech Consulting & Marketing",
    previous_positions:
      "Director of Professional Development, Director of Projects",
    bio:
      "PSE has provided Linda with professional development in decking presentations, competing in case competitions, interviewing, and resume-building. She has expanded her network and created a space she can truly call home here at Cal. Her role models are Beyonce and Michelle Obama. Linda is a scheduling supervisor for the ASUC Event Services team, and a member of Spoon University. She was a marketing intern at healthtech startup Stroll Health, and loves to hike, play the piano, and attend music festivals whenever she can.",
    media_links: { linkedin: "www.linkedin.com/in/li-linda" }
  },

  /* 27 */
  liona_li: {
    name: "Liona Li",
    position: "",
    year: "Freshman",
    hometown: "Alameda, CA",
    class: "Lambda",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting, Marketing",
    previous_positions: "",
    bio:
      "PSE has given Liona knowledge of various industries and skills such as time mangament. Her role model is Austrian-American actor and politician Arnold Schwarzenegger. Liona is also involved in ASUC. Her hobbies include hiking, baking, and scrapbooking.",
    media_links: { linkedin: "https://linkedin.com/in/lionali" }
  },

  /* 28 */
  max_seltzer: {
    name: "Max Seltzer",
    position: "",
    year: "Senior",
    hometown: "Los Angeles, CA",
    class: "Delta",
    major: "Political Science",
    minor: "",
    career_interests: "Product Management & UX Design",
    previous_positions: "Vice President of Finance",
    bio:
      "PSE taught Max the value of learning to work with individuals from such diverse backgrounds, and how everyone can contribute to a team. His role model is professional baseball player Derek Jeter. Max is a Birthright Excel Fellow, world traveler, and back-to-back Intramural Softball Champion. He is involved in EnableTech, Intramural sports, is a brother of Phi Kappa Psi social fraternity. Max loves to watch and play sports, read the newspaper, and cultivate above-average Spotify playlists.",
    media_links: { linkedin: "https://linkedin.com/in/maxsseltzer" }
  },

  /* 29 */
  michael_hillsman: {
    name: "Michael Hillsman",
    position: "",
    year: "Freshman",
    hometown: "Tulsa, Oklahoma",
    class: "Lambda",
    major: "Cognitive Science & Computer Science",
    minor: "",
    career_interests: "Software Development, Product Management",
    previous_positions: "",
    bio:
      "Michael has learned ways in which he can better himself professionally as well as how to more effectively work with others towards a common goal. His role models are tech visionaries Elon Musk and Steve Jobs. Michael enjoys software development, day-trading, and tennis.",
    media_links: { linkedin: "www.linkedin.com/in/MichaelHillsman" }
  },

  /* 30 */
  nancy_zhu: {
    name: "Nancy Zhu",
    position: "",
    year: "Senior",
    hometown: "Burlingame, CA",
    class: "Zeta",
    major: "Applied Mathematics",
    minor: "",
    career_interests: "Financial Services",
    previous_positions:
      "Vice President of Human Resources, Director of Brotherhood",
    bio:
      "No matter what field you are trying to get in, personal branding is important. PSE has taught Nancy to discover her passions and strengths and fully leverage them on her way to achieve her goals in all aspects of life. Her role model is Sheryl Sandberg, COO of Facebook. In her free time, Nancy enjoys traveling, doing Blogilates workouts, and singing her heart out at concerts -- and in the backseat of her friends’ cars. She also volunteers as an elementary school mentor in Oakland Chinatown, and serves as an Executive Team member of Women in Network.",
    media_links: { linkedin: "https://linkedin.com/in/nancyzy" }
  },

  /* 31 */
  olivia_lee: {
    name: "Olivia Lee",
    position: "Director of Brotherhood",
    year: "Freshman",
    hometown: "Fullerton, CA",
    class: "Lambda",
    major: "Economics & Computer Science",
    minor: "",
    career_interests: "Technology Consulting & Marketing",
    previous_positions: "",
    bio:
      "Through PSE, Olivia learned about the finer details of the various industries within the business world and the expectations of them. As a result, She found my interest in consulting and marketing, and was able to receive proper support and guidance. Through the constantly ongoing professional development and collaborative projects, She is able to challenge herself to different ideas and perspectives that contribute to her personal growth. Her role model are her parents. Olivia was a CSF Seymour Award Finalist. She loves digital design, journalism, and cooking.",
    media_links: { linkedin: "https://www.linkedin.com/in/oliviasulee/" }
  },

  /* 32 */
  nicholas_chun: {
    name: "Nicholas Chun",
    position: "",
    year: "Junior",
    hometown: "Carmel, IN",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Consulting",
    previous_positions:
      "Director of Internal Recruitment, Vice President of Finance",
    bio:
      "Through PSE, Nicholas now has a better understanding of what it means to effectively work with others professionally while also maintaining close, personal relationships. College is a great time to explore oneself and reach new heights while also forming strong friendships with others and he believes PSE helps him achieve this. His role model is professional wrestler and actor Dwayne 'The Rock' Johnson. Nicholas co-wrote several articles at the American Chamber of Commerce in South Korea, and is involved in the ASUC Office of the Academic Affairs Vice President. He plays the electric guitar, longboards around Berkeley, and listens to music whenever he can.",
    media_links: { linkedin: "https://linkedin.com/in/nicholas-chun-188a98113" }
  },

  /* 33 */
  nick_cheng: {
    name: "Nick Cheng",
    position: "",
    year: "Senior",
    hometown: "Bangkok, Thailand",
    class: "Delta",
    major: "Sustainable Environmental Design",
    minor: "",
    career_interests: "Environmental Consulting",
    previous_positions: "Director of Technology",
    bio:
      "PSE has taught Nick about the power and importance of marketing. His role model is politician and environmentalist Al Gore. Nick won 5th place in the CMYK Designathon, and is an active member of FEMTech, Thai Student Association, and dance team AFX. Nick loves photography, web design, and playing music in his free time.",
    media_links: { linkedin: "https://linkedin.com/in/chengnick" }
  },

  /* 34 */
  peter_vu: {
    name: "Peter Vu",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "",
    class: "Zeta",
    major: "Business Administration",
    minor: "",
    career_interests: "",
    previous_positions: "Vice President of Professional Development",
    bio: "",
    media_links: {}
  },

  /* 35 */
  rahul_rangnekar: {
    name: "Rahul Rangnekar",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "Claremont, CA",
    class: "Theta",
    major: "Computer Science & Economics",
    minor: "",
    career_interests: "Product Management & Software Development",
    previous_positions: "Director of Brotherhood, Vice President of Marketing",
    bio:
      "Through PSE, Rahul has learned to adapt his leadership style and 'fill the gaps' when working with team members who have distinct work ethics and skillsets. He enjoys the experiences PSE has given him - the Under Armour project, the opportunity to code this entire website, and the brotherhood of a lifetime. His role models are retired NBA player Tim Duncan and entrepreneur Tim Ferriss. Rahul was previously involved in the ASUC and American Red Cross at Cal. He enjoys working out daily, writing on Medium and LinkedIn, trying and reviewing restaurants on Yelp, and developing applications for others to enjoy.",
    media_links: {
      linkedin: "https://linkedin.com/in/rahrang",
      medium: "https://medium.com/@rahrang",
      github: "https://github.com/rahrang",
      link: "http://rahrang.xyz"
    }
  },

  /* 36 */
  reina_zhang: {
    name: "Reina Zhang",
    position: "",
    year: "Sophomore",
    hometown: "Beijing, China",
    class: "Lambda",
    major: "Economics & Media Studies",
    minor: "Theater",
    career_interests: "Advertising & Brand Marketing",
    previous_positions: "",
    bio:
      "Reina gained both professional knowledge and brotherhood from PSE. Aside from learning about different fields of business such as finance, she also acquired applicable skills such as public speaking and decking. Being in a marketing fraternity has given Reina insights on potential positions in companies and strengthened her interest in the marketing profession. Her role model is her father. Reina is in the Berkeley Advertising Agency. She enjoys theater lighting design, music, and reading.",
    media_links: { linkedin: "https://www.linkedin.com/in/reinazhang" }
  },

  /* 37 */
  reshma_belur: {
    name: "Reshma Belur",
    position: "Director of Projects",
    year: "Freshman",
    hometown: "Collegeville, PA",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Marketing & Communications",
    previous_positions: "",
    bio:
      "From PSE, Reshma learned the value of community and professional development. Her role model is her brother Varun. Reshma works for the Center on the Economics and Demographics of Aging and the Haas Alumni Association. She also won the Rotary Student Achievement Award. She enjoys meeting new people, taking walks, and online shopping. ",
    media_links: { linkedin: "https://www.linkedin.com/in/reshmabelur" }
  },

  /* 38 */
  rick_choi: {
    name: "Rick Choi",
    position: "",
    year: "Freshman",
    hometown: "Seoul, Korea",
    class: "Lambda",
    major: "Intended Business & Economics",
    minor: "Art Practice",
    career_interests: "Management Consulting, Corporate Law",
    previous_positions: "",
    bio:
      "Through PSE, Rick learned basic information about business and gained important tips in preparing for interviews, resumes, and internships. His role model is South Korean diplomat Ban Ki-moon. Rick is invovled in KASA and Dentro. He also won the China Marchants Art Mural. Rick enjoys playing basketball, sketching, and exercising in his free time.",
    media_links: { linkedin: "www.linkedin.com/in/rick-choi" }
  },

  /* 39 */
  rose_min: {
    name: "Rose Min",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "Shanghai, China",
    class: "Kappa",
    major: "Intended Business",
    minor: "French",
    career_interests: "Consulting & Marketing",
    previous_positions: "",
    bio:
      "PSE has given Rose the opportunity to further explore and practice her interest in different business fields. She's learned the importance of managing her time effectively, the beauty of team work, the strategy behind a personal brand, and networking etiquette. Her role model is actress Emma Watson. She enjoys traveling, photography, and dancing, and is actively involved in the Marketing team of Fashion and Student Trends (FAST).",
    media_links: { linkedin: "https://linkedin.com/in/rosemin" }
  },

  /* 40 */
  rushil_desai: {
    name: "Rushil Desai",
    position: "",
    year: "Senior",
    hometown: "Santa Cruz, CA",
    class: "Zeta",
    major: "Economics",
    minor: "",
    career_interests: "Corporate Banking & Wholesale Credit",
    previous_positions:
      "Vice President of Administration, Prospective Member Trainer",
    bio:
      "PSE has taught Rushil to sell his brand. PSE has given Rushil the tools necessary to overcome barriers in highly competitive industries. PSE has prepared him to break into Investment Banking with interview preparation, networking tips, resume building, and hands-on consulting/marketing projects. Rushil's role model is his mother, Jigisha Desai. He is also involved in Indus South Asian Organization, the ASUC, UC Berkeley Men's Volleyball, and Berkeley College Republicans. Rushil is a Regent's Scholar, and an athlete on the All-Northern California Collegiate Volleyball League 2nd Team. His hobbies include aviation and golfing.",
    media_links: { linkedin: "https://linkedin.com/in/rushil-desai-29a825a7" }
  },

  /* 41 */
  sean_yu: {
    name: "Sean Yu",
    position: "President",
    year: "Junior",
    hometown: "Manila, Philippines",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Corporate Strategy & Financial Technology",
    previous_positions:
      "Prospective Member Trainer, Vice President of Professional Development",
    bio:
      "PSE has taught Sean to be a great communicator. From networking with professionals at career fairs, to public speaking and giving presentations, and to casual chats with strangers, communication has unlocked multiple doors for him and has helped him to develop as an individual. His parents are his role models. Sean was previously involved in Berkeley ABA (Asian Business Association), and his hobbies include playing golf, fishing, and traveling.",
    media_links: { linkedin: "https://linkedin.com/in/seanjcyu" }
  },

  /* 42 */
  syed_adil: {
    name: "Syed Adil",
    position: "",
    year: "Senior",
    hometown: "Kuala Lumpur, Malaysia",
    class: "Zeta",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "Syed appreciates how PSE taught him to learn and understand his teammates in order to make a large impact when working on team projects. He has worked as a PwC Assurance intern and a CIMB Islamic Finance Asset Management Intern over previous summers. His role model is Jack Ma, founder and CEO of the Alibaba Group. Syed is a national fencer, and an active member of the Cal Fencing team. He also plays soccer in his free time.",
    media_links: { linkedin: "https://linkedin.com/in/syedadilemirputra" }
  },

  /* 43 */
  taylor_lee: {
    name: "Taylor Lee",
    position: "Chapter Secretary",
    year: "Senior",
    hometown: "Danville, California",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Accounting & Consulting",
    previous_positions: "Vice President of Administration",
    bio:
      "PSE has taught Taylor a variety of skills, including public speaking, interview skills, and, most importantly, how to get an internship. His role model is Kevin Phan, current president of PSE. Taylor is also actively involved in Cal Rotaract and The Green Initiative Fund. He is knowledgeable in LLC formation, and enjoys distance running (with dogs), playing the guitar, and ice skating.",
    media_links: { linkedin: "https://linkedin.com/in/taylorthomaslee" }
  },

  // /* 44 */
  // tia_chen_wong: {
  //   name: "Tia Chen-Wong",
  //   position: "",
  //   year: "Sophomore",
  //   hometown: "Rancho Santa Margarita, CA",
  //   class: "Kappa",
  //   major: "Intended Business",
  //   minor: "English",
  //   career_interests: "Marketing",
  //   previous_positions: "",
  //   bio:
  //     "Tia has learned to deck beautiful presentations, the mechanics of case competitions, and public speaking skills through PSE. Her role models are actress Emma Watson and Eleanor Roosevelt. Tia enjoys writing creatively, hiking, and reading literature. She is a Resident Assistant (RA) in the Units.",
  //   media_links: { linkedin: "https://linkedin.com/in/tiare-chen-wong" }
  // },

  /* 45 */
  tim_cheng: {
    name: "Tim Cheng",
    position: "Director of Technology",
    year: "Sophomore",
    hometown: "Oak Park, CA",
    class: "Kappa",
    major: "Cognitive Science",
    minor: "Computer Science",
    career_interests: "Software Development",
    previous_positions: "",
    bio:
      "Through PSE, Tim learned to effectively utilize his soft skills such as public speaking in a professional setting. His role model is rapper Kanye West. Tim enjoys working out and trying new foods.",
    media_links: { linkedin: "https://www.linkedin.com/in/tim-cheng/" }
  },

  varsha_kumar: {
    name: "Varsha Kumar",
    position: "",
    year: "Sophomore",
    hometown: "Irvine, CA",
    class: "Lambda",
    major: "Psychology",
    minor: "",
    career_interests: "Data Analytics & Marketing Strategy",
    previous_positions: "",
    bio:
      "Varsha has learned to market herself professionally through PSE. Her role model is her grandma. Varsha enjoys dancing, scrapbooking, and serving the community whenever she can. She holds an Associates Degree of Science in Marketing from Santiago Community College, and created and marketed her own podcast. Outside of PSE, Varsha is part of Azaad Bollywood Dance team and the ASUC Office of Dance.",
    media_links: { linkedin: "https://www.linkedin.com/in/varsha-kumar/" }
  },

  /* 46 */
  varsha_sundar: {
    name: "Varsha Sundar",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "Irvine, CA",
    class: "Kappa",
    major: "Intended Business & Economics",
    minor: "Technology & Entrepreneurship Certificate",
    career_interests: "Management Consulting",
    previous_positions: "",
    bio:
      "PSE has provided Varsha with professional development in respect to interviewing, emailing, and networking. She has gained exposure to various business paths and the ability to unlock hidden potential in herself and others. Her role models are her grandmother and Michelle Obama. Varsha is actively involved in UCB Model United Nations. She is a recipient of the Cal Alumni Leadership Award, and loves to take photos, travel, and review movies in her free time.",
    media_links: { linkedin: "https://linkedin.com/in/varsha-sundar" }
  },

  /* 47 */
  yixuan_lu: {
    name: "Yixuan Lu",
    position: "Vice President of Marketing",
    year: "Junior",
    hometown: "Fremont, CA",
    class: "Iota",
    major: "Media Studies",
    minor: "Political Economy",
    career_interests: "Marketing, Business Development, & Brand Strategy",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "PSE has taught Yixuan the importance of having an excellent personal brand. It has shaped her into a more confident, knowledgeable, and professional individual through coffee chats, case competitions, and various Chapter events. PSE has introduced her to many motivated and successful individuals that she feel beyond blessed to be a part of the diverse community at Cal. Her role model is her grandmother. Yixuan was awarded 2nd place in the 2016 PwC case competition, and is also an active member of Berkeley Women in Business. She loves blogging, watercoloring, and going on road trips.",
    media_links: { linkedin: "https://linkedin.com/in/yixuanlu11280" }
  }
};

export { VP_LIST, ALL_EXECS_LIST, BROTHER_INFO };
