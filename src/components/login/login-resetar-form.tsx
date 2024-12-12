'use client'

import { useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import React from "react";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import styles from './login-form.module.css';
import passwordReset from "@/actions/passwor-reset";


function FormButton() {
  const { pending } = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Resetando...</Button> :
    <Button>Resetar Senha</Button>
  }</>
}

export default function LoginResetarForm({ keyToken, login }: { login: string, keyToken: string }) {
  const [state, action] = React.useActionState(passwordReset, {
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
      <Input label={'Nova Senha'} name={'password'} type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />

      <ErrorMessage error={state.error} />


      <FormButton />




    </form>



  );
}