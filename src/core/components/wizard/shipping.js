import React, { Fragment } from "react";

function Shipping({ ...props }) {
    const { handleChange, options } = props;
    return (
        <Fragment>
            <h2>Shipping Options</h2>
            <div className="w-50">
                <label className="d-block mb-3">
                    Options:
                    <select
                        value={options}
                        className="form-control"
                        onChange={(e) => handleChange(e.target.value)}>
                        <option value={1}>Ground</option>
                        <option value={2}>Priority</option>
                    </select>
                </label>
            </div>
        </Fragment>
    );
}

export default Shipping;
