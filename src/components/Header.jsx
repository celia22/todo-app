import React from 'react';

const Header = (props) => {
  return (
    <h1 style={{ color: props.color }}>
      {props.title}
      {props.children}
    </h1>
  );
};

export default Header;
