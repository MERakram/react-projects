import React, {useState} from 'react';

function AddUsers() {
    let [users, Setusers] = useState([]);
    let [textform, Settextform] = useState('');

    function userinput(e) {
        Settextform(e.target.value);

    }

    function subm(e) {
        e.preventDefault();
        Setusers([...users, textform])
        console.log(users);
        Settextform('')
    }


    return (
        <div>
            <form>
                <center>
                    <input type="text" placeholder='username' value={textform} onChange={userinput}/>
                    <input type="password" placeholder='password'/>
                    <button onClick={subm}> submit</button>
                </center>
            </form>

            {users.map((user, index) =>
                <center>
                    <h3>
                        element {index + 1} is {user}
                    </h3>

                    <button onClick={(e) => {
                        Setusers(users.filter((ev) => ev !== user))
                    }}>delete
                    </button>
                </center>
            )}

        </div>

    )

};
export default AddUsers;