import * as React from 'react'

function Greeting({ initialName = '' }) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    // Quando uma função é passada como parâmetro no valor inicial do useState(), a atribuição do valor inicial acontece apenas durante
    // a fase de montagem do componente (que acontece apenas uma vez). Esse recurso é chamado LAZY INITIALIZER
    // () => {
    //   console.count('Leu localStorage')
    //   return   window.localStorage.getItem('name') ?? initialName
    // }
    () => window.localStorage.getItem('name') ?? initialName
  )

  const [astesrisco, setAsterisco] = React.useState('*')

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    console.count('Atualizou')
  }, [name]) // VETOR DE DEPENDÊNCIAS
  // O vetor de dependências permite "filtrar" quais vairáveis de estado serão "vigiadas" em busca de alterações
  // para executar o efeito colateral

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name" onClick={() => setAsterisco(astesrisco + '*')}>
          Name: {astesrisco}
        </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercício02() {
  return <Greeting />
}

export default Exercício02