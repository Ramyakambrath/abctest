import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { colourOptions } from './docs/data';

export default function Drop2() {

    const handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
    const  handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
    return (
        <CreatableSelect
        isClearable
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={colourOptions}
      />
        
    )
}
