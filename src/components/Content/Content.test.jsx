import React from 'react';
import {render, screen} from '@testing-library/react';
import Content from './Content.component';

describe('<Content />', ()=>{
    test('Render Content component', () => {
        render(<Content />)
    });
    
    const renderProps = {
        imageURL: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
        title: 'Wizeline',
        description: 'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizelines ...'
    }

    test('Render Props', () => {
        render (<Content {...renderProps}/>)
    });     
});