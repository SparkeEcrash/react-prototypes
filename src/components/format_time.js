import React, {Component} from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        };
        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '210px'
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const{elapsed: elapsed} = nextProps;
        const sec = elapsed/1000;
        const min = sec/60;
        this.setState({
            hour: Math.floor(min /60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        })

    }

    leadingZero = (number) => {

        return number < 10 ? `0${number}`: number;

        // if(number < 10) {
        //     return '0'+number;
        // } else {
        //     return number;
        // }
    }

    trailingZero = (number) => {
        return number < 10 ? `${number}0`: number;
    }

    render() {

        let{hour:hour, min:min, sec:sec, ms:ms} = this.state;

        hour = this.leadingZero(hour);
        min = this.leadingZero(min);
        sec = this.leadingZero(sec);
        ms = this.trailingZero(ms);

        return(
            <div style={this.timerStyle}>{hour}:{min}:{sec}.{ms}</div>
        )
    }
}

export default FormatTime;