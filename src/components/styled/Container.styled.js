import styled from "styled-components";

export const Container = styled.div`
    /* @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&display=swap"); */
    /* @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"); */
    /* @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&display=swap'); */

    /* @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&family=Ubuntu:wght@400;500;700&display=swap'); */
    //Primary:
    --Light-red-CTA-text: hsl(356, 100%, 66%);
    --Very-light-red-CTA-hover-background: hsl(355, 100%, 74%);
    --Very-dark-blue-headings: hsl(208, 49%, 24%);
    //Neutral:
    --White-text: hsl(0, 0%, 100%);
    --Grayish-blue-footer-text: hsl(240, 2%, 79%);
    --Grayish-blue-desc: hsl(240, 2%, 59%);
    --Very-dark-grayish-blue-body-copy: hsl(207, 13%, 34%);
    --Very-dark-black-blue-footer-background: hsl(240, 10%, 16%);
    //Background gradient - Intro/CTA mobile nav:
    --Very-light-red: hsl(13, 100%, 72%);
    --Light-red: hsl(353, 100%, 56%);
    //Background gradient - body:
    --Very-dark-gray-blue: hsl(237, 17%, 21%);
    --Very-dark-desaturated-blue: hsl(237, 23%, 32%);
    --font-size: 16px;
    --overpass-font: 'Overpass', sans-serif;
    --ubuntu-font: 'Ubuntu', sans-serif;
    --overpass-reguler:300;
    --overpass-semibold:600;
    --ubuntu-reguler:400;
    --ubuntu-semibold:500;
    --ubuntu-bold:700;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 4em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--White-text);
        text-align: center;
        margin:90px 0 0;
        @media screen and (max-width:1025px) {
            font-size: 2.7em;
            margin:50px 0 0;
        }
        @media screen and (max-width:600px) {
            font-size: 2.4em;
            margin:40px 10px 0;
        }
    }
    h2{
        font-size: 2.45em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--Very-dark-blue-headings);
        text-align: center;
        letter-spacing: -.03em;
        margin:150px 0 20px;
        @media screen and (max-width:1025px) {
            font-size: 2.3em;
            margin:100px 0 20px;
        }
        @media screen and (max-width:600px) {
            font-size: 2em;
            text-align: center;
            margin:80px 0;
        }
    }
    .h2_growaudience{
        font-size: 1.25em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-reguler);
        color:var(--White-text);
        text-align: center;
        margin:10px 0 40px;
        @media screen and (max-width:600px) {
            font-size: 1.2em;
            text-align: center;
            margin:10px 30px 30px;
        }
    }
    h3{
        font-size: 1.9em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--Very-dark-grayish-blue-body-copy);
        text-align: left;
        margin:0 0 20px 0;
        @media screen and (max-width:600px) {
            text-align: center;
            margin:40px 20px 15px;
        }
    }
    .h3_introextensible{
        margin:20px 0 20px;
        @media screen and (max-width:600px) {
            margin:80% 20px 15px;
        }
    }
    .h3_freeopensimple{
        margin:200px 0 0;
        @media screen and (max-width:1025px) {
            margin:0 0 20px 0;
        }
        @media screen and (max-width:600px) {
            margin:80% 0 20px 0;
        }
    }
    p{
        font-size: 1em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--Grayish-blue-desc);
        text-align: left;
        line-height:1.8em;
        margin:0;
        @media screen and (max-width:600px) {
            text-align: center;
            margin:0 30px;
        }
    }
    .p_robustcontent{
        margin:0 0 200px 0;
        @media screen and (max-width:1025px) {
            margin:0 0 50px 0;
        }
        @media screen and (max-width:600px) {
            margin:0 30px 70%;
        }
    }
    .p_powerfultooling{
        margin-bottom: 200px;
        @media screen and (max-width:600px) {
            margin-bottom: 50px;
        }
    }
    .p_footerblogr{
        font-size: 1em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--White-text);
        margin:30px 0;
        @media screen and (max-width:600px) {
            text-align: center;
        }
    }
    .rotate{
        transform: rotateZ(180deg);
        transition: 0.3s ease-in-out;
    }
    .default{
        transform: rotateZ(0deg);
        transition: 0.3s ease-in-out;
    }
`