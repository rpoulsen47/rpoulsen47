/* ============================================================
   GIS PORTFOLIO TEMPLATE — CONFIG
   ============================================================

   This is the ONE file you need to edit to make the site yours.
   Every page on the site reads from here. Change something
   here, and it updates on the homepage, the projects page,
   the about page, and the contact page all at once.

   Rules of thumb:
   - Keep the quote marks around each value
   - Keep the commas at the end of each line
   - Don't delete the curly braces { } or square brackets [ ]

   ============================================================ */


const CONFIG = {

  // =========================================================
  // BASICS — name, contact, headshot
  // =========================================================

  name: "Ryan Poulsen",
  tagline: "NASA ERDA Developer",
  location: "Richmond, Virginia",

  email:    "ryan.poulsen47@gmail.com",
  github:   "https://github.com/rpoulsen47",
  linkedin: "https://linkedin.com/in/rpoulsen47",
  website:  "www.ryanpoulsen.net",   // leave as "" to hide

  headshot: "images/headshot.jpg",


  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================

  shortBio: `Senior at the University of Richmond studying Geography
             and Environmental Studies.`,


  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================

  longBio: `Hey! I'm Ryan, a senior at the University of Richmond majoring in Environmental Studies and Geography in the Class of 2027. I enjoy making maps!\n
            At school, I work as an undergraduate student research fellow with Dr. Stephanie Spera investigating the effects of climate change on the timing of Fall foliage in National Parks across the Eastern US.\n
            This summer, I am a participant in the NASA EarthRISE Developers Academy at Colorado location in Fort Collins. I'm working on a project mapping aspen forest change after drought and wildfire!\n
            In summer 2024, I was an intern with Texas Parks and Wildlife updaing the Texas Ecological Mapping systems landcover map.\n
            When not troubleshooting code or making maps, I'm likely outdoors hiking or birdwatching, taking photos on my film camera, or training for a triathlon.`,

  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================

  education: [
    {
      school: "University of Richmond",
      degree: "B.A., Geography & Data Science",
      year:   "Expected May 2027",
      note:   ""
    },
    // Add high school, study abroad, certificate programs, etc. here
    // {
    //   school: "...",
    //   degree: "...",
    //   year:   "...",
    //   note:   ""
    // },
  ],


  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================

  experience: [
    {
      role:    "Undergraduate Research Fellow",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "May 2024 - present",
      blurb:   "Research on the effects of climate change on the timing of fall foliage under Dr. Stephanie A. Spera.",
      logo:    "images/logos/leif.png"
    },
    {
      role:    "Remote Sensing Analyst",
      org:     "NASA EarthRISE Developers Academy",
      years:   "Summer 2026",
      blurb:   "Researching the effects of wildfire and drought on aspen forest extent and health.",
      logo:    "images/logos/nasa-logo.png"
    },
    {
      role:    "Landscape Ecology Intern",
      org:     "Texas Parks and Wildlife",
      years:   "Summer 2025",
      blurb:   "Assisted in the updates to the statewide Ecological Mapping Systems landcover map.",
      logo:    "images/logos/tpwd_green_logo.png"
    }
  ],


  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "Desktop GIS",
      skills: ["ArcGIS Pro", "QGIS", "ArcGIS Online"]
    },
    {
      label: "Programming",
      skills: ["Python", "R", "JavaScript (GEE)"]
    }
  ],


  // =========================================================
  // PROJECTS — the most important section
  // =========================================================
  //
  // Each project has a "slug" (a short id used for the URL)
  // and a "detailPage" (the file that holds the case study).
  //
  // To add a project: copy a whole { ... } block, paste it
  // below, and edit the values.
  //
  // The "featured: true" flag means it shows on the homepage.
  // Mark 3 as featured. The rest show on the projects page only.
  //
  // =========================================================

  projects: [
    {
      slug:        "snp-fall-foliage",
      logo:        "images/logos/leif.png",
      title:       "The Effects of Climate Change on the Timing of Fall Foliage in Shenandoah National Park",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/nps-fall-foliage/shenandoah.jpg",
      blurb:       `University of Richmond`,
      tags:        ["Remote Sensing", "MODIS", "Python"],
      detailPage:  "projects/snp-fall-foliage.html",
      featured:    true,
    },
    {
      slug:        "anp-fall-foliage",
      logo:        "images/logos/leif.png",
      title:       "Leaf-Peeping, Climate Risk Perceptions, and Recreational Tourism in Acadia National Park",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/anp-fall-foliage/acadia.jpg",
      blurb:       `University of Richmond`,
      tags:        ["Outdoor Recreation", "Visitor Surveys", "Python"],
      detailPage:  "projects/anp-fall-foliage.html",
      featured:    false,
    },
    {
      slug:        "tpwd-lep",
      logo:        "images/logos/tpwd_green_logo.jpg",
      title:       "Texas Parks and Wildlife Summer Internship",
      year:        "2025",
      type:        "Internship",
      thumbnail:   "images/projects/tpwd-lep/tpwd.jpg",
      blurb:       `Texas Parks and Wildlife Landscape Ecology Program`,
      tags:        ["LiDAR", "Global Mapper Pro", "Google Earth Engine"],
      detailPage:  "projects/anp-fall-foliage.html",
      featured:    false,
    },
    {
      slug:        "nasa-erda",
      logo:        "images/logos/nasa-logo.png",
      title:       "North Central Colorado Wildland Fires",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/tpwd-lep/tpwd.jpg",
      blurb:       `NASA EarthRISE Developers Academy`,
      tags:        ["QGIS", "LandTrendr", "Random Forest", "R"],
      detailPage:  "projects/anp-fall-foliage.html",
      featured:    true,
    },
    {
      slug:        "sfs",
      logo:        "images/logos/sfs.jpg",
      title:       "Pali Aike National Park Geomorphological Mapping",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/tpwd-lep/tpwd.jpg",
      blurb:       `School for Field Studies Chile`,
      tags:        ["QGIS", "Field Methods", "Geological Mapping"],
      detailPage:  "projects/anp-fall-foliage.html",
      featured:    true,
    }
  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: ``,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
