import Title from "../Reusable/Title/Title";
import "./Research.css";

import res_img1 from "../../Assets/research/ICRTGC_1.jpg";
import res_img2 from "../../Assets/research/ICRTGC_2.jpg";
import res_img3 from "../../Assets/research/ICRTGC_3.jpg";
import res_img4 from "../../Assets/research/ICRTGC_4.jpg";
const Research = () => {
    return(
    <>
        <Title head="Research"/>
        <div className="section_research">
            <div className="prof_text_temp">
            <h2>International Conference on Recent Trends in Graph Theory and Combinatorics, India, April 26-29, 2018</h2>
            <p>The International Conference on Recent Trends in Graph Theory and Combinatorics was inaugurated by Prof. R. B. Bapat, ISI New Delhi, India. About 185 delegates were present in the inaugural ceremony. The conference consisted of 21 invited lectures, 14 oral paper presentations and 6 poster presentations.</p>
            <p>The INTERNATIONAL CONFERENCE ON RECENT TRENDS IN GRAPH THEORY AND
COMBINATORICS was inaugurated by Prof. R. B. Bapat, ISI New Delhi, India. Dr. V. B.
Kirankumar, Head, Department of Mathematics, CUSAT has given the welcome address. Dr.
Binuja Thomas, Senior Scientist, KSCSTE, Prof. M. Bhasi Syndicate Member, CUSAT and
Prof. Miklos Simonovits, Alfred Renyi Institute, Budapest, Hungary felicitated. Prof. A.
Vijayakumar, Department of Mathematics, CUSAT addressed the gathering and the Convenor of
the conference, Dr. P. G. Romeo delivered the vote of thanks. About 185 delegates were present
in the inaugural ceremony. </p>
<p>The conference consisted of 21 invited lectures including 3 plenary sessions. The resource
persons delivered invited lectures are:</p><ul>
<li>1. Abraham P. Punnen, Simon Fraser University, Canada</li>
<li>2. Andreas. M. Hinz, Universitat Munchen (LMU), Germany</li>
<li>3. Dillon Mayhew, Victoria University, New Zealand</li>
<li>4. G.O.H. Katona, Alfred Renyi Institute of Mathematics, Hungary (Plenary)</li>
<li>5. H. N. Ramaswamy, University of Mysore, India</li>
<li>6. Ismael Gonzalez Yero, University of Cádiz, Spain</li>
<li>7. K. Subrahmanyam, Indian Institute of Technology Hyderabad, India</li>
<li>8. Manoj Changat, University of Kerala, India</li>
<li>9. Matjaz Kovse, IIT Bhubaneswar, India</li>
<li>10. Mikio Kano, Ibaraki University, Japan</li>
<li>11. Miklos Simonovits, Alfred Renyi Institute of Mathematics, Hungary</li>
<li>12. N. Narayanan, Indian Institute of Technology Madras, India</li>
<li>13. Pratima Panigrahi, Indian Institute of Technology Kharagpur, India</li>
<li>14. R. B. Bapat, Indian Statistical Institute, India (Plenary)</li>
<li>15. R. Deepak , Indian Institute of Technology Palakkad, India</li>
<li>16. S. Francis Raj, Pondichery University, Pondichery, India</li>
<li>17. Stephan Wagner, Stellenbosch University, South Africa</li>
<li>18. Tarkeswar Singh, BITS Pilani, India</li>
<li>19. T. Tamizh Chelvam, Manonmaniam Sundaranar University, India</li>
<li>20. V. Arvind, The Institute of Mathematical Sciences, India</li>
<li>21. Wilfried Imrich, Montan Universität Leoben, Austria (Plenary)</li>
</ul>
<p>
Also, there were 14 oral paper presentations and 6 poster presentations. 174 delegates atteneded
the conference. Recent research problems were discussed in the problem session on the second
day of the conference. The sessions of conference came to an end by 11.00 a.m. on 29th April.
The conference was concluded by a valedictory function. In this meeting many participants and
invited speakers expressed their gratitude for organizing such an excellent conference. </p>
            </div>
            <div className="research_pics">
                <img src={res_img1} alt=""/>
                <img src={res_img2} alt=""/>
                <img src={res_img3} alt=""/>
                <img src={res_img4} alt=""/>
            </div>
        </div>
    </>
    );
}

export default Research;