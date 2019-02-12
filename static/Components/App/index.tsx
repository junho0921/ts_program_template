import React, { PureComponent } from 'react';
import StoryController from '../StoryController/index';
import EmptyWrap from '../EmptyWrap/index';

class App extends PureComponent<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({
            value
        });
    }

    render() {
        const { value } = this.state;

        return (
            <div>
                <StoryController />
            </div>
        );
    }
}

export default App;
