import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{

    commentObj=[{ author: 'Sam', date: 'Today, 6:00PM', text: 'Good Work Man!' }, { author: 'Sam', date: 'Today, 6:00PM', text: 'Good Work Man!' }];

    renderDiv =(obj,index) =>{
        return(
        <div className='container' key={index}>
            <div className='content'>
                <div className='author'>{obj.author}</div>
                <div className='date'>{obj.date}</div>
                <div className='text'>{obj.text}</div>
            </div>
        </div>
        );
    }

    render() {
    return(
        this.commentObj.map(
            (data,index) =>{
                return this.renderDiv(data,index);
            }
        )
    )
}
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);