import Header from '../Header.js';
import Search from '../Search.js';
import  List from '../List.js';
import Footer from '../Footer';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Search/>
            <List/>
            <Footer/>
        </div>
    )
}

export default App;