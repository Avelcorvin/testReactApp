import { Device, Connection, PStream, PreflightTest } from 'twilio-client';
import React, { EventHandler, useEffect, useState } from 'react'


export const TwilloApp = ()=>{
    const tokenAdres = 'https://a168306c15b3.ngrok.io/voice/token'
    const device = new Device();
    console.log(device)
    
    const callToNodeJS = ()=>{
        const connection = device.connect({
            agent: "Smith",
            location: "Matrix"
        });
    }

    const pressButton = (EE:any|EventListenerObject)=>{
        const value = EE.target.innerHTML;
        console.log(value)
        const activeConnection =device.activeConnection();
        console.log(activeConnection)

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
        <p>
            <button onClick={callToNodeJS}>Call to NodeJS</button>
            <table>
                <tr><td onMouseDown={pressButton}  className='number'>1</td ><td onMouseDown={pressButton} className='number'>2</td ><td onMouseDown={pressButton} className='number'>3</td ></tr>
                <tr><td onMouseDown={pressButton} className='number'>4</td ><td onMouseDown={pressButton} className='number'>5</td ><td onMouseDown={pressButton} className='number'>6</td ></tr>
                <tr><td onMouseDown={pressButton} className='number'>7</td ><td onMouseDown={pressButton} className='number'>8</td ><td onMouseDown={pressButton} className='number'>9</td ></tr>
            </table>
        </p>
    )

}

