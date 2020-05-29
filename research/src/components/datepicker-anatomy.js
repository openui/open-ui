import React from 'react'
import './anatomy.css'
import './datepicker-anatomy.css'

const DatepickerAnatomy = () => {
  return (
    <div className="datepicker-anatomy component-anatomy">
      <host>
        <part name="input-block">
          <part name="input" />
          <part name="button" />
          <part name="clear" />
        </part>
        <part name="calendar-modal">
          <part name="header">
            <part name="control">Previous month</part>
            <part name="control">Month</part>
            <part name="control">Year</part>
            <part name="control">Next month</part>
          </part>
          <part name="calendar">
            <part name="calendar-header">
              <part name="header-cell">Mon</part>
              <part name="header-cell">Tue</part>
              <part name="header-cell">Wed</part>
              <part name="header-cell">Thu</part>
              <part name="header-cell">Fri</part>
              <part name="header-cell">Sat</part>
              <part name="header-cell">Sun</part>
            </part>
            <part name="calendar-body">
              <part name="cell">Day 1</part>
              <part name="cell">Day 2</part>
              <part name="cell">Day 3</part>
              <part name="cell">Day 4</part>
              <part name="cell">Day 5</part>
              <part name="cell">Day 6</part>
              <part name="cell">Day 7</part>
              <part name="cell">Day 8</part>
              <part name="cell">Day 9</part>
              <part name="cell">Day 10</part>
              <part name="cell">Day 11</part>
              <part name="cell">Day 12</part>
              <part name="cell">Day 13</part>
              <part name="cell">Day 14</part>
              <part name="cell">Day 15</part>
              <part name="cell">Day 16</part>
              <part name="cell">Day 17</part>
              <part name="cell">Day 18</part>
              <part name="cell">Day 19</part>
              <part name="cell">Day 20</part>
              <part name="cell">Day 21</part>
            </part>
          </part>
          <part name="footer">Footer content</part>
        </part>
      </host>
    </div>
  )
}

export default DatepickerAnatomy
