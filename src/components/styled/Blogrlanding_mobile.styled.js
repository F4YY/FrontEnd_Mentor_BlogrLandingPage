import styled from "styled-components";
import arrowdownmobile from'../images/icon-arrow-dark.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    position:fixed;
    top:5.5%;
    right:6%;
    width: 40px;
    height: 25px;
    display: none;
    margin-top: 8px;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    opacity:.8;
    background-color:var(--Very-dark-black-blue-footer-background);
    z-index: 1;
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:13%;
    right:5%;
    width: 90%;
    height: auto;
    transition: .5s ease-in-out;
    border-radius: 5px;
    background-color:var(--White-text);
    z-index: 1;
    @media screen and (max-width:600px) {
        .ul_navbarmobile{
            display: block;
            font-size: 1.3em;
            font-family: var(--overpass-font);
            font-weight: var(--overpass-semibold);
            color:var(--Very-dark-black-blue-footer-background);
            list-style: none;
            margin:20px 0 0;
        }
        .clicked{
            color: var(--Very-dark-grayish-blue-body-copy);
            text-decoration: none;
        }
        .li_navbarmobile{
            display: list-item;
            text-align: center;
            margin: 20px auto 10px;
            :active{
                color:var(--Grayish-blue-desc);
                text-decoration: initial;
            }
        }
        .ul_navbarlist_mobile{
            display: block;
            font-size: .95em;
            font-family: var(--overpass-font);
            font-weight: var(--overpass-semibold);
            color:var(--Very-dark-black-blue-footer-background);
        }
        .li_navbarlist_mobile{
            display: list-item;
            font-family: var(--overpass-font);
            font-weight: var(--overpass-semibold);
            color:var(--Very-dark-grayish-blue-body-copy);
            text-align:center;
            margin:0 0 15px 0;
        }
        .ul_login_signup{
            display: block;
            font-size: 1.3em;
            font-family: var(--overpass-font);
            font-weight: var(--overpass-semibold);
            color:var(--Very-dark-black-blue-footer-background);
            list-style: none;
            padding:0;
            margin:0;
        }
        .li_login_signup{
            display: list-item;
            text-align: center;
            padding:30px 60px 0;
            margin:15px;
            border-top: 1px solid var(--Grayish-blue-footer-text);
        }
    }
`
export const Arrowdownmobile = styled.div`
    width: 10px;
    height: 8px;
    margin-top:3px;
    color: var(--Light-red-CTA-text);
    background-image: url(${arrowdownmobile});
    background-repeat: no-repeat;
    :hover{
        font-weight: var(--bold);
        cursor: pointer;
    }
`
export const Closeicon = styled.img`
    position:fixed;
    top:5.1%;
    right:7%;
    width: 30px;
    height: auto;
    display: flex;
    margin-top: 8px;
    cursor: pointer;
`