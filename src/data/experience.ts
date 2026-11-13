import type { Experience } from '@/types';
import { compareDesc } from '@/lib/format';

const entries: Experience[] = [
  {
    id: 'kalbe',
    type: 'work',
    role: 'Data Engineer Intern',
    org: 'PT Kalbe Farma',
    location: 'Jakarta',
    start: '2026-02',
    end: 'present',
    summary: 'Building and optimising BigQuery data pipelines orchestrated with Apache Airflow.',
    highlights: [
      'Designed and orchestrated **40+ data pipelines** in Google BigQuery using Apache Airflow, implementing Star Schema architectures and Slowly Changing Dimension (SCD Type 2) logic for historical data tracking.',
      'Optimised complex SQL queries across pipeline workflows, **reducing average slot-ms consumption by 54%**.',
      'Migrated workflows from on-premise Oracle to GCP BigQuery and re-engineered the data matching algorithm, cutting processing time from **5 minutes to 10 seconds** while raising output accuracy from **96% to 100%**.',
      'Developed Python scripts with the OpenMetadata SDK to automate **6 data quality metrics**, feeding live dashboards that track data health and compliance for the Data Governance team.',
      'Contributed Airflow DAGs that back up **400+ GB** of on-premise tables into Google Cloud Storage.',
      'Built an end-to-end pipeline architecture (Raw → Staging → DWH → Datamart), ingesting and transforming **20+ source tables** for an analytical dashboard.',
    ],
    tech: ['BigQuery', 'Apache Airflow', 'SQL', 'Python', 'OpenMetadata', 'Oracle', 'GCS'],
    defaultOpen: true,
  },
  {
    id: 'researcher',
    type: 'research',
    role: 'Undergraduate Researcher',
    org: 'BINUS University',
    unit: 'AIRDC & BDSRC',
    location: 'Jakarta',
    start: '2025-04',
    end: '2026-07',
    summary: 'Faculty-mentored deep learning and NLP research, published as three first-authored IEEE papers.',
    highlights: [
      'First-authored **3 research papers** published in IEEE indexing, specialising in deep learning and NLP. One received the **Best Paper Award (NLP track) at ITIS 2025**.',
      'Designed and evaluated transformer-based models on Indonesian financial tweets, comparing multiple architectures with optimisation strategies and robust evaluation of reliability.',
      'Directed research on **efficient and interpretable NLP** models for Indonesian emotion analysis, comparing transformers on model compression, interpretability and performance trade-offs.',
      'Developed a CNN-based plant disease detection model on two merged datasets, benchmarking **5 CNN architectures**.',
    ],
    tech: ['Python', 'Transformers', 'CNN', 'NLP', 'Model Compression'],
    publicationIds: ['emotion-2026', 'sentiment-2025', 'leaf-2025'],
  },
  {
    id: 'dsc',
    type: 'organisation',
    role: 'Research and Development Activist',
    org: 'Data Science Club',
    location: 'Jakarta',
    start: '2025-02',
    end: '2026-01',
    summary: "R&D initiatives, seminars and competition teams in the university's Data Science Club.",
    highlights: [
      'Co-organised an NVIDIA seminar on Efficient LLM Customization attended by **40+ participants**.',
      'Selected for the Dataseekers Competition Team to explore advanced ML/DL topics.',
      'Took part in weekly team discussions to build knowledge and project readiness.',
    ],
    tech: ['Machine Learning', 'Deep Learning', 'LLMs'],
  },
  {
    id: 'mentor',
    type: 'organisation',
    role: 'Binus Mentor',
    org: 'BINUS University',
    unit: 'Student Advisory and Support Center (SASC)',
    location: 'Jakarta',
    start: '2025-02',
    end: '2025-07',
    summary: 'Weekly academic mentoring for fellow students across technical subjects.',
    highlights: [
      'Ran weekly mentoring sessions on statistics, computational physics, algorithms, operating systems and survey sampling.',
      'Wrote practice problems and study materials to reinforce key concepts.',
      'Helped mentees improve their GPA by **up to 10%** through personalised guidance.',
    ],
    tech: ['Statistics', 'Algorithms', 'Teaching'],
  },
];

/** Newest first: current roles on top, then by end date. */
export const experiences: Experience[] = [...entries].sort(
  (a, b) => compareDesc(a.end, b.end) || compareDesc(a.start, b.start),
);
