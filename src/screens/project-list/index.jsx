import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from './list'
import { useEffect, useState } from "react"

const host = process.env.MOCK_HOST
console.log(process.env.MOCK_HOST)

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${host}/users`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  return <div>
    <SearchPanel param={param} setParam={setParam} />
    <List list={list} />
  </div>
}