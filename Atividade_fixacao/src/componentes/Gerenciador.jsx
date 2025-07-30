import { useEffect, useState } from "react";
import "./Gerenciador.css"

export default function Gerenciador() {

    const API = "http://127.0.0.1:8000/tarefas";
    const [enviar, setEnviar] = useState(false);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [listaTarefas, setListaTarefas] = useState([]);
    const [estadosTarefas, setEstadosTarefas] = useState({});
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        const carregarTarefas = async () => {
            try {
                const response = await fetch(API);
                if (!response.ok) throw new Error('Erro ao carregar tarefas');
                const data = await response.json();
                setListaTarefas(data);
                
                const estadosIniciais = data.reduce((acc, tarefa) => {
                    acc[tarefa.id] = false;
                    return acc;
                }, {});

                setEstadosTarefas(estadosIniciais);

            } catch (error) {
                console.error("Erro:", error);
                setErro("Falha ao carregar tarefas");
            }
        };
        carregarTarefas();
    }, []);

    
    useEffect(() => {
        const enviarTarefa = async () => {
            const novaTarefa = {
                "nome": nome,
                "descricao": descricao
            };

            try {
                const response = await fetch(API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(novaTarefa)
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP! status: ${response.status}`);
                }

                const data = await response.json();
                setListaTarefas([...listaTarefas, data]);
                setEstadosTarefas({...estadosTarefas, [data.id]: false});
                
                setMensagem("Tarefa cadastrada com sucesso!");
                setErro("");
                setNome("");
                setDescricao("");

            } catch (error) {
                console.error("Erro ao enviar dados:", error);
                setErro("Falha ao cadastrar a tarefa. Verifique o console para mais detalhes.");
                setMensagem("");
            } finally {
                setEnviar(false);
            }
        };

        if (enviar) {
            enviarTarefa();
        }
    }, [enviar, nome, descricao, listaTarefas, estadosTarefas]);

    const alternarEstadoTarefa = (id) => {
        setEstadosTarefas(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault();
                setEnviar(true);
            }}>
                <h2>Gerenciador de Tarefas</h2>

                {mensagem && <div className="mensagem-sucesso">{mensagem}</div>}
                {erro && <div className="mensagem-erro">{erro}</div>}

                <div className="form-group">
                    <label htmlFor="nome">Nome: </label>
                    <input
                        id="nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome da Tarefa"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição: </label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição"
                        required
                    />
                </div>

                <button type="submit" disabled={enviar} className="btn-primario">
                    {enviar ? "Enviando..." : "Cadastrar"}
                </button>
            </form>

            <div className="lista-tarefas">
                <h3>Lista de Tarefas</h3>
                <div className="tabela-tarefas-container">
                    <table className="tabela-tarefas">
                        <tbody>
                            {listaTarefas.map(tarefa => (
                                <tr key={tarefa.id} className={`tarefa ${estadosTarefas[tarefa.id] ? 'concluida' : 'pendente'}`}>
                                    <td>
                                        <strong>Nome:</strong> {tarefa.nome}<br />
                                        <strong>Descrição:</strong> {tarefa.descricao}<br />
                                        
                                        <span className={`status ${estadosTarefas[tarefa.id] ? 'concluido' : 'pendente'}`}>
                                            {estadosTarefas[tarefa.id] ? 'Concluída' : 'Pendente'}
                                        </span>
                                        <button 
                                            onClick={() => alternarEstadoTarefa(tarefa.id)} 
                                            className={`btn-status ${estadosTarefas[tarefa.id] ? 'concluido' : 'pendente'}`}
                                        >
                                            {estadosTarefas[tarefa.id] ? 'Marcar Pendente' : 'Marcar Concluída'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}