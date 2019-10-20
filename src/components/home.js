import React,{Component,Fragment} from "react"
import Data from "./content"
import ItemCard from "./common/itemCard"
import Grid from "@material-ui/core/Grid"
import Nav from "./common/navbar"
import config from "../config"
import bg from "./content/images/bg.jpg"
import Carousel from "./carousel"
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            area:"",
            price:""
        }
    }
    componentDidMount(){
        this.setState({area:this.props.match.params.area})
        fetch(config+'/home')
        .then((response)=> {
          return response.json();
        })
        .then((myJson)=> {
          this.setState({price:myJson});
        });
    }
    render(){
        console.log(typeof this.state.price)
        return(
            <Fragment>
                <div style={{backgroundImage:`url(${bg})`}}>
                <Nav />
                
                <Grid container direction="row" justify="space-evenly" >
                    {Data.north.map((data)=>{
                        for(var i in this.state.price){
                            if(this.state.price[i].id==data.id)
                            return(
                                
                            <Grid item xl={4}>
                            <ItemCard data={data} price={this.state.price[i].cost} />
                            </Grid>
                            )
                        }
                    })}
                </Grid>
                <Grid container >
                    <Carousel />
                </Grid>
                </div>
            </Fragment>
        )
    }
}
export default Home;