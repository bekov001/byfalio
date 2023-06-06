import React,{useEffect, useState} from 'react';
import Slider from '@mui/material/Slider';

function RangeMargin({setLeverage}) {
    const [value, setValue] = useState(0);
    function valuetext(value) {
      setValue(value);
      if (setLeverage)
        setLeverage(value);
        // setValueRange(value);
      return `${'x'}${value}`;
    }
    return (
        <div className="token_buy_price_margin">
        <Slider
                aria-label="Custom marks"
                defaultValue={50}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                step={1}
                valueLabelDisplay="on"
                min={1}
                max={200}
                />
        <div className="token_buy_price_margin_labels">
            <span>х10</span>
            <span>х50</span>
            <span>х100</span>
            <span>х150</span>
            <span>х200</span>
        </div>
    </div>
    );
  }
  
export default RangeMargin;
