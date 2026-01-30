import React from 'react'

class Car extends React.Component{
    constructor(props){
        super(props)
    }

    getBrand(){
        return(<>
            <h4>I'm a {this.props.brand} car!</h4>
            <p>I ran {this.props.kms * 1000} meters on {this.props.fuel}</p>
        </>)
    }

    render(){
        return(<>
            {this.getBrand()}
        </>)
    }
}

export default Car