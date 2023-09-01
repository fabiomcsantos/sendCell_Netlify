import React, { useState, useEffect } from 'react';
import ListControle from '../../components/ListControle'
import styles from '../Controle/Controle.module.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';




function App() {
  const [celulares, setCelulares]=useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url='/celulares';

    const params = {};
    if (search) {
      
      params.title_like = search

      api.get('/celulares?_embed=celulares', {params})
      .then( (response) => {     // é uma promisse
        // console.log(response.data)
        setCelulares(response.data)
      })

    } else {

    api.get(url)
      .then((response) => {
        // console.log(response.data)
        setCelulares(response.data)
      })

    }
  },[search])

  return (
    <div>
      <div className={styles.principal}>
        <h2 className={styles.title}>Celulares</h2>
        <div className={styles.pesquisa}>
        <input
          className={styles.listaSearchInput}
          type="search"
          placeholder='Buscar Celulares - Digite aqui a descrição'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
          <button className={styles.Button}><Link to={'/administrar/cadastrar'}> Cadastrar</Link></button>
        {
          celulares.map(celular => {
            return (<ListControle
              key={celular.url}
              celulares={celular}
              />)
            })
          }
          </div>
      </div>
    </div>
  )
}

export default App