import React from 'react';
import AvilableSeat from './Components/BookingFrom/AvilableSeat';
import BookingInfo from './Components/BookingFrom/BookingInfo';
import Navigation from './Components/Navigation/Navigation';

function App() {
    return ( 
        <div > 
            <Navigation/>
            <BookingInfo/>
            <AvilableSeat/>
        </div>
    );
}

export default App;