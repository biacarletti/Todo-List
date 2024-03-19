import PropTypes from 'prop-types';
import { useState } from 'react';


const TodoForm = ({addTodo}) => {
    const [title, SetTitle] = useState("")
    const [category, SetCategory] = useState("")

    const handleSubmit = (e) => {
        // tirar a atualização do formulário que é padrão
        e.preventDefault()

        //não deixar criar tarefa sem que haja valor ou categoria
        if (!title || !category) return;

        // add a lista 
        addTodo(title, category);

        //Limpar Campo
        SetTitle("");
        SetCategory("");
    }
    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Digite o título'
                    onChange={(e) => SetTitle(e.target.value)}
                    value={title}
                />
                <select
                    value={category}
                    onChange={(e) => SetCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

TodoForm.propTypes ={
    addTodo : PropTypes.node,
   
}

export default TodoForm