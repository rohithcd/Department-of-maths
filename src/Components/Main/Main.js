import React from "react";
import Carousel from "./Carousel/Carousel_L";
import Box from "./Box/Box";
import About from "./About/About";
import Explore from "./Explore/Explore";
import Banner from "./Banner/Banner";
import Program from "./Program/Program";

import "./Main.css";


import notice1 from "../../Assets/notices/TNOTICE_AMBILY.pdf";
import notice2 from "../../Assets/notices/TNOTICE_noufal_.pdf";
import notice3 from "../../Assets/notices/TENDER-NOTICE_LTM1.pdf"

import form1 from "../../Assets/notices/TFORM_AMBILY.pdf";
import form2 from "../../Assets/notices/TFORM_noufal.pdf";
import form3 from "../../Assets/notices/TFORM_LTM1.pdf";
import form4 from "../../Assets/notices/TFORM_Notice_LTM1.docx";

import Heading from "../Reusable/Head/Heading.js";


import sastrayan from "../../Assets/main/sasthrayan.mp4";
//import "./Main.css";

const Main = () => {
    return (
        <>
            <Carousel />
            <Explore />
            <Video/>
            {/* <Additional /> */}
            <About />
            <Program />
            <Banner />
        </>
    );
}

export default Main;


const Video = () => {
    return (
        <>
            <section id="video" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Heading name="Sasthrayan"/>
                <video controls>
                    <source src={sastrayan} type="video/mp4" />
                </video>
            </section>

            <section className="notices_section">
                <Heading name="Notices"/>
                <h4>Tender notice for the supply of 'Computing laptop for high-end Computation'</h4>

                <div className="notices_div">
                    <div>
                        <p>Tender Notices</p>
                        <a href={notice1} download>Tender Notice 1</a>
                        <a href={notice2} download>Tender Notice 2</a>
                        <a href={notice3} download>Tender Notice 3</a>
                    </div>
                    <div>
                        <p>Tender Forms</p>
                        <a href={form1} download>Tender Form 1</a>
                        <a href={form2} download>Tender Form 2</a>
                        <a href={form3} download>Tender Form 3</a>
                        <a href={form4} download>Tender Form 4</a>

                    </div>
                </div>
            </section>
        </>
    ); 
}















