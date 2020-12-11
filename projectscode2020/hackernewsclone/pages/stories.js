//providing all individual stories data
import Story from '../components/Story.js';
import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../store.js';

export default async function Stories(path){//function that post data as html from  api
    const { favorites } = store.getState()
    const stories = await getStories(path)//async await function invoked.
    const hasStories = stories.length > 0                

    /*
    if stories are available, turn them into json documentation.
    post them on the page as html.
    */

  //shows index of story array.
  view.innerHTML = `<div>
    ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: 
    checkFavorite(favorites, story) })).join('') : 'No stories'}
  </div>`; 

  document.querySelectorAll('.favorite').forEach(favoriteButton =>{
      favoriteButton.addEventListener('click', async function(){
        const story = JSON.parse(this.dataset.story)
        const isFavorited = checkFavorite(favorites, story)
        store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { 
        favorite: story } })
        await Stories(path)
      })
  })
}

async function getStories(path){//function requests data from api.

    //storing paths within variables.
    const isHomeRoute = path === '/'
    const isNewRoute = path === '/new'

    if(isHomeRoute){
        path = '/news'
    }else if(isNewRoute){
        path = '/newest'
    }

    //fetching data from api
    const response = await fetch(`${baseUrl}${path}`)
    const stories = await response.json()
    return stories
}

// https://node-hnapi.herokuapp.com

//end points

// / (Top) -> /new

// /new (New) -> /newest

// /ask (Ask) -> /ask

// /show (Show) -> /show
