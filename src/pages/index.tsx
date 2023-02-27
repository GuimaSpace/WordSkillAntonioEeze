import Container from './components/Container'

export default function App() {
  return (
    <div className="flex flex-col w-92 sm:w-screen h-96 space-y-12">
      <span className="text-7xl text-yellow-500 mt-3 font-bold mx-auto">Welcome</span>
      <section className="flex flex-col h-full mx-auto space-y-5">
        <Container name="Antonio" icon="antonio"/>
        <Container name="Ezekiel" icon=""/>
      </section>
    </div>
  )
}