import React from 'react';

import Header from '../Header.js';
import Search from '../Search.js';
import  List from '../List.js';
import Footer from '../Footer';
import './App.css';


class App extends React.Component{

    state = {
        todoData: [
            {id: 0, title: 'Утренняя зарядка', important: false, done: false},
            {id: 1, title: 'Уборка', important: false, done: false},
            {id: 2, title: 'Завтрак', important: true, done: false},
            {id: 3, title: 'Пробежка', important: false, done: false},
            {id: 4, title: 'Занятия', important: false, done: true},
          ]
    }

    onToggleImportant = (id) => {
        this.setState((state) => {

            //1 Найти индекс задача внутри массива todoData
            const idx = state.todoData.findIndex((el) => {return el.id === id});
            //2 Сформировать новый объект но с обратным значением important 
            const oldItem = state.todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};
            //3 Формируем новый массив
            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);

            const newArr = [...partOne, newItem,  ...partTwo];
            console.log(newArr);

            return {
                todoData: newArr,
            }
        })
    }


    onToggleDone = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex((el) => {return el.id === id});
            const oldItem = state.todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            
            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);
            const newArr = [...partOne, newItem, ...partTwo];

            return {
                todoData: newArr,
            }
        })
    }

    deliteTask = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex((el) => {return el.id === id});
            /* const currentItem = state.todoData[idx]; */
            
            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);

            const newArr = [...partOne, ...partTwo];

            return {
                todoData: newArr,
            }
        })
    }

    addItem = (title) => {
        this.setState((state) => {
            const idx = state.todoData[state.todoData.length - 1]['id'] + 1;
            const newItem = {id: idx, title: title, important: false, done: false};
            //Формириуе новый массив
            const newArray = [...state.todoData, newItem];
            return {
                todoData: newArray,
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <Header/>
                <Search/>
                <List data={this.state.todoData} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} deliteTask={this.deliteTask} />
                <Footer addItem={this.addItem}/>
            </div>
        )
    }
}



export default App;