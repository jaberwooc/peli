import React from 'react'


function Tablapeli ({Enviar,Peliculas}) {

  return (
    <div className="tabla">

        <table className='content-table'>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Pelicula</th>
                    <th>idioma</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th></th>

                </tr>
            </thead>


            <tbody>
               {      

                Peliculas.map((a,index)=>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.nombre}</td>
                    <td>{a.idioma}</td>
                    <td>{a.precio}</td>
                    <td>{a.stock}</td>
                    <td><button onClick={()=>Enviar(a)}>+</button></td>

                </tr>
                )

            }
            </tbody>
     
     

        </table>
      
    </div>
  )
}

export default Tablapeli
