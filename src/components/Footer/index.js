import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { Container, Button } from './style';

const Footer = () => {
  return (
      <Container>
        <p>
          Feito com <FaHeart size={18} style={{ color: '#BE1931', margin: '0 0.5em' }} />
        </p>
        <img src='logo.png' alt='logo' />
        <Button
          href='https://github.com/sineto/gogama.now.sh'
          target='_blank'
        >
          <FaGithub style={{ marginRight: '8px' }} />
          Github Repository
        </Button>
      </Container>
  )
}

export default Footer;

