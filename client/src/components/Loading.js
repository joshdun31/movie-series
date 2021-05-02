import { Component } from 'react';

class Loading extends Component{
    render(){
        return(
            <div className='text-center loading color-white'>
                <h4 style={{color:'white'}}>
                    Loading
                    <span className="dots">
                        <span className='dot-1'>.</span>
                        <span className='dot-2'>.</span>
                        <span className='dot-3'>.</span>
                    </span>
                    
                </h4>
            </div>
        )
    }
}

export default Loading