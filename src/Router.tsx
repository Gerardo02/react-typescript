import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import('./App.tsx'))
const ModalList = lazy(() => import('./components/project_form'))

const Router = () => {
    return ( 
        <Routes>
            <Route>
                <Route path='/' element={<App />} />
                <Route path='/modal' element={<ModalList />} />
            </Route>
        </Routes>
     );
}
 
export default Router;