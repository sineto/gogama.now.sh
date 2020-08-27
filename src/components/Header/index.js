import React from 'react';
import { MainHeader, Hero } from './style';

const Header = () => {
  return (
    <MainHeader>
      <Hero>
        <picture>
          <source 
            srcset="/images/hero-header2x.png"
            media="(min-width: 789px)"
          />
          <source 
            srcset="/images/hero-header1x.png"
            media="(max-width: 768px)"
          />
          <img 
            src="/images/hero-header2x.png" 
            alt="Gama Academy Logo"
          />
        </picture>
      </Hero>
    </MainHeader>
  );
}

        // <img 
        //   srcset='/images/hero-header2x.png 1x, /images/hero-header1x.png 2x' 
        //   sizes='70vmin' 
        //   src='/images/hero-header.png'
        // />
export default Header;
