import React from 'react';


class DrumPad extends React.Component{
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    window.focus()
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleKeyDown = x => {
    if(this.props.power) {
      if (x.keyCode === this.props.id.charCodeAt()){
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.letter)
        
      }
    }
  }
    handleClick=()=> {
      if(this.props.power) {
        this.audio.play()
        this.audio.currentTime=0
        this.props.handleDisplay(this.props.letter)
      }
   }
    render(){
      return (
      <button
        className="pads" 
        id={this.props.id} 
        onClick={this.handleClick}>        
            <h1>{this.props.id}</h1>
            <audio 
              className="clip" 
              id={this.props.id}
              src={this.props.src} 
              ref={ref=>this.audio=ref}></audio>     
      </button>
      )
    }
  }

export default DrumPad;