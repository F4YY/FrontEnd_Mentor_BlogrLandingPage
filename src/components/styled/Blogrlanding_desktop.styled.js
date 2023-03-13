import styled from "styled-components";
import bgintrodesktop from '../images/bg-pattern-intro-desktop.svg';
import bgintromobile from '../images/bg-pattern-intro-mobile.svg';
import bgeditordesktop from '../images/illustration-editor-desktop.svg';
import bgeditormobile from '../images/illustration-editor-mobile.svg';
import bglaptopdesktop from '../images/illustration-laptop-desktop.svg';
import bglaptopmobile from '../images/illustration-laptop-mobile.svg';
import bgcircle from '../images/bg-pattern-circles.svg';
import arrowdown from '../images/icon-arrow-down.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
//Styled for Grid layout:
export const Styledblogrlanding = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: repeat(5,auto);
    grid-template-areas:
        'A'
        'B'
        'C'
        'D'
        'E';
    @media screen and (max-width:1025px) {
        grid-template-rows: repeat(5,auto);
    }
    @media screen and (max-width:600px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(5,auto);
        grid-template-areas:
            'A'
            'B'
            'C'
            'D'
            'E';
    }
`
//Styled for Intro page:
export const Intro = styled.div`
    grid-area: A;
    background-image: url(${bgintrodesktop}),linear-gradient(to right,var(--Very-light-red),var(--Light-red));
    background-size: 220%;
    background-repeat: no-repeat;
    background-position: 24% 52%;
    border-bottom-left-radius:110px;
    @media screen and (max-width:600px) {
        background-image: url(${bgintromobile}),linear-gradient(150deg,var(--Very-light-red),var(--Light-red));
        background-size: auto;
        inset:0;
        background-position-x: 35%;
        background-position-y: 36%;
    }
`
//Styled for navbar section inheritance of Intro page:
export const Navbarsection = styled(Hstack)`
    padding: 50px 50px 10px 150px;
    margin-right: 0;
    justify-content: space-between;
    ul{
        display:block;
        font-size: 1.05em;
        font-family: var(--ubuntu-font);
        font-weight: var(--ubuntu-semibold);
        color:var(--White-text);
        list-style: none;
        @media screen and (max-width:1025px) {
            font-size: .7em;
            padding:0;
        }
        @media screen and (max-width:600px) {
            display: none;
        }
    }
    li{
        display: inline-block;
        cursor: pointer;
        margin-right: 50px;
        :hover{
            font-weight: var(--ubuntu-bold);
            text-decoration:underline;
        }
        :active{
            font-weight: var(--ubuntu-semibold);
            text-decoration:underline;
        }
    }
    .ul_navbar{
        position:relative;
    }
    .ul_navbarlist{
        display: block;
        justify-content: center;
    }
    .li_navbarlist_desktop{
        display: list-item;
        font-size: .9em;
        font-weight: var(--ubuntu-reguler);
        color:var(--Very-dark-blue-headings);
        margin-bottom: 15px;
        :hover{
            font-weight: var(--ubuntu-bold);
            text-decoration:initial;
        }
        :active{
            font-weight: var(--ubuntu-semibold);
        }
        @media screen and (max-width:1025px) {
            font-size: 1.3em;
            text-align: left;
            padding:0 10px;
            margin:0 20px 15px;
        }
    }
    ul.ul_login_signup{
        margin:0;
    }
    ul li.li_login_signup{
        :last-child{
            color:var(--Light-red);
            padding: 13px 33px;
            border-radius: 30px;
            background-color: var(--White-text);
            :hover{
                color:var(--White-text);
                background-color: var(--Very-light-red-CTA-hover-background);
                text-decoration:initial;
            }
            :active{
                border:1px solid var(--White-text);
            }
            @media screen and (max-width:600px) {
                color:var(--White-text);
                background:linear-gradient(to right, var(--Very-light-red), var(--Light-red));
                margin:0 90px 20px;
                :hover{
                    color:var(--White-text);
                    background-color: var(--Very-light-red-CTA-hover-background);
                    text-decoration:initial;
                }
                :active{
                    border:1px solid var(--White-text);
                }
            }
        }
    }
    @media screen and (max-width:1025px) {
        padding: 40px 0 20px;
    }
    @media screen and (max-width:600px) {
        padding:0;
    }
