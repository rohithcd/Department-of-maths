import Title from "../Reusable/Title/Title";
import {batch_1, batch_2, batch_3, batch_4, batch_5} from "./Names";
import './Alumni.css';



const Alumni = () => {
    let arr1 = batch_1.map(item => <li>{item}</li>);
    let arr2 = batch_2.map(item => <li>{item}</li>);
    let arr3 = batch_3.map(item => <li>{item}</li>);
    let arr4 = batch_4.map(item => <li>{item}</li>);
    let arr5 = batch_5.map(item => <li>{item}</li>);
    return(
        <>
            <Title head="Alumni"/>
            <div className="section_alumni">
               <div className="alumni-div">
                   <h3>1970s</h3>
                    <ol>
                        {arr1}
                    </ol>

                    <h3>1980s</h3>
                    <ol>
                        {arr2}
                    </ol>

                    <h3>1990s</h3>
                    <ol>
                        {arr3}
                    </ol>

                    <h3>2000s</h3>
                    <ol>
                        {arr4}
                    </ol>

                    <h3>2010s</h3>
                    <ol>
                        {arr5}
                    </ol>
               </div>
            </div>
        </>
    );
}

export default Alumni;