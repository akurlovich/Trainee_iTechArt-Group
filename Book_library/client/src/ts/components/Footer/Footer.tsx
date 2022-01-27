import React, { FC } from 'react';
import './footer.scss';

const FooterInner: FC = () => {
  return (
    <div className='footer__wrapper'>
      hi 1111
    </div>
  );
};

export const Footer = React.memo(FooterInner);
