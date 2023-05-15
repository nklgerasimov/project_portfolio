import Home from "../pages/home/Home"
import Project from "../pages/project/Project"
import Projects from "../pages/projects/Projects"
import Contacts from "../pages/contacts/Contacts"

export const myRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/projects', component: <Projects/> , exact: true},
    {path: '/project/:id', component: <Project/> , exact: true},
    {path: '/contacts', component: <Contacts/> , exact: true},

    // {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    // {path: '/error', component: Error, exact: true},
]