'use client'

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import React from "react";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import styles from './login-form.module.css';

import passwordLost from "@/actions/password-lost";
//DEU erro useFormState substitui por  React.useActionState

function FormButton() {
  const { pending } = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Enviando...</Button> :
    <Button>Enviar Email</Button>
  }</>
}

export default function LoginPerdeuForm() {
  const [state, action] = React.useActionState(passwordLost, {
    ok: false,
    error: '',
    data: null
  });

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (

    <form action={action} className={styles.form}>
      <Input label={'Email / Usuário'} name={'login'} type="text" />
      <input
        type="hidden"
        name="url"
        value={url}
      />
      <ErrorMessage error={state.error} />

      {state.ok ? (
        <p style={{ color: '#4c1' }}>Email enviado.</p>
      ) : (
        <FormButton />
      )}



    </form>



  );
}