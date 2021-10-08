import { useRegister } from '../../../hooks/register';

import { DoubleButton } from '../../../components/DoubleButton';
import { InputRegister } from '../../../components/InputRegister';
import { Container } from './styles';

export function Two() {
  const { getUserType, registerData, handleChangeRegisterData } = useRegister();

  return (
    <Container>
      <h1>Credenciais de acesso: </h1>

      <form action="">
        <InputRegister value={registerData.email} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, email: e.currentTarget.value})} label="E-mail" />
        <InputRegister value={registerData.senha} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, senha: e.currentTarget.value})} label="Senha" />
        <InputRegister value={registerData.senha} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, senha: e.currentTarget.value})} label="Confirme a senha" />

        <DoubleButton isFinalStep={getUserType() === 1} />
      </form>
    </Container>
  );
}
