import statsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import DynamicComponent from './dynamicComponent';


export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <DynamicComponent data={data} />
    </section>
  );
}
