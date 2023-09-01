import React, {useState} from "react";
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastrar.module.css'

const initialValue = {
    title: '',
    marca: '',
    modelo: '',
    sistema: '',
    image: '',
    price: 0,
    url: '',
};


function Cadastrar (){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();
    
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do formulário (o recarregar a página)

        const url = '/celulares';

    api.post(url, values).then( () => {
        navigate('/');
    })
};

    function onChange(ev){
        const {name, value} = ev.target
        console.log({name, value});

        setValues({... values,[name]:value})
    }

    return(
        <>
        <h1>Cadastrar</h1>
        <div className={styles.form}>
        <form onSubmit={onSubmit}>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="title">Titulo</label>
                <input className={styles.Input} type="text" id="title" name="title" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="marca">Marca</label>
                <input className={styles.Input} type="text" id="marca" name="marca" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="modelo">Modelo</label>
                <input className={styles.Input} type="text" id="modelo" name="modelo" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="sistema">Sistema</label>
                <input className={styles.Input} type="text" id="sistema" name="sistema" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="url">Url do Celular</label>
                <input className={styles.Input} type="text" id="url" name="url" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="image">Url/Imagem</label>
                <input className={styles.Input} type="text" id="image" name="image" onChange={onChange} />
            </div>
            <div className={styles.booksFormGroup}>
                <label className={styles.Label} htmlFor="price">Preço</label>
                <input className={styles.Input} type="text" id="price" name="price" onChange={onChange} />
            </div>
            <button className={styles.Button} type="submit">Salvar</button>
        </form>
        </div>
        </>
    )
}

export default Cadastrar;