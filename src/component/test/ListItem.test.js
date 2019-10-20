import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from '../ListItem';
import {cleanup, fireEvent, render} from '@testing-library/react';
afterEach(cleanup);

function Component(){
    const listDataItem ={name:"red",address:"#f00",'e-mail':"qwasdeqwe",
    phone:"123123123",location:'india','payment method':'Master',
    curreny:'$',Locale:'123123','net payment':'amex'};
  return <ListItem data={listDataItem} idx={'1'} itemClick={()=>{}} />
}

it("render List without crash",()=>{
    const div = document.createElement('tr');
      render( <Component />,div);
})


