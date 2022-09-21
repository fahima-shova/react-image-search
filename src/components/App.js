import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList'

class App extends React.Component {
    
    state = {images: []};

     onSearchSubmit = async term => { 

        //the get funtion will have 2 arguements. 
        //1. The adress that we want to make a request to
        //2. An object that will have bunch of options which will help to cusmize the request 
        const response = await unsplash.get('/search/photos', {
            params:{ query: term },
            
        });

        console.log(response.data.results);
        this.setState({images: response.data.results});
    }

    render() {

        return(
            <div className='ui container' style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;