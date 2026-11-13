import type { ImageMetadata } from 'astro';

/** Month in "YYYY-MM" form, e.g. "2026-02". */
export type YearMonth = `${number}-${number}`;

/**
 * Text fields marked `Rich` may wrap key numbers in **double asterisks**.
 * They render as <strong>, everything else is escaped.
 */
export type Rich = string;

/** Font Awesome class list, e.g. "fa-brands fa-python". */
export type FaIcon = string;

export interface IconLabel {
  name: string;
  icon: FaIcon;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  whatsapp: string;
}

export interface QuickFact {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  roles: string[];
  headline: string;
  bio: string;
  metaDescription: string;
  about: Rich[];
  quickFacts: QuickFact[];
  favLanguages: IconLabel[];
  interests: IconLabel[];
  email: string;
  phoneDisplay: string;
  linkedinDisplay: string;
  githubDisplay: string;
  links: SocialLinks;
  cvPath: string;
  quote: string;
}

export interface Skill {
  name: string;
  /** Local Devicon SVG. Omitted when Devicon has no logo; the label still shows. */
  icon?: ImageMetadata;
  /** Logo is black, so it is inverted in dark mode to stay visible. */
  invertOnDark?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export type ExperienceType = 'work' | 'research' | 'organisation';

export interface Experience {
  id: string;
  type: ExperienceType;
  role: string;
  org: string;
  unit?: string;
  location: string;
  start: YearMonth;
  end: YearMonth | 'present';
  /** One line shown while the entry is collapsed. */
  summary: string;
  highlights: Rich[];
  tech: string[];
  /** Ids from publications.ts shown as links under this role. */
  publicationIds?: string[];
  defaultOpen?: boolean;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  start: YearMonth;
  end: YearMonth | 'present';
  gpa: string;
  courses: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: YearMonth;
  description: string;
  link?: { label: string; href: string };
}

export interface Certificate {
  title: string;
  issuer: string;
  date: YearMonth;
  description: string;
  credentialId?: string;
  credentialUrl: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  venueShort: string;
  location: string;
  date: YearMonth;
  doi: string;
  authorRole: 'First author' | 'Co-author';
  award?: string;
}

export type ProjectCategory = 'de' | 'ml' | 'dl' | 'analytics';

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line problem statement / card description. */
  summary: string;
  /** "What I did" bullets in the detail dialog. */
  details: string[];
  categories: ProjectCategory[];
  tech: string[];
  metrics?: Metric[];
  /** Short key result shown on featured cards. */
  highlight?: string;
  image: string;
  imageAlt: string;
  repoLink?: string;
  liveLink?: string;
  liveLabel?: string;
  publicationId?: string;
  featured?: boolean;
}
