import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BusquedaLibro.module.css';

const BusquedaLibro = () => {
  // Estado para almacenar los libros reservados
  const [reservedBooks, setReservedBooks] = useState({});

  // Lista de libros para mostrar
  const books = [
      {
          id: 1,
          title: 'Mathematics of Classical and Quantum Physics',
          description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: '/mathematicsphysicals.png',
      },
      {
          id: 2,
          title: 'Dibujo y Diseño en Ingeniería',
          description: 'Libro esencial para estudiantes de ingeniería con enfoques prácticos.',
          image: '/dibujidisenioingenieria.png',
      },
  ];

  // Manejar la reserva de libros
  const handleReserve = (bookId) => {
      setReservedBooks((prevReservedBooks) => ({
          ...prevReservedBooks,
          [bookId]: true,
      }));
  };

  return (
      <div className={styles.busquedaLibro}>
          <div>
              <div className={styles.miniDiv}></div>
              <Link to="/" className={`${styles.pathTo} ${styles.noUnderline}`}>Biblioteca Usm</Link> » <span>Prestamos</span> » <span>Busqueda</span>
          </div>

          {/* Filtros de búsqueda */}
          <div className={styles.searchContainer}>
              <select className={styles.select}>
                  <option>Todas las sedes</option>
                  <option>Campus San Joaquin</option>
                  <option>Casa Central</option>
                  <option>Campus Vitacura</option>
              </select>
              <select className={styles.select}>
                  <option>Catálogo de la Biblioteca</option>
                  <option>Departamento de Informatica</option>
                  <option>Departamento de Física</option>
              </select>
              <input
                  type="text"
                  placeholder="Buscar Libro"
                  className={styles.searchInput}
              />
              <img
                  src="/lupa.png"
                  alt="lupa"
                  style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      marginLeft: '10px',
                  }}
              />
          </div>

          {/* Listado de libros */}
          <div className={styles.bookList}>
              {books.map((book) => (
                  <div key={book.id} className={styles.bookItem}>
                      <div className={styles.bookImage}>
                          <img src={book.image} alt={`Imagen del ${book.title}`} />
                      </div>
                      <div className={styles.bookDescription}>
                          <h3>{book.title}</h3>
                          <p>{book.description}</p>
                          <button
                              onClick={() => handleReserve(book.id)}
                              disabled={reservedBooks[book.id]}
                              style={{
                                  backgroundColor: reservedBooks[book.id] ? '#4CAF50' : '#007BFF',
                                  color: '#FFF',
                                  cursor: reservedBooks[book.id] ? 'not-allowed' : 'pointer',
                              }}
                          >
                              {reservedBooks[book.id] ? 'Reservado' : 'Reservar'}
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default BusquedaLibro;