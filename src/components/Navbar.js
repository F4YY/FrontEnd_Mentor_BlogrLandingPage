import React from 'react';
import logo from './images/logo.svg';
import menuicon from './images/icon-hamburger.svg';
import closeicon from './images/icon-close.svg';
import {
    Arrowdown,
    Companylist,
    Connectlist,
    Hstack,
    Logo,
    Navbarsection,
    Productlist,
    Wrapper
} from './styled/Blogrlanding_desktop.styled';
import { Arrowdownmobile, Closeicon, Menuicon, Menulist, Overlayscreen } from './styled/Blogrlanding_mobile.styled';

export const Navbar = () => {
    const [showProduct, setShowproduct] = React.useState(false);
    const productHandler = () => {
        setShowproduct(!showProduct);
        setShowcompany(false);
        setShowconnect(false);
    };
    const [showCompany, setShowcompany] = React.useState(false);
    const companyHandler = () => {
        setShowcompany(!showCompany);
        setShowproduct(false);
        setShowconnect(false);
    };
    const [showConnect, setShowconnect] = React.useState(false);
    const connectHandler = () => {
        setShowconnect(!showConnect);
        setShowproduct(false);
        setShowcompany(false);
    };

    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Navbarsection>
        <Hstack>
            <Logo src={logo} alt='logo' />
            <ul>
                <li>
                    <Wrapper onClick={()=>productHandler()}>
                        Product
                        {showProduct?
                        (<Arrowdown className={`${showProduct && "rotate"}`}/>)
                        : (<Arrowdown className={`${!showProduct && "default"}`} />)}
                    </Wrapper>
                </li>
                {showProduct?(
                <Productlist>
                    <ul className='ul_navbarlist_desktop'>
                        <li className='li_navbarlist_desktop'>Overview</li>
                        <li className='li_navbarlist_desktop'>Pricing</li>
                        <li className='li_navbarlist_desktop'>Marketplace</li>
                        <li className='li_navbarlist_desktop'>Features</li>
                        <li className='li_navbarlist_desktop'>Integrations</li>
                    </ul>
                </Productlist>) : null}
                <li>
                    <Wrapper onClick={()=>companyHandler()}>
                        Company
                        {showCompany?
                        (<Arrowdown className={`${showCompany && "rotate"}`}/>)
                        : (<Arrowdown className={`${!showCompany && "default"}`} />)}
                    </Wrapper>
                </li>
                {showCompany?(
                <Companylist>
                    <ul className='ul_navbarlist'>
                        <li className='li_navbarlist_desktop'>About</li>
                        <li className='li_navbarlist_desktop'>Team</li>
                        <li className='li_navbarlist_desktop'>Blog</li>
                        <li className='li_navbarlist_desktop'>Careers</li>
                    </ul>
                </Companylist>) : null}
                <li>
                    <Wrapper onClick={()=>connectHandler()}>
                        Connect
                        {showConnect?
                        (<Arrowdown className={`${showConnect && "rotate"}`}/>)
                        : (<Arrowdown className={`${!showConnect && "default"}`} />)}
                    </Wrapper>
                </li>
                {showConnect?(
                <Connectlist>
                    <ul className='ul_navbarlist'>
                        <li className='li_navbarlist_desktop'>Contact</li>
                        <li className='li_navbarlist_desktop'>Newsletter</li>
                        <li className='li_navbarlist_desktop'>LinkedIn</li>
                    </ul>
                </Connectlist>) : null}
            </ul>
        </Hstack>
        <ul className='ul_login_signup'>
            <li className='li_login_signup'>Login</li>
            <li className='li_login_signup'>Sign Up</li>
        </ul>
      <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
      {toggleMenu && (
        <>
          <Overlayscreen/>
          <Menulist>
            <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
                <ul className='ul_navbarmobile'>
                    <li className='li_navbarmobile'>
                        <Wrapper onClick={()=>productHandler()} className={`${showProduct && "clicked"}`}>
                            Product
                            {showProduct?
                            (<Arrowdownmobile className={`${showProduct && "rotate"}`}/>)
                            : (<Arrowdownmobile className={`${!showProduct && "default"}`} />)}
                        </Wrapper>
                    </li>
                    {showProduct?(
                    <Productlist>
                        <ul className='ul_navbarlist_mobile'>
                            <li className='li_navbarlist_mobile'>Overview</li>
                            <li className='li_navbarlist_mobile'>Pricing</li>
                            <li className='li_navbarlist_mobile'>Marketplace</li>
                            <li className='li_navbarlist_mobile'>Features</li>
                            <li className='li_navbarlist_mobile'>Integrations</li>
                        </ul>
                    </Productlist>) : null}
                    <li className='li_navbarmobile'>
                        <Wrapper onClick={()=>companyHandler()} className={`${showCompany && "clicked"}`}>
                            Company
                            {showCompany?
                            (<Arrowdownmobile className={`${showCompany && "rotate"}`}/>)
                            : (<Arrowdownmobile className={`${!showCompany && "default"}`} />)}
                        </Wrapper>
                    </li>
                    {showCompany?(
                    <Companylist>
                        <ul className='ul_navbarlist_mobile'>
                            <li className='li_navbarlist_mobile'>About</li>
                            <li className='li_navbarlist_mobile'>Team</li>
                            <li className='li_navbarlist_mobile'>Blog</li>
                            <li className='li_navbarlist_mobile'>Careers</li>
                        </ul>
                    </Companylist>) : null}
                    <li className='li_navbarmobile'>
                        <Wrapper onClick={()=>connectHandler()}>
                            Connect
                            {showConnect?
                            (<Arrowdownmobile className={`${showConnect && "rotate"}`}/>)
                            : (<Arrowdownmobile className={`${!showConnect && "default"}`} />)}
                        </Wrapper>
                    </li>
                    {showConnect?(
                    <Connectlist>
                        <ul className='ul_navbarlist_mobile'>
                            <li className='li_navbarlist_mobile'>Contact</li>
                            <li className='li_navbarlist_mobile'>Newsletter</li>
                            <li className='li_navbarlist_mobile'>LinkedIn</li>
                        </ul>
                    </Connectlist>) : null}
                </ul>
                <ul className='ul_login_signup'>
                    <li className='li_login_signup'>Login</li>
                    <li className='li_login_signup'>Sign Up</li>
                </ul>
          </Menulist>
        </>
      )}
    </Navbarsection>
  )
}