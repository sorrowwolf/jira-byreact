import React from "react";

interface project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
interface ListParmas {
  list: project[];
}

export const List = ({ list }: ListParmas) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>组织</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.organization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
