import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

const Recipe = (props) => {
    const { label, calories, image, ingredientLines,healthLabels, totalTime } = props.recipe

    
    let finalLabel;
    const LabelOne = <h3 className="labelOne">{label}</h3>
    const LabelTwo = <h3 className="labelTwo">{label}</h3>
    const Labelthree = <h3 className="labelThree">{label}</h3>
    const [randomNumber, setRandomNumber] = useState(Math.floor((Math.random() * 2000) + 1));
    const [isHeartActive, setHeartActive] = useState(false);

    if (label.length<20) {
        finalLabel=LabelOne;
      } else if(label.length>=20&&label.length<35){
        finalLabel=LabelTwo;
      }else if(label.length>=35){
        finalLabel=Labelthree;
      }
      

    const heartHandle = () => {
        isHeartActive ? setHeartActive(false) : setHeartActive(true);
    }


    //useState hook 
    React.useEffect(() => {
        if (isHeartActive) {
            setRandomNumber(randomNumber+1);
        } 
        else {
            setRandomNumber(randomNumber-1);
        }
    }, [isHeartActive]);


    return (
        
        <div className="pin">
            <div className="my-4">
                <div className="px-3">
                    <div style={{position: 'relative'}}>
                        <Link to="./www.google.com.tw" className="btn btn-dark btn-sm">
                            <img src={image} alt=""/>
                        </Link><br/>
                        <div className="h1">{finalLabel}</div>
                        <i className={`fas fa-heart ${isHeartActive?'active':''}`} onClick={heartHandle}></i>{" "}{randomNumber}{" "}
                        <i className="far fa-comment-dots"></i>{" "}{totalTime}
                        <p>Calories: {Math.round(calories)}</p>
                        <p>{ingredientLines.map((item,index)=>{return <React.Fragment key={uuid.v4()}>
                            <strong>{index+1}.</strong>{" "}{item}
                            <br /> 
                        </React.Fragment>
                            })}
                        </p>
                        <p>{healthLabels.map(item=>{return <React.Fragment key={uuid.v4()}>
                                <Link to="./www.google.com.tw" className='text-decoration-none text-secondary'>
                                    #{item}{" "}
                                </Link>
                            </React.Fragment>})}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe


