import React from "react"

export const List = ({list}) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>组织</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(item =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.organization}</td>
          </tr>
        )
      }
    </tbody>
  </table>
}