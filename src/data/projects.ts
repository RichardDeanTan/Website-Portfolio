import type { Project, ProjectCategory } from '@/types';

export const categoryLabels: Record<ProjectCategory, string> = {
  de: 'Data Engineering',
  ml: 'Machine Learning',
  dl: 'Deep Learning & NLP',
  analytics: 'Data Analytics',
};

/** Order of the filter buttons after "All". */
export const categoryOrder: ProjectCategory[] = ['de', 'ml', 'dl', 'analytics'];

/** Placeholder images from Unsplash until real screenshots replace them. */
const unsplash = (path: string) => `https://${path}?auto=format&fit=crop&w=1200&q=70`;

/** Featured projects first, then the order below. */
export const projects: Project[] = [
  {
    slug: 'rental-data-pipeline',
    title: 'Rental Data Pipeline',
    summary:
      'End-to-end batch pipeline that moves rental data from PostgreSQL into a BigQuery warehouse, modelled for analytics.',
    details: [
      'Migrated source data from PostgreSQL to Google Cloud Storage (GCS) and BigQuery.',
      'Implemented a Medallion architecture (Bronze, Silver, Gold) with a Star Schema for OLAP queries.',
      'Orchestrated dbt transformations and schedules with Apache Airflow and Astronomer Cosmos.',
      'Provisioned GCS buckets and IAM controls as code with Terraform.',
    ],
    categories: ['de'],
    tech: ['PostgreSQL', 'GCS', 'BigQuery', 'dbt', 'Apache Airflow', 'Astronomer Cosmos', 'Terraform'],
    highlight: 'Medallion + Star Schema on BigQuery, orchestrated with dbt and Airflow',
    image: unsplash('images.unsplash.com/photo-1558494949-ef010cbdcc31'),
    imageAlt: 'Server racks with network cabling',
    repoLink: 'https://github.com/RichardDeanTan/Rental-Pipeline-System',
    featured: true,
  },
  {
    slug: 'indonesian-stock-sentiment',
    title: 'Indonesian Stock Sentiment Analysis',
    summary:
      'Sentiment classifier for Indonesian stock-market tweets, fine-tuned from IndoBERTweet and deployed as a web app.',
    details: [
      'Fine-tuned IndoBERTweet and compared it with TF-IDF + classical ML baselines and LLMs.',
      'Fine-tuned an LLM with LoRA and compared it against IndoBERTweet.',
      'Deployed to Streamlit Cloud and published the model on Hugging Face.',
      'The research behind this project won Best Paper (NLP track) at ITIS 2025.',
    ],
    categories: ['dl', 'ml'],
    tech: ['Python', 'TensorFlow', 'Hugging Face Transformers', 'LoRA', 'Streamlit'],
    highlight: 'IndoBERTweet fine-tuned and deployed · Best Paper, ITIS 2025',
    image: unsplash('plus.unsplash.com/premium_photo-1739123854182-339bb87b89fa'),
    imageAlt: 'Row of emoji faces from angry to happy, representing sentiment',
    repoLink: 'https://github.com/RichardDeanTan/Indonesian-Stock-Sentiment-Analysis',
    liveLink: 'https://indonesian-stock-sentiment-analysis-richardtanjaya.streamlit.app',
    publicationId: 'sentiment-2025',
    featured: true,
  },
  {
    slug: 'uber-data-analysis',
    title: 'Uber Data Analysis',
    summary:
      'SQL-driven exploration of Uber trip data in PostgreSQL, presented as an interactive Power BI dashboard.',
    details: [
      'Explored the dataset with PostgreSQL and PL/pgSQL before any visualisation.',
      'Used aggregations, stored procedures and time-based analysis to extract insights.',
      'Built an interactive Power BI dashboard with bookmarks, DAX measures and dynamic charts.',
    ],
    categories: ['analytics'],
    tech: ['PostgreSQL', 'PL/pgSQL', 'Power BI', 'DAX'],
    image: unsplash('images.unsplash.com/photo-1657947953120-6e5201f3b3ed'),
    imageAlt: 'Phone showing the Uber app logo',
    repoLink: 'https://github.com/RichardDeanTan/Uber-Data-Analysis',
    liveLink: 'https://bit.ly/RichardDeanTanjaya-UberDashboard',
    liveLabel: 'Dashboard',
  },
  {
    slug: 'credit-score-approval',
    title: 'Credit Score Approval',
    summary: 'Predicts credit approval with a reusable preprocessing pipeline and fine-tuned ML and DL models.',
    details: [
      'EDA, feature engineering, model training and evaluation in a Jupyter notebook.',
      'Built a reusable preprocessing pipeline shared by training and deployment.',
      'Fine-tuned both machine learning and deep learning models and compared them.',
    ],
    categories: ['ml'],
    tech: ['Python', 'pandas', 'scikit-learn', 'TensorFlow', 'Streamlit'],
    metrics: [
      { label: 'Best ML model', value: '76.98%' },
      { label: 'Best DL model', value: '78.36%' },
    ],
    image: unsplash('images.unsplash.com/photo-1560520653-9e0e4c89eb11'),
    imageAlt: 'Small model house on top of paperwork',
    repoLink: 'https://github.com/RichardDeanTan/Credit-Score-Approval',
    liveLink: 'https://credit-score-approval-richardtanjaya.streamlit.app/',
  },
  {
    slug: 'personal-chatbot-rag',
    title: 'Personal Chatbot with RAG (RichBot)',
    summary:
      'Retrieval-augmented assistant that answers questions from uploaded documents using FAISS and an LLM.',
    details: [
      'RAG pipeline with a FAISS vector store, Hugging Face embeddings and LLM prompts.',
      'Supports custom document upload (.docx) and session-based conversation.',
      'Deployed on Streamlit Cloud with configurable LLM parameters.',
    ],
    categories: ['dl'],
    tech: ['Python', 'LangChain', 'FAISS', 'Hugging Face Embeddings', 'Streamlit'],
    image: unsplash('plus.unsplash.com/premium_photo-1677094310919-d0361465d3be'),
    imageAlt: '3D robot beside a phone showing a chat conversation',
    repoLink: 'https://github.com/RichardDeanTan/Personal-Chatbot-With-RAG',
    liveLink: 'https://personal-chatbot-with-rag-richardtanjaya.streamlit.app',
  },
  {
    slug: 'brain-tumor-detection',
    title: 'Brain Tumor Object Detection (YOLOv8)',
    summary: 'Locates and classifies brain tumours in MRI images and video with a custom-trained YOLOv8 model.',
    details: [
      'Custom-trained YOLOv8 with bounding boxes, evaluated with mAP and recall.',
      'Streamlit app supports image, video and real-time webcam input.',
      'Includes model weights and scripts for restructuring the dataset.',
    ],
    categories: ['dl'],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit'],
    image: unsplash('plus.unsplash.com/premium_photo-1690297732590-b9875f77471d'),
    imageAlt: 'Wireframe 3D render of a human brain',
    repoLink: 'https://github.com/RichardDeanTan/Brain-Tumor-Object-Detection',
    liveLink: 'https://brain-tumor-object-detection-richardtanjaya.streamlit.app',
  },
  {
    slug: 'brain-tumor-classification',
    title: 'Brain Tumor Image Classification',
    summary: 'Multi-class MRI classifier comparing EfficientNet and EfficientViT, with a Streamlit interface.',
    details: [
      'Trained and compared EfficientNet-B2 and EfficientViT-B1; the deployed app uses the better model.',
      'Upload an MRI image to see per-class confidence scores and the model comparison.',
    ],
    categories: ['dl'],
    tech: ['Python', 'Transfer Learning', 'Vision Transformer', 'PyTorch', 'Streamlit'],
    image: unsplash('images.unsplash.com/photo-1559757175-0eb30cd8c063'),
    imageAlt: 'Anatomical model of a human brain',
    repoLink: 'https://github.com/RichardDeanTan/Brain-Tumor-Image-Classification',
    liveLink: 'https://brain-tumor-image-classification-richardtanjaya.streamlit.app',
  },
  {
    slug: 'disaster-image-classification',
    title: 'Disaster Image Classification',
    summary: 'CNN classifier that recognises disaster types from images, with a focus on real-world preprocessing.',
    details: [
      'EDA, augmentation, training and evaluation notebooks.',
      'Practical preprocessing for noisy, real-world image data.',
      'Best results came from an EfficientNet-B2 model.',
    ],
    categories: ['dl'],
    tech: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning'],
    metrics: [{ label: 'F1-macro', value: '90%' }],
    image: unsplash('images.unsplash.com/photo-1475776408506-9a5371e7a068'),
    imageAlt: 'Volcano erupting a large ash cloud',
    repoLink: 'https://github.com/RichardDeanTan/Disaster-Image-Classification',
  },
  {
    slug: 'indonesian-article-summarization',
    title: 'Indonesian Article Summarization',
    summary: 'Abstractive summarisation of Indonesian news articles with IndoBART, evaluated with ROUGE.',
    details: [
      'Preprocessing and summarisation experiments in notebooks.',
      'Compared transformer-based summarisation approaches.',
      'Fine-tuned IndoBART and evaluated it with ROUGE scores.',
    ],
    categories: ['dl'],
    tech: ['Python', 'Hugging Face Transformers', 'IndoBART', 'Streamlit'],
    image: unsplash('images.unsplash.com/photo-1585241936939-be4099591252'),
    imageAlt: 'Close-up of a printed newspaper page',
    repoLink: 'https://github.com/RichardDeanTan/indonesian-article-summarization',
    liveLink: 'https://indonesian-article-summarization-richardtanjaya.streamlit.app/',
  },
  {
    slug: 'customer-segmentation',
    title: 'Customer Segmentation: Shopping Trends',
    summary: 'Clusters shoppers by behaviour and turns the clusters into actionable segment profiles.',
    details: [
      'EDA and clustering on a shopping-trends dataset.',
      'Segment summaries and visualisations for stakeholders.',
      'Includes a presentation PDF summarising the findings.',
    ],
    categories: ['analytics', 'ml'],
    tech: ['Python', 'pandas', 'scikit-learn'],
    image: unsplash('plus.unsplash.com/premium_photo-1738908521678-bc684edb8847'),
    imageAlt: 'Shopping cart illustration',
    repoLink: 'https://github.com/RichardDeanTan/Customer-Segmentation-Shopping-Trend',
  },
  {
    slug: 'carbon-emission-bayesian',
    title: 'Carbon Emission Analysis (Bayesian)',
    summary: 'Bayesian analysis of CO2 emissions trends with a reproducible R Markdown report.',
    details: [
      'R Markdown workflow combining analysis and report, with the dataset CSVs included.',
      'Bayesian modelling with results presented in a PDF report and slides.',
      'Focus on interpretability and statistical inference for emissions trends.',
    ],
    categories: ['analytics'],
    tech: ['R', 'R Markdown', 'tidyverse', 'Bayesian statistics'],
    image: unsplash('images.unsplash.com/photo-1635695604201-2b718204bccb'),
    imageAlt: 'Factory chimneys with a CO2 sign',
    repoLink: 'https://github.com/RichardDeanTan/Carbon-Emission-Analysis-Bayesian-Approach-',
  },
  {
    slug: 'hotel-booking-prediction',
    title: 'Hotel Booking Status Prediction',
    summary: 'Predicts hotel booking cancellations, from EDA and modelling through to a small deployment demo.',
    details: [
      'EDA and model building for hotel booking status prediction.',
      'Deployment-ready notebooks demonstrating inference and reporting.',
    ],
    categories: ['ml', 'analytics'],
    tech: ['Python', 'scikit-learn', 'pandas', 'Streamlit'],
    image: unsplash('images.unsplash.com/photo-1504652517000-ae1068478c59'),
    imageAlt: 'Neon hotel sign on a building at night',
    repoLink: 'https://github.com/RichardDeanTan/Hotel-Prediction-UTS-Model-Deployment',
  },
  {
    slug: 'student-performance',
    title: 'Student Performance Prediction',
    summary: 'Classical ML pipeline that predicts student performance, with EDA and feature engineering.',
    details: [
      'Standard ML pipeline for classification and regression on a student dataset.',
      'Visualisations and model metric reporting.',
    ],
    categories: ['ml'],
    tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit'],
    image: unsplash('plus.unsplash.com/premium_photo-1733342678263-f53160dcd9e1'),
    imageAlt: 'Person at a laptop with a graduation cap icon and education graphics',
    repoLink: 'https://github.com/RichardDeanTan/Student-Perfromance-Machine-Learning',
    liveLink: 'https://student-perfromance-machine-learning-richard-tanjaya.streamlit.app/',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function countByCategory(category: ProjectCategory): number {
  return projects.filter((p) => p.categories.includes(category)).length;
}
