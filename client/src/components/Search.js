import { Component } from 'react';
import { Link } from 'react-router-dom';
import Results from './Results'
import axios from 'axios'
import Loading from './Loading';

class Search extends Component{
    constructor(props) {
        super(props)
        this.state={
            title:props.match.params.title,
            movieData:[],
            load:false,
            movieDataResponse:false,
            page:1
        }
    }
    componentWillMount(){
        this.search(this.state.title,this.state.page)
    }
    search=async(title,page)=>{
        try {
            this.setState({movieData:null,movieDataResponse:false,load:true})
              let response=await axios.get(`/search/${title}/${page}`)
              if (response.data.Response==="True") {
                  this.setState({movieData:response.data.Search,movieDataResponse:true,load:true})
              } else {
                  this.setState({movieData:null,movieDataResponse:true,load:true})
              }
          } catch (error) {
              this.setState({movieData:null,movieDataResponse:false,load:true})
          }
    }
    render(){
        if(this.state.load){
            return(
                <div>
                    <div className='text-center mb-4 heading pt-4 pb-2'>
                      <Link to='/'><h2 style={{color:'#1DB954'}}>Movie or Series Search</h2></Link>
                    </div>
                    <div className='containeer'>
                        <div className='text-center color-white'>
                            <h4 className="mt-4">Search results for '<span className='font-weight-bold'>{this.state.title}</span>'</h4>
                        </div>
                        {this.state.movieDataResponse?
                            (this.state.movieData?
                            <Results data={this.state.movieData} title={this.state.title}/>
                            :
                            <div className='text-center mt-5 color-white mx-3'>
                            <h4>No such movie or tv show</h4>
                            </div>)
                            :
                            <Loading />
                        }
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

export default Search;

 
