import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { TileLayer, Marker, Popup, Map, } from 'react-leaflet';
import Leaflet from 'leaflet';
import { Container, Content, MarkerUser } from "./styles";

import user1 from '../../assets/user1.svg';
import user2 from '../../assets/user2.svg';
import user3 from '../../assets/user3.svg';
import user4 from '../../assets/user4.svg';
import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { api } from '../../services/api';
import { ChooseProfile } from '../../components/ChooseProfile';

interface IUserProps {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  autenticado: boolean;
  cep: string;
  complemento: string;
  numero: string;
  longitude: number;
  latitude: number;
}

// const positions = [
//   [-23.5668698, -46.6608874],
//   [-23.56614448909031, -46.66715383529664],
//   [-23.56999937691473, -46.668226718902595],
//   [-23.574050820736684, -46.65968656539917],
//   [-23.57794480911962, -46.6532063484192]
// ]

export function ListOnMap() {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [users, setUsers] = useState<IUserProps[]>([])

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    })
  }, []);

  useEffect(() => {
    api.get("/contratadas").then(res => {
      setUsers(res.data);
    })
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <BackButton />
        <Map center={initialPosition} zoom={15} scrollWheelZoom={false} style={{
          width: "100%",
          height: 580,
          borderRadius: 8,
          boxShadow:
            "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)",
        }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {users.map(user => {
            let customMarker;
            let userRender = getRandomInt(1, 4);

            if (userRender === 1) {
              customMarker = new Leaflet.DivIcon({
                html: ReactDOMServer.renderToString(<img className="marker-user" src={user1} />)
              });
            } else if (userRender === 2) {
              customMarker = new Leaflet.DivIcon({
                html: ReactDOMServer.renderToString(<img className="marker-user" src={user2} />)
              });
            } else if (userRender === 3) {
              customMarker = new Leaflet.DivIcon({
                html: ReactDOMServer.renderToString(<img className="marker-user" src={user3} />)
              });
            } else {
              customMarker = new Leaflet.DivIcon({
                html: ReactDOMServer.renderToString(<img className="marker-user" src={user4} />)
              });
            }

            return (
              <Marker position={[user.latitude, user.longitude]} icon={customMarker}>
                <Popup>
                  <ChooseProfile name={user.nome} id={user.id} />
                </Popup>
                </Marker>
            )
          })}
        </Map>
      </Content>
    </Container>
  )
}
