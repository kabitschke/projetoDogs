import LoginCriarForm from "@/components/login/login-criar-form";
import { Metadata } from "next"

export const medata: Metadata = {
  title: 'Crie sua conta',
  description: 'Crie sua conta no site dogs',
};

export default async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}