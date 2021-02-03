import React, { Fragment } from "react";
import PropTypes from 'prop-types';

Confirm.propTypes = {
    info: PropTypes.object
}

function Confirm({ ...props }) {
    const { info } = props;
    const { from, to, weight, shippingOption } = info;
    const ShippingOption = {
        ground: 1,
        priority: 2
    };
    const shippingRate = 0.4;
    const minWeight = 5;
    const shippingCost = (weight > minWeight ? weight : minWeight) * shippingRate *
        (parseInt(shippingOption) === ShippingOption.ground ? 1 : 1.5);
    return (
        <Fragment>
            <h2>Confirmation</h2>

            <div className="row row-cols-4">
                <div className="col">
                    <h3>Sender</h3>
                    <ul className="list-unstyled">
                        <li>Name: {from.name}</li>
                        <li>Street: {from.street}</li>
                        <li>City: {from.city}</li>
                        <li>State: {from.state}</li>
                        <li>Zip: {from.zip}</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Receiver</h3>
                    <ul className="list-unstyled">
                        <li>Name: {to.name}</li>
                        <li>Street: {to.street}</li>
                        <li>City: {to.city}</li>
                        <li>State: {to.state}</li>
                        <li>Zip: {to.zip}</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Weight</h3>
                    <ul className="list-unstyled">
                        <li>{weight} (lbs). Min weight: {minWeight} (lbs)</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Shipping option</h3>
                    <ul className="list-unstyled">
                        <li>{parseInt(shippingOption) === 1 ? "Ground" : "Priority"}</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Shipping cost</h3>
                    <ul className="list-unstyled">
                        <li>${shippingCost.toFixed(2)}</li>
                    </ul>
                </div>
            </div>











        </Fragment>
    );
}

export default Confirm;
