import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import KitAtleta from './components/KitAtleta'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Grafico from './components/Grafico'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'

function App() {
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState('')

  function selecionarPercurso(ingresso) {
    setModalidadeSelecionada(ingresso)
    const secao = document.getElementById('inscricao')
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-fundo text-slate-100">
      <Cabecalho />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes onSelecionarPercurso={selecionarPercurso} />
        <KitAtleta />
        <Grafico />
        <PerguntasFrequentes />
        <Inscricao modalidadeSelecionada={modalidadeSelecionada} />
      </main>
      <Rodape />
    </div>
  )
}

export default App
