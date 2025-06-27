import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //fontawesome 쓸 때 데려오기!
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './assets/styles/reset.css';
import './assets/styles/Todo.css';

function Todo(){
    return(
        <main>
            <input type="text" placeholder="오늘의 할 일을 적어주세요."/>
            <button type="button">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
        </main>
    )
}

export default Todo;