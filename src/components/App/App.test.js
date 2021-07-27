import {render, screen} from '@testing-library/react'; 
import React from 'react'; 
import Navbar from '../Navbar/Navbar.component';


describe('navbar', ()=>{
    test('should contain a dark mode', ()=>{
            render(<Navbar/>)            
       const dark = screen.queryByText(/dark mode/i);            
            expect(dark).toBeInTheDocument(); 
    })    
})