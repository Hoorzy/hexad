//editable table
import React from 'react';
import MaterialTable from 'material-table';



export default function MaterialTableDemo(props) {
 
  const [state, setState] = React.useState({
    columns: [
       { title: 'Movie', field: 'movie' },
      { title: 'Rating', field: 'rating' },
    ],
    data: props.rows
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
    </div>
  );
}
