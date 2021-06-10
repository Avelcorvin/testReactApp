import { Device, Connection, PStream, PreflightTest } from 'twilio-client';
import React, { EventHandler, useEffect, useRef, useState } from 'react'


export const TwilloApp = ()=>{
    const ref:{}|any = useRef(null)

    const tokenAdres = '/voice/token'
    const device = new Device();
    console.log(device)
    
    const callToNodeJS = ()=>{
        const connection = device.connect({
            agent: "Smith",
            location: "Matrix"
        });
    }
    const callBumber =()=>{
        const number = ref.current.value;
        console.log(number)

        const connection = device.connect({
         To: number
        });
        connection.on('ringing', function () {
            console.log('Ringing...');
          });

    }

    const pressButton = (EE:any|EventListenerObject)=>{
        const value = EE.target.innerHTML;
        // console.log(value)
        const activeConnection =device.activeConnection();
        // console.log(activeConnection)

        activeConnection?.sendDigits(value)
    
    }

    const getToken = async () => {
        try {
            const response = await fetch(tokenAdres);
            const token = await response.text()
            device.setup(token,{debug: true});
        } catch (error) {
           console.log(error)
        }
    } 

    window.addEventListener('keydown',(eo)=>{
        if(Number(eo.key)){
            const activeConnection = device.activeConnection();
            activeConnection?.sendDigits(eo.key)
        }
    })
    useEffect( ()=>{
        getToken();
    },[getToken])


    return(
        <div className='twillo-container'>
            <div className='twillo-ontainer_button' onClick={callToNodeJS} >Call to NodeJS</div>
                <div>
                    <table>
                        <tr><td onMouseDown={pressButton}  className='number'>1</td ><td onMouseDown={pressButton} className='number'>2</td ><td onMouseDown={pressButton} className='number'>3</td ></tr>
                        <tr><td onMouseDown={pressButton} className='number'>4</td ><td onMouseDown={pressButton} className='number'>5</td ><td onMouseDown={pressButton} className='number'>6</td ></tr>
                        <tr><td onMouseDown={pressButton} className='number'>7</td ><td onMouseDown={pressButton} className='number'>8</td ><td onMouseDown={pressButton} className='number'>9</td ></tr>
                        <tr><td onMouseDown={pressButton} className='number'>*</td ><td onMouseDown={pressButton} className='number'>0</td ><td onMouseDown={pressButton} className='number'>=</td ></tr>
                    </table>
                </div>
            {/* <input ref={ref} className='twillo-container_inputnumber'></input>
            <div 
                className='twillo-ontainer_button'
                onClick={callBumber}>
                    Call Number
            </div> */}
        </div>
    )

}

