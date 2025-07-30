import { useEffect, useState } from "react";
export default function Login() {

  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([])

  function cadastrarUser(e) {
    e.preventDefault();
    
    const novoUsuario = { name, senha };
    setUsuarios([...usuarios, novoUsuario]); 

    setName("");
    setSenha("");

  }

  useEffect(()=> {
    console.log("Lista de usuários atualizada", usuarios)
  }, [usuarios])
  
  return (
    <>
      <div className="form">
        <h2>Login de  Users</h2>
        <form onSubmit={cadastrarUser} className="form">

            <label>
                <span>Nome: </span>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>

            <br/>

            <label>
                <span>Senha: </span>
                <input type="number" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </label>

            <br/>
            <br/>
            <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
