import { FormEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TileLayer, Marker, Popup, Map } from 'react-leaflet';
import { useHistory } from 'react-router-dom';

import { ServiceOptions } from '../../components/ServiceOptions';
import { NumberController } from '../../components/NumberController';
import { MultiplesCheck } from '../../components/MultiplesCheck';

import { ItemServiceOptionsProps } from '../../types/serviceOptions';
import { IAdditionalServiceProps } from '../../types/additionalServices';

import { Container, Content, NumberControllerContainer, ContainerMap, ContainerInputLine, ContainerMapAndInputs, ContainerInputs } from './styles';
import { InputRegister } from '../../components/InputRegister';
import { LeafletMouseEvent } from 'leaflet';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

const serviceTypeItems: ItemServiceOptionsProps[] = [
  {
    id: 1,
    title: "Limpeza padrão",
  },
  {
    id: 2,
    title: "Limpeza pesada",
  },
  {
    id: 3,
    title: "Passar roupa",
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
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [additionalServicesChecked, setAdditionalServicesChecked] = useState<number[]>([]);
  const [data, setData] = useState({
    cep: "",
    numero: "",
    complemento: "",
    data: "",
    hora: "",
    telefone: "",
  });

  const { user } = useAuth();

  const history = useHistory();

  const generateEspecification = (): String => {
    const arrEspec = [];

    arrEspec.push(serviceTypeItems[serviceTypeChecked - 1].title);
    arrEspec.push(houseTypeItems[houseTypeChecked - 1].title);
    arrEspec.push(`${bedroomsCounter} quartos`);
    arrEspec.push(`${bathroomsCounter} banheiros`);
    additionalServicesChecked.forEach(item => {
      arrEspec.push(additionalServices[item - 1].title);
    })

    return arrEspec.join(", ");
  }

  const calcPrice = (): number => {
    let value = 0.0;

    value += bathroomsCounter * 50.5;
    value += bedroomsCounter * 100.0;

    return value;
  };

  const validarCamposVazios = () => {
    if (data.cep === "" || data.complemento === "" || data.numero === "" || data.data === "" || data.telefone === "" || data.telefone === "") {
      return true;
    }

    return false;
  }

  const handleCreateJob = () => {
    const especificacao = generateEspecification();

    if (validarCamposVazios()) {
      toast.error("Preencha todos os campos.")

      return;
    }

    const dataApi = {
      especificacao,
      preco: calcPrice(),
      cep: data.cep,
      complemento: data.complemento,
      numero: data.numero,
      latitude: initialPosition[0],
      longitude: initialPosition[1],
      proprietaria: {
        id: user.id
      }
    }

    api.post("/trabalhos", dataApi).then(() => {
      toast.success("Trabalho criado com sucesso!");

      history.push("/dashboard")
    }).catch(err => {
      toast.error("Erro ao criar trabalho, tente novamente mais tarde.")
    })
  };

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setInitialPosition([event.latlng.lat, event.latlng.lng])
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    })
  }, []);

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
      <Header />
      <Content>
        <BackButton />
        <ServiceOptions idChecked={serviceTypeChecked} fnCheck={handleCheckService} items={serviceTypeItems} title="Escolha um serviço" />

        <ServiceOptions idChecked={houseTypeChecked} fnCheck={handleCheckHouse} items={houseTypeItems} title="Como é o seu lar?" />

        <NumberControllerContainer>
          <NumberController title="quartos" counter={bedroomsCounter} fnCounter={handleCounterBedroomClick} />
          <NumberController title="banheiros" counter={bathroomsCounter} fnCounter={handleCounterBathroomClick} />
        </NumberControllerContainer>

        <ContainerMap>
          <h1>Detalhes do serviço</h1>

          <ContainerInputLine>
            <InputRegister label="CEP" value={data.cep} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, cep: e.currentTarget.value })} />
            <InputRegister label="Número" value={data.numero} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, numero: e.currentTarget.value })} />
            <InputRegister label="Complemento" value={data.complemento} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, complemento: e.currentTarget.value })} />
          </ContainerInputLine>

          <ContainerMapAndInputs>
            <Map onClick={handleMapClick} center={initialPosition} zoom={15} scrollWheelZoom={false} style={{
              width: "100%",
              height: 300,
              borderRadius: 8,
              boxShadow:
                "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)",
            }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={initialPosition}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
            <ContainerInputs>
              <InputRegister label="Data" value={data.data} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, data: e.currentTarget.value })} />
              <InputRegister label="Hora" value={data.hora} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, hora: e.currentTarget.value })} />
              <InputRegister label="Telefone para contato" value={data.telefone} onChange={(e: FormEvent<HTMLInputElement>) => setData({ ...data, telefone: e.currentTarget.value })} />
            </ContainerInputs>
          </ContainerMapAndInputs>
        </ContainerMap>

        <MultiplesCheck title="Serviços adicionais?" items={additionalServices} checkFn={handleClickCheckAdditionalServices} state={additionalServicesChecked} />

        <button onClick={handleCreateJob}>Cadastrar serviço</button>
      </Content>
    </Container>
  )
}
