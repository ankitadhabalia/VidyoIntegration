import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const wrapperStyle = { width: 400, margin: 50 };

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
}
class CarSlider extends Component {

    render() {

        return (
            <div>
                <div style={wrapperStyle}>
                    <p>Slider with custom handle</p>
                    <Slider min={100} max={2500} defaultValue={3} handle={handle} />
                </div>
                <div style={wrapperStyle}>
                    <p>Range with custom handle</p>
                    <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                </div>
            </div>
        );
    }
}
export default CarSlider;