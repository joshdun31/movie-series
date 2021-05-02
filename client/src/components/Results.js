import {Component,Fragment} from 'react';
import Card from './Card';
import {CSSTransition} from 'react-transition-group';
class Results extends Component{
    constructor(props) {
        super(props)
        this.state={
            movieData:props.data,
            movie:true,
            tvshow:false,
            separate:false,
            load:false,
            movieFilter:[],
            tvshowFilter:[]
        }
        document.title=props.title+'(Movie) - search results (Movie)'
    }
    linkHandle=(type)=>{
        if(type==='movie'){
            document.title=this.props.title+' (Movie) - search results'
            this.setState({movie:true,tvshow:false})
        }
        else{
            document.title=this.props.title+' (TV Show) - search results'
            this.setState({movie:false,tvshow:true})
        }
    }
    componentDidMount(){
        let mFilter=this.state.movieData.filter(_=>_.Type==='movie'?_:null)
        let tFilter=this.state.movieData.filter(_=>_.Type==='series'?_:null)
        this.setState({movieFilter:mFilter,tvshowFilter:tFilter})
    }
    render(){
        if(this.state.load){
            return(
                <div className='text-center color-white loading py-5'>
                    <h4>
                    Loading
                    <span className='dot-1'>.</span>
                    <span className='dot-2'>.</span>
                    <span className='dot-3'>.</span>
                    </h4>
                </div>
            )
        }
        else{
            return(
                <Fragment>
                    <div className='results pt-4 pb-3'>
                        <CSSTransition in={true} appear={true} timeout={300} classNames='visible'>
                            <div className='link-div d-flex'>
                                <div className={this.state.movie?'link active':'link'} onClick={()=>{this.linkHandle('movie')}}>Movies</div>
                                <div className={this.state.tvshow?'link active':'link'} onClick={()=>{this.linkHandle('tvshow')}}>TV Shows</div>
                            </div>
                        </CSSTransition>
                        {this.state.movie?
                            (this.state.movieFilter.length===0?<h4 className='text-center mt-5'>No movies with such title</h4>
                            :
                            <div className='whole-card'>
                                {this.state.movieData.map((_,i)=>_.Type==='movie'?<Card key={_.imdbID+i} movieCard={this.movieCard} data={_}/>:null)}
                            </div>)
                            :null
                        }
                        {this.state.tvshow?
                            (this.state.tvshowFilter.length===0?<h4 className='text-center mt-5'>No tv shows with such title</h4>:
                            <div className='whole-card'>
                                {this.state.movieData.map((_,i)=>_.Type==='series'?<Card key={_.imdbID+i} data={_}/>:null)}
                            </div>)
                            :null
                        }
                    </div>
                </Fragment>
            )
        }
        
    }
}

export default Results;