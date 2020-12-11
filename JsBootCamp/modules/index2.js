import { getDate, year as currentYear} from './date.js';


class App{
    constructor(){
        this.render()
    }

    render(){
        document.getElementById('root').innerHTML = `
            <div>Date: ${getDate()}</div>
        `
    }
}
new App()