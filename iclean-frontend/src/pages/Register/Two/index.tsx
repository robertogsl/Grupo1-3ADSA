import { useHistory } from 'react-router-dom';

import { api } from '../../../services/api';

import { useRegister } from '../../../hooks/register';

import { DoubleButton } from '../../../components/DoubleButton';
import { InputRegister } from '../../../components/InputRegister';
import { Container } from './styles';

export function Two() {
  const { getUserType, registerData, handleChangeRegisterData, submitProprietaria } = useRegister();

  return (
    <Container>
      <h1>Credenciais de acesso: </h1>

      <div>
        <InputRegister value={registerData.email} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, email: e.currentTarget.value})} label="E-mail" type="email" />
        <InputRegister value={registerData.senha} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, senha: e.currentTarget.value})} label="Senha" type="password" />
        <InputRegister value={registerData.senha} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, senha: e.currentTarget.value})} label="Confirme a senha" type="password" />

        <DoubleButton onSubmitForm={submitProprietaria} isFinalStep={getUserType() === 1} />
      </div>
    </Container>
  );
}
