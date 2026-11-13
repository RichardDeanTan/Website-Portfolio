import type { Publication } from '@/types';

/** Newest first. Titles link to https://doi.org/<doi>. */
export const publications: Publication[] = [
  {
    id: 'emotion-2026',
    title:
      'Enhancing Efficiency and Transparency in Transformer-Based Emotion Classification for Indonesian Tweets',
    venue: '14th International Conference on Information and Communication Technology (ICoICT 2026)',
    venueShort: 'ICoICT 2026',
    location: 'Bandung, Indonesia',
    date: '2026-07',
    doi: '10.1109/ICoICT71118.2026.11664832',
    authorRole: 'First author',
  },
  {
    id: 'sentiment-2025',
    title: 'Optimizing Transformer-Based Models for Financial Sentiment in Indonesian Stock Tweets',
    venue: '2025 Information Technology International Seminar (ITIS)',
    venueShort: 'ITIS 2025',
    location: 'Mataram, Indonesia',
    date: '2025-10',
    doi: '10.1109/ITIS67966.2025.11308959',
    authorRole: 'First author',
    award: 'Best Paper Award, NLP Track',
  },
  {
    id: 'leaf-2025',
    title: 'CNN Architectures for Multi-Crop Leaf Disease Classification Using a Merged Dataset',
    venue: '2025 Information Technology International Seminar (ITIS)',
    venueShort: 'ITIS 2025',
    location: 'Mataram, Indonesia',
    date: '2025-10',
    doi: '10.1109/ITIS67966.2025.11308783',
    authorRole: 'First author',
  },
];

export function getPublication(id: string): Publication {
  const pub = publications.find((p) => p.id === id);
  if (!pub) throw new Error(`Unknown publication id "${id}"`);
  return pub;
}
