//Dynamically calculates No of Visitors

const visitorsList = [
    {
        id: 1,
        h3: 'Chancellor’s Chair Programme',
        li: [
            'Prof. Bin Han, University of Alberta, Canada in 2018'
        ],
    },
    {
        id: 2,
        h3: 'Erudite Programme – 6',
        li: [
            'Prof. Bong Dae Choi, Distinguished Chair Professor, Dept. of Mathematics, Sung KyuuKwan University, South Korea  01/01/15 to 13/01/15',
            'Prof. John C. Meakin, University of Nebraska, USA  21/09/15 to 30/09/15',
            'Prof.Andreas M. Hinz, LMU Mi.inchen, Munich, Germany  12/03/15 to 22/03/15',
            'Prof.Mikhail Vladimirovich Volkov, Ural Federal University, Ekaterinburg, Russia  29/11/15 to 08/12/15',
            'Prof. WasinSo, San Jose State University, San Jose, California, U.S.A.  28/03/16 to 07 /04/16',
            'Prof. Wolfram Bauer, Professor of Mathematics, Hannover University, Germany  13/02/18 to 24/2/18',
        ]
    },
    {
        id: 3,
        h3: 'Distinguished Visitors - 51',
        li: [
            'Prof. Manoj Kummini, Chennai Mathematical Institute, 24.03.2017',
            'Prof. Jaya N Iyer, The Institute of Mathematical Sciences, Chennai, 23.05.2017',
            'Prof. Sunil Chandran, Indian Institute of Science, Bangalore, 29.05.2017',
            'Dr. R. Venkatesh, Indian Institute of Science, Bangalore 04.07.2017',
            'Prof. Anthony Bak, University of Bielefeld, Germany  1.07.2017',
            'Prof. Roozbeh Hazrat, Western Sydney University, Australia 1.07.2017',
            'Dr. Huanhuan Li, Western Sydney University, Australia 1.07.2017',
            'Dr. Raimund Preusser, University of Brasilia, Brasilia 1.07.2017',
            'Prof. Ramesh Sreekantan, Indian Statistical Institute, India 1.07.2017',
            'Prof. Ravi A. Rao, Tata Institute of Fundamental Research, India 1.07.2017',
            // 'Prof. B. Sury, Indian Statistical Institute, India 1.07.2017',
            'Prof. Inder. K. Rana, I.I.T. Bombay  01.08.2017',
            'Prof. B V Rajarama Bhat, Indian Statistical Institute, Bangalore 27.09.2017',
            'Prof. A.V. Jayanthan, IIT Chennai 13.10.2017',
            'Dr. Neeraj Kumar, IIT Mumbai 13.10.2017',
            'Prof. Kovse Matljaz IIT Bhubaneshwar, 26.10.2017 to 1.11.17',
            'Prof. Mitre Costa Dourado, University Federal do Rio de Janeiro, 29.10.2017',
            'Dr. Sandi Klavzar, University of Ljubljana & University of Maribor, Slovenia 29.10.2017',
            'Prof. V Aravind, The Institute of Mathematical Sciences, Chennai, 29.10.2017 to 1.11.17',
            'Prof. Satyagopal Mandal, University of Kansas, USA 28.12.2017',
            'Prof A.K Jain, Dept of Physics, IIT Rourkela, 21.05.2018',
            'Prof. N.S Narayana Swami, IIT Madras, 08.06.2018',
            'Prof. Tamizh Chelvam, MS University, Tirunelveli, India, 14.11.2017, 28.12.2018',
            'Prof. Wolfram Bauer, Hannover University, Germany 13.02.2018',
            'Prof. V .Krishnakumar, Kerala School Of Mathematics, Kozhikode 07.02.2018',
            'Dr. G .P. Balakumar, IIT Palakkad  09.02.2018',
            'Prof. A.R. Rajan, The State Institute of Encyclopaedic Publications, Trivandrum  21.02.2018',
            'Prof. Vijay Kodiyolam (IMSC) 17.09.2018',
            'Dr. K.R Arun, IISER Thiruvananthapuram, 26.09.2018',
            'Dr. Prosenjith Das, IIST Thiruvananthapuram, 04.10.2018', //clarification on this one
            'Dr. Tiju Cheriyan John, ISI Delhi, 10.10.2018',
            'Prof Bin Han 22.10.2018, 24.20.2018, 13.11.2018',
            'Prof V Kannan, Central University Hyderabad, 07.12.2018',
            'Prof Eva Czabarka, University of South Carolina USA, 12.12.2018',
            'Prof. S.H Kulkarni, IIT Madras, 02.02.2019',
            'Prof Diera Busill-Hall, 04.02.2019',
            'Dr. Sudarshan Kumar K., IIT Guwahati, 09.03.2019',
            'Dr. Lakshmi Sankar K., IIT Palakkad, 09.03.2017',
            'Dr. Mithun Mukherjee, IISER Thiruvananthapuram, 05.04.2019',
            'Prof S. Kesavan, IMSC Chennai, 06.07.2019',
            'Dr. Manju K. Menon, St.Paul\'s College, Kalamassery, 16.03.2019',
            'Dr. Aparna Lakshmanan S, St. Xavier\'s College for Women, Aluva, 16.03.2019',
            'Prof A.R Rajan, 22.07.2019',
            'Dr. Apoorva Khare, IISC Bangalore, 20.09.2019',
            'Dr. Murali Krishnan K., NIT Calicut, 30.03.2019',
            'Dr. Pravas K., KKTM Govt College, Pullut, 30.03.2019',
            'Dr. K. Somasundaram, Amritha Univerity, 25.11.2019',
            'Dr. Narayanan N., IIT Madras, 22.03.2022',
            'Dr. Praphulla Kaushik, IISER Pune, 05.07.2022, 07.07.2022, 08.07.2022',
            'Dr. Kaushik Dhara, Weizmann institute of science, 13.07.2022',
            'Dr. Apoorva Khare, IISc Bangalore, 29.09.2022',
            'Prof. Jayadev Sarkar, ISI Bangalore, 29.09.2022'

        ]
    },
];



/* Data Added on 29/07/2022 */
/*
'Prof A.K Jain, Dept of Physics, IIT Rourkela, 21.05.2018',
'Prof. N.S Narayana Swami, IIT Madras, 08.06.2018',
'Prof Vijay Kodiyolam (IMSC) 17.09.2018',
'Dr K.R Arun, IISER Thiruvananthapuram, 26.09.2018',
'Prof Prosenjith Das, IIST Thiruvananthapuram, 04.10.2018', //clarification on this one
'Tiju Cheriyan John, ISI Delhi, 10.10.2018',
'Prof Bin Han 22.10.2018, 24.20.2018, 13.11.2018',
'Prof V Kannan, Central University Hyderabad, 07.12.2018',
'Prof Eva Czabarka, University of South Carolina USA, 12.12.2018',
'S.H Kulkarni, IIT Madras, 02.02.2019',
'Prof Diera Busill-Hall, 04.02.2019',
'Mithun Mukharjee, IISER Thiruvananthapuram, 05.04.2019',
'Prof S. Kesavan, IMSC Chennai, 06.07.2019',
'Prof A.R Rajan, 22.07.2019',
'Dr. Apoorva Khare, IISC Bangalore, 20.09.2019',
'Dr. K. Somasundaram, Amritha Univerity, 25.11.2019',
'Dr. Narayanan.N, IIT Madras, 22.03.2022',
'Praphulla Kaushik, IISER Pune, 05.07.2022, 07.07.2022, 08.07.2022',
'Dr. Kaushik Dhara, 13.07.2022',
*/
export default visitorsList;