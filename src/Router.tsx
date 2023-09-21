import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.tsx'))
const ModalList = lazy(() => import('./components/project_form'))
const Characters = lazy(() => import('./components/characters-gql'))

const Router = () => {
    return ( 
        <Routes>
            <Route>
                <Route path='/' element={<App />} />
                <Route path='/modal' element={<ModalList />} />
                <Route path='/characters' element={<Characters />} />
            </Route>
        </Routes>
     );
}
 
export default Router;