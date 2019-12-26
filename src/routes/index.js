import Index from '../views/index'
import Home from '../views/Home'
import Login from '../views/Login'
const Routes = [
  {path:'/login', component: Login,},
  {path:'/home', component: Home},
  {path:'/', component: Index,exact: true}
]

export default Routes;