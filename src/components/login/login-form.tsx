'use client'
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import React from "react";
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




  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <FormButton />
        <p style={{ color: 'red' }}>{state.error}</p>
      </form>

    </>
  );
}