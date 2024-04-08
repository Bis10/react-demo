const Counter = (props) => {
    return ( 
        <div>
<p>Counter: {props.counterP}</p>
    <button onClick = {props.clickHandlerAdd}>Add me </button>
    <button onClick = {props.clickHandlerSub}>Subtract me</button>
    <button onClick = {props.clickHandlerReset}>Reset me</button>

        </div>
     );
};

 
export default Counter;