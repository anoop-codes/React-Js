import React from 'react';
import { useState } from 'react';

const intialValue = {
    firstName: '',
    lastName: '',
    isSubscribe: false
}

const HooksCounterEx3 = () => {

    const [name, setName] = useState(intialValue);

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="firstname">firstName:</label>
                    <input type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter email"
                        value={name.firstName}
                        name="firstName"
                        onChange={(e) => setName({ ...name, firstName: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">lastName:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Password"
                        name="lastName"
                        value={name.lastName}
                        onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox"
                        className="form-check-input" id="exampleCheck1"
                        checked={name.isSubscribe}
                        onChange={(e) => setName({ ...name, isSubscribe: !name.isSubscribe })}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <ul>
                <li>firstName: {name.firstName}</li>
                <li>lastName : {name.lastName}</li>
                <li>isSubscribe : {name.isSubscribe ? 'true' : 'false'}</li>
            </ul>
        </>
    );
}

export default HooksCounterEx3;