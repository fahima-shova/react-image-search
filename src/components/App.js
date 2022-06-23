import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
     
    async onSearchSubmit(term){
        //the get funtion will have 2 arguements. 
        //1. The adress that we want to make a request to
        //2. An object that will have bunch of options which will help to cusmize the request 
        const response = await axios.get('https://api.unsplash.com/search/photos?query=term', {
            params:{ query: term },
            headers: {
                Authorization: 'Client-ID EjnPBX4Ldag9v7iReK0QgcYWWBgVV2blb3hyMP73BPk'
            }
        });

        console.log(response.data.results)
    }

    render() {

        return(
            <div className='ui container' style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;