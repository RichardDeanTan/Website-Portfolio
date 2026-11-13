import type { Award, Certificate } from '@/types';
import { doiUrl } from '@/lib/format';
import { getPublication } from './publications';

const bestPaper = getPublication('sentiment-2025');

/** Newest first. */
export const awards: Award[] = [
  {
    title: "Dean's List",
    issuer: 'BINUS University',
    date: '2025-12',
    description: 'Recognised on the Dean’s List for academic performance in the Data Science programme.',
  },
  {
    title: 'Best Paper Award, NLP Track',
    issuer: 'Information Technology International Seminar (ITIS) 2025',
    date: '2025-10',
    description: `Awarded for “${bestPaper.title}”, which compared transformer architectures and optimisation strategies for Indonesian financial sentiment.`,
    link: { label: 'Read the paper', href: doiUrl(bestPaper.doi) },
  },
];

/** Newest first. */
export const certificates: Certificate[] = [
  {
    title: 'Efficient Large Language Model (LLM) Customization',
    issuer: 'NVIDIA',
    date: '2025-03',
    description:
      'Hands-on customisation and fine-tuning of large language models for specific tasks, with a focus on efficiency and scalability.',
    credentialId: 'o_GQRYvGR3S33NKZFJ4WMA',
    credentialUrl: 'https://learn.nvidia.com/certificates?id=o_GQRYvGR3S33NKZFJ4WMA',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: '2025-03',
    description:
      'Core concepts of deep learning, including neural network design, training and optimisation techniques.',
    credentialId: 'LoA5WAjHSpSUZJKYpgFwPA',
    credentialUrl: 'https://learn.nvidia.com/certificates?id=LoA5WAjHSpSUZJKYpgFwPA',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM · Coursera',
    date: '2024-09',
    description:
      'A 12-course professional programme covering data science methodology, Python, SQL and machine learning.',
    credentialUrl: 'https://coursera.org/share/e769ca4d0278e09d0c8d8544852ef02d',
  },
];
