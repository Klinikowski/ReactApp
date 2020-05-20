import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';


const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <div  />
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>dodaj</Button>
  </header>
);

export default Header;