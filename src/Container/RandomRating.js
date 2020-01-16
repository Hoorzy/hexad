import React from 'react';
import Button from '@material-ui/core/Button';

import Movies from '../Movies.json';
import Rating from '../Component/Rating';

export default class RandomRating extends React.Component{ 
    constructor(props){
        super(props)
        let rows=[]
        Object.keys(Movies.data).map(key => {  
            rows.push({ movie: Movies.data[key].movie , rating : Movies.data[key].rating })
        })
        this.state = {status : false , data : rows , interval: null};
    }
    checkStatus = () => {
      this.setState(({
        status: !this.state.status
      }));
      
    }
    // ================================================================
    componentDidUpdate() {
      if (this.state.status) {
        this.randomRating(true);
      } else {
        this.randomRating(false);
      }
    }
    // ================================================================
    randomRating = (go) => {
      if (go) {
        let randomTime = this.getRandomInt(7);
        let randomRate = (Math.random() * (10)).toFixed(1);
        let randomItem = this.getRandomInt(this.state.data.length);
        if (randomTime <= 0) {
          randomTime = 1;
        }
        randomTime = randomTime * 1000;
  
        console.log(`Started ${randomTime}`);
        this.state.interval = setInterval(() => {
          this.state.data[randomItem].rating = randomRate;
          // this.getSorting(this.state.data);
          console.log(this.state.data);
          this.setState({
            data : this.state.data.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
        })
        console.log(this.state.data);
  
        },
          randomTime);
  
      } 
      if(!go) {
        if (this.state.interval !== null) {
          clearInterval(this.state.interval);
          console.log("Stoped!");
        }
      }
    }

       getRandomInt = max => {
           let number = Math.floor(Math.random() *(max))
        return number;
      }
    render (){
        return (
            <div>
                <Rating rows = {this.state.data}/>
                <Button variant="contained" color="primary" onClick={this.checkStatus}>Random Rating</Button>

            </div>

        )
    }

}
