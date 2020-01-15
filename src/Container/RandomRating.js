import React from 'react';
import Button from '@material-ui/core/Button';

export default class RandomRating extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {status : true , data : props.rows};
        console.log(this.state.data)
    }
    checkStatus = () => {

        this.setState ({ status: !this.state.status })
        setTimeout(() => { alert(this.state.status) }, 2000)
        if(this.state.status ===false) 
          this.randomRating()
      }
       randomRating = () =>{
        //    while (this.state.status === false){
                let randomTime = this.getRandomInt(7);
                let randomRate  = (Math.random() * (10)).toFixed(1);
                let randomItem = this.getRandomInt(this.state.data.length)
                console.log(this.state.data[randomItem].movie +" , " + this.state.data[randomItem].rating )
                console.log("randomItem "+randomRate + " , " + randomItem + " , randomTime: "+ randomTime);
                setInterval(this.state.data[randomItem].rating =randomRate,
                randomTime);
                this.getSorting(this.state.data); 
          //};
        }
       getRandomInt = max => {
           let number = Math.floor(Math.random() *(max))
        return number;
      }
        getSorting( data ) {
            return this.setState({
                data : data.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
            })
      }

    render (){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.checkStatus}>Random Rating</Button>

            </div>

        )
    }

}
