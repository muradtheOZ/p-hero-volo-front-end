import React, { Component } from 'react'
import Select from 'react-select'
import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingInfo.css'
import { useEffect } from 'react';
import axios from 'axios';

const BookingInfo = () => {
  const[departure,setDeparture] = useState();
  const[destination, setDestination] = useState();
  const[seatNumber,setSeatNumber] = useState();
  const[ClassQuality,setClassQuality] = useState();
  const[distance,setDistance] = useState();
  const maxCounter = [];
  const[side,setSide] = useState({
    side1:"",
    side2:""
  })
 
 
 const newdistance =parseFloat(distance *10)
 const newseatNumber =parseFloat(seatNumber)
 const newClassQuality =parseFloat(ClassQuality)
 let fare= parseFloat(newdistance * newseatNumber * newClassQuality);


 useEffect(()=>{
   distanceMeeter()
 },[destination,departure])

 useEffect(()=>{
   console.log("hello")
},[distance,seatNumber,ClassQuality])

 

  const seats = [
    {id:1,seatNo:1,isbooked:false},
    {id:2,seatNo:2,isbooked:false},
    {id:3,seatNo:3,isbooked:false},
    {id:4,seatNo:4,isbooked:false},
    {id:5,seatNo:5,isbooked:false},
    {id:6,seatNo:6,isbooked:false},
    {id:7,seatNo:7,isbooked:false},
    {id:8,seatNo:8,isbooked:false},
    {id:9,seatNo:9,isbooked:false},
    {id:10,seatNo:10,isbooked:false},
    {id:11,seatNo:11,isbooked:false},
    {id:12,seatNo:12,isbooked:false},
    {id:13,seatNo:13,isbooked:false},
    {id:14,seatNo:14,isbooked:false},
    {id:15,seatNo:15,isbooked:false}
  ]

  const seatTotal =[
    {value : 1, label:"One Adult"},
    {value : 2, label:"Two Adult"},
    {value : 3, label:"Three Adult"},
    {value : 4, label:"Four Adult"},
    {value : 5, label:"Five Adult"}
    

  ]
    const options = [
        { value: 'Dhaka',distanceFromDhaka: 0, side:'center' ,label: 'Dhaka' },
        { value: 'Chittagong', distanceFromDhaka: -+248, side:'lower-right',  label: 'Chittagong' },
        { value: 'Rajsahi', distanceFromDhaka: +-248,side:'upper-left',  label: 'Rajsahi' },
        {value: 'Sylhet', distanceFromDhaka:+(+150), side:'upper-right', label: 'Sylhet'},
        {value: 'Pabna', distanceFromDhaka:+-153,side:'upper-left', label: 'Pabna'},
        {value: "Cox's Bazar", distanceFromDhaka:-+398,side:'lower-right', label:"Cox's Bazar"}
      ];


      const SeatClass=[
        {value:'1', label:'Economy'},
        {value:'1.5', label:"Business"}
      ]

    const [startDate, setStartDate] = useState(new Date());

    const [customSeatAvilable,setCustomSeatAvilable] = useState("bg-green")
    const[customSeatBooked, setCustomSeatBooked] = useState("bg-red")

    const handleCustomSeatAvailable = (e)=>{
      const clickedSeat = (e.target.innerText);
      e.target.style.background = "red"
      seats.map((seat)=>{
        if(seat.seatNo === clickedSeat){
          seat.isbooked = true;
        }
      })
      
    }

    const handleOnChangeDeparture =  (value)=> {
      console.log("Hello departure",value)
      const newSide = {side1:value.side};
      setSide(Object.assign(side,newSide))
      console.log("side one value", side)
      const distance = (value.distanceFromDhaka)
       settingTheDeparture(distance)
      
    }

    const handleOnChangeDestination =  (value)=> {
      const newSide = {side2:value.side};
      setSide(Object.assign(side,newSide))
      console.log("side two value", side)
      const distance = (value.distanceFromDhaka)
      settingTheDestination(distance)
     
    }

    const distanceMeeter = ()=>{
      const departureDistance =  parseFloat(departure);
      const destinatioinDistance = parseFloat(destination);

      if((side.side1 === 'upper-left' && side.side2 ==='lower-right') || (side.side1 === 'lower-right' && side.side2 ==='upper-left')||(side.side1 === 'upper-right' && side.side2 ==='lower-left')||(side.side1 === 'lower-left' && side.side2 ==='upper-right')){
        const finalDistance = Math.abs(departureDistance+destinatioinDistance)
      settingTheFinalDistance(finalDistance)

      }
      else{
        const finalDistance = Math.abs(departureDistance-destinatioinDistance)
      settingTheFinalDistance(finalDistance)
    }
      
  
    }
    const settingTheFinalDistance =(value)=>{
      console.log("total distance", value)
      setDistance(value)
    }
    

    

    const handleOnChange = (value) =>{

    }

    const handleSeatClass = (value) =>{
      const quality = (value.value)
      settingTheClass(quality)
    
    }

    const handleSeatChange = (value) =>{
      const result  = value.value
      console.log("clicked Seat", value.value)
      settingTheSeat(result)

    }
    const settingTheSeat =(value)=>{
      console.log("settingthe seat", value);
      setSeatNumber(value)
    }

    const settingTheDeparture =(value)=>{
      console.log("settingthe seat", value);
      setDeparture(value)
    }

    const settingTheDestination =(value)=>{
      console.log("settingthe seat", value);
      setDestination(value)
    }

    const settingTheClass =(value)=>{
      console.log("settingthe seat", value);
      setClassQuality(value)
    }

    console.log("Hello Departure Value", departure);
    console.log("Hello destination Value", destination);
    console.log("Hello Distancea", distance);

    
    

    

    

    

  return (
      <Container>
      <div>
    <div className="row">
      <div className="col-md-3 m-auto p-4">
          <h6>Departure</h6>
      <Select
            options={options}
            onChange={handleOnChangeDeparture} />
      </div>

      <div className="col-md-3 m-auto p-4">
      <h6>Destination</h6>
      <Select
           onChange={handleOnChangeDestination}
            options={options} />
      </div>

      <div className="col-md-3 m-auto p-4">
      <h6>TotalSeat</h6>
      <Select
           defaultValue={seatTotal[0]}
            options={seatTotal}
            onChange={handleSeatChange} />
      </div>
      <div className="col-md-3 m-auto p-4">
      <h6>Class</h6>
      <Select
           defaultValue={SeatClass[0]}
            options={SeatClass}
            onChange={handleSeatClass} />
      </div>
    </div>


    <div className="row mt-5 pt-5">
      <div className="col-md-6 m-auto p-4">
          <h6>Select Date</h6>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        
      </div>

      <div className="col-md-6 m-auto p-4">
        <h6>Select seat</h6>

        <div className="row">
          {
            seats.map((seat,index)=>{
              
              
              return(
                
                <div   className="col-md-4 ml-auto">
                <div onClick={handleCustomSeatAvailable}>
                <div className = { seat.isbooked?customSeatBooked:customSeatAvilable}>{seat.seatNo}</div>
                </div>
                
                  
                  </div>
              )
            })
          }

        </div>
      </div>

    </div>

    </div>

    <div className="row mt-5 text-center">
          <p className="text-center m-auto"> Hello fees payment </p> 
          <p>Total Fess:{fare} </p>
    </div>
    </Container>
  );
};

export default BookingInfo;
