import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List';
import configJSON from '../../configData/data';

it("render List without crash",()=>{
    const div = document.createElement('tr');
    ReactDOM.render(  <List data={configJSON.data}  // data
        titles={configJSON.headerInfo} // Header Titles
        title={'Grid title'} // Table Title
        itemClick={configJSON.cellClick} // on cell click
        headerItemClick={configJSON.headerCellSortClick} // on header cell click
        initialLoadLimit={configJSON.initialLoadLimit} // first load count
        appendDataLimit={configJSON.appendDataLimit} // append load count
        />,div);
})
