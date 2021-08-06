/*----CV----*/
import pdf5 from "../../../../Assets/people/CV/Bio-Ambily.pdf";
import pdf6 from "../../../../Assets/people/CV/Bio-Aparna.pdf";
import pdf7 from "../../../../Assets/people/CV/Bio-Noufal.pdf";
import pdf8 from "../../../../Assets/people/CV/Bio-Shankar.pdf";
import pdf11 from "../../../../Assets/people/CV/Bio-Kiran.pdf";

/*----Profile Pic ----*/
import p_img1 from "../../../../Assets/people/image1.jpg";
import p_img2 from "../../../../Assets/people/image2.jpg";
import p_img3 from "../../../../Assets/people/image3.jpg";
import p_img4 from "../../../../Assets/people/image4.jpg";
import p_img5 from "../../../../Assets/people/image5.jpg";
import p_img6 from "../../../../Assets/people/image6.jpg";
import p_img7 from "../../../../Assets/people/image7.jpg";
import p_img8 from "../../../../Assets/people/image8.jpg";
import p_img9 from "../../../../Assets/people/image9.jpg";
import p_img10 from "../../../../Assets/people/image10.jpg";
import p_img11 from "../../../../Assets/people/image11.jpg";
import profile_pic1 from "../../../../Assets/people/profile_pic1.jpg";

/*----Common Details----*/
let names = ["Prof. Ambat Vijayakumar", "Dr. P. G. Romeo", "Dr. Sasi Gopalan", "Dr. Shery Fernandez", "Dr. Ambily A A",
    "Dr. Aparna Lakshmanan S", "Dr. A. Noufal", "Dr. Shankar P", "Dr. Tanushree Pandit", "Dr. Tathagata Banerjee", "Dr. V. B. Kiran Kumar"];

let ranks = ["Professor", "Emeritus Professor", "Associate Professor", "Assistant Professor"];

let areaofInt = [
    "Discrete Mathematics",
    "Algebra, Category theory, Algebraic topology, Universal algebras",
    "Approximation Theory, Analysis and Approximations in Deep learning, Optimization Techniques, Fuzzy Mathematics, Wavelet Analysis, Mathematical Morphology",
    "Representation theory, Fuzzy Mathematics",
    "Algebraic K-Theory, Commutative Algebra, Computational Algebra, Non-Commutative Algebras",
    "Graph Theory",
    "Functional Analysis, Framelets, PDEs",
    "Functional analysis, Operator algebras and Operator theory",
    "Convex Optimization, Variational Inequalities, Equilibrium Problems",
    "Operator Algebras, Operator theory and Coarse geometry",
    "Functional Analysis"
];

let p_bio = [
    "",
    "",
    "",
    "",
    "Assistant Professor at CUSAT since August 2015, I was a visiting Fellow at Tata Institute of Fundamental Research, Mumbai during 2014-2015. I was a SERB Postdoctoral Fellow at Western Sydney University in 2018.",
    "Assistant Professor in Department of Mathematics, CUSAT from January, 2021.",
    "Currently residing in Edathala Panchayath.",
    "Assistant Professor at Department of Mathematics, CUSAT",
    "",
    "",
    ""
];

export let prof = [
    {name: names[0], job: ranks[2], pic: [p_img3], aoi: areaofInt[0], bio: p_bio[0]},
    {name: names[1], job: ranks[0], pic: [p_img1], aoi: areaofInt[1], bio: p_bio[1]},
    {name: names[2], job: ranks[0], pic: [p_img2], aoi: areaofInt[2], bio: p_bio[2]},
    {name: names[3], job: ranks[2], pic: [p_img4], aoi: areaofInt[3], bio: p_bio[3]},
    {name: names[4], job: ranks[3], pic: [p_img5], aoi: areaofInt[4], bio: p_bio[4], doc: pdf5},
    {name: names[5], job: ranks[3], pic: [p_img8, profile_pic1], aoi: areaofInt[5], bio: p_bio[5], doc: pdf6},
    {name: names[6], job: ranks[3], pic: [p_img7], aoi: areaofInt[6], bio: p_bio[6], doc: pdf7},
    {name: names[7], job: ranks[3], pic: [p_img9], aoi: areaofInt[7], bio: p_bio[7], doc: pdf8},
    {name: names[8], job: ranks[3], pic: [p_img10], aoi: areaofInt[8], bio: p_bio[8]},
    {name: names[9], job: ranks[3], pic: [p_img11], aoi: areaofInt[9], bio: p_bio[9]},
    {name: names[10], job: ranks[3], pic: [p_img6], aoi: areaofInt[10], bio: p_bio[10], doc: pdf11}    
];

