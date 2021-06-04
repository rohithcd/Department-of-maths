import "./About.css";
import Contact from "../Contact/Contact";

const About = () => {
    return(
        <>
        
        <div className="section_about">
            <div className="about_text">
                <div className="about_head">
                    <h2>About</h2>
                </div>
                
                <p>
                 The combined Department of Mathematics and Statistics came into existence in November 1976, with the major objective of developing 
                 it to a Centre of Excellence in this region in mathematical sciences and applications and to provide facilities for training, study 
                 and research in these areas. This Department was bifurcated to form an independent Department of Mathematics on 1st January, 1996.
                </p>

                <p>
                 The Department conducts an M.Sc. Degree programme, M.Phil. Programme in Mathematics and Ph.D. programmes. The students generally 
                 take up teaching positions or opt for research or join industry. Our students find admission to Ph.D. programmes offered in various 
                 National Institutes such as IITs, IISERs, IMSc, ISI, TIFR etc. Apart from giving instruction in post graduate courses, the Department 
                 has from the very beginning taken the leadership in promoting research in mathematics and its applications, especially in this part of 
                 the country. This was realized in a two-fold way one, by guiding young researchers to do their doctoral work and two, by conducting 
                 extension programmes which will improve the instruction at the school and college levels and encourage youngsters to take up research.
                </p>

                <p>
                 Thrust areas of research are Algebra, Semi groups Theory, Stochastic Control theory, Retrial Queues, Mathematical Finance, Graph Theory, 
                 Algebraic Graph Theory,Fuzzy Mathematics, Wavelet Analysis, Operator Theory and Topology.
                </p>

                
            </div>
            <Contact/>
        </div>
        </>
    );
}

export default About;