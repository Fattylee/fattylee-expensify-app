import React from 'react';

const Header = ({ title, subTitle }) => {
    return (
      <div className='header'>
        <h1 className='header__title'>{title}</h1>
        {subTitle && <p className='header__subtitle'>{subTitle}</p>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision App',
};

export default Header;
