import React from 'react';

class ImageCard extends React.Component{


    // To call React.creatRef we are using construtor
    constructor(props){ // whatever we call or create we have to use "this"

        super(props); // Without calling the super we can not use "this"

        this.state = {spans: 0}; //We can also create state inside the construtor, if we do that we have to use "this." before state

        this.imageRef = React.createRef(); // We need "React.createRef" to communicate with dom to get the information(mainly measurment) of an image
    }

    // We use "componentDidMount()" to verify if the component is showing on the screen or not
    // If the "componentDidMount()" function is true the codes inside this function will be executed

    componentDidMount(){

        this.imageRef.current.addEventListener('load', this.setSpans); 

        // Here imageRef is carring the info of the present image
        // ".current" is reffering to the present <img /> tag 
        // Whenever the function is true ".addEventListener" will addd a event to the <img /> tag (But its rare)
    }

    setSpans = () =>{

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10); // Math.ceil rounding the value

        this.setState({spans: spans});
    }
    
    render(){
        return(

            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>

                 <img ref = {this.imageRef} alt={this.props.description} src={this.props.urls.small}/>
            </div>
        )
    }
} 

export default ImageCard;