import {  Component} from 'react';
import Movie from './Movie'
import axios from 'axios'

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
            this.setState({separateMovieData:response.data,separate:true,load:false})
            this.setState({load:true})
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
                            <Movie data={this.state.separateMovieData} />
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='text-center loading py-5 color-white'>
                    <h4 style={{color:'white'}}>
                    Loading
                    <span className='dot-1'>.</span>
                    <span className='dot-2'>.</span>
                    <span className='dot-3'>.</span>
                    </h4>
                </div>
            )
        }
    }
}

export default MovieSeries;