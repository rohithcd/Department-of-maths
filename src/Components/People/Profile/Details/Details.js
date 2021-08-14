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
let names = ["Dr. P. G. Romeo", "Dr. Sasi Gopalan", "Prof. Ambat Vijayakumar",  "Dr. Shery Fernandez", "Dr. Ambily A A",
    "Dr. Aparna Lakshmanan S", "Dr. V. B. Kiran Kumar", "Dr. A. Noufal", "Dr. Shankar P", "Dr. Tanushree Pandit", "Dr. Tathagata Banerjee"];

let ranks = ["Professor",  "Emeritus Professor", "Associate Professor", "Assistant Professor"];

let areaofInt = [
    "Algebra, Category theory, Algebraic topology, Universal algebras",
    "Approximation Theory, Analysis and Approximations in Deep learning, Optimization Techniques, Fuzzy Mathematics, Wavelet Analysis, Mathematical Morphology",
    "Discrete Mathematics",
    "Representation theory, Fuzzy Mathematics",
    "Algebraic K-Theory, Commutative Algebra, Computational Algebra, Non-Commutative Algebras",
    "Graph Theory",
    "Functional Analysis",
    "Functional Analysis, Framelets, PDEs",
    "Functional analysis, Operator algebras and Operator theory",
    "Convex Optimization, Variational Inequalities, Equilibrium Problems",
    "Operator Algebras, Operator theory and Coarse geometry"
    
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
    {name: names[0], job: ranks[0], pic: [p_img1], aoi: areaofInt[0], bio: p_bio[0]},
    {name: names[1], job: ranks[0], pic: [p_img2], aoi: areaofInt[1], bio: p_bio[1]},
    {name: names[2], job: ranks[1], pic: [p_img3], aoi: areaofInt[2], bio: p_bio[2]},
    {name: names[3], job: ranks[2], pic: [p_img4], aoi: areaofInt[3], bio: p_bio[3]},
    {name: names[4], job: ranks[3], pic: [p_img5], aoi: areaofInt[4], bio: p_bio[4], doc: pdf5},
    {name: names[5], job: ranks[3], pic: [p_img8, profile_pic1], aoi: areaofInt[5], bio: p_bio[5], doc: pdf6},
    {name: names[6], job: ranks[3], pic: [p_img6], aoi: areaofInt[6], bio: p_bio[6], doc: pdf7},
    {name: names[7], job: ranks[3], pic: [p_img7], aoi: areaofInt[7], bio: p_bio[7], doc: pdf8},
    {name: names[8], job: ranks[3], pic: [p_img9], aoi: areaofInt[8], bio: p_bio[8]},
    {name: names[9], job: ranks[3], pic: [p_img10], aoi: areaofInt[9], bio: p_bio[9]},
    {name: names[10], job: ranks[3], pic: [p_img11], aoi: areaofInt[10], bio: p_bio[10], doc: pdf11}    
];

/*Educational Qualifications */
let ambat_quali = [
    "M.Sc. Mathematics, 1980 - II Rank, University of Cochin",
    "P.G. Diploma in German, 1983 University of Cochin.",
    "Ph.D. Mathematics, 1986 Cochin University of Science and Technology"
];

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
    "Calculus of One Real Variable (Course topper in 2019)",
    -1
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

/* Programmes Organized */

let noufal_conference = [
    "Research Workshop on Analysis",
    "Research Workshop on Analysis II",
    "Residential Training Camp for the Regional Mathematical Olympiad Awardees in Kerala Region (2017, 2018, 2019).",
    "National Seminar on Analysis and Geometry (2014)."
];

