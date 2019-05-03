import React from 'react';

const Header = ({ title, subTitle }) => {
    return (
      <div>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision App',
};

export default Header;

