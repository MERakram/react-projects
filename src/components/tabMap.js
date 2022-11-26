import React from "react";

export default class TabMap extends React.Component {
    render() {
        function removeItem(element) {
            tab.splice(element,1)
            console.log(tab)
        }
        let tab = ["hello", "world", "from",].map((e, i) => <li onClick={()=>{removeItem(e)}}  key={i + 1}>Element {i + 1} in
            tab: {e}</li>);
        return (
            <div>
                <ul>
                    {tab}
                </ul>
            </div>
        )
    }
}