/* Memberships */
let ambat_membership = [
    "Indian Mathematical Society - Life Member (1985)",
    "Ramanujan Mathematical Society - Life Member( 1987)",
    "Association of Mathematics Teachers of India - Life Member (1980)",
    "American Mathematical Society - Member (1994)",
    "Canadian  Mathematical Society - Member (1999)",
    "Institute of Combinatorics and its Applications Canada - Fellow (FTICA) – (1999)",
    "Kerala Mathematics Teachers Association - Life Member (2001)",
    "Cryptology Research Society of India - Life Member(2006)",
    "Academy of Discrete Mathematics and Applications - Life Member (2006)",
    "Mathematical Association of America - Member (2007)",
    "Indian Science Congress Association - Life Member (2009)"

];
let aparna_membership = [
    "American Mathematical Society (AMS) - Member",
    "Indian Mathematical Society (IMS) – Life Member",
    "Ramanujan Mathematical Society (RMS) – Life Member",
    "Academy for Discrete Mathematics and its Applications (ADMA) – Life Member, Executive Committee member (2014 – 16), Secretary (2016 – 2020).",
    "Kerala Mathamatical Association (KMA) – Life member."
];

/* Invited Talks */
let ambat_invited = [
    "Invited talk in the National Seminar on Information Theory and Communication, (100th birth Anniversary of Shannon) , Rajagiri School of Engineering and Technology, Cochin ,30th April 2016.",
    "Invited talk in the   Special   Symposium on Mathematics Education, 31st Annual Conference   of   Ramanujan  Mathematical  Society,  Tiruchirappally, India, June 18-21, 2016.",
    "The Power Domination Problem in Graphs, International Conference on Theoretical Computer Science and Discrete Mathematics , Kalasalingam University, Krishnankoil, December 19-21, 2016.",
    "‘What is happening in Mathematical Sciences ‘ Lead lecture in the Mathematical and Statistical Sciences Session, 29th  Kerala Science Congress, Marthoma College, Thiruvalla. January 29, 2017.",
    "Resource Person, Azim Premji University- Ramanujan Math. Society Workshop for School Teachers,  Chinmaya Vidyalaya , Kannur,  May 2017.",
    "‘Median Problems in Graphs ‘  International Conference in Graph Theory and Networks, St.Xaviers College, Aluva, October30- November1, 2017.",
    "Some Network Topological Notions of the Mycielskian  of a Graph, International Conference on Discrete Mathematics and its Applications to Network Science, BITS Goa, July 7-10,2018.",
    "Key Note Speaker, The changing face of Mathematics, National Level Workshop On Discovering the Art of Mathematics, Department of Mathematics, University of Kerala, 18th  December 2018.",
    "‘Excitements in Mathematics’ Lead lecture in the Mathematical and Statistical Sciences Session , 31st  Kerala Science Congress, Fatima Matha National college, Quilon, February 3, 2019."

];

let ambily_invited = [
    "International Workshops/ Conferences",
    0,
    "Invited Talk on Roy’s elementary orthogonal transformations at Asia-Australia Algebra Conference Western Sydney University, Australia, 21-25 January 2019.",
    "Talk “On von Neumann regularity of simple flat Leavitt path algebras” in the Annual Conference of Australian Mathematical Society, AustMS 2018, at University of Adelaide, Australia, 4-7 December, 2018.",
    "Poster Presentation on “Simple flat Leavitt path algebras are von Neumann regular” at CIMPA Research School on “Topics in Ring Theory”, Cape Town, South Africa, 16-28 July 2018.",
    "Invited Talk on Normality of the DSER elementary orthogonal group, in the International Conference in K-Theory, held at Western Sydney University, Australia, 01-05 August, 2016.",
    -1,
    "National Workshops/ Conferences/Training Programs",
    0,
    "Resource Person, Summer Training Program in Mathematics STPM-2021, at S.B.College Changanassery, April 5-17, 2021.",
    "Invited Talk, IWM Annual Conference 2021, held during March 22-23, 2021 in cooperation with IIT Dharwad.",
    "Invited Talk on Visualization of Roys Elementary Orthogonal Transformations in the Commutative Algebra and Algebraic Geometry conference (CAAG 2019), at IISER Bhopal, 2-6 July, 2019.",
    "Talk on Normality of the DSER elementary orthogonal group in CAAG 2017 at IISER Pune, December 05-08, 2017.",
    "Invited Speaker at Seminar Series on “Unimodular Rows and Suslin Matrices” organized by the Department of Mathematics, Institute of Science Mumbai, on 06 September and 04 October, 2017.",
    "Invited Lecture’s in Young Talent Nurture program, at IIST, Trivandrum 24th May- 6th June, 2016.",
    "Invited Talk on Extendability of Quadratic Modules in CAAG 2015, IIT Guwahati, 05-09 February, 2015.",
    "Colloquium talk on Normality and K1-stability of Roy’s elementary orthogonal group at School of Mathematics TIFR Mumbai, March 12, 2015.",
    "Contributed Talk at Young Women and Mathematics-Symposium 2014, IISER Pune, 25-27 July 2014.",
    -1
];

