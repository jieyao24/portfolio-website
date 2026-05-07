import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoAmazon from '@/images/logos/amazon-icon.svg'
import logoQuanView from '@/images/logos/quan-view-icon.png'
import logoUW from '@/images/logos/uw-logo.png'
import logoXJTU from '@/images/logos/xjtu-logo.png'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      <mask
        id="mask0_408_134"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_408_134)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_134"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_134"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={article.link?.href}>
        {article.name}
      </Card.Title>
      <Card.Eyebrow decorate>
        {article.tags}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      {article.link?.href && <Card.Cta>View project</Card.Cta>}
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
        {role.logo ? (
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        ) : (
          <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300">{role.logoText}</span>
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function AcademicCapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.63 48.63 0 0 1 12 20.904a48.63 48.63 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Amazon',
      title: 'Software Engineer Intern',
      logo: logoAmazon,
      start: 'Jun 2025',
      end: 'Sep 2025',
    },
    {
      company: 'QuanView Technology',
      title: 'Machine Learning Engineer Intern',
      logo: logoQuanView,
      start: 'Jun 2023',
      end: 'Aug 2024',
    },
    {
      company: 'Deep Data Investment',
      title: 'Quantitative Developer',
      logoText: 'DD',
      start: 'May 2022',
      end: 'May 2023',
    },
  ]

  let education = [
    {
      company: 'University of Washington',
      title: 'M.S. Electrical & Computer Engineering · GPA 3.9/4.0',
      logo: logoUW,
      start: 'Sep 2024',
      end: 'Jun 2026',
    },
    {
      company: "Xi'an Jiaotong University",
      title: 'B.S. Computer Science',
      logo: logoXJTU,
      start: 'Sep 2017',
      end: 'Jul 2021',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <AcademicCapIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {education.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>
    </div>
  )
}

function Photos() {
  return null
}

export default async function Home() {
  const featuredProjects = [
    {
      name: 'ML ETL Pipeline @ Amazon (Ordering Org)',
      description:
        'Built a CDK-based ETL pipeline that transforms millions of daily service logs from AWS EC2/S3 into a structured ML datalake, cutting manual log search time by 99.9% (1.5 hrs → under 5 seconds). Engineered distributed Spark pipelines processing 1.5M daily entries in 5 minutes with 100% completeness using 10+ bucketing strategies. Deployed Amazon Maestro as an IaC orchestrator for ML/ETL workflows with an auto-scaling cluster architecture across international teams.',
      tags: 'AWS CDK · Spark · ETL · S3 · IaC',
    },
    {
      name: 'DeepFM Recommendation System @ QuanView',
      description:
        'Architected a recommendation system for a digital creator platform with 50k+ users and 15k DAU. Built a feature extraction pipeline processing 450k daily interaction events, integrating a pre-trained Vision Transformer to generate visual embeddings and mitigate cold-start. Trained a DeepFM ranking model on 10M+ interactions that improved NDCG@10 by 10% and CTR by 1.3%. Deployed on Docker/Kubernetes handling 500 QPS at peak.',
      tags: 'PyTorch · DeepFM · Vision Transformer · Docker · Kubernetes',
    },
  ]

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            &lt;Developer /&gt;, Athlete 🏈
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Jie, a software engineer based in Seattle pursuing my M.S. in ECE at the University of
            Washington. I build ML data workflows and distributed systems, from ETL pipelines
            processing millions of daily events to fine-tuning large language models. Previously at
            Amazon, QuanView Technology, and Deep Data Investment. Off the clock, you&apos;ll find me on
            the football field and at the gym — I believe the same discipline that wins games drives
            great engineering.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/jieyao24"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jie-yao-188814262/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="ml-3">Featured Projects</span>
              </h2>
              <div className="mt-6 flex flex-col gap-16">
                {featuredProjects.map((project) => (
                  <Article key={project.name} article={project} />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
