
import {uniquePersons} from './uniquePersons.js'

export default function List() {
  const listItems = uniquePersons.map(uniquePersons =>
    <li>{uniquePersons.name}  ({uniquePersons.gender}) {"\t\t"} {uniquePersons.age}</li>
  );
  return <ul>{listItems}</ul>;
}