let aparna_invited = [
    "“Double Roman Domination Number” in 9th Slovenian International Conference on Graph Theory – Bled’19 organized by Institute of Mathematics, Physics and Mechanics, Slovenia (August 23 – 29, 2019)",
    "“Double Roman Domination Number” in International Conference on Graph Theory and its Applications organized by Amrita University, Ettimadai (January 4 – 6, 2019).",
    "“On Leech Labelling” in International Conference on Mathematical Computer Engineering organized by VIT, Chennai (November 23 – 24, 2018).",
    "“On Double Roman Domination Number” in International Conference on Discrete Mathematics and Network Systems organized by BITS, Pilani, Goa (July 7 – 10, 2018).",
    "“On Leech Trees and Some Related Concepts” in International Conference on Discrete Mathematics 2018 organized by Periyar University, Salem (January 4 – 7, 2018).",
    "“On Leech Trees” in Fifth India-Taiwan Conference on Discrete Mathematics 2017 organized by Department of Mathematics, Tamkang University, Tamsui, Taiwan (July 18 – 21, 2017).",
    "“Recent developments on Vizing’s Conjecture” in the International Conference on Graph Theory and its Applications held in Amritha School of Engineering (December 16-19, 2015).",
    "“On Tuza’s Conjecture related to triangles in graphs” in the Third India – Taiwan Conference on Discrete Mathematics organized by Department of Applied mathematics, National Chiao Tung University (November 19 – 22 , 2013).",
    "“Domination in Graph Products- Vizing’s Conjecture” in the workshop on Graph Theory and Interconnection Networks Department of Applied Mathematics, Tunghai university, Taichung, Taiwan (November 16 – 17, 2013).",
    "“Triangles in graphs” in the “ Indo – Slovenia Conference on Graph Theory and Applications (Indo- Slov 2013)” organized by the department of Futures Studies in association with Graph Theory Research group, University of Maribor and institute of Mathematics, Physics and Mechanics, Ljubljana, Slovenia (February 22 – 24, 2013).",
    "“Some Domination Concepts in Cographs” , International Conference on Discrete Mathematics and its Applications organized by Department of Mathematics, Amrita Vishwa Vidyapeetham, Coimbatore, India (10th December 2011).",
    "“On Vizing’s Conjecture”, International seminar on new trends in Applications of Mathematics sponsored by CSO & MOSPL at Bharatmata College, Thrikkakara, Kerala, India (31st January 2011)."
];

let noufal_invited = [
    "Gave a Lecture on The Introduction to Wavelet Analysis for the Students of Majlis Arts and Science College Puramannur.",
    "Gave a Lecture on Hilbert Huang Transform for the Research group in the Department of Bioinformatics, University of Kerala, Thiruvananthapuram.",
    "Gave a Lecture on The Introduction to Real Analysis for the Students of Govt. Arts and Science College Tirur.",
    "Gave a Lecture on Introduction to Geogebra 5.0 in the Faculty Enrichment Programme on Mathematical Softwares Organized by the Department of Mathematics, Statistics and Computer Applications at St.Theresas College (Autonomous) Ernakulam, 20.10.2015.",
    "Gave a Lecture on The Finite Dimensional Spectral Theorem in the Two day Workshop on Functional analysis Organized by the Department of Mathematics, P.M.Govt.College Chalakkudy, 11.12.2015.",
    "Gave a Lecture on Korovkin Theorem in The National Seminar on Recent Trends in Analysis, Topology and its Applications organized by the Department of Mathematics, Sanatana Dharma College, Alappuzha, during December 02-04, 2015.",
    "Gave a Lecture on LaTeX in the One day Seminar organized by the Department of Mathematics, St. Mary’s College, Thrissur on 19-03-2016."

];