/*Educational Qualifications */
let aparna_quali = [
    "B.Sc. Mathematics from St. Joseph’s College, Irinjalakuda under Calicut University (2000)",
    "M.Sc. Mathematics from Cochin University of Science and Technology with first Rank (2002)",
    "CSIR – UGC – JRF (NET) from University Grants Commission, New Delhi. (2003)",
    "Ph. D from Cochin University of Science and Technology (2009)",
    "Online certification courses from NPTEL in",
    0,
    "R Programming (Elite Gold Medal in 2017)",
    "Groups, Motions, Symmetry and puzzles (Course topper in 2018)",
    "Probability and Statistics (2018)",
    "Stress Management (2018)",
    "Basic Linear Algebra (Course topper in 2019)",
    "Graph Theory (Elite Gold Medal in 2019)",
    "Enhancing Soft Skills and Personality (Elite Gold Medal in 2019)",
    "Fuzzy Logic and Neural Networks (2019)",
    "Groups, Motion, Symmetry and Puzzles (2019)",
    -1,
    "Calculus of One Real Variable (Course topper in 2019)"
];

let ambily_quali = [
    "Indian Statistical Institute – Ph.D. in Mathematics, July 2014.",
    "Cochin University of Science and Technology – M.Phil. in Mathematics, September 2008.",
    "Cochin University of Science and Technology – M.Sc. in Mathematics, May 2007.",
    "St. Peter’s College Kolenchery, Kerala – B.Sc. in Mathematics, April 2005."
];

let noufal_quali = [
    "University of Kerala, Thiruvananthapuram, Kerala, INDIA.",
    "NET, Mathematical Sciences, December 2009.",
    "CSIR/UGC JRF, Mathematical Sciences, June 2010.",
    "CSIR/UGC JRF, Mathematical Sciences, June 2011.",
    "M.Phil, Mathematics, March 2008(Annamalai University)",
    "M.Sc, Mathematics, May 2005",
    "B.Sc, Mathematics, April 2003",
    "Plus Two, Science, May 2000",
    "SSLC, Normal Scheme, March 1998"
];

let shankar_quali = [
    "Kerala School of Mathematics, Kozhikode - Degree Awarded Ph.D in Mathematics, 10th October 2018",
    "Pondicherry University, Puducherry - M.Sc., Mathematics, 2012",
    "Sacred Heart College, Tirupattur - B.Sc., Mathematics, 2009"
];

let kiran_quali = [
    "Ph.D. in Mathematics ( March 2013)",
    "M.Sc. in Mathematics (May 2008), First Class with Distinction",
    "B.Sc. in Mathematics (April 2006), First Class with Distinction"
];


/* */

/* let aparna_achieve = [
    "NPTEL Stars – NPTEL Enthusiasts Award from NPTEL in 2020.",
    "Best Alumni Award from St. Joseph’s College, Irinjalakuda in 2019.",
    "IMS prize (Group 1 – Discrete Mathematics) instituted by Indian Mathematical Society in 2013.",
    "Kerala State Young Scientist Award instituted by Kerala State Council for Science, Technology and Environment in 2012.",
    "First rank for M.Sc. Mathematics from Cochin University of Science and Technology in 2002."
]; */

let aparna_membership = [
    "American Mathematical Society (AMS) - Member",
    "Indian Mathematical Society (IMS) – Life Member",
    "Ramanujan Mathematical Society (RMS) – Life Member",
    "Academy for Discrete Mathematics and its Applications (ADMA) – Life Member, Executive Committee member (2014 – 16), Secretary (2016 – 2020).",
    "Kerala Mathamatical Association (KMA) – Life member."
];


