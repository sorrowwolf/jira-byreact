import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from './list'
import { useEffect, useState } from "react"
import { splitParams } from "utils"

const host = process.env.REACT_APP_MOCK_HOST

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${host}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  useEffect(() => {
    fetch(`${host}/projects${splitParams(param)}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List list={list} />
  </div>
}