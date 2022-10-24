// oportunidades de practica a las que se postuló el estudiante
// el estado de cada una y link al perfil de la empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Heading, Link, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routers/config/routes';
import CardOportunity from '../../components/Cards/CardOportunity';

export default function MisPostulaciones() {
  const student = {
    first_name: 'Juan',
    last_name: 'Perez',
    status: 'aproved',
    apply: [
      {
        id: 1,
        name_jobOffer: 'Desarrollo de software',
        description: 'Buscamos estudiantes con gran interés por desarrollar su capacidad de analisis',
        modality: 'Virtual',
        quotas: 3,
        workArea: 'Tecnología',
        company: {
          name_company: 'Google',
          photo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
        },
      },
    ],
  };

  const navigate = useNavigate();

  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Mis Postulaciones</Heading>

      {student.apply.length === 0 && (
      <>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" margin="auto" marginTop={4}>
          Todavía no te has postulado a ninguna de las
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.oportunidadesPracticas}>
            Oportunidades de Práctica.
          </Link>
        </Heading>
        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={12}>
          ¿Aún no te sientes preparado?
        </Heading>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
          Conocé mejor
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.practicasPracticantes}>
            Nuestra Propuesta para Estudiantes
          </Link>
        </Heading>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={2}>
          También podés contactarte con nosotros por correo electrónico a
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
            somosefect@gmail.com
          </Link>
        </Heading>
      </>

      )}

      {student.apply.length > 0 && (
      <>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="900px" margin="auto" marginTop={8}>
          A continuación se muestran las
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.oportunidadesPracticas}>
            Oportunidades de Práctica
          </Link>
          {' '}
          a las que te postulaste.
        </Heading>

        <Wrap marginTop={6} spacing={4} justify="center">
          {student.apply.map((jobOffer) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
              <CardOportunity
                key={jobOffer.id}
                nameJobOffer={jobOffer.name_jobOffer}
                description={jobOffer.description}
                modality={jobOffer.modality}
                quotas={jobOffer.quotas}
                workArea={jobOffer.workArea}
                nameCompany={jobOffer.company.name_company}
                photo={jobOffer.company.photo}
                onClick={() => [navigate(ROUTES.oportunidadPracticaPage)]}
              />
            </WrapItem>
          ))}
        </Wrap>

      </>
      )}

    </>

  );
}
