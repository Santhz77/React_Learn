//import React, { Component } from 'react'
const TableHeader = () => {
    return (<thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>)
}

const TableBody = (props) => {
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>

            </tr>
        )

    })
    return <tbody>{rows}</tbody>
}

const Table = (props) =>{
    const { characterData, removeCharacter } = props
    return (
        <table>
          <TableHeader />
          <TableBody data={characterData} removeCharacter={removeCharacter} />
        </table>
      )
}

// class Table extends Component {
//     render() {
        
//         const { characterData, removeCharacter } = this.props

//         return (
//             <div className="container">
//                 <table >
//                     <TableHeader />
//                     <TableBody data={characterData} removeCharacter={removeCharacter} />
//                 </table>
//             </div>
//         )
//     }
// }
export default Table