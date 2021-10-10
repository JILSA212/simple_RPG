# simple_RPG

Simple_RPG is react based mini project to create an attractive RPG (Role Playing Game) from simple JSON file. It is designed to be highly customizable. 

The main json file should be named "story.json" and should be placed inside [src/StoryLine](./src/StoryLine) folder. 
There is already a file named "story.json" inside StoryLine folder for example purpose.
The program works on storyString which should be named as following pattern.

The question index starts with 0. 
If 0th question has 3 options, add keys like
 - "0.1." to link first option of 0th question.
 - "0.2." to link second option of 0th question.
 - "0.3." to link third option of 0th question.
 - Example:
 ```json
 {
    "0.": {
        "desc": "...",
        "options": [{"1.": "..."},{"2.": "..."}],
        "background_image": "..."
    },
    "0.1": {
        "desc": "...",
        "options": [{"1.": "..."},{"2.": "..."}],
        "background_image": "..."
    },
    "0.2": {
        "desc": "...",
        "options": [{"1.": "..."},{"2.": "..."}],
        "background_image": "..."
    }
}
```

- For example, "0.2.3.1." refers to 0th question's, 2nd option's, 3rd option's, 1st answer.

The storyString will act as key in JSON file. 
- The value will **compulsorily** have "desc" and "options".
- "desc" will contain the string that is the question you want to display.
- "options" will be an array containing options of the same questions in format as seen in above example.

The additional properties which can be set are

- "button_text" : The text you want to display on next button.
- "image" : The image you want to show 
- "position" : Position of the image from following.
	- top left 
	- top center
	- top right 
	- center left
	- center center
	- center right
	- bottom left 
	- bottom center 
	- bottom right 
    
- "background_color" : The default color of background 
- "background_image" : The image you want to show as background 
- "background_size": The default size of background image from following 
	- cover
	- contain
	- auto
    
- "image_height" : The height of image in percent
- "image_alt" : The alternate text you want to show instead of image 
- "story_title": The title of the story which is shown on the top 
- "image_offset_top": The offset of image from top 
- "image_offset_left": The offset of image from left
- "image_offset_right": The offset of image from right
- "image_offset_bottom": The offset of image from bottom
- "winning_message": The default message you want to show to the winner
- "losing_message": The default message you want to show when defeated 


These attributes are set in defaults.json which should not be moved or deleted from StoryLine folder. 
Except for story_title, all other attributes can be overwritten in story.json file.

It is important to notice that background_image will have highest priority over background_color.

There are two major options for ease of use.
You can add "route" as value to rediract to another quesion.
You need to use "terminate" value to "won" or "lost" to signify the end of the game.
You need to proivde "winning_message" or "loosing_message" according to need.
After terminated option, the game will be reset and start from beginning again.

Future Enhancement options:
- Add more options for fonts 
- Add cookies to remember the last question 
- Add option for themes 
- Customize winning and losing message display module 
