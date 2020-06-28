import React, { useState} from 'react'

function useModal() {
    // create state which store the curent state of modal
    const[isShowing, setIsShowing] =useState(false);

    // create function to change the current state 
    const toggle = () =>{
        // console.log('usemodal is called')
        setIsShowing(!isShowing);
    }
    //return object so that it will be accessible with other compoents
    return{
        isShowing,
        toggle
    }
}

export default useModal
