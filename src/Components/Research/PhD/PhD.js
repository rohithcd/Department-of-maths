import Table from "../../Reusable/Table/Table";
import Title from "../../Reusable/Title/Title";

const PhD = () => {
    return (
        <>
            <Title head="PhD Awarded" />
            <Table heading={["Sl.no", "Name of Scholar PhD Scholar", "Name of the guide/s", "Title of Thesis", "Year of award of PhD"]}
                rest={phd_awarded}/>
        </>
    );
}

export default PhD;

let phd_awarded = [
    ["Lakshmy V P","Dr.T.Thrivikraman","A Study of Fractal Dimensions in Fuzzy Contexts",2016],
    ["Viji .M","Dr.R S Chakravarti","TOPICS IN INCIDENCE ALGEBRAS",2016],
    ["Jaya Rajesh","Dr. B. Lakshmy","Queues with Interruption in Random/Markovian Environment",2016],
    ["Resmi T","Dr. B. Lakshmy","On Multi-server queues with consultation by main server",2016],
    ["Dhanya Shajin","Dr. B. Lakshmy","On Queueing-inventory models-products from solution; reservation, cancellation and common life time",2016],
    ["Pravas. K.","Prof. A. Vijayakumar","Studies on the Root Graphs of Some Graph Operators",2017],
    ["Manjunath A S","Dr. A Krishnamoorthy","Analysis of Some Priority Queues and A Problem on Diagnostics",2017],
    ["Seethu Varghese","A Vijayakumar","Studies on the Power Domination Problem in Graphs",2017],
    ["Savitha K.S","Prof. A. Vijayakumar","Studies on the Network Topological Properties of Some Graph Classes",2018],
    ["Ms. Akhila R.","Prof. P.G. Romeo","Study on Regular Rings – A Biordered Set Approach",2019],
    ["Mr.Satheesh Kumar S","Prof. M N Narayanan Namboodiri","Discrete Spectrum of non-selfadjoint Schaoödinger operators and An application to Ocean Acoustics",2019],
    ["Ms. Binitha Benny","Prof. A Krishnamoorthy","Analysis of Queueing - Inventory Systems-with Several Modes of service; reservation, cancellation and Common Life Time; of the GIMI1 Type (Two Commodity) and an Inventary Problems Associated with Crowdsourcing",2019],
    ["Vinitha T","Prof. T.P. Johnson","A study on Lattice of Open Sets",2019],
    ["Nishamol P.A","Dr. D.D. Ebenezer","Exact series model of transducers with a stack of solid or hollow axially polarized piezoelectric and elastic cylinders",2019],
    ["Sreejamol P.R.","Dr. P.G. Romeo","A Study on Cross-Connections of Regular Rings",2019],
    ["Tijo James","Prof. A. Vijayakumar","STUDIES ON THE DOMINATION GAME IN GRAPHS",2019],
    ["Susan Mathew Panakkal","Dr. M Jathavedan","A GEOMETRIC APPROACH TO FLUID DYNAMICS IN A SPACE TIME MANIFOLD",2019],
    ["Divya V","Prof. A. Krishnamoorthy","ANALYSIS OF QUEUEING MODELS WITH WORKING VACATIONS, WORKING INTERRUPTIONS AND ON QUEUEING MODELS WITH PROCESSING OF ITEMS FOR SERVICE",2020],
    ["Anu Varghese","Prof. A. Vijayakumar","STUDIES ON THE SPECTRA  AND ENERGY OF ADJACENCY AND  DISTANCE MATRICES OF GRAPH",2020],
    ["Elizabeth Reshma M.T","Prof. T.P.Johnson","A STUDY ON CONVERGENCE IN FRAMES AND SINGLY GENERATED FRAME EXTENSIONS",2020],
    ["Rahul Rajan","Dr. V. B. Kiran Kumar","Korovkin-type Approximation on Some Concrete and Abstract Spaces",2020],
    ["Lejo J Mananavalan","Prof. P.G. Romeo","A STUDY ON THE STRUCTURE OF SEMIGROUPS CONSTRUCTED FROM FUNCTIONS",2021],
].reverse();

