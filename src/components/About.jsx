import React from 'react';
import './About.css';
import aboutGif from '../assets/profile_2.gif'
import { HiOutlineCalendarDays, HiOutlineCheckCircle, HiUsers } from 'react-icons/hi2';
import { LiaBabySolid } from 'react-icons/lia';

const About = () => {
  return (
    <section className='about__container' id='about'>
      <h2 className='section__title'>유주를 소개합니다.</h2>

      {/* Grid 4 x 4 */}
      <div className='grid__wrapper grid'>
        {/* Profile Image */}
        <img src={aboutGif} alt='my son' className='about__img' />

        <div className='about__box'>
          <HiUsers size={25} />
          <span className='about__subtitle'>아빠</span>
          <h3 className='about__title'>김문학</h3>
          <span className='about__subtitle'>엄마</span>
          <h3 className='about__title'>이승미</h3>
        </div>

        <div className='about__box'>
          <HiOutlineCalendarDays size={25} />
          <span className='about__subtitle'>출생일</span>
          <h3 className='about__title'>2023.05.18</h3>
        </div>

        <div className='about__box'>
          <LiaBabySolid size={25} />
          <span className='about__subtitle'>키/몸무게</span>
          <h3 className='about__title'>74cm/8.7kg</h3>
        </div>

        <div className='about__box'>
          <HiOutlineCheckCircle size={25} />
          <span className='about__subtitle'>영유아 검진</span>
          <h3 className='about__title'>
            모든 게{' '}
            <span style={{ color: 'green', fontSize: '2.25rem' }}>정상</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
