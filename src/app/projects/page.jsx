import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Supervised Fine-Tuning Llama-style 7B Model with LoRA',
    description:
      'End-to-end SFT pipeline for a 7B LLM using LoRA adapters, trained on UW Hyak HPC under Slurm. Built Alpaca-style data preprocessing with anomaly filtering, prompt templating, and dataset distribution analysis. Synthesized domain-specific instruction-response pairs via GPT. Deployed to an interactive inference evaluation interface.',
    link: { href: 'https://github.com/jieyao24/alpaca-lora', label: 'alpaca-lora' },
  },
  {
    name: 'ML ETL Pipeline @ Amazon (Ordering Org)',
    description:
      'CDK-based ETL pipeline extracting and transforming massive streaming data from AWS EC2/S3 into an internal ML datalake, reducing manual log search time by 99.9% (1.5 hours → under 5 seconds). Engineered distributed Spark pipelines processing 1.5M daily entries in 5 minutes with 100% completeness using 10+ bucketing strategies.',
  },
  {
    name: 'DeepFM Recommendation System @ QuanView',
    description:
      'Scalable recommendation system for a digital creator platform with 50k+ users and 15k DAU. Feature extraction pipeline processes 450k daily events with a Vision Transformer for cold-start mitigation. DeepFM ranking model over 10M+ interactions improved NDCG@10 by 10% and CTR by 1.3%. Deployed on Docker/Kubernetes handling 500 QPS at peak.',
  },
  {
    name: 'High-Performance ML Inference Framework @ Deep Data',
    description:
      'Online inference framework for ML models using C++ thread pools and Python shared memory, cutting real-time latency by 44–60% under high concurrency. Integrated ClickHouse as a low-latency feature store with a Protobuf-based data pipeline. End-to-end MLOps CI/CD via Jenkins and Ansible enabling zero-downtime automatic model retraining.',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'ML systems, data infrastructure, and distributed computing projects.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I&apos;ve built"
      intro="ML systems, data pipelines, and distributed systems — a selection of projects from my work at Amazon, QuanView, Deep Data, and UW."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-1"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.link ? (
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              ) : (
                project.name
              )}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {project.link && (
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
