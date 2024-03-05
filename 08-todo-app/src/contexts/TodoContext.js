import { useContext, createContext} from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"interview preperation",
            completed: false,
        }
    ],

    addTodo :(todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toogleComplete: (id) => {},
});
export const UseTodo = () => {
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider
