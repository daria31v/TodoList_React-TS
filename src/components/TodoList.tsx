import React from "react";
import { IItems } from "../types/todo";


interface IProps {
  todos: IItems[];
  onRemoveTodo: (id: string) => void;
}
// interface IState{
//     counter: number;
// }
// class TodoList extends React.Component<IProps, IState>{
//     stateHandler(){
//         this.setState(({counter}) => {
//             console.log(counter);
//         })
//     }
//     render (){
//         return null;
//     };
// }

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
            <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <button onClick={props.onRemoveTodo.bind(this,item.id)}>Delete</button>
        </li>
      );
      })}
    </ul>
  );
};

export default TodoList;
