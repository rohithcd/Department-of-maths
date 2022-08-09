import Title from "../../Reusable/Title/Title";

const Visitors = () => {
    return (
        <>
            <Title head="Workshops/Conferences" />
            <div style={{width: "100%", height: "300px", padding: "20px", lineHeight: "1.4", fontSize: "20px" }}>
                {list.reverse().map((i)=>(
                    <li style={{listStyleType: "circle"}}>{i}</li>
                ))}
            </div>

        </>
    );
};

export default Visitors;

const list = [
    "Research workshop on Analysis (25 - 28 July 2016)",
    "Research workshop on Wavelet & Frames (March 24 - 26, 2018)",
    "Residential Training Camp for the Regional Mathematical Olympiad Awardees in Kerala Region (2017, 2018, 2019)",
    "International conference on semigroups and applications-2019(ICSAA-2019) 9-11 December 2019",
    "International conference on semigroups, algebra and operator theory (ICSAOT-2022). 28-31 March 2022",
];