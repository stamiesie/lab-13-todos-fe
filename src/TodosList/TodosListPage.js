import React, { Component } from 'react'
import { getTodos, addTodo, completeTodo } from '../api-utils.js';

export default class TodosListPage extends Component {
    state = {
        todos: [],
        todo: ''
    }

    componentDidMount = async () => {
        // call function with token passed down from props
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.user.token);

        this.setState({ todos });
    }

    handleTodoChange = (e) => this.setState({ todo: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        await addTodo(this.state.todo, this.props.user.token)

        await this.fetchTodos();

        this.setState({ todo: '' })
    }

    handleComplete = async (todoId) => {
        await completeTodo(todoId, this.props.user.token);

        this.fetchTodos();
    }


    render() {
        console.log(this.props);
        return (
            <div>
                < h1 > Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Add a Todo
                <input value={this.state.todo} onChange={this.handleTodoChange} placeholder="Get your life together, etc."></input>
                    </label>
                    <button>Add</button>
                </form>
                {/* if there are no todos on the list, display message */}
                {!this.state.todos.length && <p>Your life is complete. Wanna knock out some of my todos?</p>}
                {this.state.todos.map(todo =>
                    <p key={`${todo.todo}-${todo.id}`}
                        onClick={() => this.handleComplete(todo.id)}
                        className={`
                        todo ${todo.completed
                                ? 'completed'
                                : ''}`
                        }>
                        {todo.todo}
                    </p>)}



            </div >
        )
    }
}
