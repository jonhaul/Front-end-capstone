import React, { Component } from 'react';




export default class Test extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            content: "",
        };

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEvent(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        fetch('http://127.0.0.1:5000/pix/add', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
            }),

        })
        
            .then(response => {
                console.log("submission good", response);
                response.json();
            })
            .then(data => {
                console.log("added data item", data);
                this.setState({
                    title: "",
                    content: "",
                });
            })

            .catch(error => {
                console.log("Error sending new item", error);
            });
        
        event.preventDefault();

    }
    
    render() {
        return(

            <form onSubmit={this.handleSubmit} className="sub-wrap">
                <div className='one-col'>
                    <input
                        type="text"
                        name="title"
                        placeholder='input title here'
                        onChange={this.handleChangeEvent}
                        value={this.state.title}
                    />
                    
                    <input
                        type="text"
                        name="content"
                        placeholder='put picture url'
                        onChange={this.handleChangeEvent}
                        value={this.state.content}
                    />

                    <div>
                        <button type='submit' className='btn btn--primary btn--medium'>Submit</button>
                    </div>
                </div>
            </form>

        )
    }
};