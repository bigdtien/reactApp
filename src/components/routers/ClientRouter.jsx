import React from 'react';
import Main from '../pages/Main';
import TodoList from '../pages/TodoList';
import Categories from '../pages/catagories/Categories';
import Productions from '../pages/production/Productions';
import { Route, Routes } from 'react-router-dom';
function ClientRouter(props) {

    const routers = [
        {path: "/", Comment: <Main/>},
        {path: "/todolist", Comment: <TodoList/>},
        {path: "/categories", Comment: <Categories />},
        {path: "/products", Comment: <Productions/>},
    ]
    return (
        <div>
            <Routes>
                {
                    routers.map((value, index) => (
                        <Route key={index} path={value.path} element={value.Comment}/>
                    ))
                }
            </Routes>
          

          
        </div>
    );
}

export default ClientRouter;