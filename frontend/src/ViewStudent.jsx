import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ViewStudent = () => {

  var[emp,setEmp]=useState([])

  var navigate = useNavigate()

   //inorder to load immediately use useEffect
    useEffect(()=>{
    axios.get("http://localhost:3000/view")
    .then((res)=>{
        console.log(res.data)
        setEmp(res.data) 
    })
    .catch((error)=>{console.log(error)})
     },[])

  const delValue = (id) =>{
    console.log(id)
    axios.delete("http://localhost:3000/remove/"+id)
    .then((res)=> {
    alert(res.data.message)
    window.location.reload() //automatic reload applied 
    })
    .catch((error)=> console.log(error))
  }

  const upValue = (val) => {
      console.log("Clicked")
     navigate('/b',{state:{val}})
  }

  return (
    <div>
      <Grid container spacing={2}>
      {emp.map((val,i)=>{
        return ( 
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
              Name : {val.Name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Age : {val.Age}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Dept : {val.Dept}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              Sal : {val.Sal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{delValue(val._id)}}>Delete</Button> 
              {/* when delete button is clicked, the corresponding id is passed to the function delValue  */}
              <Button size="small" onClick={()=>{upValue(val)}}>Update</Button>
            </CardActions>
          </Card>
       </Grid>
        )
      })}
      </Grid>
    </div> 
  )
}

export default ViewStudent
