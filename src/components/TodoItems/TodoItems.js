import './TodoItems.css'
import ShowMore from '../ShowMore/ShowMore';
import anime from 'animejs/lib/anime.es.js';

function TodoItems(props){

    //Function to delete items in the list which takes id as an argument from props.id
    function deleteItem(id){
        
        if (localStorage.getItem("toDoListItems") !== null){
            //Takes each item and checks if the id != the id passed in
            const newItemArray = props.toDoItems.filter(props => props.id !== id)
            //Overwrites the old local storage with the new array
            window.localStorage.setItem('toDoListItems', JSON.stringify(newItemArray));
            //Updates the stateful component in the todo list
            props.createToDoItems(newItemArray);
        }
    }

    function runStartAnimation(){
        anime({
            targets: [document.getElementById(props.id)],
            rotate: '360'
        })
    }
    function runEndAnimation(){
        anime({
            targets: [document.getElementById(props.id)],
            rotate: '0'
        })
    }
    //Needed to use as props for the modal
    const name = props.name;
    const message = props.message
    const date = props.date
    
    //JSX code for the todo list items and takes in the function deleteitems and the props.id as its argument
    return(
        <li className="toDoList row text-wrap">
            <h4 className='toDoItemH4'>{props.name}</h4>
            <div className='todoItemButtonContainer'>
                <ShowMore 
                name={name}
                message={message}
                date={date}
                />
                <button className='toDoItemButton' id={props.id} onClick={() => deleteItem(props.id)} onMouseEnter={() => runStartAnimation()} onMouseLeave={() => runEndAnimation()}>Delete</button>
            </div>
            
        </li>
    );
}

export default TodoItems