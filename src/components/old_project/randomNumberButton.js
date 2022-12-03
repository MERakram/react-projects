import {useState} from 'react';

const RandomButton = (props) => {
    const [num, setNum] = useState(0);
    const max = props.maxNum;

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 10));
    };

    return (
        <center>
            <div>
                <h1>number is: {num}</h1>
                <button onClick={handleClick} style={{
                    height: 200,
                    width: 300,
                    borderRadius: 10,
                    backgroundColor: "teal",
                    fontSize: 32
                }}>Generate random number
                </button>
                <h1>{num === max ? 'you win' : 'you lose try again'}</h1>
            </div>
        </center>
    );
};

export default RandomButton;

