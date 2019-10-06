import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={"Sam"}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={"Alex"}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={"Jane"}/>
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
