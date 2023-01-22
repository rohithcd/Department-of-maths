import Title from "../../Reusable/Title/Title";
import './TrainingPrograms.css';

const TrainingPrograms = () => {
    return (
        <>
            <Title head="Training Programs / Workshops/Conferences"/>
            <div className="training-programs">
                <h3>Research Workshop on Analysis</h3>
                <h6>Coordinator: Dr. V B Kiran Kumar & Dr.Noufal A, Assistant Professor, Department of Mathematics, Cochin University of Science and Technology (CUSAT), Cochin, Kerala. 25-28 July, 2016</h6>

                <h3>International Workshop on Leavitt Path Algebras and K-Theory</h3>
                <h6>Co-ordinator - Dr. Ambily A A, Assistant Professor, Department of Mathematics, Cochin University of Science and Technology (CUSAT), Cochin, Kerala. 1-3 July, 2017</h6>

                <h3>Indian Women and Mathematics (IWM)-Regional Workshop on Research and Opportunities in Kerala</h3>
                <h6>Co-ordinator -Dr. Ambily A A, Assistant Professor, Department of Mathematics, Cochin University of Science and Technology (CUSAT), Cochin, Kerala. January 2-3, 2018</h6>

                <h3>Research Workshop on Wavelets and Frames</h3>
                <h6>Co-ordinator - Dr.VB Kiran Kumar & Dr. A Noufal, Assistant Professor, Department of Mathematics, Cochin University of Science and Technology (CUSAT), Cochin, Kerala. 24-26 March, 2018</h6>

                <h3>Workshop on Differential Equations,</h3>
                <h6>Co-ordinator- Dr. Ambily A A, Assistant Professor, Department of Mathematics, Cochin University of Science and Technology (CUSAT), Cochin, Kerala. 09 March, 2019</h6>

                <h3>Other than these the department also organizes Residential Training Camp for RMO Awardees and coordinated skill development programme for SC/ST stuents of Kochi corporation every year .</h3>


                {
                    list.map((item) => (<li>{item}</li>))
                }

            </div>
        </>
    );

}

const list = [
    "Research workshop on Analysis (25 - 28 July 2016)",
    "Research workshop on Wavelet & Frames (March 24 - 26, 2018)",
    "Residential Training Camp for the Regional Mathematical Olympiad Awardees in Kerala Region (2017, 2018, 2019)",
    "International conference on semigroups and applications-2019(ICSAA-2019) 9-11 December 2019",
    "International conference on semigroups, algebra and operator theory (ICSAOT-2022). 28-31 March 2022",
];

export default TrainingPrograms;