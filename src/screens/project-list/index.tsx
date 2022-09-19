import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { splitParams, useDebounce, useMount } from "utils";

const host = process.env.REACT_APP_MOCK_HOST;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 300);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useMount(() => {
    fetch(`${host}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  useEffect(() => {
    fetch(`${host}/projects${splitParams(debounceParam)}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} />
    </div>
  );
};
