import React from 'react';
import { Navbar } from './Navbar';
import {
    Intro,
    Landing1,
    Landing2,
    Landing3,
    Footer,
    Styledblogrlanding,
    Startfree,
    Learnmore,
    Buttoncentering,
    Article,
    ArticleStateofart,
    Handphone,
    ArticleFreeopen,
    Logo,
    Hstackflexi,
    Attribution,
    AttributionA,
} from './styled/Blogrlanding_desktop.styled';
import { Container } from './styled/Container.styled';
import hp from './images/illustration-phones.svg';
import logo from './images/logo.svg';

export const BlogrLandingPage = () => {
  return (
    <Container>
        <Styledblogrlanding>
            <Intro>
                <Navbar/>
                <h1>
                    A modern publishing platform
                </h1>
                <h2 className='h2_growaudience'>
                    Grow your audience and build your online brand
                </h2>
                <Buttoncentering>
                    <Startfree>
                        Start for Free
                    </Startfree>
                    <Learnmore>
                        Learn More
                    </Learnmore>
                </Buttoncentering>
            </Intro>
            <Landing1>
                <h2>
                    Designed for the future
                </h2>
                <Article>
                    <h3 className='h3_introextensible'>
                        Introducing an extensible editor
                    </h3>
                    <p>
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                    </p>
                </Article>
                <Article>
                    <h3>
                        Robust content management
                    </h3>
                    <p className='p_robustcontent'>
                        Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </Article>
            </Landing1>
            <Landing2>
                <ArticleStateofart>
                    <h3 className='h3_stateofart'>
                        State of the Art Infrastructure
                    </h3>
                    <p className='p_stateofart'>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </ArticleStateofart>
                <Handphone src={hp} alt='hp'/>
            </Landing2>
            <Landing3>
                <ArticleFreeopen>
                    <h3 className='h3_freeopensimple'>
                        Free, open, simple
                    </h3>
                    <p>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </ArticleFreeopen>
                <ArticleFreeopen>
                    <h3>
                        Powerful tooling
                    </h3>
                    <p className='p_powerfultooling'>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
                    </p>
                </ArticleFreeopen>
            </Landing3>
            <Footer>
                <Hstackflexi>
                    <Logo className='logo_footerblogr' src={logo} alt='logo'/>
                    <ul>
                        <p className='p_footerblogr'>Product</p>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                    <ul>
                        <p className='p_footerblogr'>Company</p>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <p className='p_footerblogr'>Connect</p>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </Hstackflexi>
            </Footer>
        </Styledblogrlanding>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Blogr Landing Page.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
        </footer>
    </Container>
  )
}
