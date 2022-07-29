import Table from "../../Reusable/Table/Table";
import Title from "../../Reusable/Title/Title";

const Achievements = () => {
    return (
        <>
            <Title head="Achievements" />
            <Table heading={["Sl.no", "Name of Research fellow", "Year of enrolment", "Duration of fellowship",  "Type of  the fellowship", "Granting agency","Qualifying exam if any (NET, GATE,  etc.)"]}
                rest={stud_achievements}/>
        </>
    );
}

export default Achievements;



let stud_achievements = [
    ["Albin James", "2020", "3 years", "JRF", "CSIR","NET"],
    ["BALASUBRAMANNYAN S", "2020", "3 years", "JRF", "CSIR","NET"],
    ["Sruthi Raghoothaman", "2020", "3 years", "JRF", "CSIR","NET"],
    ["Ajay P Joseph", "2020", "-", "-", "AICTE","GATE"],
    ["Midhuna V. Ajith", "2020", "-", "-", "AICTE","GATE"],
    ["Sugilesh H", "2020", "-", "-", "UGC","NET"],
    ["Albin Mathew", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Anupama K", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Balasubramannyan S", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Gayathry Pradeep", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Greeshma Joseph", "2019", "3 years", "JRF", "KSCSTE",""],
    ["Maria Robert", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Nikhil Manoj", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Nithya Muraleedharan", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Rosna Paul", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Sruthi Raghoothaman", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Veena. V. S.", "2019", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Anjali V A", "2019", "-", "-", "UGC","NET"],
    ["Anmary Tonny", "2019", "-", "-", "UGC","NET"],
    ["Anu Jose", "2019", "-", "-", "UGC","NET"],
    ["Aparna P.G.", "2019", "-", "-", "AICTE","GATE"],
    ["Athulya P", "2019", "-", "-", "UGC","NET"],
    ["Dhanya Roy", "2019", "-", "-", "AICTE","GATE"],
    ["Midhuna V. Ajith", "2019", "-", "-", "UGC","NET"],
    ["Rhea Davis", "2019", "-", "-", "UGC","NET"],
    ["Sandhya R", "2019", "-", "-", "UGC","NET"],
    ["Athul Augustine", "2018", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Jiya Rose Johnson", "2018", "3 years", "JRF", "AICTE & CSIR-UGC","GATE & NET"],
    ["Madhumitha Gopi", "2018", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Najiya V K", "2018", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Sneha K K", "2018", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Sreethu K", "2018", "3 years", "JRF", "CSIR-UGC","NET"],
    ["Abinand M", "2018", "_", "-", "UGC","NET"],
    ["Athira N", "2018", "-", "-", "UGC","NET"],
    ["Chitra Venugopal", "2018", "-", "-", "UGC","NET"],
    ["Judy Augustine", "2018", "-", "-", "UGC","NET"],
    ["Navin Tomy", "2018", "-", "-", "UGC","NET"],
    ["Nicky Caroline S", "2018", "3 years", "JRF", "UGC","NET"],
    ["Shivanand R P", "2018", "-", "-", "UGC","NET"],
    ["Smitha O.", "2018", "-", "-", "UGC","NET"],
    ["Cinderella T.J.", "2017", "3 years", "JRF & GATE", "UGC","NET"],
    ["Aadya D", "2017", "3 years", "JRF", "UGC","NET"],
    ["Akshay P Anil", "2017", "-", "-", "UGC","NET"],
    ["Aparna Pradeep VK", "2017", "3 years", "JRF", "DST-INSPIRE & KSCSTE","-"],
    ["Nandana K Vasudevan", "2017", "3 years", "JRF", "UGC & AICTE","NET & GATE"],
    ["Abraham Sam Varghese", "2017", "3 years", "JRF", "CSIR","NET"],
    ["Job Mathai", "2017", "3 years", "JRF", "CSIR","NET"],
    ["Joseph Nelson P", "2017", "3 years", "JRF", "CSIR","NET"],
    ["Eva Cherian", "2017", "-", "-", "UGC & AICTE","NET & GATE"],
    ["Rachel Paul", "2017", "-", "-", "UGC & AICTE","NET & GATE"],
    ["Midhun S", "2017", "-", "-", "UGC","NET"],
    ["Nitheesha C", "2017", "-", "-", "UGC","NET"],
    ["Rajalekshmi V", "2017", "-", "-", "Govt. of Kerala","SET, KTET"],
    ["Ranjith R", "2017", "-", "-", "UGC","NET"],
    ["Aravind Vishnu S S", "2016", "3 years", "JRF", "UGC","NET"],
    ["Najiya K Z", "2016", "3 years", "JRF", "UGC","NET"],
    ["Rahul Rajan", "2016", "3 years", "JRF", "CSIR","NET"],
    ["Deepthi Mary Tresa", "2016", "-", "-", "UGC","NET"],
    ["Jintumol K.U", "2016", "-", "-", "UGC","NET"],
    ["Linet Roslin Antony", "2016", "-", "-", "UGC","NET"],
    ["Pallavi K", "2016", "-", "-", "UGC, AICTE & Govt, of Karnataka","NET, GATE & KSET"]
    ]