import Title from "../../Reusable/Title/Title";
import Table from "../../Reusable/Table/Table";

const ResearchAwarded 
= () => {
    return (
        <>
            <Title head="Research Awards" />

            <Table heading={["Sl.no", "Name of Teacher", "Name of Fellowship/ Honour /Award", "Awarding Agency", "Year"]}
                rest={teacherAwards}/>


            <Table heading={["Sl.no", "Name of Student", "Name of Fellowship/ Honour /Award", "Awarding Agency", "Year"]}
                rest={retiredAwarded}/>


        </>
    );
};

export default ResearchAwarded;

const teacherAwards = [
    ["Dr. V. B. Kiran Kumar", "Kerala State Young Scientist Award", "KCSTE", "2017"],
    ["Dr. V. B. Kiran Kumar", "UGC Start-up Grant", "UGC", "2018"],
    ["Dr. Ambily A A", "SERB Overseas Postdoctoral Fellowship", "SERB", "2018"],
    ["Dr. Ambily A A", "Kerala State Young Scientist Award", "KCSTE", "2020"],
    ["Dr. Shankar P", "Teachers Associateship for Research Excellence", "SERB", "2020"]
].reverse();

const retiredAwarded =  [
    ["Athira Babu",	"KCSTE best paper award",	"KCSTE", "2021"], /*2021 */
    ["Akhila N S", "Chief Ministers Student Excellence Award 2021", "Kerala State", "2021"],
    ["Alida Mariya Kurian", "Chief Ministers Student Excellence Award 2021", "Kerala State", "2021"],
    ["Megha Kundathil", "Chief Ministers Student Excellence Award 2021", "Kerala State", "2021"], /*2021 */
    ["Vishnu K S", "Got admission to higher studies in foreign universities", "", "2020"],
    ["Reshma G Krishna",  "Got admission to higher studies in foreign universities", "", "2020"],
    ["Anusree J S ",  "Got admission to higher studies in foreign universities", "", "2020"],
    ["Sana K",  "Got admission to higher studies in foreign universities", "", "2020"] /**2020 */

];