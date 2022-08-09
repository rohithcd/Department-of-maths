import Title from "../../Reusable/Title/Title";
import Table from "../../Reusable/Table/Table";

const ResearchAwarded 
= () => {
    return (
        <>
            <Title head="Research Awarded" />
            <Table heading={["Sl.no", "Name of Recipient", "Name of Fellowship/ Honour /Award", "Awarding Agency"]}
                rest={retiredAwarded}/>

        </>
    );
};

export default ResearchAwarded;

const retiredAwarded =  [
    ["Athira Babu",	"KCSTE best paper award",	"KCSTE"],
    ["Akhila N S", "Chief Ministers Student Excellence Award 2021", "Kerala State"],
    ["Alida Mariya Kurian", "Chief Ministers Student Excellence Award 2021", "Kerala State"],
    ["Megha Kundathil", "Chief Ministers Student Excellence Award 2021", "Kerala State"],
    ["Vishnu K S", "Got admission to higher studies in foreign universities", ""],
    ["Reshma G Krishna",  "Got admission to higher studies in foreign universities", ""],
    ["Anusree J S ",  "Got admission to higher studies in foreign universities", ""],
    ["Sana K",  "Got admission to higher studies in foreign universities", ""]

];