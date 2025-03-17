import React from 'react';

import {render,screen,} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../Landingpage/home/Hero';

describe('Hero Component',()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',"assets");
    });
});