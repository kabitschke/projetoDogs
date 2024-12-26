import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function ContaPage() {

  const { data: user } = await photosGet();
  const { data } = await photosGet({ user: 'origamid' });

  return (
    <div>
      {data?.length ? <Feed photos={data} /> : <div>Não tem nenhuma foto</div>}

    </div>
  );
}