import React,{Component,Fragment} from "react"
import Grid from "@material-ui/core/Grid"
import Nav from "./common/navbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import bg from "./content/images/bg.jpg"
class Area extends Component{
    constructor(props){
        super(props);
    
    this.state={
        value:""
    }
}
handleChange=(e)=>{
    this.setState({value:e.target.value})
}
handleClick=()=>{
    this.props.history.push(`/home/${this.state.value}`)
}

    render(){
        return(
            <Fragment>
                <div style={{backgroundImage:`url(${bg})`, height:"100vh"}}>
                <Nav />
                <Grid container alignItems="center" justify="center" style={{marginTop:"5%"}} >
                   <Typography variant="h5" style={{color:"white"}}> Please select region to continue...</Typography>
                </Grid>
                <Grid container alignItems="center" justify="center" style={{marginTop:"2%"}}>

            <select name="Area" style={{border:"0.5px solid #c9c9c7", width:"200px", height:"50px", fontSize:"20px"}} value={this.state.value} onChange={this.handleChange}>
                <option value="North Delhi">North Delhi</option>
                <option value="South Delhi">South Delhi</option>
                <option value="Central Delhi">Central Delhi</option>
            
            </select>
            
            </Grid>
            <Grid container alignItems="center" justify="center" style={{marginTop:"2%"}}>
                <Button variant="contained" onClick={this.handleClick}>Go!</Button>
            </Grid>
            </div>
            </Fragment>
        )
    }
}
export default Area;