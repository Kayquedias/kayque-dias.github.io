import ImageIcon from "../components/common/imageIcon";
import { IExperience } from "../components/experience";
import SalinasLogo from '../assets/images/salinas.png';
import SDLogo from "../assets/images/sd-sobrancelhas.png";

import {
  AwsIcon,
  GitIcon,
  JestIcon,
  NestJsIcon,
  NodejsIcon,
  PythonIcon,
  ReactjsIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../components/icons";
import moment from "moment-timezone";
import { FaDocker } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";

const getMonths = (startDate: string, endDate?: string) => {
  const _endDate = endDate ? moment(endDate, "YYYYMMDD") : moment();

  return _endDate.diff(moment(startDate, "YYYYMMDD"), "months");
};

const workExperienceData: IExperience[] = [
  {
    company: {
      duration: "Full time",
      location: "Fortaleza, Ceará, Brasil",
      name: "Salinas Empreendimentos",
    },
    job: { title: "Desenvolvedor FullStack", type: "Presencial" },
    duration: {
      endDate: "Fev 2024",
      startDate: "Jul 2023",
      totalTime: `${getMonths("20230705", "20240202")} meses`,
    },
    description: [
      <p>- Implementação de telas em ReactJs para o sistema de gestão de obras</p>,
      <p>
        - Implementação de rotas para o backend para o sistema de gestão de obras que é feito em NestJs com arquitetura de 
        microsserviços com containers Docker para cada serviço.
      </p>,
      <p>
        - Integração com AWS em serviços como: S3 e ECS
      </p>,
      <p>- Prototipação de telas com Figma antes do período de desenvolvimento</p>,
    ],

    skills: [
      <NestJsIcon />,
      <ReactjsIcon />,
      <TailwindIcon />,
      <JestIcon />,
      <TypescriptIcon />,
      <PythonIcon />,
      <AwsIcon />,
      <SiPostgresql />
    ],
    companyIcon: <ImageIcon src={SalinasLogo} alt="Salinas_logo" />,
  },
  {
    company: {
      duration: "Full time",
      location: "Eusébio, BR",
      name: "Grupo Sobrancelhas Design",
    },
    job: { title: "Desenvolvedor FullStack", type: "Remoto" },
    duration: {
      startDate: "Set 2022",
      endDate: "Jul 2023",
      totalTime: `${getMonths("20220910", "20230701")} meses`,
    },
    description: [
      <p className="">
        - Desenvolvimento de sistema interno com autenticação externa utilizando Keycloak com arquitetura de
        microsserviços (containers Docker).
      </p>,
      <p className="">
        - Documentação técnica para usuário e time de desenvolvimento
      </p>,
      <p>- Integração entre Front e Backend com medidas de segurança para validação de dados utilizando um 
        API Gateway, melhorando a comunicação dos serviços com um ponto de entrada.
      </p>,
      <p>
        - Aumento de velocidade de comunicação com a criação da comunicação entre microsserviços de HTTP para GRPC 
      </p>,
      <p>- Youtrack para gerenciamento de tarefas e mensurar produção do time.</p>,
    ],

    skills: [
      <TypescriptIcon />,
      <ReactjsIcon />,
      <FaDocker />,
      <JestIcon />,
      <NodejsIcon />,
      <GitIcon />,
      <StyledComponentsIcon size={30} />,
      <SiPostgresql />
    ],
    companyIcon: <ImageIcon src={SDLogo} alt="SD_logo" />,
  },
];

export default workExperienceData;
