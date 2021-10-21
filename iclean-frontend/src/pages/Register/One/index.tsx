import { useRegister } from '../../../hooks/register';

import { DoubleButton } from '../../../components/DoubleButton';
import { InputRegister } from '../../../components/InputRegister';
import { Container } from './styles';

export function One() {
  const { registerData, handleChangeRegisterData } = useRegister();

  return (
    <Container>
      <h1>Informações pessoais: </h1>

      <form>
        <InputRegister value={registerData.nome} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, nome: e.currentTarget.value})} label="Nome" />
        <InputRegister value={registerData.cpf} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, cpf: e.currentTarget.value})} label="CPF" />
        <InputRegister value={registerData.telefone} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, telefone: e.currentTarget.value})} label="Telefone" />
        <InputRegister value={registerData.dataNascimento} onChange={(e: React.FormEvent<HTMLInputElement>) => handleChangeRegisterData({ ...registerData, dataNascimento: e.currentTarget.value})} label="Data de nascimento" />

        <DoubleButton />
      </form>
    </Container>
  );
}
