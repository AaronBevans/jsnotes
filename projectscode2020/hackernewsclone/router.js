/*
File runs a class that invokes a *method() that creates page routes
to be displayed.
*/
import Stories from './pages/stories.js'
import Item from './pages/item.js'
import Favorites from './pages/favorites.js'

const router = new Navigo(null, true, "#")//use hash router
// console.log(router)

export default class RouterHandler {//handles creating routes

    constructor(){
        this.createRoutes()
    }

    createRoutes(){//method creates individual routes
        const routes = [//takes array of routes 
            { path: '/', page: Stories },/*imported/invoked function 
            containing set html; set as route path + page to be displayed.
            */
            { path: '/new', page: Stories },//what will be displayed.
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },//Stories is an imported function.
            { path: '/item', page: Item },
            { path: '/favorites', page: Favorites }
        ]

        routes.forEach(({ path, page })  => {//routes array object element are now iterable.
            router.on(path, ()=>{
                page(path)//display each page.
            }).resolve()
        })
    }
}
