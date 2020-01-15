//editable table
import React from 'react';
import MaterialTable from 'material-table';

import RandomRating from '../Container/RandomRating'
import Movies from '../Movies.json'

export default function MaterialTableDemo() {
  var rows=[]
  Object.keys(Movies.data).map(key => {  
    rows.push({ movie: Movies.data[key].movie , rating : Movies.data[key].rating })
  })
  const [state, setState] = React.useState({
    columns: [
       { title: 'Movie', field: 'movie' },
      { title: 'Rating', field: 'rating' },
    ],
    data: rows
  });

  return (
    <div>
    <MaterialTable
      title="Movies"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
      }}
    />
    <RandomRating rows = {state.data} />
    </div>
  );
}
