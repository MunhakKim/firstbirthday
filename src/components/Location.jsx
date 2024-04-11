import React from 'react';
import './Location.css';
import cafeImage from '../assets/location.png';
import { HiOutlineMapPin } from 'react-icons/hi2';

const Location = () => {
  return (
    <section className='location__container' id='area'>
      <div>
        <h2 className='section__title'>홍록기파티하우스 수원점</h2>
        {/* Navigation Link */}
        <div className='location-button-group-wrapper'>
          <div className='button-group'>
            <a
              href='https://naver.me/5JJQh1Gq'
              target='_blank'
              rel='noreferrer'
              className='button button-primary button--flex'
            >
              네이버지도
              <HiOutlineMapPin className='button--flex--icon' />
            </a>

            <a
              href='https://place.map.kakao.com/26262361'
              target='_blank'
              rel='noreferrer'
              className='button button-reverse button--flex'
            >
              카카오지도
              <HiOutlineMapPin className='button--flex--icon' />
            </a>
          </div>
        </div>
        <span className='section__subtitle'>
         경기 용인시 기흥구 흥덕1로 13 
         <br />
        흥덕IT밸리 컴플렉스동 2F
          <br />
          <br />
          ■ 주차 : 컴플렉스동 지하2-3층에 주차후, 
          <br />
          엘리베이터 이용 → 지상 2층
          <br />
          * GATE 상관없이 진입후, 
          <br />
          지하 2-3층 "E 기둥"에 주차하시면 편리합니다
          <br />
          <br />
          ■ 대중교통 : 흥덕IT밸리, 영덕레스피아, 
          <br />
          삼성전자입구 정거장 → 도보 5분
        </span>
      </div>

      {/* Map Image */}
      <div className='location__wrapper'>
        <img src={cafeImage} alt='카페이미지' className='location__img' />
      </div>
    </section>
  );
};

export default Location;
