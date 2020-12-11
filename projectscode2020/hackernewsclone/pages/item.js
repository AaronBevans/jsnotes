import Story from '../components/Story.js';
import Comment from '../components/Comment.js';
import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';

//creating separate story pages and showing related comments.
export default async function Item(){
    let story = null
    let hasComments = false
    let hasError = false

    try{
        story = await getStory()
        hasComments = story.comments.length > 0
    }catch(error){
        hasError = true
        console.error(error)
    }

    if(hasError){
        view.innerHTML = `<div class='error'>Error Fetching Story</div>`
    }
    
    

    //shows index of story array.

    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No comments'}
    `
}

//retrieves story id
async function getStory(){
    const storyId = window.location.hash.split('?id=')[1]
    
    const dataRequest = await fetch(`${baseUrl}/item/${storyId}`)
    const story = await dataRequest.json()
    return story
}
