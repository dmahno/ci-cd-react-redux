import React from 'react';
import './CardTimeMeta.scss';

function CardTimeMeta({ date, time }) {
  return (
    <div className='time-meta padding_top_8_mobile_768 flex_row_mobile_768'>
      <div className='time-meta__date'>
        <i className='icon calendar'></i>
        {date}
      </div>
      <div className='time-meta__time margin_top_12 margin_mobile_reset_768 '>
        <i className='icon stopwatch'></i>
        {time}
      </div>
    </div>
  );
}

export default CardTimeMeta;
