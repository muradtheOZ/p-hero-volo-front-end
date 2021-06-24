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
    const options = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Chittagong', label: 'Chittagong' },
        { value: 'Rajsahi', label: 'Rajsahi' }
      ]

    const [startDate, setStartDate] = useState(new Date());
    
    const [departure,setDeparture] = useState("Departure")

    const [customSeatAvilable,setCustomSeatAvilable] = useState("bg-green")
    const[customSeatBooked, setCustomSeatBooked] = useState("bg-red")

    const handleCustomSeatAvailable = (e)=>{
      const clickedSeat = (e.target.innerText);
      e.target.style.background = "red"
      console.log(e.target.innerText)
      seats.map((seat)=>{
        if(seat.seatNo == clickedSeat){
          seat.isbooked = true;
        }
      })
      console.log("Hello",seats)
      
    }

    const handleOnChange = (value)=> {
      console.log("selected value", value.value);
    }

    

    

  return (
      <Container>
      <div>
    <div className="row">
      <div className="col-md-3 m-auto p-4">
          <h6>Departure</h6>
      <Select
           defaultValue={options[0]}
            options={options} />
      </div>

      <div className="col-md-3 m-auto p-4">
      <h6>Destination</h6>
      <Select
           defaultValue={options[2]}
           onChange={handleOnChange}
            options={options} />
      </div>

      <div className="col-md-3 m-auto p-4">
      <h6>TotalSeat</h6>
      <Select
           defaultValue={options.value}
            options={options} />
      </div>
      <div className="col-md-3 m-auto p-4">
      <h6>Class</h6>
      <Select
           defaultValue={options.value}
            options={options} />
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
                {console.log("heloo objecti",seat , index)}
                  
                  </div>
              )
            })
          }

        </div>
      </div>

    </div>

    </div>
    </Container>
  );
};

export default BookingInfo;