const Additional = () => {
    return (
        <>
            <div id="page-wrapper">
                {/* Header */}
                <div id="header-wrapper">
                    <div className="container">
                        {/* Header */}
                        <header id="header">
                            <div className="inner">
                                {/* Logo */}
                                <h1>
                                    <a href="index.html" id="logo">
                                        ZeroFour
                                    </a>
                                </h1>
                                {/* Nav */}
                                <nav id="nav">
                                    <ul>
                                        <li className="current_page_item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Dropdown</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Lorem ipsum dolor</a>
                                                </li>
                                                <li>
                                                    <a href="#">Magna phasellus</a>
                                                </li>
                                                <li>
                                                    <a href="#">Phasellus consequat</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Lorem ipsum dolor</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Phasellus consequat</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Magna phasellus</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Etiam dolore nisl</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Veroeros feugiat</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="left-sidebar.html">Left Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="right-sidebar.html">Right Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="no-sidebar.html">No Sidebar</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        {/* Banner */}
                        <div id="banner">
                            <h2>
                                <strong>ZeroFour:</strong> A free responsive site template
                                <br />
                                built on HTML5 and CSS3 by <a href="http://html5up.net">HTML5 UP</a>
                            </h2>
                            <p>Does this statement make you want to click the big shiny button?</p>
                            <a href="#" className="button large icon solid fa-check-circle">
                                Yes it does
                            </a>
                        </div>
                    </div>
                </div>
                {/* Main Wrapper */}
                <div id="main-wrapper">
                    <div className="wrapper style1">
                        <div className="inner">
                            {/* Feature 1 */}
                            <section className="container box feature1">
                                <div className="row">
                                    <div className="col-12">
                                        <header className="first major">
                                            <h2>This is an important heading</h2>
                                            <p>
                                                And this is where we talk about why we’re{" "}
                                                <strong>pretty awesome</strong> ...
                                            </p>
                                        </header>
                                    </div>
                                    <div className="col-4 col-12-medium">
                                        <section>
                                            <a href="#" className="image featured">
                                                <img src="images/pic01.jpg" alt="" />
                                            </a>
                                            <header className="second icon solid fa-user">
                                                <h3>Here's a Heading</h3>
                                                <p>And a subtitle</p>
                                            </header>
                                        </section>
                                    </div>
                                    <div className="col-4 col-12-medium">
                                        <section>
                                            <a href="#" className="image featured">
                                                <img src="images/pic02.jpg" alt="" />
                                            </a>
                                            <header className="second icon solid fa-cog">
                                                <h3>Also a Heading</h3>
                                                <p>And another subtitle</p>
                                            </header>
                                        </section>
                                    </div>
                                    <div className="col-4 col-12-medium">
                                        <section>
                                            <a href="#" className="image featured">
                                                <img src="images/pic03.jpg" alt="" />
                                            </a>
                                            <header className="second icon solid fa-chart-bar">
                                                <h3>Another Heading</h3>
                                                <p>And yes, a subtitle</p>
                                            </header>
                                        </section>
                                    </div>
                                    <div className="col-12">
                                        <p>
                                            Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
                                            lectus. Praesent semper bibendum ipsum, et tristique augue
                                            fringilla eu. Vivamus id risus vel dolor auctor euismod quis
                                            eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam
                                            luctus mattis lectus sit amet pulvinar. Nam nec turpis.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="wrapper style2">
                        <div className="inner">
                            {/* Feature 2 */}
                            <section className="container box feature2">
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <header className="major">
                                                <h2>And this is a subheading</h2>
                                                <p>It’s important but clearly not *that* important</p>
                                            </header>
                                            <p>
                                                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit
                                                in lectus. Praesent semper mod quis eget mi. Etiam eu ante
                                                risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus
                                                sit amet pulvinar. Nam turpis nisi consequat etiam.
                                            </p>
                                            <footer>
                                                <a
                                                    href="#"
                                                    className="button medium icon solid fa-arrow-circle-right"
                                                >
                                                    Let's do this
                                                </a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <header className="major">
                                                <h2>This is also a subheading</h2>
                                                <p>And is as unimportant as the other one</p>
                                            </header>
                                            <p>
                                                Phasellus quam turpis, feugiat sit amet ornare in, hendrerit
                                                in lectus. Praesent semper mod quis eget mi. Etiam eu ante
                                                risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus
                                                sit amet pulvinar. Nam turpis nisi consequat etiam.
                                            </p>
                                            <footer>
                                                <a
                                                    href="#"
                                                    className="button medium alt icon solid fa-info-circle"
                                                >
                                                    Wait, what?
                                                </a>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="wrapper style3">
                        <div className="inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 col-12-medium">
                                        {/* Article list */}
                                        <section className="box article-list">
                                            <h2 className="icon fa-file-alt">Recent Posts</h2>
                                            {/* Excerpt */}
                                            <article className="box excerpt">
                                                <a href="#" className="image left">
                                                    <img src="images/pic04.jpg" alt="" />
                                                </a>
                                                <div>
                                                    <header>
                                                        <span className="date">July 24</span>
                                                        <h3>
                                                            <a href="#">Repairing a hyperspace window</a>
                                                        </h3>
                                                    </header>
                                                    <p>
                                                        Phasellus quam turpis, feugiat sit amet ornare in,
                                                        hendrerit in lectus semper mod quisturpis nisi consequat
                                                        etiam lorem. Phasellus quam turpis, feugiat et sit amet
                                                        ornare in, hendrerit in lectus semper mod quis eget mi
                                                        dolore.
                                                    </p>
                                                </div>
                                            </article>
                                            {/* Excerpt */}
                                            <article className="box excerpt">
                                                <a href="#" className="image left">
                                                    <img src="images/pic05.jpg" alt="" />
                                                </a>
                                                <div>
                                                    <header>
                                                        <span className="date">July 18</span>
                                                        <h3>
                                                            <a href="#">Adventuring with a knee injury</a>
                                                        </h3>
                                                    </header>
                                                    <p>
                                                        Phasellus quam turpis, feugiat sit amet ornare in,
                                                        hendrerit in lectus semper mod quisturpis nisi consequat
                                                        etiam lorem. Phasellus quam turpis, feugiat et sit amet
                                                        ornare in, hendrerit in lectus semper mod quis eget mi
                                                        dolore.
                                                    </p>
                                                </div>
                                            </article>
                                            {/* Excerpt */}
                                            <article className="box excerpt">
                                                <a href="#" className="image left">
                                                    <img src="images/pic06.jpg" alt="" />
                                                </a>
                                                <div>
                                                    <header>
                                                        <span className="date">July 14</span>
                                                        <h3>
                                                            <a href="#">Preparing for Y2K38</a>
                                                        </h3>
                                                    </header>
                                                    <p>
                                                        Phasellus quam turpis, feugiat sit amet ornare in,
                                                        hendrerit in lectus semper mod quisturpis nisi consequat
                                                        etiam lorem. Phasellus quam turpis, feugiat et sit amet
                                                        ornare in, hendrerit in lectus semper mod quis eget mi
                                                        dolore.
                                                    </p>
                                                </div>
                                            </article>
                                        </section>
                                    </div>
                                    <div className="col-4 col-12-medium">
                                        {/* Spotlight */}
                                        <section className="box spotlight">
                                            <h2 className="icon fa-file-alt">Spotlight</h2>
                                            <article>
                                                <a href="#" className="image featured">
                                                    <img src="images/pic07.jpg" alt="" />
                                                </a>
                                                <header>
                                                    <h3>
                                                        <a href="#">Neural Implants</a>
                                                    </h3>
                                                    <p>The pros and cons. Mostly cons.</p>
                                                </header>
                                                <p>
                                                    Phasellus quam turpis, feugiat sit amet ornare in, hendrerit
                                                    in lectus semper mod quisturpis nisi consequat ornare in,
                                                    hendrerit in lectus semper mod quis eget mi quat etiam
                                                    lorem. Phasellus quam turpis, feugiat sed et lorem ipsum
                                                    dolor consequat dolor feugiat sed et tempus consequat etiam.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor quam turpis, feugiat sit amet ornare in,
                                                    hendrerit in lectus semper mod quisturpis nisi consequat
                                                    etiam lorem sed amet quam turpis.
                                                </p>
                                                <footer>
                                                    <a href="#" className="button alt icon solid fa-file-alt">
                                                        Continue Reading
                                                    </a>
                                                </footer>
                                            </article>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Wrapper */}
                <div id="footer-wrapper">
                    <footer id="footer" className="container">
                        <div className="row">
                            <div className="col-3 col-6-medium col-12-small">
                                {/* Links */}
                                <section>
                                    <h2>Filler Links</h2>
                                    <ul className="divided">
                                        <li>
                                            <a href="#">Quam turpis feugiat dolor</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet ornare in hendrerit </a>
                                        </li>
                                        <li>
                                            <a href="#">Semper mod quisturpis nisi</a>
                                        </li>
                                        <li>
                                            <a href="#">Consequat etiam phasellus</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet turpis, feugiat et</a>
                                        </li>
                                        <li>
                                            <a href="#">Ornare hendrerit lectus</a>
                                        </li>
                                        <li>
                                            <a href="#">Semper mod quis et dolore</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet ornare in hendrerit</a>
                                        </li>
                                        <li>
                                            <a href="#">Consequat lorem phasellus</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet turpis, feugiat amet</a>
                                        </li>
                                        <li>
                                            <a href="#">Semper mod quisturpis</a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-3 col-6-medium col-12-small">
                                {/* Links */}
                                <section>
                                    <h2>More Filler</h2>
                                    <ul className="divided">
                                        <li>
                                            <a href="#">Quam turpis feugiat dolor</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet ornare in in lectus</a>
                                        </li>
                                        <li>
                                            <a href="#">Semper mod sed tempus nisi</a>
                                        </li>
                                        <li>
                                            <a href="#">Consequat etiam phasellus</a>
                                        </li>
                                    </ul>
                                </section>
                                {/* Links */}
                                <section>
                                    <h2>Even More Filler</h2>
                                    <ul className="divided">
                                        <li>
                                            <a href="#">Quam turpis feugiat dolor</a>
                                        </li>
                                        <li>
                                            <a href="#">Amet ornare hendrerit lectus</a>
                                        </li>
                                        <li>
                                            <a href="#">Semper quisturpis nisi</a>
                                        </li>
                                        <li>
                                            <a href="#">Consequat lorem phasellus</a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-6 col-12-medium imp-medium">
                                {/* About */}
                                <section>
                                    <h2>
                                        <strong>ZeroFour</strong> by HTML5 UP
                                    </h2>
                                    <p>
                                        Hi! This is <strong>ZeroFour</strong>, a free, fully responsive
                                        HTML5 site template by <a href="http://twitter.com/ajlkn">AJ</a>{" "}
                                        for <a href="http://html5up.net/">HTML5 UP</a>. It's{" "}
                                        <a href="http://html5up.net/license/">
                                            Creative Commons Attribution
                                        </a>
                                        licensed so use it for any personal or commercial project (just
                                        credit us for the design!).
                                    </p>
                                    <a href="#" className="button alt icon solid fa-arrow-circle-right">
                                        Learn More
                                    </a>
                                </section>
                                {/* Contact */}
                                <section>
                                    <h2>Get in touch</h2>
                                    <div>
                                        <div className="row">
                                            <div className="col-6 col-12-small">
                                                <dl className="contact">
                                                    <dt>Twitter</dt>
                                                    <dd>
                                                        <a href="#">@untitled-corp</a>
                                                    </dd>
                                                    <dt>Facebook</dt>
                                                    <dd>
                                                        <a href="#">facebook.com/untitled</a>
                                                    </dd>
                                                    <dt>WWW</dt>
                                                    <dd>
                                                        <a href="#">untitled.tld</a>
                                                    </dd>
                                                    <dt>Email</dt>
                                                    <dd>
                                                        <a href="#">user@untitled.tld</a>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="col-6 col-12-small">
                                                <dl className="contact">
                                                    <dt>Address</dt>
                                                    <dd>
                                                        1234 Fictional Rd
                                                        <br />
                                                        Nashville, TN 00000-0000
                                                        <br />
                                                        USA
                                                    </dd>
                                                    <dt>Phone</dt>
                                                    <dd>(000) 000-0000</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-12">
                                <div id="copyright">
                                    <ul className="menu">
                                        <li>© Untitled. All rights reserved</li>
                                        <li>
                                            Design: <a href="http://html5up.net">HTML5 UP</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    );
}