import { useState } from 'react';
import './RenderListas.css';


export default function RenderListas () {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method:'GET'});

      const data = await response.json();

    //   Implementando o filter 
      const data1 = data.filter(user => user.name.length > 15 );

      setUsuarios(data1);


    } catch (error) {
      console.error("Erro ao buscar usuários:", error);

    } finally {
      setLoading(false);
    }
  };

  const resgataElementos = () => {
    fetchUsuarios(); // Chama a função para buscar os dados
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <table className='table1'>

        <thead>
          <tr>
            <th>Lista de Usuários</th>
          </tr>
        </thead>

        <tbody className="user-grid">
            {/* Implementando o MAP */}
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={resgataElementos}>Carregar Usuários</button>
    </div>
  );
}