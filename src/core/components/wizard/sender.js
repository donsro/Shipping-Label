import React, { Fragment } from "react";
import PropTypes from 'prop-types';

Sender.propTypes = {
    handleChange: PropTypes.func,
    from: PropTypes.object 
}

function Sender({ ...props }) {
    const { handleChange, from } = props;
    return <Fragment>
        <h2>Sender Address</h2>
        <div className="w-50">
            <label className="d-block mb-3">
                Name:
                <input
                    type="text"
                    className="form-control"
                    value={from.name}
                    onChange={(e) => handleChange("name", e.target.value)} />
            </label>
            <label className="d-block mb-3">
                Street:
                <input
                    type="text"
                    className="form-control"
                    value={from.street}
                    onChange={(e) => handleChange("street", e.target.value)} />
            </label>
            <label className="d-block mb-3">
                City:
                <input
                    type="text"
                    className="form-control"
                    value={from.city}
                    onChange={(e) => handleChange("city", e.target.value)} />
            </label>
            <label className="d-inline-block me-3">
                State:
                <input
                    type="text"
                    className="form-control"
                    value={from.state}
                    onChange={(e) => handleChange("state", e.target.value)} />
            </label>
            <label className="d-inline-block">
                Zip:
                <input
                    type="text"
                    className="form-control"
                    value={from.zip}
                    onChange={(e) => handleChange("zip", e.target.value)} />
            </label>
        </div>
    </Fragment>;
}

export default Sender;
