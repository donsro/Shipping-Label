import React, { Fragment } from "react";
import Sender from "./sender.js";
import Receiver from "./receiver.js";
import Weight from "./weight.js";
import Shipping from "./shipping.js";
import Confirm from "./confirm.js";

function PrevNext({ ...props }) {
    const { isNext, isPrev, onStepChange } = props;
    return <div className="my-5">
        <div className="btn-group">
            <button
                className="btn btn-outline-primary"
                disabled={!isPrev}
                onClick={() => onStepChange(-1)}>Previous</button>
            <button
                className="btn btn-outline-primary"
                disabled={!isNext}
                onClick={() => onStepChange(1)}>Next</button>
        </div>
    </div>
}

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleShipOptionChange = this.handleShipOptionChange.bind(this);
        this.state = {
            step: 0,
            shippingInfo: {
                from: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                to: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                weight: 5,
                shippingOption: 1
            }
        };
    }

    handleStepChange(go = 1) {
        var currentStep = this.state.step;
        const newStep = currentStep + go;
        this.setState({ step: newStep });
    }

    handleFromChange(x, val) {
        this.setState(state => (state.shippingInfo.from[x] = val, state));
    }

    handleToChange(x, val) {
        this.setState(state => (state.shippingInfo.to[x] = val, state));
    }

    handleWeightChange(val) {
        this.setState(state => (state.shippingInfo.weight = val, state));
    }

    handleShipOptionChange(val) {
        this.setState(state => (state.shippingInfo.shippingOption = val, state));
    }

    render() {
        const { from, to, weight, shippingOption } = this.state.shippingInfo;
        const WIZARD_STEPS = [
            <Sender from={from} handleChange={this.handleFromChange} />,
            <Receiver to={to} handleChange={this.handleToChange} />,
            <Weight weight={weight} handleChange={this.handleWeightChange} />,
            <Shipping options={shippingOption} handleChange={this.handleShipOptionChange} />,
            <Confirm info={this.state.shippingInfo} />
        ];
        const step = this.state.step;
        const prevNextProps = {
            isNext: step !== WIZARD_STEPS.length - 1,
            isPrev: step !== 0,
            onStepChange: this.handleStepChange
        }
        return <Fragment>
            {WIZARD_STEPS[step]}
            <PrevNext {...prevNextProps} />
        </Fragment>;
    }
}

export default Wizard;