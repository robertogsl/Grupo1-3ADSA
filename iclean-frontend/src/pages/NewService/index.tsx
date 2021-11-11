import { useCallback, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';

import { ServiceOptions } from '../../components/ServiceOptions';
import { NumberController } from '../../components/NumberController';
import { ItemServiceOptionsProps } from '../../types/serviceOptions';

import { Container, Content, NumberControllerContainer } from './styles';
import { MultiplesCheck } from '../../components/MultiplesCheck';
import { IAdditionalServiceProps } from '../../types/additionalServices';

const serviceTypeItems: ItemServiceOptionsProps[] = [
  {
    id: 1,
    title: "Limpeza padrão",
    icon: () => <FaFacebook />
  },
  {
    id: 2,
    title: "Limpeza pesada",
    icon: () => <FaFacebook />
  },
  {
    id: 3,
    title: "Passar roupa",
    icon: () => <FaFacebook />
  }
]

const houseTypeItems: ItemServiceOptionsProps[] = [
  {
    id: 1,
    title: "Studio"
  },
  {
    id: 2,
    title: "Apartamento"
  },
  {
    id: 3,
    title: "Casa"
  }
]

const additionalServices: IAdditionalServiceProps[] = [
  {
    id: 1,
    title: "Cuidar de pets",
  },
  {
    id: 2,
    title: "Cozinhar",
  },
  {
    id: 3,
    title: "Áreas externas",
  },
  {
    id: 4,
    title: "Armários (limpeza interna)",
  },
  {
    id: 5,
    title: "Lavagem de roupas",
  },
  {
    id: 6,
    title: "Cuidar de crianças",
  },
];

export function NewService() {
  const [serviceTypeChecked, setServiceTypeChecked] = useState(1);
  const [houseTypeChecked, setHouseTypeChecked] = useState(1);
  const [bathroomsCounter, setBathroomsCounter] = useState(0);
  const [bedroomsCounter, setBedroomsCounter] = useState(0);
  const [additionalServicesChecked, setAdditionalServicesChecked] = useState<number[]>([]);

  const handleCheckService = useCallback((id: number) => {
    setServiceTypeChecked(id);
  }, []);

  const handleCheckHouse = useCallback((id: number) => {
    setHouseTypeChecked(id);
  }, []);

  const handleCounterBathroomClick = useCallback((operation: string) => {
    if (operation === "increase") {
      setBathroomsCounter(bathroomsCounter + 1);
    } else {
      if (bathroomsCounter > 0) {
        setBathroomsCounter(bathroomsCounter - 1);
      }
    }
  }, [bathroomsCounter]);

  const handleCounterBedroomClick = useCallback((operation: string) => {
    if (operation === "increase") {
      setBedroomsCounter(bedroomsCounter + 1);
    } else {
      if (bedroomsCounter > 0) {
        setBedroomsCounter(bedroomsCounter - 1);
      }
    }
  }, [bedroomsCounter]);

  const handleClickCheckAdditionalServices = useCallback((id: number) => {
    const idAlreadyInArray = additionalServicesChecked.some(serviceId => serviceId === id);

    if (idAlreadyInArray) {
      const newArr = additionalServicesChecked.filter(serviceId => serviceId !== id);

      setAdditionalServicesChecked(newArr);
    } else {
      setAdditionalServicesChecked([...additionalServicesChecked, id]);
    }
  }, [additionalServicesChecked]);

  return (
    <Container>
      <Content>
        <ServiceOptions idChecked={serviceTypeChecked} fnCheck={handleCheckService} items={serviceTypeItems} title="Escolha um serviço" />

        <ServiceOptions idChecked={houseTypeChecked} fnCheck={handleCheckHouse} items={houseTypeItems} title="Como é o seu lar?" />

        <NumberControllerContainer>
          <NumberController title="quartos" counter={bedroomsCounter} fnCounter={handleCounterBedroomClick} />
          <NumberController title="banheiros" counter={bathroomsCounter} fnCounter={handleCounterBathroomClick} />
        </NumberControllerContainer>

        <MultiplesCheck title="Serviços adicionais?" items={additionalServices} checkFn={handleClickCheckAdditionalServices} state={additionalServicesChecked} />
      </Content>
    </Container>
  )
}
