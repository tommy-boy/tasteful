import React from "react";

const test = () => {
  const Traverse = (elem, callback) => {
    callback(elem);
    let list = elem.children;
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
      Traverse(list[i], callback);
    }
  };

  const handleCheck = e => {
    console.log(e.target.value);
    alert(e.target.value);
  };

  return (
    <div>
      <h1 id="target"></h1>

      <span>hello</span>
      <ul>
        <li onClick={handleCheck} id="1">
          hello
        </li>
        <li onClick={handleCheck}>goodbye</li>
        <li onClick={Traverse}>traverse</li>
      </ul>
    </div>
  );
};

export default test;
