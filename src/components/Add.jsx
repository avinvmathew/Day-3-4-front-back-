/* eslint-disable no-unused-vars */
import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({movie}) => {
  // const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const[form,setForm]=useState(
    {
      // mname:movie.mname,
      // cname:movie.cname,
      // dname:movie.dname,
      // ryr:movie.ryr
      fname:'',
      cname:'',
      dname:'',
      ryr:''
    }
  )
  function valueCap(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]: e.target.value})
  }
  let valueAdd=()=>
  {
    console.log(form)
  }
  return (
    <div style={{ width: '100%' }}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Movie-Name"
          name="mname"
          value={form.mname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>

        <TextField
          required
          id="outlined-required"
          label="Category"
          name="cname"
          value={form.cname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Director-Name"
          name="dname"
          value={form.dname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%'
            },
          }}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Release-Year"
          name="ryr"
          value={form.ryr}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
              width:'300%',
            },
          }}
        />
        <br/>
        {/* <TextField
          required
          id="outlined-required"
          label="Last-Name"
          name="lastname"
          value={form.lastname}
          onChange={valueCap}
          InputProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        />
        <br/> */}
      </div>
      <Button variant='contained' color='success' onClick={valueAdd}>Submit</Button>
      {/* <small>count is {count}</small> */}
    </Box>
    </div>
  )
}

export default Add