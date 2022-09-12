import { FC } from 'react';

import { AsideContainer } from './styles';

import peopleImg from '../..//assets/img/bg-people.png';

const AddSection: FC = () => (
  <AsideContainer>
    <aside
      role='doc-tip'
      aria-label='Submit a name'
      className='banner banner-bottom'>
      <img
        role='none'
        alt='banner'
        src={peopleImg}
        className='banner__background'
      />
      <div className='banner__left'>
        <h2 className='banner__heading'>
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className='banner__right'>
        <button className='banner__cta'>Submit a name</button>
      </div>
    </aside>
  </AsideContainer>
);

export default AddSection;
