import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Aziz Hajjem",
        bio: "peace and love",
        profession: "Student",
        imgSrc: "https://images.unsplash.com/photo-1627755060795-c2dd207f7e46?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

      },
      showState: false,
      counter:0,
      
    };

  }


  toggle = () => {
    return this.setState({ showState: !this.state.showState });
  }
  componentDidMount() {
    console.log("state did mount");
    setInterval(() => {
        
      this.setState({
          counter: this.state.counter + 1
      })
  }, 1000);

}
componentDidUpdate(){

}
componentWillUnmount(){
  alert(`the state lasted ${this.state.counter}seconds`)
}

  render() {
    

    return (
      

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80vw" }}>
        <button onClick={() => this.toggle()}>Toggle</button>
        {this.state.showState &&
          <div className="person" style={{
            color: "#eee2e4ec", textAlign: "center", border: "solid 2px #eee2e4ec", borderRadius: '1.2rem', width: "22rem", height: "33rem",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}>
            <h1>{this.state.Person.fullName}</h1>
            <h3>{` My bio is : ${this.state.Person.bio}`} </h3>
            <h3>{`My profession is : ${this.state.Person.profession}`}</h3>
            <img src={this.state.Person.imgSrc} alt="" style={{ width: "20em", height: "20em", borderRadius: "1rem" }} />
          </div>



        }



      </div>
    )
  }
}

