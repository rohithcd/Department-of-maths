import "./Profile.css";
import {Link} from "react-router-dom";
import {profile_pic1} from "../../../Exports.js";


const Profile = () => {
    return(
        <>
            <div className="section_profile">
                <div className="profile_head">
                    <nav className="profile_nav">
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/people"><p>Educational Qualifications</p></Link>
                        <Link to="/people"><p>Memberships</p></Link>
                        <span className="research-link">
                            <label>Research</label>
                            <span className="drop-menu">
                                <ul>
                                    <li>Publications</li>
                                    <li>Projects</li>
                                    <li>pHD guidance</li>
                                    <li>Conferences Organised</li>
                                    <li>invite Talks</li>
                                    <li>Editorial Board Member</li>
                                </ul>
                            </span>
                        </span>
                    </nav>
                    <div className="head_div">
                        <div className="photo_container">
                            <figure className="profile_photo">
                                <img src={profile_pic1} alt=""/>
                            </figure>
                        </div>
                        <div classNme="head_text">
                            <h2>Dr Aparna Lakshmanan</h2>
                            <h5>Asst Professor</h5>
                            <h6>Department of Mathematics</h6>
                            <h6>CUSAT</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="profile_text">
                   <div className="profile_section-1">
                        <div className="child_sec-1">
                            <h4>RESEARCH PROFILES</h4>
                            <div className="prof_container">
                                <span>
                                    <h5>Publons</h5>
                                    <a href="https://publons.com/dashboard/summary/" className="btn">View</a>
                                </span>
                                <span>
                                    <h5>Scopus</h5>
                                    <a href="https://www.scopus.com/authid/detail.uri?authorId=55310792000" className="btn">View</a>
                                </span>
                                <span>
                                    <h5>Google Scholar</h5>
                                    <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=ApsNUl0AAAAJ&gmla=AJsN-F6tQ-kBuj3lOsmSOUv_C-xsJCMACZWtxGTn50xkesLAOlRzGhDDhihF3DT2UOTdPvV9tvtHsVmW1qFwT5OSFEXfFU6wZ5wEkOjuaHdP6TBWV4rUMXU" className="btn">View</a>
                                </span>
                            </div>
                        </div>

                        <div className="child_sec-2">
                            <h4>BRIEF BIO</h4>
                            <p>Assistant Professor in Department of Mathematics, CUSAT from 14 January, 2021</p>
                        </div>
                   
                        <div className="child_sec-3">
                            <h4>RESEARCH INTEREST</h4>
                            <p>Algebra, Graph Theory</p>
                        </div>
                    </div>
                    <div className="prof_text_temp">
                        <h2>EDUCATIONAL QUALIFICATIONS</h2>
                        <div>
                            <ol type={"1"}>
                                <li>B.Sc. Mathematics from St. Joseph’s College, Irinjalakuda under Calicut University (2000)</li>
                                <li>M.Sc. Mathematics from Cochin University of Science and Technology with first Rank (2002)</li>
                                <li>CSIR – UGC – JRF (NET) from University Grants Commission, New Delhi. (2003)</li>
                                <li>Ph. D from Cochin University of Science and Technology (2009)</li>
                                <li>Online certification courses from NPTEL in</li>
                                <ul>
                                    <li>R Programming (Elite Gold Medal in 2017)</li>
                                    <li>Groups, Motions, Symmetry and puzzles (Course topper in 2018)</li>
                                    <li>Probability and Statistics (2018)</li>
                                    <li>Developing Soft Skills and Personality (2018)</li>
                                    <li>Stress Management (2018)</li>
                                    <li>Basic Linear Algebra (Course topper in 2019)</li>
                                    <li>Graph Theory (Elite Gold Medal in 2019)</li>
                                    <li>Enhancing Soft Skills and Personality (Elite Gold Medal in 2019)</li>
                                    <li>Fuzzy Logic and Neural Networks (2019)</li>
                                    <li>Groups, Motion, Symmetry and Puzzles (2019)</li>
                                    <li>Calculus of One Real Variable (Course topper in 2019) </li>
                                </ul>
                            </ol>
                        </div>
                    </div>
                    <div className="prof_text_temp">
                        <h2>AWARDS/RECOGNITIONS AND ACHIEVEMENTS</h2>
                        <ol>
                            <li>NPTEL Stars – NPTEL Enthusiasts Award from NPTEL in 2020.</li>
                            <li>Best Alumni Award from St. Joseph’s College, Irinjalakuda in 2019.</li>
                            <li>IMS prize (Group 1 – Discrete Mathematics) instituted by Indian Mathematical Society in 2013.</li>
                            <li>Kerala State Young Scientist Award instituted by Kerala State Council for Science, Technology and Environment in 2012.</li>
                            <li>First rank for M.Sc. Mathematics from Cochin University of Science and Technology in 2002.</li>                      
                        </ol>
                    </div>
                    <div className="prof_text_temp">
                        <h2>MEMBERSHIPS IN PROFESSIONAL ORGANISATIONS</h2>
                        <ol>
                            <li>American Mathematical Society (AMS) - Member</li>
                            <li> Indian Mathematical Society (IMS) – Life Member</li>
                            <li>Ramanujan Mathematical Society (RMS) – Life Member</li>
                            <li>Academy for Discrete Mathematics and its Applications (ADMA) – Life Member, Executive Committee member (2014 – 16), Secretary (2016 – 2020).</li>
                            <li>Kerala Mathamatical Association (KMA) – Life member.</li>                      
                        </ol>
                    </div>
                    <div className="prof_text_temp">
                        <h2>Invited talks in International Conferences</h2>
                            <ol>
                                <li>“On Vizing’s Conjecture”, International seminar on new trends in Applications of Mathematics sponsored by CSO & MOSPL at Bharatmata College, Thrikkakara, Kerala, India (31st January 2011).</li>
                                <li>“Some Domination Concepts in Cographs” , International Conference on Discrete Mathematics and its Applications organized by Department of Mathematics, Amrita Vishwa Vidyapeetham, Coimbatore, India (10th December 2011). </li>
                                <li>“Triangles in graphs” in the “ Indo – Slovenia Conference on Graph Theory and Applications (Indo- Slov 2013)” organized by the department of Futures Studies in association with Graph Theory Research group, University of Maribor and institute of Mathematics, Physics and Mechanics, Ljubljana, Slovenia (February 22 – 24, 2013).</li>
                                <li>“Domination in Graph Products- Vizing’s Conjecture” in the workshop on Graph Theory and Interconnection Networks Department of Applied Mathematics, Tunghai university, Taichung, Taiwan (November 16 – 17, 2013).</li>
                                <li>“On Tuza’s Conjecture related to triangles in graphs” in the Third India – Taiwan Conference on Discrete Mathematics organized by Department of Applied mathematics, National Chiao Tung University (November 19 – 22 , 2013).</li>
                                <li>“Recent developments on Vizing’s Conjecture” in the International Conference on Graph Theory and its Applications held in Amritha School of Engineering (December 16-19, 2015).</li>
                                <li>“On Leech Trees” in Fifth India-Taiwan Conference on Discrete Mathematics 2017 organized by Department of Mathematics, Tamkang University, Tamsui, Taiwan (July 18 – 21, 2017).</li>
                                <li>“On Leech Trees and Some Related Concepts” in International Conference on Discrete Mathematics 2018 organized by Periyar University, Salem (January 4 – 7, 2018).</li>
                                <li>“On Double Roman Domination Number” in International Conference on Discrete Mathematics and Network Systems organized by BITS, Pilani, Goa (July 7 – 10, 2018).</li>
                                <li>“On Leech Labelling” in International Conference on Mathematical Computer Engineering organized by VIT, Chennai (November 23 – 24, 2018).</li>
                                <li>“Double Roman Domination Number” in International Conference on Graph Theory and its Applications organized by Amrita University, Ettimadai (January 4 – 6, 2019).</li>
                                <li>“Double Roman Domination Number” in 9th Slovenian International Conference on Graph Theory – Bled’19 organized by Institute of Mathematics, Physics and Mechanics, Slovenia (August 23 – 29, 2019)</li>

                            </ol>
                    </div>
                    <div className="prof_text_temp">
                        <h2> ARTICLES PUBLISHED IN NATIONAL AND INTERNATIONAL JOURNALS </h2>
                        <ol>
                            <ul><li>International Journals – 24</li></ul>
                            <li>Aparna Lakshmanan S., S. B. Rao, A. Vijayakumar, Gallai and anti-Gallai graphs of a graph, Mathematica Bohemica, 132(1)(2007), 43 – 54.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, Clique irreducibility of some iterative classes of graphs, Discuss. Math. Graph Theory, 28 (2008), 307 – 321.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, The &lt;t&gt;-property of some classes of graphs, Discrete Math., 309 (2009), 259 – 263. </li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, Clique irreducibility and clique vertex irreduciblility of graphs, Appl. Anal. Discrete Math., 3 (2009), 137 – 146.</li>
                            <li>S. B. Rao, Aparna Lakshmanan S., A. Vijayakumar, Cographic and global cographic domination number of a graph, Ars Combinatoria, 95 (2010), 273 – 486.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, On weakly clique irreducible graphs, Bull. Inst. Combin. Appl., 58 (2010), 48 – 58.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, The Gamma graph of a graph, AKCE J. Graphs. Combin., 7(1)(2010), 53 – 59.</li>
                            <li>Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Small edge sets meeting all triangles of a graph, Graphs Combin., 28 (2012), 381 – 392.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, T. M. Wang, Weakly clique irreducibility of NEPS of two graphs, Util. Math., 92 (2013), 351 – 358.</li>
                            <li>Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Generalized line graphs: Cartesian products and complexity of recognition, Electron. J. Combin., 22(3) (2015), #P3.33.</li>
                            <li>Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Induced cycles in triangle graphs, Discrete Applied Mathematics, 209 (2016), 264 – 275.</li>
                            <li>Aparna Lakshmanan S., Manju K. Menon, Anu V., Homometric number of graphs, International Journal on Recent and Innovation Trends in Computing and Communication, 5(7) (2017), 846 – 850.</li>
                            <li>Jeepamol J. Palathingal, Aparna Lakshmanan S., Gallai and anti-Gallai graph operators, Electronic Notes in Discrete Mathematics, 63 (2017), 447 – 453.</li>
                            <li>Jeepamol J. Palathingal, Aparna Lakshmanan S., Forbidden Subgraph Characterizations of Extensions of Gallai graph operators in Signed Graphs, Annals of Pure and Applied Mathematics, 14(3) (2017), 437 – 448.</li>
                            <li>Anu V., Aparna Lakshmanan S., Double Roman Domination Number, Discrete Applied Mathematics, 244 (2018), 198 – 204.</li>
                            <li>Jeepamol J. Palathingal, Aparna Lakshmanan S., Commutativity of Some Graph Operator, Research & Reviews: Discrete Mathematical structures, 6(1)(2019), 1–5.</li>
                            <li>V. G. Deepa, Aparna Lakshmanan S., V. N. Sreeja, Centrality and reciprocity in directed social networks - A case study, Malaya Journal of Mathematik, Vol. S(1) (2019), 479 – 484.</li>
                            <li>Seena Varghese, Aparna Lakshmanan S., S. Arumugam, Two Classes of Non-Leech Trees, Electronic Journal of Graph Theory and Applications, 8(1) (2020), 205 – 210.</li>
                            <li>Anu V., Aparna Lakshmanan S., The Double Roman Domination Number of Generalized Sierpinski Graphs, Discrete Mathematics Algorithms and Applications, 12(4) (2020), 2050047.</li>
                            <li>Jeepamol J Palathingal, Gopalapillai Indulal, Aparna Lakshmanan, Spectrum of Gallai Graph of Some Graphs, Indian Journal of Pure and Applied Mathematics, 51(4) (2020), 1829 – 1841.</li>
                            <li>Jismy Varghese, Aparna Lakshmanan S., Italian Domination on Mycielskian and Sierpinski Graphs, Discrete Mathematics Algorithms and Applications (accepted).</li>
                            <li>Jeepamol J Palathingal, Gopalapillai Indulal, Aparna Lakshmanan, Spectrum of antiGallai Graph of Some Graphs, Indian Journal of Pure and Applied Mathematics(accepted)</li>
                            <li>Jismy Varghese, Anu V., Aparna Lakshmanan S., Italian Domination and Perfect Italian Domination on Sierpinski Graphs, Journal of Discrete Mathematical Sciences & Cryptography (accepted).</li>
                            <li>Seena Varghese, Aparna Lakshmanan S., S. Arumugam, Leech Index of a Trees, Journal of Discrete Mathematical Sciences & Cryptography (accepted).</li>
                        </ol>
                        <ol>
                        <ul><li>Proceedings of International Conferences – 4</li></ul>
                       
                            <li>Aparna Lakshmanan S., A. Vijayakumar, Some properties of the clique graph of a cograph, RMS Lecture Note Series 7 (2008), (Proceedings of the International Conference on Discrete Mathematics, Bangalore, India, 2006), 227 – 232.</li>
                            <li>Aparna Lakshmanan S., A. Vijayakumar, A note on some domination parameters in graph products, J. Combin. Math. Combin. Comput., 69 (2009), 31 – 38.</li>
                            <li>Anu V., Aparna Lakshmanan S., Homometric number of a graph and some related concepts, Lecture Notes in Computer Science, 10398 (2017), 30 – 37.</li>
                            <li>V. G. Deepa, Aparna Lakshmanan S., V. N. Sreeja, The Role of Social Factors in Education: A Case Study in Social Network Perspective, Lecture Notes in Networks and Systems, 75 (2019), 61 – 68.</li>
                        </ol>
                        <ol>
                            <ul><li>National Journals – 1</li></ul>
                            <li>Aparna Lakshmanan S., Characterization of some special classes of Gallai and anti Gallai graphs, Discourse, 1 (2013), 85 – 89.</li>
                        </ol>
                    </div>
                    <div className="prof_text_temp">
                        <h2>CONFERENCES/ WORKSHOPS/ SYMPOSIA ORGANIZED</h2>
                        <ol>
                            <li>Convenor of the UGC sponsored National Seminar on Graph Theory and its Applications, August 7 – 9, 2014.</li>
                            <li>Convenor of the International Conference on Recent Trends in Graphs and Networks, October 30 – November 1, 2017.</li>
                            <li>Co-convenor of the International Conference on Recent Trends in Graph Theory and Combinatorics, April 26 – 29, 2018.</li>
                            <li>Convenor of the Academic Support Programme for Under Graduate Students – One Day International Workshop on November 27, 2018. </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;