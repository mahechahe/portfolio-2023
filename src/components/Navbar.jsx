import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useLanguage } from '../i18n/LanguageContext'

const LangToggle = ({ className = '' }) => {
  const { t, toggleLang } = useLanguage()
  return (
    <button
      type='button'
      onClick={toggleLang}
      aria-label={t('switchLangLabel')}
      title={t('switchLangLabel')}
      className={`border border-secondary hover:border-white text-secondary hover:text-white rounded-full px-3 py-1 text-[14px] font-semibold tracking-wider transition-colors ${className}`}
    >
      {t('switchLang')}
    </button>
  )
}

const Navbar = () => {
  const { t } = useLanguage()
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20  ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Estiven &nbsp;
            <span className='lg:block hidden '> | {t('role')}</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-10'>
          <ul className='list-none flex flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          <LangToggle />
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.id)
                  }}
                >
                  <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
