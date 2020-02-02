import React from 'react';
import styled from 'styled-components'
import CreateSelectableDropdown from '../../Generic/Dropdown/CreateSelectableDropdown'
import Dropdown from '../../Generic/Dropdown/Dropdown'
import Drop2 from '../../Generic/Dropdown/Drop2'
import AddValueToDropDown from '../../Generic/Dropdown/AddValueToDropDown';

const MyDiv = styled.div`

color: #d8d8d8;
padding-left: 20px;

@media (min-width: 600px) {
    width: calc(100% - 250px);
    margin-left: 250px;
  }


   
 
  `

  const units = ['box','cm','dz']
  const dropDownField='Manufacturer'
export default function Content() {
    return (
        <MyDiv className="PageContents__Container">
            <p>
                Sed nulla cred Banksy jean shorts. Reprehenderit mumblecore incididunt
                anim accusamus. Keffiyeh Cosby sweater in cornhole elit, tote bag cillum
                banjo. Shabby chic YOLO banh mi sunt. Artisan blog Neutra, polaroid
                adipisicing Banksy +1 lo-fi umami distillery fixie seitan. Semiotics
                artisan flannel mollit craft beer Blue Bottle. Bespoke biodiesel banh mi
                literally.
    </p>
            {/* <CreateSelectableDropdown items={units} dropDownField={dropDownField}/> */}
            <Dropdown items={units} dropDownField={dropDownField}/>
            {/* <AddValueToDropDown  items={units} dropDownField={dropDownField}/> */}
         {/* <Drop2/>  */}
        </MyDiv>
    )
}
