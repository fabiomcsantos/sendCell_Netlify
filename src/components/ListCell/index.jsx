import React from 'react'
import styles from '../ListCell/ListCell.module.css';

export default function CellComponets ({celulares}) {
    return (
        <>
           <div className={styles.content}>
          <img className={styles.imagens} src={celulares.image} alt="celular" />
          <div className={styles.informations}>
            <h3 className={styles.titleH3}>marca</h3>
              <h5 className={styles.titleH5}>{celulares.marca}</h5>
            <h3 className={styles.titleH3}>modelo</h3>
              <h5 className={styles.titleH5}>{celulares.modelo}</h5>
            <h3 className={styles.titleH3}>sistema</h3>
              <h5 className={styles.titleH5}>{celulares.sistema}</h5>
            <h3 className={styles.titleH3}>preço</h3>
              <h5 className={styles.titleH5}>R$ {celulares.price}</h5>
            <a href={celulares.url}><button className={styles.botao}>Add Carrinho</button></a>
            <a href={celulares.url}><button className={styles.botao}>Comprar</button></a>
          </div>
        </div>
        </>
    )
}