let shankar_invited = [
    "The non-commutative analogue of Korovkin’s sets and peak points in ”Symposium on Geometry of Banach Spaces” held at Indian Institute of Technology, Hyderabad, India (December 01-02, 2019)."

];

/* Publications */
let ambat_articles = [
    "Papers",
    0,
    "Forwarding indices and bisection width of Sierpinski graphs.(with Savitha K S), Bull ICA ( 2016).",
    "Convex Median and Anti-Median at Prescribed Distance (with Pravas, K.), Journal of Combinatorial Optimization, 33 , (2017),  1021-1029.",
    "Component factors of the Cartesian product of graphs,(with Chitra, M.R.) Asian-European Journal of Mathematics, (2016).",
    "The diameter variability of product graphs,(with Chitra , M.R.), The Journal of Combinatorial Mathematics and Combinatorial Computing,(2016).",
    "Heredity for generalised power domination (with Paul Dorbec, Seethu Varghese),  Discrete Mathematics and Theoretical Computer Science, 18(3), 31-37, ( 2016).",
    "Some network topological notions of the Mycielskian of a graph (with K S Savitha), 	AKCE International Journal of Graphs and Combinatorics (2016).",
    "Reciprocal Graphs ( with G. Indulal), Malaya J.Mat.4,(2016), 380-387.",
    "Generalised power domination in WK- Pyramid networks, ( with Seethu Varghese) , Bull ICA, Vol 78, (2016), 52-68.",
    "On the Power domination Number of Graph products, ( with Seethu Varghese),  LNCS(Springer), Vol. 9602 (2016) , 357- 367.",
    "The k- power bondage number of a graph ( with Seethu Varghese ), Discrete Mathematics, Algorithms , Applications., Vol 8, No: 4 (2016).",
    "On an edge partition and root graphs of some classes of line graphs ( with Pravas. K) , Electronics Journal of Graph theory and Its Applications, 1-15, 2017.",
    "Some diameter notions of the generalised Mycielskian of a graph ( with K.S. Savitha, Chitra M. R.) , Proceedings of the International Conference on Discrete Mathematics and Theoretical Computer Science, Kalasalingam University, December 2016. LNCS ( Springer ), Lecture Notes in Comput. Sci., 10398, Springer, Cham, 371–382, 2017.",
    "Further progress on the heredity of the game domination number ( with Tijo James, Paul Dorbec ), Proceedings of the International Conference on Discrete Mathematics and Theoretical Computer Science, Kalasalingam University, December 2016. LNCS ( Springer ), to appear in 2017.",
    "The median problem on Symmetric Bipartite Graphs (with Pravas, K.),   Proceedings of the International Conference on Discrete Mathematics and Theoretical Computer Science, Kalasalingam University, December 2016. LNCS ( Springer ), Lecture Notes in Comput. Sci., 10398, Springer, Cham, 262–270, 2017.",
    "The diameter variability of the product graphs.(with Chitra M.R.), J. Combin. Math. Combin. Comput. 103 (2017), 159–170.",
    "Power domination in Knodel graphs and Hanoi Graphs ( with Seethu Varghese , A.M.Hinz ), Discuss. Math. Graph Theory 38(1): 63-74 (2018) .",
    "Distance Energy Change in bipartite graph due to edge deletion (with Wasin So and Anu Varghese), Linear Algebra and its Applications, 553 (2018),211-222.",
    "The Domination Game on Split Graphs (with Tijo James and Sandi Klavzar ), Bulletin of Australian Mathematical Society, doi:10.1017/S0004972718001053",
    "Domination game: Eﬀect of edge contraction and edge subdivision (with Tijo James) – Discuss. Math. Graph Theory,doi:10.7151/dmgt.2378.",
    "Wiener index and Steiner 3-Wiener index of a graph (with  Matjaˇz Kovˇse, Rasila V. A. ) – to appear in Asian European Journal of Mathematics 2021",
    "Steiner Wiener index of block graphs (with Matjaˇz Kovˇse, Rasila V. A. ) – AKCE.International Journal of Graphs and Combin. 17 (3 ) (2020), 830-840. ",
    "Split Graphs with Exactly Four Distinct Eigenvalues ( with Anu Varghese, Steve Kirkland, Felix Goldberg), Disc..Appl. Math 2020.",
    "On spectral radius of signed graphs without negative even cycles (with Z.Stanic)-Bulletin Mathematique de la Societe des sciences Mathematiques de Roumanie, Vol 64, (2021), 89-96.",
    "Bounds on the Steiner Wiener index of graphs (with Rasila, V.A.)- communicated",
    "Steiner Wiener index of line graphs (with Rasila, V.A)- communicated.",
    -1,
    "Books",
    0,
    "Recent Trends in Graphs and Combinatorics , Special Issue of Discrete Mathematics (Elsevier)-2012 . Eds ; R . Balakrishnan, R. B. Bapat, Sandi Klavsar, A.Vijayakumar, Thomas Zaslavsky,  Xuding Zhu.",
    "Proceedings of 5th International Conference, CALDAM 2019, February 14-16, IIT, Kharagpur,India, (Springer) LNCS 11394. Eds.: Sudebkumar Prasant Pal , Ambat Vijayakumar.",
    "Proceedings of the INTERNATIONAL CONFERENCE ON NUMBER THEORY AND DISCRETE MATHEMATICS, SPECIAL ISSUE OF JOURNAL OF RAMANUJAN MATH SOCIETY,2021.Eds: AMBAT VIJAYAKUMAR, MAHESH KAKDE,PRASAD TETALI, SANDI KLAVSAR, SANOLI GUN",
    -1
    
];
let shery_articles = [
    "The lattice of pre- complements of a classic interval valued fuzzy graph, Malaya Journal of Matematik, Vol. 8, 2020",
    "The Chain structure of intuitionistic level subgroups in cyclic groups of order pq, Malaya Journal of Matematik, Vol. 8, 2020",
    "Fuzzy ?-separating cover of a fuzzy topological spaces, The Albertian Journal of Pure and Applied Mathematics (TAJOPAAM), Vol. 15, 2019",
    "Fuzzification of functor in Category theory, The Albertian Journal of Pure and Applied Mathematics (TAJOPAAM), Vol. 15, 2019",
    "The doze optimization of nano silver on Salmonella Typhmurium using fuzzy mathematics, Journal of computer and Mathematical sciences, Vol. 9, 2018",
    "Classic and Non-classic Interval Valued Fuzzy Graphs, International journal of applied Engineering research., Vol. 13, 2018",
    "The doze optimization through fuzzy mathematics, International journal of pure and applied mathematics, Vol. 117, 2017",
    "Fuzzy G-modules of Periodic functions, The Albertian Journal of Pure and Applied Mathematics (TAJOPAAM), Vol. 14, 2015",
    "Quasi injective fuzzy G-modules on P_r, International Journal of scientific and Research Publications, Vol. 5, 2015",
    "Artinian Fuzzy g-modules, Journal of computer and Mathematical sciences, Vol. 6, 2015"
];

