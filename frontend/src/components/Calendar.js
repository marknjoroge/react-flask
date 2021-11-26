import Calendar from 'react-calendar'; 
import React, {useState} from 'react';
import './Calendar.css'
 function Cale() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div className="cale">
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
  
  export default Cale;