import {Component,Fragment} from "react";
import axios from 'axios'
import Results from './Results'

class Home extends Component{
    constructor() {
        super()
        this.state={
            form:{
                title:''
            },
            formValid:{
                title:false
            },
            formError:{
                title:''
            },
            movieData:null,
            movieDataResponse:false,
            load:false
        }
    }
    handleSubmit=async(event)=>{
        event.preventDefault()
        try {
          this.setState({movieData:null,movieDataResponse:false,load:true})
            let response=await axios.get(`/search/${this.state.form.title}`,{
              headers:{
                "Authorization":"Bearer 8A085DFC3E5BEF71F611D372D8C0040E9A525F08B9B53DE9F0804946218E0FB8"
              }
            })
            if (response.data.Response==="True") {
                this.setState({movieData:response.data.Search,movieDataResponse:true,load:false})
            } else {
                this.setState({movieData:null,movieDataResponse:true,load:false})
            }
        } catch (error) {
            this.setState({movieData:null,movieDataResponse:false,load:false})
        }

    }
    handleChange=event=>{
        let {name,value}=event.target
        let formTemp=this.state.form
        formTemp[name]=value
        this.setState({form:formTemp})
        if (value==='') {
            this.setState({formError:{title:'Title should not empty'},formValid:{title:false}})
        }
        else{
            this.setState({formError:{title:''},formValid:{title:true}})
        }
    }
  render(){
    return(
      <Fragment>
        <div className='container pt-5' style={{height:'100%',color:'white'}}>
          <div className='row'>
            <div className='col-md-6 offset-md-3 col-sm-12'>
              <div className='text-center mb-4 heading'>
                  <h2 style={{color:'#1DB954'}}>Movie or Series Search</h2>
              </div>
              <form className='mb-3' onSubmit={this.handleSubmit}>
                <div className='form-group' style={{color:"#ddd"}}>
                  {/* <label className='font-weight-bold' htmlFor='title'>Movie or Series Title:</label> */}
                  <input aria-required='true' placeholder='Search by title' id='title' name='title' value={this.state.form.title} onChange={this.handleChange} className='form-control'></input>
                  <span className='text-danger'>{this.state.formError.title}</span>
                </div>
                <div className='d-flex justify-content-center'> 
                  <button disabled={!this.state.formValid.title} style={{color:"#fff",backgroundColor:'#1DB954'}} type='submit' className='btn font-weight-bold'>Search</button>
                </div>
              </form>
              {this.state.load?
                <div className='text-center loading py-5 color-white'>
                  <h4>
                    Loading
                    <span className='dot-1'>.</span>
                    <span className='dot-2'>.</span>
                    <span className='dot-3'>.</span>
                  </h4>
                </div>
                :null
              }
              
            </div>
          </div>
        </div>
        <div className='conttainer'>
            {this.state.movieDataResponse?
              this.state.movieData?
                <Results data={this.state.movieData} title={this.state.form.title}/>
                :
                <div className='text-center mt-5 color-white mx-3'>
                  <h4>No such movie or tv shows with such title</h4>
                </div>
                :
              null
            }
        </div>
      </Fragment>
    )
  }
}

export default Home