let ambily_articles = [
"Classical K-Theory",
0,
"A.A. Ambily and Ravi A. Rao, Normality of DSER elementary orthogonal group, J. Pure Appl. Algebra (2020), DOI: https://doi.org/10.1016/j.jpaa.2019.106283, arXiv:1703.04083 [math.AC].",
"A.A. Ambily, Yoga of commutators in DSER elementary orthogonal group, J. Homotopy Relat. Struct. 14 (2019), no.2, 595 − 610.",
"A.A. Ambily, Normality and K1-stability of Roy’s elementary orthogonal group, J. Algebra, 424 (2015), 522 − 539.",
"A.A. Ambily and Ravi A. Rao, Extendability of quadratic modules over a polynomial extension of an equicharacteristic regular local ring, J. Pure Appl. Algebra, 218 (2014), no.10, 1820 − 1837.",
-1,
"Non-commutative algebras",
0,
"A.A. Ambily, Roozbeh Hazrat and Huanhuan Li , Simple flat Leavitt path algebras are von Neumann regular, Comm. Algebra 47 (2019), no.7, 2604 − 2616.",
-1,
"Number Theory",
0,
"S.D. Adhikari, A.A. Ambily and B. Sury, Zero-sum problems with subgroup weights, Proc. Indian Acad. Sci.(Math. Sci.) 120(3) (2010), 259 − 266",
-1
];