let aparna_invited = [
    "“On Vizing’s Conjecture”, International seminar on new trends in Applications of Mathematics sponsored by CSO & MOSPL at Bharatmata College, Thrikkakara, Kerala, India (31st January 2011).",
    "“Some Domination Concepts in Cographs” , International Conference on Discrete Mathematics and its Applications organized by Department of Mathematics, Amrita Vishwa Vidyapeetham, Coimbatore, India (10th December 2011).",
    "“Triangles in graphs” in the “ Indo – Slovenia Conference on Graph Theory and Applications (Indo- Slov 2013)” organized by the department of Futures Studies in association with Graph Theory Research group, University of Maribor and institute of Mathematics, Physics and Mechanics, Ljubljana, Slovenia (February 22 – 24, 2013).",
    "“Domination in Graph Products- Vizing’s Conjecture” in the workshop on Graph Theory and Interconnection Networks Department of Applied Mathematics, Tunghai university, Taichung, Taiwan (November 16 – 17, 2013).",
    "“On Tuza’s Conjecture related to triangles in graphs” in the Third India – Taiwan Conference on Discrete Mathematics organized by Department of Applied mathematics, National Chiao Tung University (November 19 – 22 , 2013).",
    "“Recent developments on Vizing’s Conjecture” in the International Conference on Graph Theory and its Applications held in Amritha School of Engineering (December 16-19, 2015).",
    "“On Leech Trees” in Fifth India-Taiwan Conference on Discrete Mathematics 2017 organized by Department of Mathematics, Tamkang University, Tamsui, Taiwan (July 18 – 21, 2017).",
    "“On Leech Trees and Some Related Concepts” in International Conference on Discrete Mathematics 2018 organized by Periyar University, Salem (January 4 – 7, 2018).",
    "“On Double Roman Domination Number” in International Conference on Discrete Mathematics and Network Systems organized by BITS, Pilani, Goa (July 7 – 10, 2018).",
    "“On Leech Labelling” in International Conference on Mathematical Computer Engineering organized by VIT, Chennai (November 23 – 24, 2018).",
    "“Double Roman Domination Number” in International Conference on Graph Theory and its Applications organized by Amrita University, Ettimadai (January 4 – 6, 2019).",
    "“Double Roman Domination Number” in 9th Slovenian International Conference on Graph Theory – Bled’19 organized by Institute of Mathematics, Physics and Mechanics, Slovenia (August 23 – 29, 2019)"
];

let ambily_invited = [
    "International Workshops/ Conferences",
    null,
    "Invited Talk on Roy’s elementary orthogonal transformations at Asia-Australia Algebra Conference Western Sydney University, Australia, 21-25 January 2019.",
    "Talk “On von Neumann regularity of simple flat Leavitt path algebras” in the Annual Conference of Australian Mathematical Society, AustMS 2018, at University of Adelaide, Australia, 4-7 December, 2018.",
    "Poster Presentation on “Simple flat Leavitt path algebras are von Neumann regular” at CIMPA Research School on “Topics in Ring Theory”, Cape Town, South Africa, 16-28 July 2018.",
    "Invited Talk on Normality of the DSER elementary orthogonal group, in the International Conference in K-Theory, held at Western Sydney University, Australia, 01-05 August, 2016.",
    "National Workshops/ Conferences/Training Programs",
    "Resource Person, Summer Training Program in Mathematics STPM-2021, at S.B.College Changanassery, April 5-17, 2021.",
    "Invited Talk, IWM Annual Conference 2021, held during March 22-23, 2021 in cooperation with IIT Dharwad.",
    "Invited Talk on Visualization of Roys Elementary Orthogonal Transformations in the Commutative Algebra and Algebraic Geometry conference (CAAG 2019), at IISER Bhopal, 2-6 July, 2019.",
    "Talk on Normality of the DSER elementary orthogonal group in CAAG 2017 at IISER Pune, December 05-08, 2017.",
    "Invited Speaker at Seminar Series on “Unimodular Rows and Suslin Matrices” organized by the Department of Mathematics, Institute of Science Mumbai, on 06 September and 04 October, 2017.",
    "Invited Lecture’s in Young Talent Nurture program, at IIST, Trivandrum 24th May- 6th June, 2016.",
    "Invited Talk on Extendability of Quadratic Modules in CAAG 2015, IIT Guwahati, 05-09 February, 2015.",
    "Colloquium talk on Normality and K1-stability of Roy’s elementary orthogonal group at School of Mathematics TIFR Mumbai, March 12, 2015.",
    "Contributed Talk at Young Women and Mathematics-Symposium 2014, IISER Pune, 25-27 July 2014."
];

