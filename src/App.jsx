import { useState } from 'react'
import { Container_extract_baster } from './stykes'
import { FaCopy } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";


function App() {

  const [resultados, setResultados] = useState([])
  const [dezenas, setDezenas] = useState([])
  const [text, setText] = useState('')
  const [modal, setModal] = useState(false)

  const hendleSubmit = (e) => {
    e.preventDefault()
    // Remove espaços, traços e barras verticais
    const cleanedText = text.replace(/[\s\-\|,;.]/g, "");
    // Expressão para capturar grupos de 4 números
    const regex = /\d{4}/g;
    const result = cleanedText.match(regex);

    if (!result) {
      return alert("Nenhum número encontrado");
    }

    hendleExtractDezenas(result)

  }

  const hendleExtractDezenas = (result) => {
    const extractedData = result.map((num, index) => {
      const dezenas = [];
  
      for (let i = 0; i < num.length - 1; i++) {
        dezenas.push(num.slice(i, i + 2)); // Extrai pares consecutivos
      }
  
      return {
        id: index + 1, // Cria um ID único
        milhar: num, // Mantém o número original
        dezenas, // Lista de dezenas extraídas
      };
    });
  
    setResultados(extractedData)
    copyToClipboard(extractedData)

  };

  const copyToClipboard = async (res) => {

    const getDezenas = await res.map(item => item.dezenas).flat();
    setDezenas(getDezenas)

  }


  return (
    <Container_extract_baster>
      <header className='extract-header' >
        <h1>Extrator Baster</h1>
      </header>
      <main className='extract-main'>
        <section className='form-area'>
          <form action="#" onSubmit={hendleSubmit}>
              <div className='box'>
                <label htmlFor="dados">Texto com os dados</label>
                <textarea 
                  name="dados" 
                  id="dados"
                  placeholder='Digite o texto com os dados'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <input 
                  type="submit" 
                  value="Extrair" 
                />
                <input 
                  type="button" 
                  value="Limpar" 
                  onClick={() => {setDezenas([]); setText('')}}
                />
              </div>
          </form>
        </section>
        <section className='extract-area'>
          <div className='extract-area-header'>
            <h2>Extração</h2>
          </div>
          <div className='extract-area-content'>
            <div className='extract-area-list'>
              <ul>
                <li>#</li>
                <li>Milhar</li>
                <li>Dezenas extraídas</li>
                <li>Ação</li>
              </ul>
            </div>
            <div className='extract-area-item'>

              { resultados.length > 0 ? (
                  resultados.map((item) => (
                    <ul key={item.id}>
                      <li>{item.id}</li>
                      <li>{item.milhar}</li>
                      <li>{
                        item.dezenas.map((dezena, index) => (
                          <span 
                            key={index}
                            className='dezena'
                          >
                            {dezena}
                          </span>
                        ))
                      }</li>
                      <li>
                        <button 
                          className='copy-button'
                          onClick={() => navigator.clipboard.writeText(item.dezenas.join(' '))}
                        >
                          <b>Copiar</b>
                          <FaCopy />
                        </button>
                      </li>
                    </ul>
                  ))
                ) : (
                  <p>Nenhum dado extraído</p>
                )
              }

            </div>
          </div>
          <div className='extract-area-footer'>
            { resultados.length > 0 &&
              <button 
                className='all-dezenas-button'
                onClick={() => setModal(!modal)}
              >
              <b>Ver todas as dezenas</b>
            </button>
            }
          </div>
        </section>
      </main>
      { modal &&
        <div className='extract-modal'>
          <div className='extract-modal-area'>
            <div className='extract-modal-header'>
              <h3>Todas as dezenas</h3>
              <IoCloseCircleSharp 
                onClick={() => setModal(!modal)}
                className='close-modal'
              />
            </div>
            <div className='extract-modal-content'>
              { dezenas.map((item, index) => (
                <span 
                  key={index}
                  className='dezenas'
                >
                  {item}
                </span>
              ))}
            </div>
            <div className='extract-modal-footer'>
              <button 
                className='copy-full-button'
                onClick={() => navigator.clipboard.writeText(dezenas.join(' '))}
              >
                <b>Copiar</b>
                <FaCopy />
              </button>
            </div>
          </div>
        </div>
      }
    </Container_extract_baster>
  )
}

export default App
