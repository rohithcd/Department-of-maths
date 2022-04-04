import "./Table.css";

const Table = ({title, heading, rest, view}) => {
    let body = [], head =[], arr2 = [];

    for(let i=0; i<heading.length; i++)
    {
        head.push(<td>{heading[i]}</td>);
    }

    for(let i=0; i<rest.length; i++)
    {
        arr2.splice(0, arr2.length);
        for(let j=0; j<heading.length; j++)
        {
            arr2.push(<td>{rest[i][j]}</td>);
        }
        body.push(<tr>{arr2.map(item => item)}</tr>);
    }

    return(
        <>
            <div style={{overflowX: "auto"}}>
                <h2>{title}</h2>
                <table className="content-table">
                    <thead>
                        <tr>
                            {head}
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;