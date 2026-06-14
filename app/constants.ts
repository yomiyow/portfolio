export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CERTIFICATES: 'certificates',
  CONTACT: 'contact',
} as const;

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const navigations = [
  {
    id: SECTION_IDS.HOME,
    href: `#${SECTION_IDS.HOME}`,
    label: capitalize(SECTION_IDS.HOME)
  },
  {
    id: SECTION_IDS.ABOUT,
    href: `#${SECTION_IDS.ABOUT}`,
    label: capitalize(SECTION_IDS.ABOUT)
  },
  {
    id: SECTION_IDS.PROJECTS,
    href: `#${SECTION_IDS.PROJECTS}`,
    label: capitalize(SECTION_IDS.PROJECTS)
  },
  {
    id: SECTION_IDS.CERTIFICATES,
    href: `#${SECTION_IDS.CERTIFICATES}`,
    label: capitalize(SECTION_IDS.CERTIFICATES)
  },
  {
    id: SECTION_IDS.CONTACT,
    href: `#${SECTION_IDS.CONTACT}`,
    label: capitalize(SECTION_IDS.CONTACT)
  },
] as const;

export const SOCIAL = {
  LINKEDIN: 'https://linkedin.com/in/romeo-m-quinones-jr',
  GITHUB: 'https://github.com/yomiyow',
  EMAIL: 'romeoquinones4@gmail.com',
} as const;

export const PROJECT_LINK = {
  OSAS: 'https://osascomplaints.dev',
  KUBERNETES: 'https://github.com/GoogleCloudPlatform/microservices-demo',
  RECIPE_APP: 'https://github.com/yomiyow/recipe-app#-demo',
  FLASHCARD_APP: 'https://github.com/yomiyow/flashcard-app#-demo',
  CCMS: 'https://github.com/yomiyow/citizen-complaint-management-system#citizen-complaint-management-system-ccms',
  LMS: 'https://github.com/yomiyow/library-management-system#-library-management-system',
} as const;