import App from "../App";
import React from "react";
import TestRenderer from "react-test-renderer";

test('counter works correctly', () => {
    
    const tree = TestRenderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot()
})
