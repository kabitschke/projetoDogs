'use client';
import { useUser } from "@/context/user-context";
import React from "react";

export default async function ContaPage() {


  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1 onClick={() => console.log('teste')}>Conta:{user?.nome}</h1>

    </div>
  );
}