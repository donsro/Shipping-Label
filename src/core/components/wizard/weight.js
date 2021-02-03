import React, { Fragment } from "react";

function Weight({...props}) {
    const { handleChange, weight } = props;
    return (
        <Fragment>
            <h2>Weight</h2>
            <div className="w-50">
            <label className="d-block mb-3">
                Weight (lbs):
                <input
                    type="text"
                    className="form-control"
                    value={weight}
                    onChange={(e) => handleChange(e.target.value)} />
            </label>
            </div>
        </Fragment>
    );
}

export default Weight;