`
export const Logo = styled.img`
    width: 100px;
    height: 42px;
    padding:5px 20px;
    @media screen and (max-width:1025px) {
        width: auto;
        height: auto;
        padding:0 40px 15px;
        margin:0 0 0 10px;
    }
    @media screen and (max-width:600px) {
        width: 90px;
        height: 40px;
        padding:40px 20px;
    }
`
export const Wrapper = styled(Hstack)`
    justify-content:space-between;
    align-items: center;
    gap:15px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        gap:5px;
        margin:0 128px;
    }
`
export const Arrowdown = styled.div`
    width: 10px;
    height: 8px;
    margin-top:3px;
    color: var(--White-text);
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    :hover{
        font-weight: var(--bold);
        cursor: pointer;
    }
`
export const Productlist = styled.div`
    width: auto;
    height: auto;
    border-radius: 8px;
    padding:20px 0 10px 0;
    background-color: var(--White-text);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    position:absolute;
    top: 100px;
    left: 245px;
    @media screen and (max-width:1025px) {
        top: 80px;
        left: 170px;
    }
    @media screen and (max-width:600px) {
        position:initial;
        width: auto;
        height:auto;
        box-shadow: initial;
        background-color: var(--Grayish-blue-footer-text);
        padding:20px 0 10px;
        margin:20px 40px;
    }
`
export const Companylist = styled.div`
    width: auto;
    height: auto;
    border-radius: 8px;
    padding:20px 0 10px 0;
    background-color: var(--White-text);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    position:absolute;
    top: 100px;
    left: 440px;
    @media screen and (max-width:1025px) {
        top: 80px;
        left: 300px;
    }
    @media screen and (max-width:600px) {
        position:initial;
        width: auto;
        height:auto;
        box-shadow: initial;
        background-color: var(--Grayish-blue-footer-text);
        padding:20px 0 10px;
        margin:20px 40px;
    }
`
export const Connectlist = styled.div`
    width: auto;
    height: auto;
    border-radius: 8px;
    padding:20px 0 10px 0;
    background-color: var(--White-text);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    position:absolute;
    top: 100px;
    left: 610px;
    @media screen and (max-width:1025px) {
        top: 80px;
        left: 420px;
    }
    @media screen and (max-width:600px) {
        position:initial;
        width: auto;
        height:auto;
        box-shadow: initial;
        background-color: var(--Grayish-blue-footer-text);
        padding:20px 0 10px;
        margin:20px 40px 0;
    }
`
export const Buttoncentering = styled(Hstack)`
    justify-content: center;
    margin:0 0 130px 0;
    @media screen and (max-width:600px) {
        margin:0 0 130px 0;
    }
`
export const Startfree = styled.button`
    width: 130px;
    height: auto;
    padding: 14px 12px;
    font-size: 1em;
    font-family: var(--ubuntu-font);
    font-weight: var(--ubuntu-semibold);
    color:var(--Light-red);
    border-style: none;
    border-radius: 30px;
    background-color: var(--White-text);
    cursor:pointer;
    margin: 10px 8px;
    :hover{
        color:var(--White-text);
        background-color: var(--Very-light-red-CTA-hover-background);
    }
    :active{
        border:1px solid var(--White-text);
    }
`
export const Learnmore = styled(Startfree)`
    color:var(--White-text);
    border: 1px solid var(--White-text);
    background-color: initial;
    :hover{
        color:var(--Very-light-red-CTA-hover-background);
        background-color: var(--White-text);
    }
    :active{
        border:1px solid var(--Light-red);
    }
`
//Styled for Landing pages:
export const Landing1 = styled.div`
    grid-area: B;
    background-image: url(${bgeditordesktop});
    background-repeat: no-repeat;
    background-size: auto;
    inset:0;
    background-position-x:180%;
    background-position-y:80%;
    @media screen and (max-width:1025px) {
        background-position-x:500%;
        background-position-y:20%;
        @media screen and (max-width:916px) {
            background-position-x:-4000%;
            background-position-y:20%;
            @media screen and (max-width:897px) and (min-width:895px) {
                background-position-x:-1500%;
                background-position-y:20%;
            }
            @media screen and (max-width:852px) and (min-width:811px) {
                background-position-x:-430%;
                background-position-y:20%;
            }
        }
        @media screen and (max-width:769px) and (min-width:739px) {
            background-position-x:-240%;
            background-position-y:20%;
        }
        @media screen and (max-width:737px) {
            background-position-x:-280%;
            background-position-y:20%;
        }
        @media screen and (max-width:600px) {
            background-image: url(${bgeditormobile});
            background-size: 100%;
            background-position-x:initial;
            background-position-y:15%;
        }
    }
