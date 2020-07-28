import React from 'react';
import './App.css';
import DrumPad from './DrumPad.js'

var soundArray=[
  {keyName:"Q",displayName:"Heater Kit",source:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
  {keyName:"A",displayName:"Heater 1",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {keyName:"Z",displayName:"Heater 2",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {keyName:"W",displayName:"Heater 3",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  {keyName:"S",displayName:"Clap",source:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},
  {keyName:"X",displayName:"Open HH",source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, 
  {keyName:"E",displayName:"Kick",source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  {keyName:"D",displayName:"Heater 4",source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  {keyName:"C",displayName:"Closed HH",source:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}
];

var soundArrayBank=[
  {keyName:"Q",displayName:"Horn",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674689/sample-swap/horn/horn-section-godown.mp3"}, 
  {keyName:"A",displayName:"Flute",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674456/sample-swap/flute/192_flute-madness.mp3"},
  {keyName:"Z",displayName:"Organ",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674666/sample-swap/piano/almost-the-doors-organ.mp3"},
  {keyName:"W",displayName:"Saxophone",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532675116/sample-swap/sax/sax-squeal-tore-my-brains-out.mp3"},
  {keyName:"S",displayName:"Guitar",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674083/sample-swap/guitar/120_acoustic-guitar-picking1.mp3"}, 
  {keyName:"X",displayName:"Piano",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674667/sample-swap/piano/096_salsa-piano-1.mp3"}, {keyName:"E",displayName:"Violin",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674483/sample-swap/violin/violin-loop-2.mp3"},
  {keyName:"D",displayName:"Choir",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674510/sample-swap/choir/Slavic-Choir_Eb_Aah.mp3"},
  {keyName:"C",displayName:"whoo",source:"https://res.cloudinary.com/dzsmdyknz/video/upload/v1532674533/sample-swap/voice/voice_woo.mp3"}
];


class DrumMachine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      display: String.fromCharCode(160),
      power: true,
      soundMode:"Drums",
      volumeValue: 0.5,
      array:soundArray
    }
    this.handleVolume = this.handleVolume.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleDrumMode = this.handleDrumMode.bind(this);
    this.handleSoundsMode = this.handleSoundsMode.bind(this);
  }
handleDisplay = display => this.setState({ display })

handlePower = () => {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    })
  }

handleVolume(e){
  if(this.state.power){
    this.setState({
      volumeValue: e.target.value
    })
  }
}

handleDrumMode(){
  this.setState({
    soundMode: "Drums",
    display: "Drum Mode selected",
    array:soundArray
  });
}

handleSoundsMode(){
  this.setState({
    soundMode: "Sounds",
    display: "Sound Mode selected",
    array:soundArrayBank
  })
  
}
  
render() {
    const clips = [].slice.call(document.getElementsByClassName("clip"));
    clips.forEach(clip => {clip.volume = this.state.volumeValue});

    return (
        <div class="container">

            <div className="controls">

            <div id="volumeContainer" className="grid-control">
              <p className="volumeText">Volume:{Math.round(this.state.volumeValue * 100)}%</p>
              <i className="fas fa-volume-up"></i>
              <input type="range" min="0" max="1" step = "0.01" value={this.state.volumeValue} 
              className="volumeSlide" onChange = {this.handleVolume}/>
            </div>

            <div onClick={this.handlePower} className="power grid-control">
              <p>Power  <span><i id={this.state.power ? "powerButton":"powerButtonOff"}
              className = "fas fa-power-off"></i></span></p>
              <p id="display">{this.state.display}</p>
            </div>

            <div className="mode grid-control">
              <p>Drum mode <span><i onClick={this.handleDrumMode} className ="fas fa-music"></i></span></p>
              <p>Sounds mode <span><i onClick={this.handleSoundsMode} className ="fas fa-drum"></i></span></p>
            </div>

            </div>

            <div id="drum-machine">

            <div id="drum-pads">{this.state.array.map(x => (
              <DrumPad
                key={x.displayName}
                letter={x.displayName}
                id={x.keyName} 
                src={x.source}
                handleDisplay={this.handleDisplay}
                power={this.state.power}
              />
            ))}
          </div>
        </div> 
        </div>
        )
}
}




         

export default DrumMachine;
