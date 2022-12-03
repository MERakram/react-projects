import {useState} from 'react';
import React from "react"

const AddDivs = (props) => {
    const [DivsList, setDivsList] = useState([]);
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [color, setColor] = useState("");

    const onAddDivClick = (height, width, color) => {
        setDivsList(DivsList.concat(
            {height, width, color}
        ));
        console.log(DivsList);
    };

    return (
        <div className="">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Add divs</h3>
                        <div className="form-group mt-3">
                            <label>height</label>
                            <input
                                value={height}
                                type="number"
                                className="form-control mt-1"
                                placeholder="Enter height"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>width</label>
                            <input
                                value={width}
                                type="number"
                                className="form-control mt-1"
                                placeholder="Enter width"
                                onChange={(e) => setWidth(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>color</label>
                            <input
                                value={color}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter color"
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" onClick={() => onAddDivClick(height, width, color)}
                                    className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {DivsList.map((div, index) =>
                <center key={index}>
                        <div style={{height: parseInt(div.height), width: parseInt(div.width), backgroundColor: div.color}}/>
                    <button className="btn btn-danger" key={index - 1} onClick={(e) => {
                        setDivsList(DivsList.filter((ev) => ev !== div))
                    }}>delete
                    </button>
                </center>
            )}
        </div>
    )
}

export default AddDivs;

