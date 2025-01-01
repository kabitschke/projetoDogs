// src/components/ClientWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export default function DynamicComponent({ data }: { data: any }) {
  return <ContaEstatisticas data={data} />;
}
