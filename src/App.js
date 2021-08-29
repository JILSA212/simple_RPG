import './App.css';
import ScreenArea from './components/ScreenArea';
import ChoicesArea from './components/ChoicesArea';
//import data from './StoryLine/example.json';
import data from './StoryLine/story.json';
import { useState } from 'react';
import details from './StoryLine/defaults.json';

function App() {
  const [storyString, setStoryString] = useState("0.");
  var currentData = data[storyString];

  if(currentData === undefined){
    alert("Error: Story terminated enexpectedly, please check the json file.");
    window.location.reload();
  }

  const handleChange = (newValue) => {
    setStoryString(newValue);
  }
  if(currentData["route"] !== undefined && currentData["route"] !== null){
    setStoryString(currentData["route"]);
  }
  if(currentData["terminate"] !== undefined && currentData["terminate"] !== null){
    details["winning_message"] = currentData["winning_message"] === undefined ? details["winning_message"] : currentData["winning_message"];
    details["losing_message"] = currentData["losing_message"] === undefined ? details["losing_message"] : currentData["losing_message"];

    if(currentData["terminate"] === "won"){
      alert(details["winning_message"]);
    }
    else if(currentData["terminate"] === "lost"){
      alert(details["losing_message"]);
    }
    window.location.reload();
  }

  details["button_text"] = currentData["button_text"] === undefined ? details["button_text"] : currentData["button_text"];
  details["animation"] = currentData["animation"] === undefined ? details["animation"] : currentData["animation"];
  details["duration"] = currentData["duration"] === undefined ? details["duration"] : currentData["duration"];
  details["delay"] = currentData["delay"] === undefined ? details["delay"] : currentData["delay"];
  details["easing"] = currentData["easing"] === undefined ? details["easing"] : currentData["easing"];
  details["position"] = currentData["position"] === undefined ? details["position"] : currentData["position"];
  details["text_color"] = currentData["text_color"] === undefined ? details["text_color"] : currentData["text_color"];
  details["background_color"] = currentData["background_color"] === undefined ? details["background_color"] : currentData["background_color"];
  details["image_height"] = currentData["image_height"] === undefined ? details["image_height"] : currentData["image_height"];
  // details["image_width"] = currentData["image_width"] === undefined ? details["image_width"] : currentData["image_width"];
  details["image_alt"] = currentData["image_alt"] === undefined ? details["image_alt"] : currentData["image_alt"];
  details["image_offset_top"] = currentData["image_offset_top"] === undefined ? details["image_offset_top"] : currentData["image_offset_top"];
  details["image_offset_left"] = currentData["image_offset_left"] === undefined ? details["image_offset_left"] : currentData["image_offset_left"];
  details["image_offset_right"] = currentData["image_offset_right"] === undefined ? details["image_offset_right"] : currentData["image_offset_right"];
  details["image_offset_bottom"] = currentData["image_offset_bottom"] === undefined ? details["image_offset_bottom"] : currentData["image_offset_bottom"];
  details["background_size"] = currentData["background_size"] === undefined ? details["background_size"] : currentData["background_size"];

  return (
    <div className="App">
      <div className="storyHeading"> {details["story_title"]} </div>
      <ScreenArea  data={currentData} details={details}/>
      <ChoicesArea dataObj={currentData["options"]} storyString={storyString} change={handleChange} button_text={details["button_text"]} />
      {/* <p> {currentData.options} </p> */}
    </div>
  );
}

export default App;
