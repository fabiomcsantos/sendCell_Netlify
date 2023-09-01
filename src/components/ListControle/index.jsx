import React, {useState} from 'react'
import styles from '../ListControle/ListControle.module.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function CellComponets ({celulares}) {

  const [loading, setLoading] = useState(true);

  function onDelete(id){
      setLoading(false);

      const url = `/celulares/${id}`;
      api.delete(url)
        .then ( (response) => {});
    }


    return (
        <>
        {!loading
        ? (
            <div>Deletado...</div>
          )
          :
          (
            <div className={styles.content}>
              <img className={styles.Img} src={celulares.image} alt="celular" />
                <div className={styles.informations}>
                <h3 className={styles.TitleH3}>marca</h3>
                  <h5 className={styles.TitleH5}>{celulares.marca}</h5>
                <h3 className={styles.TitleH3}>modelo</h3>
                  <h5 className={styles.TitleH5}>{celulares.modelo}</h5>
                <h3 className={styles.TitleH3}>sistema</h3>
                  <h5 className={styles.TitleH5}>{celulares.sistema}</h5>
                <h3 className={styles.TitleH3}>preço</h3>
                  <h5 className={styles.TitleH5}>R$ {celulares.price}</h5>
                </div>
                <div>
                <button className={styles.Button}><Link to={`/editar/${celulares.id}`}>Editar</Link></button>
                        
                <button className={styles.Button} onClick={ () => onDelete(celulares.id)}>Excluir</button>
                </div>
            </div>
          )
        }
    
        </>
    )
}