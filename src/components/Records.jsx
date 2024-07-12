import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// function createData(mname, category, dname, ryear ,img) {
//   return { mname, category, dname, ryear ,img};
// }

// const rows = [
//     createData('Inception', 'Sci-Fi', 'Christopher Nolan', 2010, 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg'),
//     createData('The Godfather', 'Crime', 'Francis Ford Coppola', 1972, 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'),
//     createData('The Dark Knight', 'Action', 'Christopher Nolan', 2008, 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg'),
//     createData('Forrest Gump', 'Drama', 'Robert Zemeckis', 1994, 'https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg'),
//     createData('The Matrix', 'Sci-Fi', 'Lana Wachowski, Lilly Wachowski', 1999, 'https://m.media-amazon.com/images/S/pv-target-images/06d86913c84a8e3c32f08eaabc56d8fded1c58943f1b4150c9fd0a9d4cea7a70.jpg')
//   ];
  

const Records = () => {
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then((res) => {
        setRows(res.data);
        console.log(rows);
      })
  }, []);
  return (
    <div>
      <TableContainer component={Paper} 
        sx={{'& td, & th':{border:2},
        maxHeight:'700px',
        overflow:'auto',
        background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        backdropFilter: 'blur(20px)', // Blur effect
      }}
        >
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Movie name</b></TableCell>
            <TableCell align="right"><b>Category</b></TableCell>
            <TableCell align="right"><b>Director</b></TableCell>
            <TableCell align="right"><b>Release year</b></TableCell>
            {/* <TableCell align="right"><b>Image</b></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.movieName}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.movieDirector}</TableCell>
              <TableCell align="right">{row.releaseYear}</TableCell>
              {/* <TableCell align="right">
                <a href={row.img} target='_blank' rel="noopener noreferrer">
                  <img src=
                  {row.img} 
                  alt={row.mname} 
                  style={{width:'100px',height:'150px'}}/>
                </a>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
  );
}

export default Records