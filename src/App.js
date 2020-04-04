import React,{Component} from 'react';
import './App.css';
import Form from './components/Form'
import Weather from './components/Weather'


class App extends Component{
    state={  
      temp: '',
      city:'',
      country:'',
      hum:'',
      desc:''
    }

    getWeather = async e =>{
      e.preventDefault()
      let apiKey = 'ff40f98501e3093450157e4e24eba141',
          city = e.target.elements.city.value, // Get City From The Form
          country = e.target.elements.country.value; // Get Country From The Form

      // If City And Country Not Empty It Will Fetch The Data
      if(city !== '' && country !== ''){
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`),
            data = await api.json();
        
        // Append Data To State To Pass It To [Weather] Component 
        this.setState({
          temp: data.main.temp,
          city:data.name,
          country:data.sys.country,
          hum:data.main.humidity,
          desc:data.weather[0].description
        })
      
      }else{
        alert('Please Enter City And Country')
      }
    }

    render(){
      return (
        <div className="App">
          <Form getWeather={this.getWeather}/>
          <Weather
            temp= {this.state.temp}
            city= {this.state.city}
            country= {this.state.country}
            hum= {this.state.hum}
            desc= {this.state.desc}
          />
        </div>
      );
    }
}

export default App;
