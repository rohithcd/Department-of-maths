import "./Visitors.css";
import Title from "../../Reusable/Title/Title";
import list from "./VisitorsList";


const Visitors = () => {
    return (
        <>
            <Title head="Visitors" />
            {list.map((item, index) => (
                <div key={index} className="visitors-list">
                    <h3>{item.h3}</h3>
                    <ul>
                        {item.li.reverse().map((i)=>(
                            <li>-> {i}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default Visitors;