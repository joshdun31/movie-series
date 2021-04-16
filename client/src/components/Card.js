import { Component} from 'react';
// import {Link} from 'react-router-dom';
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
                    <div className='search-card-header text-center my-1'>
                        <h5>{movieData.Title} <span>({movieData.Year})</span></h5>
                    </div>
                    <div className='search-card-body' onClick={()=>{this.props.movieCard(this.props.data)}}>
                        <img alt={movieData.Title+'\'s Poster'} src={movieData.Poster}></img>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Card