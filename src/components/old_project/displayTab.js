import React from "react";

function Tab({arr}) {
    return (
        <div>
            {arr.map((task, index) =>
                <center key={index}>
                    <div className="mt-3">{task}</div>
                    <button className="btn btn-danger" key={index - 1} onClick={(e) => {
                        (arr.filter((ev) => ev !== task))
                    }}>delete
                    </button>
                </center>
            )})}
        </div>
    );
}
export default Tab;