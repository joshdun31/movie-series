import { Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import LazyLoad from 'react-lazyload';

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
                    
                    <div className='search-card-body'>
                        <LazyLoad placeholder="Image Loading" >
                            <img alt={movieData.Title+'\'s Poster'} src={movieData.Poster!=="N/A"?movieData.Poster:"https://res.cloudinary.com/dkmxj6hie/image/upload/v1618683460/Image-not-foung_jxdepq.png"}></img>
                        </LazyLoad>
                        <div className="card-hover-div">
                            <div className="d-flex flex-column card-hover-button">
                                {movieData.Type==='movie'?<Link to={"/watchonline/"+movieData.Title+"/"+movieData.imdbID}><button className="btn btn-primary">Watch Online</button></Link>:null}
                                <Link to={"/"+movieData.Type+"/"+movieData.imdbID}><button className="btn btn-primary" >View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className='search-card-header'>
                        <Link to={"/"+movieData.Type+"/"+movieData.imdbID}><p className='movie-title'>{movieData.Title}</p></Link>
                        <p className='movie-year'>{movieData.Year}</p>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Card