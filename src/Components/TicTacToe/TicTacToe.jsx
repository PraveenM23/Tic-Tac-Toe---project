import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
 
let data = ["","","","","","","","",""]; //this empty strings act as a storage for the game.

export const TicTacToe = () => {

    let [count,setCount] = useState(0); //count represents the number of moves made in the game.setCount is a function provided by useState to update the count state
    let [lock,setLock] = useState(false);//lock is a boolean state used to determine whether the game is locked

    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) => { //arrow func toggle for the boxes whenever we click on the boxes the toggle func will be executed
        if (lock){              //if the lock is true then it will return 0..then this if statement help us to lock our toggle function user wins
            return 0;          //so whenever the user win will set the lock row then the toggle func will not execute
        }
        if(count%2===0){               //if our count is even number then the element insert an image tag using inner html
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";           //data array mark the element with the char x 
            setCount(++count); 
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count);   
        }

        checkWin()

    }

    const checkWin = () =>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!="")
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!="")
        {
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!="")
        {
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!="")
        {
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!="")
        {
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!="")
        {
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!="")
        {
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!="")
        {
            won(data[6]);
        }
        
        if (!data.includes('') && !lock) {
            draw();
          }
    }
   
      const draw = () => {
      setLock(true);
      titleRef.current.innerHTML = 'It\'s a draw!';
    }
    const won = (winner) =>{
        setLock(true);                    //data cannot be modified
        if(winner==="x"){
            titleRef.current.innerHTML = `congratulations:<img src=${cross_icon}>win`
        }
        else{
            titleRef.current.innerHTML = `congratulations:<img src=${circle_icon}>win`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];   //represent the current state of the Tic Tac Toe board
        titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
        box_array.forEach((box) => {                   //forEach loop is used to iterate over each element (ref) in the box_array 
          box.current.innerHTML = '';
        });
    }
  return (
    <div className='container'>
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
            <div className="row1">                                                
                <div className="boxes"ref={box1}onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes"ref={box2}onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes"ref={box3}onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes"ref={box4}onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes"ref={box5}onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes"ref={box6}onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes"ref={box7}onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes"ref={box8}onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes"ref={box9}onClick={(e)=>{toggle(e,8)}}></div>
            </div> 
                            {/* it will help us to mark the data in our data variable */}
        </div>
        <button className='reset' onClick={()=>{reset()}}>Reset</button>

    </div>
  )
}
