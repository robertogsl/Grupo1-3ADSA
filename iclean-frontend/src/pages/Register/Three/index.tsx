import React, { useEffect, useState } from 'react';

import { apiViaCep } from '../../../services/api';

import { useRegister } from '../../../hooks/register';

import { DoubleButton } from '../../../components/DoubleButton';
import { InputRegister } from '../../../components/InputRegister';
import { Container, DoubleInput } from './styles';

interface IThreeDataProps {
  cep: string;
  numero: string;
  complemento: string;
}

interface IThreeDataViaCepProps {
  logradouro: string;
  cidade: string;
  uf: string;
}

interface IResponseViaCep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

export function Three() {
  const [dataViaCep, setDataViaCep] = useState<IThreeDataViaCepProps>({} as IThreeDataViaCepProps);
  const [responseReceived, setResponseReceived] = useState<boolean>(false);

  const { registerData, handleChangeRegisterData } = useRegister();

  useEffect(() => {
    if (registerData.cep?.length === 8 && !responseReceived) {
      apiViaCep.get<IResponseViaCep>(`/${registerData.cep}/json`).then(response => {
        setDataViaCep({ ...dataViaCep, logradouro: response.data.logradouro, cidade: response.data.localidade, uf: response.data.uf })
        setResponseReceived(true);
      })
    }

    if (responseReceived && registerData.cep?.length !== 8) {
      setResponseReceived(false);
      setDataViaCep({ ...dataViaCep, logradouro: "", cidade: "", uf: "" })
    }
  }, [dataViaCep, registerData.cep, responseReceived]);

  return (
    <Container>
      <h1>Credenciais de acesso: </h1>

      <form action="">
        <InputRegister value={registerData.cep || ""} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, cep: e.currentTarget.value})} label="CEP" />
        <InputRegister disabled={true} value={dataViaCep.logradouro} label="Logradouro" />
        <div>

        </div>

        <DoubleInput sizeOfFirst={3}>
          <InputRegister disabled={true} value={dataViaCep.cidade} label="Cidade" />
          <InputRegister disabled={true} value={dataViaCep.uf} label="UF" />
        </DoubleInput>

        <DoubleInput sizeOfFirst={1}>
          <InputRegister value={registerData.numero || ""} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, numero: e.currentTarget.value})} label="Número" />
          <InputRegister value={registerData.complemento || ""} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, complemento: e.currentTarget.value})} label="Complemento" />
        </DoubleInput>

        <DoubleButton />
      </form>
    </Container>
  );
}
