import { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';
class Movie extends Component{
    constructor(props) {
        super(props)
        this.state={
            movieData:props.data
        }
    }
    actorLink=(data)=>{
        let splitted=data.split(',')
        let arr=[]
        splitted.map((_,i)=>{
            arr.push(<span key={i}><a href={'https://www.google.com/search?q='+_} rel="noreferrer" target='_blank'>{_}</a></span>)
            arr.push(<span key={i+'span'} style={{margin:'0px 2px 0px 1px' }}>,</span>)
            return _
        })
        arr.pop()
        return arr
    }
    
    render(){
        const movie={
            color:'white'
        }
        const goBack=()=>{
            this.props.history.goBack()
        }
        return(
            
            <div style={movie} className='p-3 movie-card'>
                <i onClick={goBack} className="fas fa-arrow-left go-back-icon"></i>
                <div className='text-center font-weight-bold mb-3 mt-1'>
                    <h4>{this.state.movieData.Title}</h4>
                </div>
                <div className='text-center font-weight-bold mb-3 separate-movie-card'>
                    <img src={this.state.movieData.Poster} alt={`${this.state.movieData.Title} movie poster`}></img>
                </div>
                {this.state.movieData.Type==='movie'?
                    <div className='text-center my-2'>
                        <Link to={'/watchonline/'+this.state.movieData.Title+'/'+this.state.movieData.imdbID}><button className="btn btn-primary">Watch Online</button></Link>
                    </div>
                :null}
                
                <div className="font-weight-bold">
                    <p>Type: <span>{this.state.movieData.Type}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Released: <span>{this.state.movieData.Released}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Runtime: <span>{this.state.movieData.Runtime}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Genre: <span>{this.state.movieData.Genre}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Rated: <span>{this.state.movieData.Rated}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>IMDB Rating: <span><a href={'https://www.imdb.com/title/'+this.state.movieData.imdbID} rel="noreferrer" target='_blank'><i className="fas fa-star mx-1" style={{color:'yellow'}}></i>{this.state.movieData.imdbRating}</a></span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Languages: <span>{this.state.movieData.Language}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Director: {this.actorLink(this.state.movieData.Director)}</p>
                </div>
                <div className="font-weight-bold">
                    <p>Actors: <span>{this.actorLink(this.state.movieData.Actors)}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Box Office: <span>{this.state.movieData.BoxOffice}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Plot: <span>{this.state.movieData.Plot}</span></p>
                </div>
                <div className="font-weight-bold">
                    <p>Awards: <span>{this.state.movieData.Awards}</span></p>
                </div>
            </div>
                
            
        )
    }
}

export default withRouter(Movie)