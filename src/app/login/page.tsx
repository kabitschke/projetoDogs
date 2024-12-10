import LoginForm from "@/components/login/login-form";
import { Metadata } from "next";
export const medata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue na sua conta no site dogs',
};

export default async function LoginPage() {
  return (

    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />

    </section>
  );
}