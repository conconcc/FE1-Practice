import React from "react";

function Table({colums,data}){
    return (
        <table>
            <thead>
                <tr>
                    {colums.map((colums) =>(
                        <th key={colums}>{colums}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(({name,age,gender})=>(
                    <tr key={name+age+gender}>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table;