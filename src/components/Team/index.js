import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { 
  Container,
  TextH1,
  Cards,
  Card,
  TextP,
  Infos,
  BtnVerMais
} from './style';

const people = [
  {
    firstname: 'Daniel',
    lastname: 'Faustino',
    avatar: '/images/avatars/dan-fau.png',
    linkedin: 'http://linkedin.com/in/danielofaustino/',
    github: 'https://github.com/danielofaustino'
  },
  {
    firstname: 'Toti',
    lastname: 'Cavalcanti',
    avatar: '/images/avatars/tot-cal.png',
    linkedin: 'https://www.linkedin.com/in/antoniocavalcantedepaulafilho/',
    github: 'https://github.com/toticavalcanti'
  },
  {
    firstname: 'Gisely',
    lastname: 'Lacerda',
    avatar: '/images/avatars/gis-lar.png',
    linkedin: 'https://www.linkedin.com/in/gisely-lacerda/',
    github: 'https://github.com/giselyl'
  },
  {
    firstname: 'Roberto',
    lastname: 'Abreu',
    avatar: '/images/avatars/rob-abr.png',
    linkedin: 'https://www.linkedin.com/in/betoabreu/',
    github: 'https://github.com/abreuroberto'
  },
  {
    firstname: 'Luciano',
    lastname: 'Faria',
    avatar: '/images/avatars/luc-ram.png',
    linkedin: 'https://www.linkedin.com/in/lucianofariams/',
    github: 'https://github.com/lucianofa'
  },
  {
    firstname: 'Samanta',
    lastname: 'Meira',
    avatar: '/images/avatars/sam-mei.png',
    linkedin: 'https://www.linkedin.com/in/samanta-meira/',
    github: 'https://github.com/smeira'
  },
  {
    firstname: 'Dayana',
    lastname: 'Corvalan',
    avatar: '/images/avatars/day-cor.png',
    linkedin: 'https://www.linkedin.com/in/dayanacorvalan/',
    github: 'https://github.com/daycorvalan09'
  },
  {
    firstname: 'Sinésio',
    lastname: 'Neto',
    avatar: '/images/avatars/sn.png',
    linkedin: 'https://www.linkedin.com/in/sndev/',
    github: 'https://github.com/sineto'
  },
  {
    firstname: 'Elder',
    lastname: 'Tomaz',
    avatar: '/images/avatars/eld-tom.png',
    linkedin: 'https://www.linkedin.com/in/eldertomazinho/',
    github: 'https://github.com/eldertomaz'
  },
  {
    firstname: 'Luiz',
    lastname: 'Santos',
    avatar: '/images/avatars/lui-san.png',
    linkedin: 'https://www.linkedin.com/in/luizcsbh/',
    github: 'https://github.com/luizcsbh'
  }
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '879px',
    height: '487px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Team = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sortCb = (nameA, nameB) => {
    const a = nameA.firstname.toLowerCase();
    const b = nameB.firstname.toLowerCase();
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  };

  const peopleSorted = people.sort(sortCb);

  return (
    <Container>
      <TextH1>O TIME</TextH1>
      <Cards>
        {peopleSorted.map((person) => {
          console.log('person:', person);
          return (
            <Card>
              <img src={person.avatar} />
              <TextP>{person.firstname}<span>{person.lastname}</span></TextP>
              <Infos>
                <BtnVerMais onClick={handleOpen}>Saiba Mais</BtnVerMais>
                <a href={person.github}><FaGithub size={27}/></a>
                <a href={person.linkedin}><FaLinkedinIn size={27}/></a>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2 id="transition-modal-title">Transition modal</h2>
                      <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                  </Fade>
                </Modal>
              </Infos>
            </Card>
          )
        })}
      </Cards>
    </Container>
  );
};

export default Team;
