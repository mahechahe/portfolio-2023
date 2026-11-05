import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { useLanguage } from '../i18n/LanguageContext'

const FeedbackCard = ({ index, testimonial, name, designation, relation, image }) => {
  const { t, tr } = useLanguage()

  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.3, 0.75)}
      className='bg-black-200 p-8 rounded-3xl sm:w-[calc(50%_-_14px)] w-full flex flex-col'
    >
      <p className='text-white font-black text-[48px] leading-none'>"</p>

      <p className='mt-3 text-white tracking-wide text-[16px] leading-[28px] flex-1'>
        {tr(testimonial)}
      </p>

      <div className='mt-7 flex justify-between items-center gap-3'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation}</p>
          <p className='mt-1 text-secondary text-[12px]'>
            {tr(relation)} · {t('viaLinkedIn')}
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className='w-12 h-12 rounded-full object-cover'
        />
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  const { t } = useLanguage()

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t('testimonialsSub')}</p>
          <h2 className={styles.sectionHeadText}>{t('testimonialsHead')}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
