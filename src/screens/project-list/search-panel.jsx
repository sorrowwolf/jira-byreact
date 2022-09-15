import React from "react"
import { useState } from "react"

export const SearchPanel = ({param, setParam}) => {
  const [users, setUsers] = useState([])

  return <form>
    <input type="text" value={param.name} onChange={evt => setParam({
      ...param,
      name: evt.target.value
    })} />
    <select value={param.personId} onChange={evt => setParam({
      ...param,
      personId: evt.target.personId
    })}>
      <option value=''>负责人</option>
      {
        users.map(user => <option value={user.id}>{user.name}</option>)
      }
    </select>
  </form>
}