import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ExperienceInfo, PageInfo, ProjectInfo, SkillInfo, SocialInfo } from '../typings'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchPage } from '../utils/fetchPage'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { TbChevronsUp } from 'react-icons/tb'

type Props = {
  page: PageInfo;
  experiences: ExperienceInfo[];
  skills: SkillInfo[];
  projects: ProjectInfo[];
  socials: SocialInfo[];
}

const Home = ({ page, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className='py-safe bg-[#3f4040] text-platinum h-screen snap-y snap-mandatory [padding-bottom: env(safe-area-inset-bottom)]
      overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar-thin scrollbar-track-[#515151]/30 scrollbar-thumb-[#6699CC]/90'
    >
      <Head>
        <title>Mitchell Embry Portfolio</title>
      </Head>

      <Header socials= {socials} />

      <section id='hero' className='snap-center scroll-smooth'>
        <Hero page={page}/>
      </section>

      <section id='about' className='snap-center scroll-smooth'>
        <About page={page}/>
      </section>

      <section id='experience' className='snap-center scroll-smooth'>
        <Experience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start scroll-smooth'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start scroll-smooth'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-start scroll-smooth'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-10 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <TbChevronsUp />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page: PageInfo = await fetchPage();
  const experiences: ExperienceInfo[] = await fetchExperiences();
  const projects: ProjectInfo[] = await fetchProjects();
  const skills: SkillInfo[] = await fetchSkills();
  const socials: SocialInfo[] = await fetchSocials();
  return {
    props: {
      page,
      experiences,
      projects,
      skills,
      socials,
    },

    // Next.js will attempt tp re-gen page:
    // - When a request comes in
    // - at most every 100 secs
    revalidate: 100,
  };
};
