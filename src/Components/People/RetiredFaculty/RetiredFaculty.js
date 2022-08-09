import Title from "../../Reusable/Title/Title";
import Table from "../../Reusable/Table/Table";

const RetiredFaculty 
= () => {
    return (
        <>
            <Title head="Retired Faculty" />
            <Table heading={["Sl.no", "Name of Faculty/s", "Year"]}
                rest={retiredFaculty}/>

        </>
    );
};

export default RetiredFaculty;

const retiredFaculty =  [
    ["Dr. R. N. Pillai (c)", "1976 - 1977, 1982 - 1982"],
    ["Prof. Wazir Hasan Abdi", "1977 - 1982"],
    ["Prof. T. Thrivikraman", "1982 - 1989, 1990 - 1993, 1997 - 2001"],
    ["Prof. A. Krishnamoorthy", "1989 - 1990, 1992 - 1997, 2007 - 2008"],
    ["Prof. A. Vijayakumar", "2016 - 2017"],
    ["Prof. M. Jathavedan", "2004 - 2007"],
    ["Prof. B. Lakshmy", "2011 - 2013"],
    ["Prof. P. G. Romeo", "2013 - 2016, 2017 - 2018, 2019 - 2021"],
];