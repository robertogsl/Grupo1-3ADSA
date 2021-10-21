import { FormEvent, useCallback, ChangeEventHandler } from 'react';

import { Container } from './styles';

interface InputRegisterProps {
  label: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  type?: string;
}

export function InputRegister({ label, value, onChange, disabled = false, type = "text" }: InputRegisterProps) {
  const defaultFormEvent = useCallback((e: FormEvent<HTMLInputElement>) => {
    console.log("rsrs")
  }, []);

  return (
    <Container>
      <label htmlFor="">{label}</label>
      <input type={type} disabled={disabled} onChange={onChange || defaultFormEvent} value={value} />
    </Container>
  )
}