let aparna_articles = [
    "International Journals",
    0,
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
    -1,
    "Proceedings of International Conferences",
    0,
    "Aparna Lakshmanan S., A. Vijayakumar, Some properties of the clique graph of a cograph, RMS Lecture Note Series 7 (2008), (Proceedings of the International Conference on Discrete Mathematics, Bangalore, India, 2006), 227 – 232.",
    "Aparna Lakshmanan S., A. Vijayakumar, A note on some domination parameters in graph products, J. Combin. Math. Combin. Comput., 69 (2009), 31 – 38.",
    "Anu V., Aparna Lakshmanan S., Homometric number of a graph and some related concepts, Lecture Notes in Computer Science, 10398 (2017), 30 – 37.",
    "V. G. Deepa, Aparna Lakshmanan S., V. N. Sreeja, The Role of Social Factors in Education: A Case Study in Social Network Perspective, Lecture Notes in Networks and Systems, 75 (2019), 61 – 68.",
    -1,
    "National Journals",
    0,
    "Aparna Lakshmanan S., Characterization of some special classes of Gallai and anti Gallai graphs, Discourse, 1 (2013), 85 – 89.",
    -1
]; 

let shankar_articles = [
    "C.S. Arunkumar, P. Shankar, and A.K. Vijayarajan, Boundary representations and rectangular hyperrigidity, Banach J. Math. Anal. 15 (2021), no. 2, 38.",
    "P. Shankar and A. K. Vijayarajan, Hilbert modules characterization for weak hyperrigid operator systems, J. Anal. 28 (2020), 905-912.",
    "P. Shankar, Hyperrigid generators in C∗-algebras, J. Anal. 28 (2020), 791-797.",
    "M. N. N. Namboodiri, S. Pramod, P. Shankar and A. K. Vijayarajan, Quasi hyperrigidity and weak peak points for non-commutative operator systems , Proc. Indian Acad. Sci. Math. Sci. 128 (2018), no. 5, 128:66.",
    "P. Shankar and A. K. Vijayarajan, Tensor products of hyperrigid operator systems, Ann. Funct. Anal. 9 (2018), no.3, 369-375.",
    "S. Pramod, P. Shankar and A. K. Vijayarajan, Separating and quasi hyperrigid operator systems in C*-algebras, Tbilisi Math. J. 10 (2017), no. 4, 55-61.",
    "P. Shankar and A. K. Vijayarajan, Hyperrigid operator systems and Hilbert modules, Ann. Funct. Anal. 8 (2017), no. 1, 133-141"
];

