import Main from '../Layout/Main'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import SignUp from '../Pages/SignUp/SignUp';
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
            ,{
                path:'/logIn',
                element:<LogIn></LogIn>
            },{
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])



