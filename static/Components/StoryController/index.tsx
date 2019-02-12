import React, { PureComponent } from 'react';
import SplitLine from '../Common/SplitLine/index';
import ControlWrap from '../Common/ControlWrap/index';
import api from '../../api/index';

class StoryController extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);

        console.log('api', api);
    }

    handleChange(event, value) {
        this.setState({
            value
        });
    }

    render() {
        return (
            <ControlWrap>
                <SplitLine>
                    <h2>213</h2>
                    <div>
                        <button>fix</button>
                        <button>pre</button>
                    </div>
                </SplitLine>
            </ControlWrap>
        );
    }
}

export default StoryController;