let kiran_articles = [
    "Korovkin-type theorems on B(H) and their applications to function spaces, Monatshefte für Mathematik, Springer 2021",
    "Approximation of Entropy Numbers, Complex Analysis and Operator Theory, Springer Vol. 13, 2019",
    "A short survey on preconditioners and Korovkin- type theorems, Journal of Analysis, Springer 2019",
    "A Korovkin-type theory for non-self-adjoint Toeplitz operators, Linear Algebra Appl., Springer Vol. 543, 2018",
    "A note on discrete Borg-type theorems, Linear and Multilinear Algebra, Taylor & Francis Vol. 66, 2017",
    "Real powers of bounded linear operators, Int. J. Appl. Comput. Math., 3(2):,., Springer Vol. 3, 2017",
    "Preconditioners in spectral approximation, Ann. Funct. Anal., , Vol. 7, 2016",
    "Spectral approximation of bounded self-adjoint operators—a short survey, Semigroups, algebras and operator theory, Springer Proc. Math. Stat. , Springer Vol. 142, 2015",
    "Truncation method for random bounded self-adjoint operators, Banach J. Math. Anal., Vol. 9, 2015",
    "Perturbation of operators and approximation of spectrum., Proc. Indian Acad. Sci. Math. Sci., Vol. 124, 2014"
];

let tatha_articles = [
    "Noncommutative coarse geometry, Journal of Noncommutative geometry, European Mathematical Society Vol. 13, 2019"
];

/*PhD Guidance*/
let ambily_phd = {
    name: ["Ms. Aparna Pradeep V.K"],
    thesis: ["August 2017 onwards"]
};

let aparna_phd = [
    [1, "Anu V", "A study on Two Graph Parameters – Double Roman Domination Number and Homometric Number"],
    [2, "Jeepamol J", "Studies on Graph Operators"]
];

/*Programmes Organized */
let ambily_conference = [
    "International Workshops/Conferences",
    0,
    "Organized International Workshop on Leavitt Path Algebras and K-Theory, July 1-3, 2017, at Department of Mathematics, Cochin University of Science and Technology, funded by NBHM (National Board for Higher Mathematics) and KSCSTE (Kerala State Council for Science, Technology, and Environment) - NBHM Grant of Rs. 2,10,000 and KSCSTE Grant of Rs. 1,50,000.",
    -1,
    "National Workshops/Conferences",
    0,
    "Organized Workshop on Differential Equations at Department of Mathematics, Cochin University of Science and Technology, March 9, 2019.",
    "Organized Indian Women and Mathematics (IWM) 2018, January 2-3, 2018 - Regional Workshop on Research and Opportunities in Kerala, at Department of Mathematics, Cochin University of Science and Technology, funded by NBHM (National Board for Higher Mathematics) – Grant of Rs. 3, 96, 000.",
    -1
];

let aparna_conference = [
    "Convenor of the UGC sponsored National Seminar on Graph Theory and its Applications, August 7 – 9, 2014.",
    "Convenor of the International Conference on Recent Trends in Graphs and Networks, October 30 – November 1, 2017.",
    "Co-convenor of the International Conference on Recent Trends in Graph Theory and Combinatorics, April 26 – 29, 2018.",
    "Convenor of the Academic Support Programme for Under Graduate Students – One Day International Workshop on November 27, 2018."
];

/* Projects */
let ambily_research = [
    "Title: Quadratic analogues of results on projective modules and the structure of orthogonal groups, Funding: RUSA, Govt.of India, Role: Principal Investigator, Year: 2019-2020, ongoing (INR 21,11,800).",
    "Title: Leavitt Path Algebras, Classifications via K-Theory, Funding: SERB Overseas Postdoctoral Fellowship, Department of Science and Technology, Govt.of India, Role: Overseas Postdoctoral Fellow, Year: 2018-2019, completed (INR 26,67,350).",
    "Title: Leavitt Path Algebras, Classifications via K-Theory, Funding: Seed Money for New Research Initiatives from Cochin University of Science and Technology, Role: Principal Investigator, Year: 2017-2019, ongoing (INR 2,50,000).",
    "Title: Classical Algebraic K-theory and algebraic groups, Funding: D.S.T. Indo-Russian project no. INT/RUS/RFBR/P-138, Role: Member, Year: 2013-2015, completed (INR 22,65,000)."
];

let aparna_research = [
    "UGC minor project (completed in 2016) – “Study of various graph parameters under graph products” (Rs. 1,50,000/-).",
    "KSCSTE Major project (completed in 2019) – “Problems related to Applications of graph theory to Networks” (Rs.11,80,000/-)."
];

