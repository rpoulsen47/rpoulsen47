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

  longBio: `I'm Ryan, a senior at the University of Richmond majoring in Environmental Studies and Geography in the Class of 2027. I enjoy making maps!

            At school, I work as an undergraduate student research fellow with Dr. Stephanie Spera investigating the effects of climate change on the timing of Fall foliage in National Parks across the Eastern US.

            This summer, I am a participant in the NASA EarthRISE Developers Academy at Colorado location in Fort Collins. I'm working on a project mapping aspen forest change after drought and wildfire!

            In summer 2024, I was an intern with Texas Parks and Wildlife updaing the Texas Ecological Mapping systems landcover map.

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
      blurb:   "Research on the effects of climate change on the timing of fall foliage under Dr. Stephanie A. Spera."
    },
    {
      role:    "Landscape Ecology Intern",
      org:     "Texas Parks and Wildlife",
      years:   "Summer 2025",
      blurb:   "Assisted in the updates to the statewide Ecological Mapping Systems landcover map."
    },
    {
      role:    "Remote Sensing Analyst",
      org:     "NASA EarthRISE Developers Academy",
      years:   "Summer 2026",
      blurb:   "Researching the effects of wildfire and drought on aspen forest extent and health."
    },
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
      slug:        "tree-equity",
      title:       "Tree Equity in Jackson Ward",
      year:        "2025",
      type:        "Community Mapping",
      thumbnail:   "images/projects/tree-equity-thumb.svg",
      blurb:       `A block-by-block analysis of canopy gaps in a historically
                    redlined Richmond neighborhood, built with the Historic
                    Jackson Ward Association.`,
      tags:        ["ArcGIS Pro", "Python", "MapLibre", "Community-Engaged"],
      detailPage:  "projects/project-tree-equity.html",
      featured:    true,
    },

    {
      slug:        "acs-uncertainty",
      title:       "Hidden Uncertainty in ACS Health Data",
      year:        "2025",
      type:        "Spatial Statistics",
      thumbnail:   "images/projects/acs-uncertainty-thumb.svg",
      blurb:       `A simulation study showing how margins of error in
                    American Community Survey estimates propagate through
                    public-health risk models.`,
      tags:        ["R", "GLM", "Monte Carlo", "Research"],
      detailPage:  "projects/project-acs-uncertainty.html",
      featured:    true,
    },

    {
      slug:        "kde-traffic",
      title:       "Where the Crashes Cluster",
      year:        "2024",
      type:        "Spatial Analysis",
      thumbnail:   "images/projects/kde-traffic-thumb.svg",
      blurb:       `A kernel density analysis of three years of
                    traffic-accident data in Gainesville, Florida, with
                    an interactive bandwidth control.`,
      tags:        ["QGIS", "Python", "Leaflet", "KDE"],
      detailPage:  "projects/project-kde-traffic.html",
      featured:    true,
    },

    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "sanborn-mosaic",
      title:       "Stitching the Sanborn Atlases of Richmond",
      year:        "2023",
      type:        "Historical GIS",
      thumbnail:   "images/projects/sanborn-mosaic-thumb.svg",
      blurb:       `Georeferenced and mosaicked a set of 1905 Sanborn fire
                    insurance maps into a single cloud-optimized GeoTIFF
                    for use in archival research.`,
      tags:        ["ArcGIS Pro", "GDAL", "COG", "Archives"],
      detailPage:  "projects/project-sanborn-mosaic.html",
      featured:    false,
    },

  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: `I am open to conversations about GIS, cartography,
                community-engaged research, and full-time roles
                starting summer 2026.`,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
