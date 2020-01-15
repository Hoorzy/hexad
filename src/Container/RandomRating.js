import React from 'react';
import Button from '@material-ui/core/Button';


export default class RandomRating extends React.Component{ 
    constructor(props){
        super(props)
      }
    render (){
        return (
            <div>
                <Button variant="contained" color="primary">Random Rating</Button>

            </div>

        )
    }

}
