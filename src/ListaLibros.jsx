import React,{useState} from 'react';
import Libro from './Libro';

const ListaLibros = (libros) => {
  
  return (
    <div className='lista-libros'>
      
      <img src={libros.imagen} alt={libros.titulo} />
      <h3>{libros.titulo}</h3>
      <p>{libros.descripcion}</p>
      <span>Autor: {libros.autor}</span>
      <span>Año: {libros.año}</span>
        
      
    </div>
  );
};

export default ListaLibros;

