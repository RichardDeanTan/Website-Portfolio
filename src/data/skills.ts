import type { ImageMetadata } from 'astro';
import type { Skill, SkillGroup } from '@/types';

// Local Devicon SVGs (no CDN). Skills without a Devicon logo show their label only.
import python from 'devicon/icons/python/python-original.svg';
import r from 'devicon/icons/r/r-original.svg';
import c from 'devicon/icons/c/c-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import typescript from 'devicon/icons/typescript/typescript-original.svg';
import airflow from 'devicon/icons/apacheairflow/apacheairflow-original.svg';
import gcp from 'devicon/icons/googlecloud/googlecloud-original.svg';
import terraform from 'devicon/icons/terraform/terraform-original.svg';
import docker from 'devicon/icons/docker/docker-original.svg';
import spark from 'devicon/icons/apachespark/apachespark-original.svg';
import azure from 'devicon/icons/azure/azure-original.svg';
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg';
import sqlserver from 'devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg';
import oracle from 'devicon/icons/oracle/oracle-original.svg';
import tensorflow from 'devicon/icons/tensorflow/tensorflow-original.svg';
import pytorch from 'devicon/icons/pytorch/pytorch-original.svg';
import sklearn from 'devicon/icons/scikitlearn/scikitlearn-original.svg';
import huggingface from 'devicon/icons/huggingface/huggingface-original.svg';
import fastapi from 'devicon/icons/fastapi/fastapi-original.svg';
import opencv from 'devicon/icons/opencv/opencv-original.svg';
import pandas from 'devicon/icons/pandas/pandas-original.svg';
import streamlit from 'devicon/icons/streamlit/streamlit-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import github from 'devicon/icons/github/github-original.svg';
import gitlab from 'devicon/icons/gitlab/gitlab-original.svg';
import vscode from 'devicon/icons/vscode/vscode-original.svg';
import jupyter from 'devicon/icons/jupyter/jupyter-original.svg';

const s = {
  python: { name: 'Python', icon: python },
  sql: { name: 'SQL' },
  r: { name: 'R', icon: r },
  c: { name: 'C', icon: c },
  javascript: { name: 'JavaScript', icon: javascript },
  typescript: { name: 'TypeScript', icon: typescript },
  airflow: { name: 'Apache Airflow', icon: airflow },
  dbt: { name: 'dbt' },
  bigquery: { name: 'BigQuery' },
  gcp: { name: 'Google Cloud', icon: gcp },
  terraform: { name: 'Terraform', icon: terraform },
  docker: { name: 'Docker', icon: docker },
  pyspark: { name: 'PySpark', icon: spark },
  azure: { name: 'Azure', icon: azure },
  postgresql: { name: 'PostgreSQL', icon: postgresql },
  sqlserver: { name: 'SQL Server', icon: sqlserver },
  oracle: { name: 'Oracle', icon: oracle },
  tensorflow: { name: 'TensorFlow', icon: tensorflow },
  pytorch: { name: 'PyTorch', icon: pytorch },
  sklearn: { name: 'scikit-learn', icon: sklearn },
  transformers: { name: 'Hugging Face Transformers', icon: huggingface },
  yolo: { name: 'YOLO' },
  opencv: { name: 'OpenCV', icon: opencv },
  rag: { name: 'RAG / LLMs' },
  fastapi: { name: 'FastAPI', icon: fastapi },
  pandas: { name: 'pandas', icon: pandas },
  powerbi: { name: 'Power BI' },
  tableau: { name: 'Tableau' },
  looker: { name: 'Looker Studio' },
  excel: { name: 'Microsoft Excel' },
  streamlit: { name: 'Streamlit', icon: streamlit },
  git: { name: 'Git', icon: git },
  github: { name: 'GitHub', icon: github, invertOnDark: true },
  gitlab: { name: 'GitLab', icon: gitlab },
  vscode: { name: 'VS Code', icon: vscode },
  jupyter: { name: 'Jupyter', icon: jupyter },
} satisfies Record<string, Skill>;

/** Grouped as on the CV, shown with visible labels in About. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [s.python, s.sql, s.r, s.c, s.javascript, s.typescript],
  },
  {
    title: 'Data Engineering & Cloud',
    skills: [s.airflow, s.dbt, s.bigquery, s.gcp, s.terraform, s.docker, s.pyspark, s.azure],
  },
  {
    title: 'Databases',
    skills: [s.postgresql, s.sqlserver, s.oracle],
  },
  {
    title: 'ML / AI',
    skills: [s.tensorflow, s.pytorch, s.sklearn, s.transformers, s.yolo, s.opencv, s.rag, s.fastapi],
  },
  {
    title: 'Analytics & BI',
    skills: [s.pandas, s.powerbi, s.tableau, s.looker, s.excel],
  },
  {
    title: 'Tools',
    skills: [s.git, s.github, s.gitlab, s.vscode, s.jupyter, s.streamlit],
  },
];

/** Logos in the Home carousel. Only skills that have an icon. */
export const carousel: (Skill & { icon: ImageMetadata })[] = [
  s.python,
  s.airflow,
  s.gcp,
  s.terraform,
  s.docker,
  s.postgresql,
  s.pyspark,
  s.pytorch,
  s.tensorflow,
  s.transformers,
  s.sklearn,
  s.fastapi,
  s.github,
];
