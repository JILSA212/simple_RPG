# simple_RPG

Simple_RPG is react based mini project to create an attractive RPG (Role Playing Game) from simple JSON file. It is designed to have highly costumizable. 

The main json file should be named "story.json" and should be placed inside StoryLine folder. 
There is already a file named "story.json" inside StoryLine folder for example purpose.
The program works on storyString which should be named as following pattern.

The question index starts with 0. 
If 0th question has 3 options, add keys like ...
 ..."0.1." to link first option of 0th question.
 ..."0.2." to link second option of 0th question.
 ..."0.3." to link third option of 0th question.

So as you know now, "0.2.3.1." refers to 0th question's, 2nd option's, 3rd option's, 1st answer.

The storyString will act as key in JSON file. 
The value will **compulsory** have "desc" and "options".
"desc" will contain the string that is the question you want to display.
"options" will be an array containing options of the same questions in format...
 ...{"1.": "Your option here"}

The addition properties which can be set are
<ul>
<li> "button_text" : The text you want to display on next button. </li>
<li> "image" : The image you want to show </li>
<li> "position" : Position of the image from following </li>
    <ul>
        <li> top left </li>
        <li> top center </li>
        <li> top right </li>
        <li> center left </li>
        <li> center center </li>
        <li> center right </li>
        <li> bottom left </li>
        <li> bottom center </li>
        <li> bottom right </li>
    </ul>
<li> "background_color" : The default color of background </li>
<li> "background_image" : The image you want to show as background </li>
<li> "background_size": The default size of background image from following </li>
    <ul>
        <li> cover </li>
        <li> contain </li>
        <li> auto </li>
    </ul>
<li> "image_height" : The height of image in percent </li>
<li> "image_alt" : The alternate text you want to show instead of image </li>
<li> "story_title": The title of the story which is shown on the top </li>
<li> "image_offset_top": The offset of image from top </li>
<li> "image_offset_left": The offset of image from left </li>
<li> "image_offset_right": The offset of image from right </li>
<li> "image_offset_bottom": The offset of image from bottom </li>
<li> "winning_message": The default message you want to show to the winner </li>
<li> "losing_message": The default message you want to show when defeated </li>
</ul>

These attributes are set in defaults.json which should not be moved or deleted from StoryLine folder. 
Except for story_title, all other attributes can be overwritten in story.json file.

It is important to notice that background_image will have highest priority over background_color.

There are two major options for ease of use.
You can add "route" as value to rediract to another quesion.
You need to use "terminate" value to "won" or "lost" to signify the end of the game.
You need to proivde "winning_message" or "loosing_message" according to need.

Future Enhancement options:
<ul>
    <li> Add more options for fonts </li>
    <li> Add cookies to remember the last question </li>
    <li> Add option for themes </li>
    <li> Customize winning and losing message display module </li>
</ul>