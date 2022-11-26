import React from "react";

function Tab({arr}) {
    console.log(arr);
    return (
        <div>
            {arr.map(title => {
                    return <div key={title}>{title}</div>;
                })}
        </div>
    );
}
export default () => {};