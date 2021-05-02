import {Component,Fragment} from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

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
            formSubmitted:false
        }
    }
    handleSubmit=async(event)=>{
        event.preventDefault()
        this.setState({formSubmitted:true})
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
    if(this.state.formSubmitted){
      return <Redirect to={'/search/'+this.state.form.title} />
    }
    else{
      return(
        <Fragment>
          <div className='container' style={{height:'100%',color:'white'}}>
            <div className='row'>
              <div className='col-md-6 offset-md-3 col-sm-12'>
                <form className='mb-3' >
                  <div className='form-group' style={{color:"#ddd"}}>
                    {/* <label className='font-weight-bold' htmlFor='title'>Movie or Series Title:</label> */}
                    <input aria-required='true' placeholder='Search by title' id='title' name='title' value={this.state.form.title} onChange={this.handleChange} className='form-control'></input>
                    <span className='text-danger'>{this.state.formError.title}</span>
                  </div>
                  <div className='d-flex justify-content-center'> 
                    <Link to={'/search/'+this.state.form.title}>
                      <button disabled={!this.state.formValid.title} style={{color:"#fff",backgroundColor:'#1DB954'}} className='btn font-weight-bold'>Search</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default Home