/* let aparna_articles = [
    "Aparna Lakshmanan S., S. B. Rao, A. Vijayakumar, Gallai and anti-Gallai graphs of a graph, Mathematica Bohemica, 132(1)(2007), 43 – 54.",
    "Aparna Lakshmanan S., A. Vijayakumar, Clique irreducibility of some iterative classes of graphs, Discuss. Math. Graph Theory, 28 (2008), 307 – 321.",
    "Aparna Lakshmanan S., A. Vijayakumar, The &lt;t&gt;-property of some classes of graphs, Discrete Math., 309 (2009), 259 – 263.",
    "Aparna Lakshmanan S., A. Vijayakumar, Clique irreducibility and clique vertex irreduciblility of graphs, Appl. Anal. Discrete Math., 3 (2009), 137 – 146.",
    "S. B. Rao, Aparna Lakshmanan S., A. Vijayakumar, Cographic and global cographic domination number of a graph, Ars Combinatoria, 95 (2010), 273 – 486.",
    "Aparna Lakshmanan S., A. Vijayakumar, On weakly clique irreducible graphs, Bull. Inst. Combin. Appl., 58 (2010), 48 – 58.",
    "Aparna Lakshmanan S., A. Vijayakumar, The Gamma graph of a graph, AKCE J. Graphs. Combin., 7(1)(2010), 53 – 59.",
    "Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Small edge sets meeting all triangles of a graph, Graphs Combin., 28 (2012), 381 – 392.",
    "Aparna Lakshmanan S., A. Vijayakumar, T. M. Wang, Weakly clique irreducibility of NEPS of two graphs, Util. Math., 92 (2013), 351 – 358.",
    "Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Generalized line graphs: Cartesian products and complexity of recognition, Electron. J. Combin., 22(3) (2015), #P3.33.",
    "Aparna Lakshmanan S., Cs. Bujtas, Zs. Tuza, Induced cycles in triangle graphs, Discrete Applied Mathematics, 209 (2016), 264 – 275.",
    "Aparna Lakshmanan S., Manju K. Menon, Anu V., Homometric number of graphs, International Journal on Recent and Innovation Trends in Computing and Communication, 5(7) (2017), 846 – 850.",
    "Jeepamol J. Palathingal, Aparna Lakshmanan S., Gallai and anti-Gallai graph operators, Electronic Notes in Discrete Mathematics, 63 (2017), 447 – 453.",
    "Jeepamol J. Palathingal, Aparna Lakshmanan S., Forbidden Subgraph Characterizations of Extensions of Gallai graph operators in Signed Graphs, Annals of Pure and Applied Mathematics, 14(3) (2017), 437 – 448.",
    "Anu V., Aparna Lakshmanan S., Double Roman Domination Number, Discrete Applied Mathematics, 244 (2018), 198 – 204.",
    "Jeepamol J. Palathingal, Aparna Lakshmanan S., Commutativity of Some Graph Operator, Research & Reviews: Discrete Mathematical structures, 6(1)(2019), 1–5.",
    "V. G. Deepa, Aparna Lakshmanan S., V. N. Sreeja, Centrality and reciprocity in directed social networks - A case study, Malaya Journal of Mathematik, Vol. S(1) (2019), 479 – 484.",
    "Seena Varghese, Aparna Lakshmanan S., S. Arumugam, Two Classes of Non-Leech Trees, Electronic Journal of Graph Theory and Applications, 8(1) (2020), 205 – 210.",
    "Anu V., Aparna Lakshmanan S., The Double Roman Domination Number of Generalized Sierpinski Graphs, Discrete Mathematics Algorithms and Applications, 12(4) (2020), 2050047.",
    "Jeepamol J Palathingal, Gopalapillai Indulal, Aparna Lakshmanan, Spectrum of Gallai Graph of Some Graphs, Indian Journal of Pure and Applied Mathematics, 51(4) (2020), 1829 – 1841.",
    "Jismy Varghese, Aparna Lakshmanan S., Italian Domination on Mycielskian and Sierpinski Graphs, Discrete Mathematics Algorithms and Applications (accepted).",
    "Jeepamol J Palathingal, Gopalapillai Indulal, Aparna Lakshmanan, Spectrum of antiGallai Graph of Some Graphs, Indian Journal of Pure and Applied Mathematics(accepted)",
    "Jismy Varghese, Anu V., Aparna Lakshmanan S., Italian Domination and Perfect Italian Domination on Sierpinski Graphs, Journal of Discrete Mathematical Sciences & Cryptography (accepted).",
    "Seena Varghese, Aparna Lakshmanan S., S. Arumugam, Leech Index of a Trees, Journal of Discrete Mathematical Sciences & Cryptography (accepted).",
    "Aparna Lakshmanan S., A. Vijayakumar, Some properties of the clique graph of a cograph, RMS Lecture Note Series 7 (2008), (Proceedings of the International Conference on Discrete Mathematics, Bangalore, India, 2006), 227 – 232.",
    "Aparna Lakshmanan S., A. Vijayakumar, A note on some domination parameters in graph products, J. Combin. Math. Combin. Comput., 69 (2009), 31 – 38.",
    "Anu V., Aparna Lakshmanan S., Homometric number of a graph and some related concepts, Lecture Notes in Computer Science, 10398 (2017), 30 – 37.",
    "V. G. Deepa, Aparna Lakshmanan S., V. N. Sreeja, The Role of Social Factors in Education: A Case Study in Social Network Perspective, Lecture Notes in Networks and Systems, 75 (2019), 61 – 68.",
    "Aparna Lakshmanan S., Characterization of some special classes of Gallai and anti Gallai graphs, Discourse, 1 (2013), 85 – 89."
]; */


