import { useState } from "react";
import json from "../utils/file.json";

const FolderFileExplorere = () => {
  const [isOpen, setIsOpen] = useState({});
  
  const List = ({ list }) => {
    return (
      <div className="pl-2 cursor-pointer">
        {list.map((node) => (
          <div key={node.id} >
            {node?.isFolder && <span onClick={() => setIsOpen((prev)=>({...prev, [node?.name]:!prev[node.name] }))}>{isOpen?.[node.name] ? '-' :'+' }</span>}
            <span>{node.name}</span>
            {isOpen?.[node.name] && node?.children && <List list={node.children} />}
          </div>
        ))}
        {console.log(isOpen)}
      </div>
    );
  };
  return (
    <div>
      <h1>File Folder Explorer</h1>
      <List list={json} />
    </div>
  );
};

export default FolderFileExplorere;
