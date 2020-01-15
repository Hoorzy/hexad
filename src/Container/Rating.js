//editable table
import React from 'react';
import MaterialTable from 'material-table';
import Movies from '../Movies.json'

export default function MaterialTableDemo() {
    var arr=[]
Object.keys(Movies.data).map(key => {  
  arr.push({ movie: Movies.data[key].movie , rating : Movies.data[key].rating })
})
  const [state, setState] = React.useState({
    columns: [
       { title: 'Movie', field: 'movie' },
      { title: 'Rating', field: 'rating' },
    ],
    data: arr
  });

  return (
    <MaterialTable
      title="Movies"
      columns={state.columns}
      data={state.data}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
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
        // onRowDelete: oldData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
      }}
    />
  );
}
