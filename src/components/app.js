
import React, {Component} from 'react';
import Stopwatch from './stopwatch';

class App extends Component {



    render() {
        return(
            <div className="container">
                <h1 className="text-center">Stopwatch</h1>
                <Stopwatch />
            </div>
        )
    }

}

export default App;