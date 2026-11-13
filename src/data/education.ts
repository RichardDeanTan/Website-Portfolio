import type { Education } from '@/types';

/** Newest first. */
export const education: Education[] = [
  {
    school: 'Bina Nusantara University (BINUS)',
    degree: 'Bachelor of Data Science',
    location: 'Jakarta',
    start: '2023-09',
    end: 'present',
    icon: 'fa-solid fa-graduation-cap',
    gpa: '3.96 / 4.00',
    courses: [
      'Algorithm and Programming',
      'Data Structures',
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Text Mining',
      'Database Technology',
      'Big Data Infrastructure and Technology',
    ],
  },
  {
    school: 'SMAK Penabur Kota Wisata',
    degree: 'High School',
    location: 'Cibubur',
    start: '2020',
    end: '2023',
    icon: 'fa-solid fa-school',
    notes: [
      'Completed secondary education with a strong focus on science and mathematics.',
      'Graduated with a score above 90.',
    ],
  },
];
