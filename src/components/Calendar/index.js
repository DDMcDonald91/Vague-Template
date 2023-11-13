import React, { useState } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import DatePicker from 'reactstrap-date-picker';

const SimpleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <FormGroup>
        <Label for="exampleDatePicker">Select a Date</Label>
        <DatePicker
          id="exampleDatePicker"
          value={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </FormGroup>
      <p>Selected Day: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default SimpleCalendar;
