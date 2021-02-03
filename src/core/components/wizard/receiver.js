import React, { Fragment } from "react";

function Receiver({ ...props }) {
    const { handleChange, to } = props;
    return <Fragment>
        <h2>Receiver Address</h2>
        <div className="w-50">
            <label className="d-block mb-3">
                Name:
                <input
                    type="text"
                    className="form-control"
                    value={to.name}
                    onChange={(e) => handleChange("name", e.target.value)} />
            </label>
            <label className="d-block mb-3">
                Street:
                <input
                    type="text"
                    className="form-control"
                    value={to.street}
                    onChange={(e) => handleChange("street", e.target.value)} />
            </label>
            <label className="d-block mb-3">
                City:
                <input
                    type="text"
                    className="form-control"
                    value={to.city}
                    onChange={(e) => handleChange("city", e.target.value)} />
            </label>
            <label className="d-inline-block me-3">
                State:
                <input
                    type="text"
                    className="form-control"
                    value={to.state}
                    onChange={(e) => handleChange("state", e.target.value)} />
            </label>
            <label className="d-inline-block">
                Zip:
                <input
                    type="text"
                    className="form-control"
                    value={to.zip}
                    onChange={(e) => handleChange("zip", e.target.value)} />
            </label>
        </div>
    </Fragment>;
}

export default Receiver;
