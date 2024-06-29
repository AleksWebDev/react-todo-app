function StatusBar(props){
    return (
        <div className="btn-group" role="group">
            <button
             onClick={() => {props.changeStatus('all')}} 
             type="button" 
            className={`btn ${props.status === 'all' ? 'btn-primary' : 'btn-light'}`}>
            Все
            </button>
            <button onClick={() => {props.changeStatus('active')}}
            type="button"
            className={`btn ${props.status === 'active' ? 'btn-primary' : 'btn-light'}`}>
            Активные
            </button>
            <button onClick={() => {props.changeStatus('done')}}
            type="button" 
            className={`btn ${props.status === 'done' ? 'btn-primary' : 'btn-light'}`}>Выполненные</button>
        </div>
    )
}


export default StatusBar;