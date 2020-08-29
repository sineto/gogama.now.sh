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
  BtnVerMais,
  ModalCard,
  ModalInfo,
  CardInfo,
  ModalImg,
  TextQuestion,
  TextAnswer
} from './style';


const questions= [
  'Qual o seu maior medo?',
  'O que quero aprender?',
  'O que posso ensinar?',
  'Suas expectativas para o VTEX Trainning Week:'
]

const people = [
  {
    firstname: 'Daniel',
    lastname: 'Faustino',
    avatar: '/images/avatars/dan-fau.png',
    avatarWithBg: '/images/avatars/withbgs/daniel.jpeg',
    linkedin: 'http://linkedin.com/in/danielofaustino/',
    github: 'https://github.com/danielofaustino',
    answers: [
      'Ficar estagnado na área de T.I.',
      'Javascript Avançado, React Js, React Native, Graphql, MongoDb.',
      'Html, Css, Javascript Básico, Git, GitHub, Linux Terminal, Redes, Metodologias Itil.',
      'Com o conhecimento que estou adquirindo, quero desenvolver soluções e conseguir me encaixar no mercado de desenvolvimento, atualmente estou mais na area de suporte em uma empresa que não é de Tecnologia.'
    ]
  },
  {
    firstname: 'Toti',
    lastname: 'Cavalcanti',
    avatar: '/images/avatars/tot-cal.png',
    avatarWithBg: '/images/avatars/withbgs/toti.jpeg',
    linkedin: 'https://www.linkedin.com/in/antoniocavalcantedepaulafilho/',
    github: 'https://github.com/toticavalcanti',
    answers: [
      'Não conseguir um trabalho através do Hiring Coders depois de chegar até aqui.',
      'React, React-native, GraphQL e Typescript.',
      'Git, HTML, CSS, Javascript, Python, Django, Scikit-learn.',
      'Continuar aprofundando o conhecimento na tecnologias da VTEX.'
    ]
  },
  {
    firstname: 'Gisely',
    lastname: 'Lacerda',
    avatar: '/images/avatars/gis-lar.png',
    avatarWithBg: '/images/avatars/withbgs/gisely.jpeg',
    linkedin: 'https://www.linkedin.com/in/gisely-lacerda/',
    github: 'https://github.com/giselyl',
    answers: [
      'Meu maior medo é estagnar na vida, não crescer como profissional ou como pessoa.',
      'Quero aprender programação mobile, quero ter maior domínio de React e Node.js.',
      'HTML, CSS, JavaScript Git , Scrum.',
      'Espero aprofundar os conhecimentos que adquiridos sobre VTEX Store e VTEX IO, e espero entender melhor como funciona o Omnichannel.'
    ]
  },
  {
    firstname: 'Roberto',
    lastname: 'Abreu',
    avatar: '/images/avatars/rob-abr.png',
    avatarWithBg: '/images/avatars/withbgs/roberto.jpeg',
    linkedin: 'https://www.linkedin.com/in/betoabreu/',
    github: 'https://github.com/abreuroberto',
    answers: [
      'Chefe corrupto, estruturas de comando e controle.',
      'Conectar pessoas promovendo a colaboração para que sejam protagonistas da transformação digital.',
      'Ágil, Scrum, Gerência de Projetos, Análise de requisitos.',
      'Novos conhecimentos, Networking, Oportunidades de Trabalho.'
    ]
  },
  {
    firstname: 'Luciano',
    lastname: 'Faria',
    avatar: '/images/avatars/luc-ram.png',
    avatarWithBg: '/images/avatars/withbgs/luciano.jpeg',
    linkedin: 'https://www.linkedin.com/in/lucianofariams/',
    github: 'https://github.com/lucianofa',
    answers: [
      'Ficar desatualizado em relação a conhecimento.',
      'Plataforma VTEX, Cloud Computing, Data Science, IA, Machine Learning, Cyber Security, DevOps, Mobile e IoT.',
      'Gestão Empresarial, Gestão de Projetos com Metodologias Ágeis, Desenvolvimento Windows, Desenvolvimento WEB, Banco de Dados.',
      'Fazer networking, aprender desenvolvimento para plataforma VTEX, vencer o desafio e conseguir uma vaga de trabalho.'
    ]
  },
  {
    firstname: 'Samanta',
    lastname: 'Meira',
    avatar: '/images/avatars/sam-mei.png',
    avatarWithBg: '/images/avatars/withbgs/samanta.jpeg',
    linkedin: 'https://www.linkedin.com/in/samanta-meira/',
    github: 'https://github.com/smeira',
    answers: [
      'Envelhecer e pensar “E se?”. Por isso, busco fazer o melhor possível para alcançar meus objetivos.',
      'Kotlin, ASO, Análise de Negócios.',
      'Java, Spring Boot, HTML, CSS, JavaScript, SQL, Scrum, PhotoShop, Marketing Estratégico.',
      'Uma experiência ímpar, muito desenvolvimento, network e diversão!'
    ]
  },
  {
    firstname: 'Day',
    lastname: 'Corvalan',
    avatar: '/images/avatars/day-cor.png',
    avatarWithBg: '/images/avatars/withbgs/day.jpeg',
    linkedin: 'https://www.linkedin.com/in/dayanacorvalan/',
    github: 'https://github.com/daycorvalan09',
    answers: [
      'Não conseguir alcançar o conhecimento necessário para dar continuidade na carreira.',
      'Aprender a ter domínio na plataforma VTEX.',
      'Auxiliar na gestão de pessoas e conflitos.',
      'Que seja algo muito interessante para todos os participantes, cheio de ensinamentos de muito networking.'
    ]
  },
  {
    firstname: 'Sinésio',
    lastname: 'Neto',
    avatar: '/images/avatars/sn.png',
    avatarWithBg: '/images/avatars/withbgs/sn.png',
    linkedin: 'https://www.linkedin.com/in/sndev/',
    github: 'https://github.com/sineto',
    answers: [
      'Não conseguir ser alguém útil para as pessoas ao meu redor; não satisfazer minhas próprias expectativas.',
      'Implementar CI/CD, I.A., Web Hacking, Microsserviços, Kubernetes e Monitoramento de Aplicações Web, Gerencimanto de servidor AWS e GCP.',
      'HTML, CSS, JavaScript, Linux, Docker, Construção básica de APIs REST e/ou GraphQL com Node.js.',
      'Demonstrar que posso ser capaz de me desenvolver profissionalmente, adquirir mais experiência; fazer muito networking.'
    ]
  },
  {
    firstname: 'Elder',
    lastname: 'Tomaz',
    avatar: '/images/avatars/eld-tom.png',
    avatarWithBg: '/images/avatars/withbgs/elder.png',
    linkedin: 'https://www.linkedin.com/in/eldertomazinho/',
    github: 'https://github.com/eldertomaz',
    answers: [
      'De não ser ouvido e me tornar "apenas mais um".',
      'MongoDb, Node, Graphql, AWS, Oracle Cloud, Azure, OpenCV, gerenciamento de projetos, SCADA.',
      'MQTT, CLP/PLC, Cisco Packet, Labview, Multisim, Eletrônica e Eletrônica de potência, Automação industrial e clínica, sistemas embarcados, controle PID.',
      'De mostrar o meu conhecimento e aprender com o melhor de cada um que encontrei nessa jornada.'
    ]
  },
  {
    firstname: 'Luiz',
    lastname: 'Santos',
    avatar: '/images/avatars/lui-san.png',
    avatarWithBg: '/images/avatars/withbgs/luiz.jpeg',
    linkedin: 'https://www.linkedin.com/in/luizcsbh/',
    github: 'https://github.com/luizcsbh',
    answers: [
      'O medo na minha opinião já é um limitação dos meus limites e o meu maior medo é não deixar uma situação confortável para minha família e valores que meu filho possa seguir em diante.',
      'Quero aprender mais sobre o ecossistema da VTEX no mundo do e-commerce e como posso me inserir nesse nicho.',
      'Compartilhar meu conhecimento da área de TI e sobre trabalhar em equipe de Desenvolvimento.',
      'Ir para o VTEX Trainnig Week; Contribuir com minhas habilidades para o crescimento dos colegas de equipe; Fazer um networking.'
    ]
  }
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '889px',
    height: '520px',
    backgroundColor: '#171717',
  },
}));

const Team = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [personForModal, setPersonForModal] = useState({});

  const handleOpen = (person) => {
    setOpen(true);
    setPersonForModal(person);
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
          return (
            <Card>
              <img src={person.avatar} />
              <TextP>{person.firstname}<span>{person.lastname}</span></TextP>
              <Infos>
                <BtnVerMais onClick={() => handleOpen(person)}>Saiba Mais</BtnVerMais>
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
                      <ModalCard>
                        <ModalInfo>
                          {questions.map((quest, idx) => {
                            console.log('question:', quest, idx);
                              return (
                                <CardInfo>
                                  <TextQuestion>
                                    {quest}
                                  </TextQuestion>
                                  <TextAnswer>
                                    {personForModal.answers ? personForModal.answers[idx] : 'teste'}
                                  </TextAnswer>
                                </CardInfo>
                              )
                          })}
                        </ModalInfo>
                        <ModalImg avatarWithBg={personForModal.avatarWithBg}>
                        </ModalImg>
                      </ModalCard>
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
