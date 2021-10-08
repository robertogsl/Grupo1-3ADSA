import { FormEvent, useCallback, ChangeEventHandler } from 'react';

import { Container } from './styles';

interface InputRegisterProps {
  label: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export function InputRegister({ label, value, onChange, disabled = false }: InputRegisterProps) {
  const defaultFormEvent = useCallback((e: FormEvent<HTMLInputElement>) => {
    console.log("rsrs")
  }, []);

  return (
    <Container>
      <label htmlFor="">{label}</label>
      <input disabled={disabled} onChange={onChange || defaultFormEvent} type="text" value={value} />
    </Container>
  )
}
