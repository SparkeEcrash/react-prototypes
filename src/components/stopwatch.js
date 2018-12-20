import React, {Component} from 'react';
import Time from './format_time';


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    start = () => {
        const{start: start, elapsed: elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start) {
            newStart -= elapsed;
        }
        this.setState(
            {
                status: 'running', 
                start: newStart
            });
            setTimeout(this.update,10);
    }

    stop = () => {
        this.setState(
            {
                status: 'stopped'
            }
        )
    }

    update = () => {
        const {status: status, start: start} = this.state;
        if(status === 'running') {
            this.setState({
                elapsed: new Date().getTime() - start
            })
            setTimeout(this.update, 10);
        }
    }

    reset = () => {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }

    render() {
        const{status: status, start: start, elapsed: elapsed} = this.state;

        return (
            <div className="jumbotron">
                <h1 className="my-3"><Time elapsed={elapsed} /></h1>
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;