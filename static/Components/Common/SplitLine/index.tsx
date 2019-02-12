import React, { Component } from 'react';
import less from './main.less';

interface Props {
    children: Array<JSX.Element>;
}

class SplitLine extends Component<Props, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={less.splitLine}>
                {this.props.children}
            </div>
        )
    }
}

export default SplitLine;
