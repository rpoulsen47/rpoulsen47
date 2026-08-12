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
  tagline: "Remote Sensing Analyst",
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
      degree: "B.S., Geography & Environmental Studies",
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
      role:    "Spatial Analysis Lab Intern",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "August 2024 - present",
      blurb:   "Support for students and professors in the geography department through testing and updating GIS labs for classes, creating maps for faculty research projects, and general GIS helpdesk support. Teaching assistant for the GEOG360 Environmental Remote Sensing course in Fall 2024.",
      logo:    "images/logos/ur_shield.png"
    },
    {
      role:    "Undergraduate Research Fellow",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "May 2024 - present",
      blurb:   "Analysis of temporal changes in fall foliage patterns in Shenandoah National Park from 2000-2025 with Dr. Stephanie Spera using quantitative and remote sensing methods in Python and ArcGIS Pro with MODIS imagery, NOAA weather data, and archival fall foliage data. Interpreted survey data about climate change risk perceptions of fall-season visitors to Acadia National Park using statistical analyses in Python to analyze data and wrote an article which has been submitted for publication.",
      logo:    "images/logos/ur_shield.png"
    },
    {
      role:    "Remote Sensing Analyst",
      org:     "NASA EarthRISE Developers Academy | Analytical Mechanics Associates",
      years:   "Summer 2026",
      blurb:   "Analyzed aspen extent change after the 2020 wildfires in Northern Colorado by mapping and comparing pre- and post-fire aspen presence in QGIS. Performed a random forest model in R with environmental variables as predictors to understand the most influential factors in aspen extent change in Northern Colorado. Worked to understand the impacts of long-term drought conditions on aspen forests in Western Colorado using the LandTrendr algorithm in Google Earth Engine. Strengthened scientific communication skills through presentations, paper-writing, and communication with partners.",
      logo:    "images/logos/nasa-logo.png"
    },
    {
      role:    "Landscape Ecology Intern",
      org:     "Texas Parks and Wildlife",
      years:   "Summer 2025",
      blurb:   "Worked on updates the Post-Oak Savannah and Blackland Prairie ecoregions of the Texas Ecological Mapping Systems landcover map by interpreting satellite imagery with field-collected vegetation observations in ArcGIS Pro, processing LiDAR data with Global Mapper Pro to derive canopy height, and updating landcover classifiers in GEE. Surveyed vegetation in the field to improve accuracy of the land cover classification model.",
      logo:    "images/logos/tpwd_green_logo.jpg"
    }
  ],


  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "Desktop GIS",
      skills: ["QGIS", "ArcGIS Pro", "ArcGIS Online", "Global Mapper Pro"]
    },
    {
      label: "Programming",
      skills: ["Python", "R", "JavaScript (GEE)"]
    },
    {
      label: "Remote Sensing",
      skills: ["Landsat", "MODIS", "Sentinel", "LiDAR"]
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
      logo:        "images/logos/ur_shield.png",
      title:       "The Effects of Climate Change on the Timing of Fall Foliage in Shenandoah National Park",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/nps-fall-foliage/shenandoah.jpg",
      blurb:       `University of Richmond`,
      tags:        ["Remote Sensing", "MODIS", "Python"],
      detailPage:  "snp-fall-foliage.html",
      featured:    true,
    },
    {
      slug:        "anp-fall-foliage",
      logo:        "images/logos/ur_shield.png",
      title:       "Leaf-Peeping, Climate Risk Perceptions, and Recreational Tourism in Acadia National Park",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/anp-fall-foliage/acadia.jpg",
      blurb:       `University of Richmond`,
      tags:        ["Outdoor Recreation", "Visitor Surveys", "Python"],
      detailPage:  "anp-fall-foliage.html",
      featured:    false,
    },
    // {
    //   slug:        "tpwd-lep",
    //   logo:        "images/logos/tpwd_green_logo.jpg",
    //   title:       "Texas Parks and Wildlife Summer Internship",
    //   year:        "2025",
    //   type:        "Internship",
    //   thumbnail:   "images/projects/tpwd-lep/posbp-lidar-tx.png",
    //   blurb:       `Texas Parks and Wildlife Landscape Ecology Program`,
    //   tags:        ["LiDAR", "Global Mapper Pro", "Google Earth Engine"],
    //   detailPage:  "projects/anp-fall-foliage.html",
    //   featured:    false,
    // },
    {
      slug:        "nasa-erda",
      logo:        "images/logos/nasa-logo.png",
      title:       "North Central Colorado Wildland Fires",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/erda-wildland-fires/study-area.png",
      blurb:       `NASA EarthRISE Developers Academy`,
      tags:        ["QGIS", "LandTrendr", "Random Forest", "R"],
      detailPage:  "nasa-erda.html",
      featured:    true,
    },
    {
      slug:        "sfs",
      logo:        "images/logos/sfs.jpg",
      title:       "Pali Aike National Park Geomorphological Mapping",
      year:        "2026",
      type:        "Research",
      thumbnail:   "images/projects/sfs/geomap-pa-es.png",
      blurb:       `School for Field Studies Chile`,
      tags:        ["QGIS", "Field Methods", "Geological Mapping"],
      detailPage:  "sfs-pali-aike.html",
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
