import Title from "../../Reusable/Title/Title";
import Table from "../../Reusable/Table/Table";
import Heading from "../../Reusable/Head/Heading";

const RetiredFaculty 
= () => {
    return (
        <>
            <Title head="Retired Faculty" />

            <Table heading={["Sl.no", "Name of Faculty"]}
                rest={retiredFaculty}/>

            <Heading name="Retired HODs"/>
            <Table heading={["Sl.no", "Name of HOD", "Year"]}
                rest={retiredHOD}/>

        </>
    );
};

export default RetiredFaculty;

const retiredHOD =  [
    ["Dr. R. N. Pillai (c)", "1976 - 1977, 1982 - 1982"],
    ["Prof. Wazir Hasan Abdi", "1977 - 1982"],
    ["Prof. T. Thrivikraman", "1982 - 1989, 1990 - 1993, 1997 - 2001"],
    ["Prof. A. Krishnamoorthy", "1989 - 1990, 1992 - 1997, 2007 - 2008"],
    ["Prof. A. Vijayakumar", "2016 - 2017"],
    ["Prof. M. Jathavedan", "2004 - 2007"],
    ["Prof. B. Lakshmy", "2011 - 2013"],
    ["Prof. P. G. Romeo", "2013 - 2016, 2017 - 2018, 2019 - 2021"],
];

const retiredFaculty = [
    ["Dr. T. Thrivikraman", ""],
    ["Dr. A. Krishnamoorthy", ""],
    ["Dr. R.S. Chakravarthy", ""],
    ["Dr. M. Jathavedan", ""],
    ["Dr. M.K Ganapathy", ""],
    ["Dr. M.N.N Namboothiri", ""],
    ["Dr. A Vijayakumar", ""],
    ["Dr. B. Lakshmy", ""],
    ["Dr. N. Unnikrishnan", ""],
    ["Dr. V.K. Ramachandran", ""],
    ["Dr. Babu Sunder", ""],
    ["Dr. K.R. Muraleedharan Nair", ""],
    ["Dr. Jacob Zachariah", ""],
    ["Dr. N. Balakrishnan", ""],
    ["Dr. R. N. Pillai", ""],
    ["Dr. Wazir Hasan Abdi", ""],
    ["Dr. N. Ramanujan", ""],
    ["Dr. N. Ramachandran Kaimal", ""],
    ["Prof. Rajeshwary Thampuran", ""]
];