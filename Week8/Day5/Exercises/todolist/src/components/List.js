const List = (props) => {
    const {tasks, deleteTask} = props;
    return (
        <div>
            <h1>Todo's</h1>
            <div className="taskList">
            {   
                tasks.length === 0 ? <p className="empty">You have no todo's left, yay!</p> :
                tasks.map(element => {
                    return (
                        <p onClick={deleteTask} key={element.id} id={element.id}>{element.text}</p>
                    )
                })
            }
            </div>
            <span>Add a new todo:</span>
        </div>
    )
}

export default List;