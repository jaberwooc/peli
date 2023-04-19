import React from "react";

function Tablarentas({Eliminar, Rentas }) {
  return (
    <div className="tabla">
      {Rentas.length === 0 ? (
        <h2>No hay peliculas</h2>
      ) : (
        <table className="content-table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Pelicula</th>
              <th>idioma</th>
              <th>Precio</th>
              <th>Unit</th>
              <th></th>

            </tr>
          </thead>

          <tbody>
            <>
              {
                
              Rentas.map((a, index) => (
                <tr key={index}>
                  <td>{a.codigo}</td>
                  <td>{a.nombre}</td>
                  <td>{a.idioma}</td>
                  <td>{a.precio}</td>
                  <td>{a.stock}</td>
                  <td><button onClick={()=>Eliminar}>-</button></td>

                </tr>
              ))}
            </>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tablarentas;