`
export const Article = styled(Vstack)`
    padding: 60px 680px 0 140px;
    @media screen and (max-width:1025px) {
        padding: 70px 500px 0 30px;
    }
    @media screen and (max-width:600px) {
        padding: 0;
    }
`
export const Landing2 = styled.div`
    grid-area: C;
    background-image: url(${bgcircle}),linear-gradient(to left,var(--Very-dark-desaturated-blue),var(--Very-dark-gray-blue));
    background-repeat: no-repeat;
    background-position: -60% 80%;
    border-top-right-radius: 110px;
    border-bottom-left-radius: 110px;
    position:relative;
    @media screen and (max-width:1025px) {
        background-position: 200% 80%;
    }
    @media screen and (max-width:600px) {
        background-size: 150%;
        inset:0;
        background-position: 50% -1030%;
    }
`
export const ArticleStateofart = styled(Article)`
    padding: 70px 140px 0 680px;
    .h3_stateofart{
        font-size: 2.4em;
        color:var(--White-text);
        margin-top: 40px;
    }
    .p_stateofart{
        color:var(--White-text);
        font-weight: var(--overpass-reguler);
        padding-right:10px;
        margin-bottom: 100px;
    }
    @media screen and (max-width:1025px) {
        padding: 70px 50px 0 500px;
    }
    @media screen and (max-width:600px) {
        padding: 0;
        .h3_stateofart{
            margin-top:200px;
            text-align: center;
        }
        .p_stateofart{
            text-align: center;
        }
    }
`
export const Handphone = styled.img`
    width:auto;
    height:auto;
    position:absolute;
    inset:0;
    margin:-70px 0 0 80px;
    @media screen and (max-width:1025px) {
        margin:-20px 0 0 -40px;
    }
    @media screen and (max-width:600px) {
        width:100%;
        margin:-200px 0 0;
    }
`
export const Landing3 = styled.div`
    grid-area: D;
    background-image: url(${bglaptopdesktop});
    background-repeat: no-repeat;
    background-size: auto;
    inset:0;
    background-position: -75% 90%;
    @media screen and (max-width:1181px) {
        background-position: -150% 90%;
    }
    @media screen and (max-width:1025px) {
        background-position: -850% 30%;
    }
        @media screen and (max-width:1023px) {
            background-position: 330% 90%;
            @media screen and (max-width:916px) {
                background-position: 740% 90%;
                @media screen and (max-width:852px) and (min-width:811px) {
                    background-position: 320% 90%;
                }
            }
            @media screen and (max-width:897px) and (min-width:895px) {
                background-position: 540% 90%;
            }
            @media screen and (max-width:769px) and (min-width:739px) {
                background-position: 260% 90%;
            }
            @media screen and (max-width:737px) {
                background-position: 240% 90%;
            }
        }
    @media screen and (max-width:600px) {
        background-image: url(${bglaptopmobile});
        background-size: 100%;
        background-position: initial;
    }
`
export const ArticleFreeopen = styled(ArticleStateofart)`
    @media screen and (max-width:1025px) {
            .h3_freeopensimple{
                margin:100px 0 0;
            }
        }
`
//Styled for Footer:
export const Footer = styled.footer`
    grid-area: E;
    justify-content: space-evenly;
    border-top-right-radius: 110px;
    background-color: var(--Very-dark-black-blue-footer-background);
    padding-bottom: 40px;
    .logo_footerblogr{
        margin:60px 60px 0 110px;
        @media screen and (max-width:1025px) {
            width: 12%;
            height: 12%;
            margin:60px 0;
        }
        @media screen and (max-width:600px) {
            width: 30%;
            height: 30%;
            text-align: center;
            margin:40px auto 0;
        }
    }
    ul{
        font-family: var(--ubuntu-font);
        font-weight: var(--ubuntu-semibold);
        color:var(--White-text);
        margin:40px 80px;
        @media screen and (max-width:1025px) {
            margin:40px 20px;
        }
        @media screen and (max-width:600px) {
            text-align: center;
            padding:0;
            margin:0;
        }
    }
    li{
        cursor:pointer;
        font-size: .95em;
        font-family: var(--overpass-font);
        font-weight: var(--overpass-semibold);
        color:var(--Grayish-blue-desc);
        list-style: none;
        margin:15px 0;
        :hover{
            text-decoration: underline;
        }
        :active{
            color:var(--Very-dark-grayish-blue-body-copy);
        }
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`
