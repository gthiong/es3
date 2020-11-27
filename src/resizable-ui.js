import React, { Component } from 'react';
import { Resizable, ResizableBox } from 'react-resizable';

render() {
    return (
        <ResizableBox width={200} height={200} draggableOpts={{}} minConstrains={[100, 100]} maxConstrains={[300, 300]}>
            <span>Contents</span>
        </ResizableBox>
    );
}

export default resizable-ui;