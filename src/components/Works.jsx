import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects, personalProjects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useLanguage } from '../i18n/LanguageContext'

const ExternalIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' className='w-1/2 h-1/2' aria-hidden='true'>
    <path d='M14 4h6v6' />
    <path d='M20 4 10 14' />
    <path d='M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5' />
  </svg>
)

const ProjectCard = ({ index, name, description, tags, image, link, company }) => {
  const { t, tr } = useLanguage()

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)}>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            loading='lazy'
            className='w-full h-full object-cover object-top rounded-2xl'
          />

          {link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${t('visitSite')}: ${name}`}
                title={t('visitSite')}
                className='black-gradient text-white w-10 h-10 rounded-full flex justify-center items-center'
              >
                <ExternalIcon />
              </a>
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {company && (
            <p className='mt-1 text-[13px] text-[#915EFF] font-medium'>
              {t('builtAt')} {company}
            </p>
          )}
          <p className='mt-2 text-secondary text-[14px]'>{tr(description)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { t } = useLanguage()

  return (
    <>
      <span className='hash-span' id='projects'>&nbsp;</span>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projectsSub')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projectsHead')}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('projectsText')}
        </motion.p>
      </div>

      <h3 className='mt-16 text-white font-bold text-[22px]'>{t('clientProjects')}</h3>
      <div className='mt-8 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>

      <h3 className='mt-16 text-white font-bold text-[22px]'>{t('personalProjects')}</h3>
      <div className='mt-8 flex flex-wrap gap-7'>
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
