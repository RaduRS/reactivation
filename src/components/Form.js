import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            comments: '',
            topic: 'react'
        }
    }

    changeHandler = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    
    commentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    changeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.email} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }



    render() {
        const {email, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Email</label>
                <input type='email' value={email} onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.commentsChange} required></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.changeTopic}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
