import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'AI-native developer based in Seattle. M.S. ECE at UW. Building ML data infrastructure and distributed systems.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            AI-native developer who loves building systems that scale.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Jie, an AI-native developer with an M.S. in Electrical and Computer Engineering
              from the University of Washington (GPA 3.9/4.0). My interests lie in using large-scale
              machine learning to solve real-world problems, and training self-improving agents through
              reinforcement learning. Previously at Amazon, QuanView Technology, and Deep Data
              Investment.
            </p>
            <p>
              My professional work focuses on ML workflows. At Amazon, I built CDK-based ETL pipelines
              that transform millions of service logs daily into structured datasets for BI dashboards
              and model training, cutting manual log search time by 99.9%.
              Before that, at QuanView Technology, I architected a recommendation system serving 15k
              DAU, using a DeepFM ranking model that improved NDCG@10 by 10%.
            </p>
            <p>
              Earlier in my career I worked as a Quantitative Developer at Deep Data Investment, building
              high-performance C++ inference frameworks and end-to-end MLOps CI/CD pipelines. I hold a
              B.S. in Computer Science from Xi&apos;an Jiaotong University, where I graduated as an
              Outstanding Student.
            </p>
            <p>
              Outside of work, I&apos;ve been exploring large-scale ML on my own projects. My{' '}
              <Link
                href="https://github.com/jieyaokuz/alpaca-lora"
                className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              >
                alpaca-lora
              </Link>{' '}
              project built an end-to-end SFT pipeline for a 7B Llama-style model using LoRA adapters,
              with synthesized instruction-response data and an interactive evaluation interface. More
              recently, my{' '}
              <Link
                href="https://github.com/jieyaokuz/medical-pii-robustness"
                className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Medical PII Robustness
              </Link>{' '}
              project evaluated adversarial robustness of PII detection under clinical domain shift,
              using LoRA fine-tuning as a defense, improving clinical F1 from 0.595 to 0.671 while
              surfacing new vulnerabilities to character-level adversarial attacks.
            </p>
            <p>
              My core stack includes Python, Java, PyTorch, Spark, AWS (EC2, S3, CDK, SageMaker), Docker,
              Kubernetes, and TypeScript. Outside of engineering, I&apos;m an athlete: football and the
              gym keep me sharp, and the discipline carries over into everything I build.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="mailto:jieyaokuz@gmail.com" icon={MailIcon}>
              jieyaokuz@gmail.com
            </SocialLink>
            <SocialLink href="https://github.com/jieyaokuz" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jie-yao-188814262/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