let aparna_conference = [
    "Convenor of the UGC sponsored National Seminar on Graph Theory and its Applications, August 7 – 9, 2014.",
    "Convenor of the International Conference on Recent Trends in Graphs and Networks, October 30 – November 1, 2017.",
    "Co-convenor of the International Conference on Recent Trends in Graph Theory and Combinatorics, April 26 – 29, 2018.",
    "Convenor of the Academic Support Programme for Under Graduate Students – One Day International Workshop on November 27, 2018."
];

/* let aparna_teaching = [
    "St. Xavier’s College for Women, Aluva, Assistant Professor (07/11/2005 to 13/01/2021)",
    "Cochin university of Science and Technology (14/01/2021 onwards)"
]; */

let aparna_research = [
    "UGC minor project (completed in 2016) – “Study of various graph parameters under graph products” (Rs. 1,50,000/-).",
    "KSCSTE Major project (completed in 2019) – “Problems related to Applications of graph theory to Networks” (Rs.11,80,000/-)."
];

/* let aparna_fund = [
    "Soil Suitability Analysis Using Fuzzy Sets (Rs. 8000/-).",
    "Reciprocity of inmates of Madhavapuram Colony – A case study (Rs. 6000/-)."
]; */



let link = {
    ambat: [null, null, null],
    romeo: [null, null, null],
    sasi: [null, null, null],
    shery: [null, null, null],
    ambily: [null, "https://www.scopus.com/authid/detail.uri?authorId=55464037100", "https://scholar.google.com/citations?user=d3oabqUAAAAJ&hl=en&oi=ao"],
    aparna :["https://publons.com/dashboard/summary/", "https://www.scopus.com/authid/detail.uri?authorId=55310792000", "https://scholar.google.com/citations?view_op=list_works&hl=en&user=ApsNUl0AAAAJ&gmla=AJsN-F6tQ-kBuj3lOsmSOUv_C-xsJCMACZWtxGTn50xkesLAOlRzGhDDhihF3DT2UOTdPvV9tvtHsVmW1qFwT5OSFEXfFU6wZ5wEkOjuaHdP6TBWV4rUMXU"],
    noufal: [null, null, null],
    shankar: [null, null, "https://scholar.google.com/citations?user=z6mlrdYAAAAJ&hl=en"],
    tanu: [null, null, null],
    tatha: [null, null, null],
    kiran: [null, null, null]
}

export let data = [
    {links: link.ambat, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.romeo, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.sasi, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.shery, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.ambily, edu: ambily_quali, talks: ambily_invited, mem:[], conf: [], proj:[]},
    {links: link.aparna, edu: aparna_quali, talks: aparna_invited, mem: aparna_membership, conf: aparna_conference, proj: aparna_research},
    {links: link.noufal, edu: noufal_quali, talks: [], mem:[], conf: [], proj:[]},
    {links: link.shankar, edu: shankar_quali, talks: [], mem:[], conf: [], proj:[]},
    {links: link.tanu, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.tatha, edu: [], talks: [], mem:[], conf: [], proj:[]},
    {links: link.kiran, edu: kiran_quali, talks: [], mem:[], conf: [], proj:[]}
];




