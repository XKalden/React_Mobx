import React from "react";
import { Motion, spring } from "react-motion";
import { inject, observer} from "mobx-react";

//wether data
// import data from "../sample-data";

import Nav from "../components/Nav";
import Temperature from "../components/Temperature";
import Time from "../components/Time";
import Today from "../components/Today";
import Daily from "../components/Daily";
import Chat from "../components/Chat";

import {
  Loading, // small div to wrap text when loading data
  CityContainer, // wraps the entire content in this component
  CityBackground, // displays a background image covering whole page
  Forecast // Wrapper for when showing the Daily components
} from "../elements/city";

@inject("UiStore", "WeatherStore")
@observer

export default class City extends React.Component {
    
    state = {
        time: new Date().toISOString(),
    };

    componentDidMount(){
        setInterval(() => {
            this.setState({
                time: new Date().toISOString()
                
            });
        }, 1000);

        this.props.WeatherStore.fetchWeatherData(this.props.match.params.city);
    }


    render(){
        const { time } = this.state;
        const {weather, weatherError} = this.props.WeatherStore;

        if(weatherError){
            return <Loading> Sorry not Working</Loading>;
        }

        if(!weather){
            return<Loading> Loading.. </Loading>
        }


   

        return(
            <CityContainer>

                <CityBackground  style={{backgroundImage: `url('${weather.image_url}')`}}/>


                <Nav city={weather.city}/>
                <Chat city={weather.city}/>
                <Temperature 
                    temp={weather.current.temp} 
                    city={weather.city} 
                    toggleForcast = {()=>{
                      this.props.UiStore.toggleForecast();
                    }}
                    />
            

                <Time time={time} />
                <Today date={weather.current.date} />
               
                <Motion 
                defaultStyle={{x:-200, opacity:0}}
                style={{ x:spring(this.props.UiStore.showForecast? 0: - 200), 
                opaccity:spring(this.props.UiStore.showForecast? 1: 0)
                }}
                >

                
                {style => (
 
                    <Forecast 
                        style={{ transform: `translateX(${style.x}px)`, opacity: style.opacity}}>
                    {JSON.stringify(style)}
                    {weather.forecast.map(daily=> (
                    

                    <Daily 
                    key={daily.date} 
                    date={daily.date} 
                    low={daily.low} 
                    high={daily.high} 
                    />
                    ))}
                </Forecast>
                )} 
                
        
                </Motion> 

            </CityContainer>
        );
    }
}





