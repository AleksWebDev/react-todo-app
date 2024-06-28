import ListItem from "./ListItem";

const List = () => {

    const todos = [
      {id: 0, title: 'Утренняя зарядка'},
      {id: 1, title: 'Уборка'},
      {id: 2, title: 'Завтрак'},
      {id: 3, title: 'Пробежка'},
      {id: 4, title: 'Занятия'},
    ]


    const render = todos.map(item => {
      return <ListItem key={item.id} task={item}/>
    })

    const emptyList = (
      <li className="todo-item justify-content-center">
        <span className="todo-item-text">Список дел пуст</span>
      </li>
    )

    return (
        <ul className="todo-list">
        {todos.length > 0 ? render : emptyList}
      </ul>
    )
}

export default List;