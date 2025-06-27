import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* 개별 fontawesome 불러오기 */
//import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { faAngleLeft, faAngleRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solids from '@fortawesome/free-solid-svg-icons';

//컴포넌트 호출
import Header from './Header';
import Todo from './Todo';
import List from './List';


function App(){
  return(
    <div id="wrap" style={{
      backgroundColor:'#eee',
      width:'420px',
      height:'80vh',
      margin:'0 auto',
      padding:'30px 15px',
    }}>
      <Header />{/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App