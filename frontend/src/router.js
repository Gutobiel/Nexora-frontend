import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/LoginPage.vue'
import Home from './pages/HomePage.vue'
import EmployeeList from './pages/EmployeeList.vue'
import EmployeeNew from './pages/EmployeeNew.vue'
import EmployeeEdit from './pages/EmployeeEdit.vue'
import CargoList from './pages/CargoList.vue'
import EmpresaNew from './pages/EmpresaNew.vue'
import EmpresaList from './pages/EmpresaList.vue'
import CargoNew from './pages/CargoNew.vue'

const routes = [

  { 
    path: '/login',
    component: Login ,
    meta: { hideNavbar: true, hidePunchButton: true }
  },

  { 
    path: '/',
    component: Login ,
    meta: { hideNavbar: true, hidePunchButton: true }
  },

  { path: '/home',
    component: Home,
    meta: { requiresAuth: true } 
  },  
  {
    path: '/usuario/list',
    component: EmployeeList,
    meta: { requiresAuth: true }
  },
    {
    path: '/usuario/new',
    component: EmployeeNew,
    meta: { requiresAuth: true }
  },
   {
    path: '/usuario/edit/:id',
    component: EmployeeEdit,
    meta: { requiresAuth: true }
  },  
  {
    path: '/empresa/list',
    component: EmpresaList,
    meta: { requiresAuth: true }
  },
      {
    path: '/empresa/new',
    component: EmpresaNew,
    meta: { requiresAuth: true }
  },
  {
    path: '/cargo/list',
    component: CargoList,
    meta: { requiresAuth: true }
  },
      {
    path: '/cargo/new',
    component: CargoNew,
    meta: { requiresAuth: true }
  },
  
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router