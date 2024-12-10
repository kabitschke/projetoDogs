'use client'

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import React from "react";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import styles from './login-form.module.css';
import userPost from "@/actions/user-post";
//DEU erro useFormState substitui por  React.useActionState

function FormButton() {
  const { pending } = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Cadastrando</Button> :
    <Button>Cadastrar</Button>
  }</>
}

export default function LoginCriarForm() {
  const [state, action] = React.useActionState(userPost, {
    ok: false,
    error: '',
    data: null
  });


  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';

  }, [state.ok]);

  return (

    <form action={action} className={styles.form}>
      <Input
        label={'Usuário'}
        name={'username'}
        type="text"
      />

      <Input
        label={'Email'}
        name={'email'}
        type="email"
      />

      <Input
        label={'Senha'}
        name={'password'}
        type="password"
      />
      <ErrorMessage error={state.error} />

      <FormButton />

    </form>



  );
}