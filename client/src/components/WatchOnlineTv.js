import {  Component} from 'react';

class WatchOnlineTv extends Component{
    constructor(props) {
        super(props)
        this.state={
            id:props.match.params.id,
            season:props.match.params.season,
            episode:props.match.params.episode
        }
    }
    render(){
            const iframeStyle={
                border:"0px",
                width:"100%",
                height:"100vh",
                display:"block",
                margin:"0px",
                padding:"0px"
            }
            const iframe={
                width:"100%",
                height:"100%",
                position:"relative",
                margin:"0px",
                padding:"0px",
                overflow:"visible",
                display:"inline-block"
            }
            document.title=this.props.match.params.movie+' - Watch online'
        return(
            <div style={iframe} className='d-flex justify-content-center align-items-center'>
                <iframe id="watch" style={iframeStyle} webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src={"https://www.2embed.ru/embed/tmdb/tv?id="+this.state.id+"&s="+this.state.season+"&e="+this.state.episode} title={this.state.id}></iframe>
                
            </div>
        )
    }
}

export default WatchOnlineTv;

