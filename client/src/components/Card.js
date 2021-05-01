import { Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
class Card extends Component{
    constructor(props) {
        super(props)
        this.state={
            movieData:props.data
        }
    }
    render(){
        let {movieData}=this.state
        return(
            <CSSTransition in={true} appear={true} timeout={300} classNames='fade'>
                <div className='search-card mx-2 my-4'>
                    <Link to={'/'+movieData.Type+'/'+movieData.imdbID}>
                        <div className='search-card-body'>
                            <img alt={movieData.Title+'\'s Poster'} src={movieData.Poster!=="N/A"?movieData.Poster:"https://res.cloudinary.com/dkmxj6hie/image/upload/v1618683460/Image-not-foung_jxdepq.png"}></img>
                        </div>
                    </Link>
                    <div className='search-card-header'>
                        <p className='movie-title' onClick={()=>{this.props.movieCard(this.props.data)}}>{movieData.Title}</p>
                        <p className='movie-year'>{movieData.Year}</p>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Card