/*Editorial Board Member */
let aparna_board = [
    "For Contemporary Studies in Discrete Mathematics.",
];

let ambat_board = [
    "Member, Editorial Board,  NBHM - RMS Mathematics News Letter (1999-2007).",
    "Member, Editorial Board, Resonance, Indian Academy of Sciences(2007-  2011).",
    "Member, Editorial Board, TEJUS- News Letter of CUSAT (2001-2015)",
    "Member, Editorial Board, ANANTHATHA- A Mathematics Magazine in Malayalam.", 
    "Consultant, Ananthathe Arinja Aal , Malayalam translation of ‘The Man Who Knew Infinity’, by Robert Kanigal, published by Kerala Language Institute.August 2013."
];

let link = {
    ambat: [null, null, "https://scholar.google.co.in/citations?user=ei-GTVQAAAAJ&hl=en"],
    romeo: [null, null, null],
    sasi: [null, null, null],
    shery: [null, null, "https://scholar.google.com/citations?user=y5PD2qgAAAAJ&hl=en"],
    ambily: [null, "https://www.scopus.com/authid/detail.uri?authorId=55464037100", "https://scholar.google.com/citations?user=d3oabqUAAAAJ&hl=en&oi=ao"],
    aparna :["https://publons.com/dashboard/summary/", "https://www.scopus.com/authid/detail.uri?authorId=55310792000", "https://scholar.google.com/citations?view_op=list_works&hl=en&user=ApsNUl0AAAAJ&gmla=AJsN-F6tQ-kBuj3lOsmSOUv_C-xsJCMACZWtxGTn50xkesLAOlRzGhDDhihF3DT2UOTdPvV9tvtHsVmW1qFwT5OSFEXfFU6wZ5wEkOjuaHdP6TBWV4rUMXU"],
    noufal: [null, null, null],
    shankar: [null, null, "https://scholar.google.com/citations?user=z6mlrdYAAAAJ&hl=en"],
    tanu: [null, null, null],
    tatha: [null, null, null],
    kiran: [null, null, "https://scholar.google.co.in/citations?hl=en&view_op=list_works&gmla=AJsN-F5GoUKrHv6VTDHVL4RPgYwcw2dezBTHgctDZ7ZsNw5VzVYkvF6pcj2RZh2WxEqgM8LpQhDbMZCaiVYMh1GyhcZBjpxn9Q&user=chCK9y4AAAAJ"]
}

export let data = [
    {links: link.romeo, edu: [], mem:[], talks: [],  pub : [], conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.sasi, edu: [], mem:[], talks: [], pub : [], conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.ambat, edu: ambat_quali, mem: ambat_membership, talks: ambat_invited,  pub : ambat_articles, conf: [], phd: aparna_phd, proj:[], board: ambat_board},
    {links: link.shery, edu: [], mem:[], talks: [], pub : shery_articles, conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.ambily, edu: ambily_quali, mem: [], pub : ambily_articles, phd: ambily_phd, proj:ambily_research, conf: ambily_conference, talks: ambily_invited,  board: []},
    {links: link.aparna, edu: aparna_quali, mem: aparna_membership, pub: aparna_articles, phd: aparna_phd, proj: aparna_research, conf: aparna_conference, talks: aparna_invited,  board: aparna_board},
    {links: link.kiran, edu: kiran_quali, mem:[], talks: [], pub : kiran_articles,  conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.noufal, edu: noufal_quali, mem:[], pub: [], talks: noufal_invited,  conf: noufal_conference, phd: aparna_phd, proj:[],  board: []},
    {links: link.shankar, edu: shankar_quali, mem: [], talks: shankar_invited, pub : shankar_articles,  conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.tanu, edu: [], mem:[], talks: [], pub : [], conf: [], phd: aparna_phd, proj:[], board: []},
    {links: link.tatha, edu: [], mem:[], talks: [], pub : tatha_articles, conf: [], phd: aparna_phd, proj:[], board: []},
];




