import ListItem from "./ListItem";

const List = (proprs) => {
    const render = proprs.data.map(item => {
      return <ListItem onToggleImportant={proprs.onToggleImportant} onToggleDone={proprs.onToggleDone} deliteTask={proprs.deliteTask} key={item.id} task={item}/>
    })

    const emptyList = (
      <li className="todo-item justify-content-center">
        <span className="todo-item-text">Список дел пуст</span>
      </li>
    )

    return (
        <ul className="todo-list">
        {proprs.data.length > 0 ? render : emptyList}
      </ul>
    )
}

export default List;