import React from 'react'
import DialogueArea from './DialogueArea'
import '../animations.css'
import styles from './ScreenArea.module.css'

function ScreenArea({data, details}) {
    var sceneImage = "";
    var screenStyle;
    if(data["background_image"] === undefined)
    {
        screenStyle = {"backgroundColor": details["background_color"]};
    }
    else
    {
        screenStyle = {"backgroundImage": "url("+data["background_image"]+")", "backgroundSize": details["background_size"]};
    }
    const divImagePosition = {...details["image_position"][details["position"]]};
    var imageStyle = {"height":details["image_height"], zIndex: "0"};
    imageStyle["marginTop"] = details["image_offset_top"];
    imageStyle["marginLeft"] = details["image_offset_left"];
    imageStyle["marginRight"] = details["image_offset_right"];
    imageStyle["marginBottom"] = details["image_offset_bottom"];

    if(data["image"] === undefined) {
        sceneImage = "";
    } else {
        sceneImage = <img src={data["image"]} alt={details["image_alt"]} style={imageStyle} />
    } 

    return (
        <div className={styles.screenComponent} style={screenStyle}>
            <div className={styles.screenArea} style={divImagePosition}> {sceneImage} </div>
            <DialogueArea dialogue={data.desc} />
        </div>
    )
}

export default ScreenArea
