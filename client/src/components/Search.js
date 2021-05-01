import { Component } from 'react';
import Results from './Results'
import axios from 'axios'

class Search extends Component{
    constructor(props) {
        super(props)
        this.state={
            title:props.match.params.title,
            movieData:null,
            load:false,
            movieDataResponse:false
        }
    }
    componentWillMount(){
        this.search(this.state.title)
    }
    search=async(title)=>{
        try {
            this.setState({movieData:null,movieDataResponse:false,load:true})
              let response=await axios.get(`/search/${title}`)
              console.log(response);
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
                    <div className='containeer'>
                        <div className='text-center color-white pt-3'>
                            <h4>Search results for '<span className='font-weight-bold'>{this.state.title}</span>'</h4>
                        </div>
                        {this.state.movieDataResponse?
                        this.state.movieData?
                            <Results data={this.state.movieData} title={this.state.title}/>
                            :
                            <div className='text-center mt-5 color-white mx-3'>
                            <h4>No such movie or tv show</h4>
                            </div>
                            :
                            <div className='text-center loading py-5 color-white'>
                                <h4 style={{color:'white'}}>
                                Loading
                                <span className='dot-1'>.</span>
                                <span className='dot-2'>.</span>
                                <span className='dot-3'>.</span>
                                </h4>
                            </div>
                        }
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

export default Search;