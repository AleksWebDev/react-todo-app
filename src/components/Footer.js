import React from "react";

class Footer extends React.Component{

    state = {
        taskTitle: '',
    }

    onInputChange = (e) => {
        this.setState({
            taskTitle: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.taskTitle.trim().length > 0 ){
            this.props.addItem(this.state.taskTitle);
        }

        this.setState({
            taskTitle: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="footer">
                <input value={this.state.taskTitle} onChange={this.onInputChange} type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }
}

export default Footer;