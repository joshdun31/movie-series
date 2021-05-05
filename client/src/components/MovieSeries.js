import {  Component} from 'react';
import Movie from './Movie'
import axios from 'axios'
import Loading from './Loading';
import { Link, Redirect } from 'react-router-dom';

class MovieSeries extends Component{
    constructor(props) {
        super(props)
        this.state={
            id:props.match.params.id,
            separateMovieData:null,
            load:false
        }
    }
    componentWillMount(){
        this.movieCard(this.state.id)
    }
    movieCard=async(id)=>{
        try {
            let response=await axios.get(`/movie/${id}`)
            if(response.data.Response==="True"){
                this.setState({separateMovieData:response.data,load:true})
            }
            else{
                this.setState({separateMovieData:null,load:true})
            }
            document.title=`${this.state.separateMovieData.Title} (${this.state.separateMovieData.Year})`
        } catch (error) {
            console.log(error.message);
        }
    }
    render(){
        if(this.state.load){
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            {this.state.separateMovieData?<Movie data={this.state.separateMovieData} />:<Redirect to="/"/>}
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Loading/>
            )
        }
    }
}

export default MovieSeries;