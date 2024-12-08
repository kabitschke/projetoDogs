'use client'
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import React from "react";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
//DEU erro useFormState substitui por  React.useActionState

function FormButton() {
  const { pending } = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Enviando</Button> :
    <Button>Entrar</Button>
  }</>
}

export default function LoginForm() {
  const [state, action] = React.useActionState(login, {
    ok: false,
    error: '',
    data: null
  });


  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';

  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input
          label={'Usuário'}
          name={'username'}
          type="text"
        />

        <Input
          label={'Senha'}
          name={'password'}
          type="password"
        />
        <ErrorMessage error={state.error} />

        <FormButton />

      </form>

    </>
  );
}