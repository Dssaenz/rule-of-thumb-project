import { FC } from 'react';

import { MainLayout } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  listSection: boolean;
}

const WrapperList: FC<Props> = ({ children, listSection }) => (
  <MainLayout>
    <section className={listSection ? 'main_template' : 'main_templte--list'}>
      <div className='carousel_container'>{children}</div>
    </section>
  </MainLayout>
);

export default WrapperList;
