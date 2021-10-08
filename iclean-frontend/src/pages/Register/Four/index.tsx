import { useCallback , useEffect} from 'react';
import { TileLayer, Marker, Popup, Map } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { useRegister } from '../../../hooks/register';

import { DoubleButton } from '../../../components/DoubleButton';
import { InputRegister } from '../../../components/InputRegister';

import { Container, DoubleInput } from './styles';

export function Four() {
  const { registerData, handleChangeRegisterData } = useRegister();

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    handleChangeRegisterData({ ...registerData, latitude: event.latlng.lat, longitude: event.latlng.lng})
  }, [handleChangeRegisterData, registerData]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      handleChangeRegisterData({ ...registerData, latitude, longitude })
    })
  }, [registerData, handleChangeRegisterData]);

  return (
    <Container>
      <h1>Credenciais de acesso: </h1>

      <form>
        <DoubleInput sizeOfFirst={1}>
          <InputRegister value={registerData.latitude || ""} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, latitude: Number(e.currentTarget.value)})} label="Latitude" />
          <InputRegister value={registerData.longitude || ""} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, longitude: Number(e.currentTarget.value)})} label="Longitude" />
        </DoubleInput>

        <Map center={[registerData.latitude || 0, registerData.longitude || 0]} zoom={15} onClick={handleMapClick} scrollWheelZoom={false} style={{
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
          <Marker position={[registerData.latitude || 0, registerData.longitude || 0]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>

        <DoubleButton isFinalStep={true} />
      </form>
    </Container>
  );
}
