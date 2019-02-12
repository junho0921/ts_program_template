import React, { Component } from 'react';
import less from './main.less';
import SplitLine from '../SplitLine/index';

interface Props {
    children: any;
}

class ControlWrap extends Component<Props, any> {
    render() {
        return (
            <div className={less.controlWrap}>
                <SplitLine>
                    <h2>模板名称</h2>
                    <h2>操作</h2>
                </SplitLine>
                {this.props.children}
            </div>
        )
    }
}

export default ControlWrap;
