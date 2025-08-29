import React from 'react';

import {render,screen,} from '@testing-library/react';

import '@testing-library/jest-dom';

import Hero from '../Landingpage/home/Hero';
import Awards from '../Landingpage/home/Awards';

//test suite
describe('Hero Component',()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const signUpbutton = screen.getByRole("button", {name:"/signUp now/i"})
        expect(signUpbutton).toBeInTheDocument();
        expect(signUpbutton).toHaveClass("btn-primary");
        const heroImage=screen.getByAltText("basecase idenity");
        expect(heroImage).toBeInTheDocument();
       
        expect(heroImage).toHaveAttribute('src',"assets/homeHero.png");
        
    });
});

describe('Awards Component',()=>{
    test('render Awards image',()=>{
        render(<Awards/>);
        const awardsImage = screen.getByAltText("broking space");
        expect(awardsImage).toBeInTheDocument();
        expect(awardsImage).toHaveAttribute("src","assets/largestBroker.svg");
    })
})