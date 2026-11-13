import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'Richard Dean Tanjaya',
  roles: ['Data Engineer', 'Data Scientist', 'AI Engineer'],
  headline: 'Data Engineer Intern @ Kalbe Farma · Data Science @ BINUS (GPA 3.96)',
  bio:
    'I build data pipelines on GCP, BigQuery and Airflow, and research deep learning and NLP, with three first-authored IEEE papers so far. ' +
    'I work across the whole data lifecycle, from raw source tables to deployed models.',
  metaDescription:
    'Richard Dean Tanjaya: Data Engineer, Data Scientist and AI Engineer. Data pipelines on GCP, BigQuery and Airflow, ' +
    'and IEEE-published research in deep learning and NLP.',
  about: [
    "I'm a Data Science student at BINUS University and a **Data Engineer Intern at PT Kalbe Farma**, " +
      'where I design and maintain BigQuery pipelines orchestrated with Apache Airflow, and migrate on-premise Oracle workflows to Google Cloud.',
    'Before that, I spent over a year as an undergraduate researcher at BINUS AIRDC & BDSRC, working on transformer and CNN models. ' +
      'That work produced **three first-authored IEEE papers**, one of which won **Best Paper in the NLP track at ITIS 2025**.',
    'I enjoy problems that sit between engineering and modelling: getting messy data into a clean, trustworthy shape, then building something useful on top of it.',
  ],
  quickFacts: [
    { value: '3', label: 'IEEE papers, first author' },
    { value: 'Best Paper', label: 'NLP track, ITIS 2025' },
    { value: '40+', label: 'production data pipelines' },
    { value: '3.96', label: 'GPA out of 4.00' },
  ],
  favLanguages: [
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
    { name: 'R', icon: 'fa-brands fa-r-project' },
  ],
  interests: [
    { name: 'Data Engineering', icon: 'fa-solid fa-diagram-project' },
    { name: 'NLP', icon: 'fa-solid fa-language' },
    { name: 'Deep Learning', icon: 'fa-solid fa-layer-group' },
  ],
  email: 'richardtan2206@gmail.com',
  phoneDisplay: '(+62) 821-1135-5799',
  linkedinDisplay: 'Richard Dean Tanjaya',
  githubDisplay: 'RichardDeanTan',
  links: {
    linkedin: 'https://www.linkedin.com/in/richarddeantanjaya/',
    github: 'https://github.com/RichardDeanTan',
    whatsapp: 'https://wa.me/6282111355799',
  },
  cvPath: '/cv/Richard-Dean-Tanjaya-CV.pdf',
  quote: 'Striving for excellence, one line of code at a time.',
};
