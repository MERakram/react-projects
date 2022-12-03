import React, {useState} from 'react';

function List(props) {
    let [tab, SetTab] = useState(['hello', 'word', 'from', 'react']);


    return (
        <div>
            {tab.map((element, index) =>
                <center>
                    <li>
                        <ul onClick={(e) => {
                            SetTab(tab.filter((ev) => ev !== element))
                        }}>element {index + 1} is {element}</ul>
                    </li>
                </center>
            )}
        </div>
    )
}

export default List;