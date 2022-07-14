import React from "react";
import  SearchBar  from "./components/SearchBar/SearchBar";
import  VideoList  from "./components/VideoList/VideoList";
import  VideoDetails  from "./components/MainVideo/VideoDetails";
import youtube from './api/youtube'
import Appcss from './App.module.css'



class App extends React.Component{

  state = {
    videos : [],
    selectedVideo:null,
  }

  componentDidMount(){
    this.handleSubmit('React JS - React Tutorial for Beginners')
  }

  onVideoSelect =(video) =>{
    this.setState({selectedVideo:video})
  }

  handleSubmit =async (searchTerm) => {
    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyA0baJuk9QrLzLUPvORsOomxwLZn3k-dto',
        q:searchTerm,
    }
    })
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
  }

render(){
  const {selectedVideo,videos} = this.state
     return (
    
        <div>

            <div className={Appcss.SearchBarAppContainer}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
            </div>

           <div className={Appcss.mainANdsideAppContainer}> 
           
            <div className={Appcss.mainVideoAppContainer}>
                <VideoDetails video={selectedVideo}/>
            </div>
             <div className={Appcss.videolist_AppContainer}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </div>

           </div>
        </div>
      
  );
}
}

export default App;

