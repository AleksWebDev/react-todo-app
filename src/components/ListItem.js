import React from "react";


class ListItem extends React.Component{

    render() {
        let classNames = 'todo-item';

        //Рендерим стили для тасков с пометкой important
        if(this.props.task.important === true) {
            classNames += ' important';
        }

        //Рендерим пометку для выполненых задач
        let taskIsDone = "todo-item-text";
        taskIsDone = this.props.task.done === true ? ' done' : '';

        return (
            <li className={classNames}>
            <span className={taskIsDone} onClick={() => {this.props.onToggleDone(this.props.task.id)}}>{this.props.task.title}</span>
                <div className="btn-group">
                    <button onClick={() => {this.props.onToggleImportant(this.props.task.id)}} role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                    <button role="button" onClick={() => {this.props.deliteTask(this.props.task.id)}} className="btn btn-outline-danger btn-sm">Удалить</button>
                </div>
            </li>
        )
    }
}




export default ListItem;
