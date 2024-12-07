export default async function FotoIDPage({ params }: { params: { id: number } }) {
  return <main><h1>Foto id: {params.id}</h1></main>
}