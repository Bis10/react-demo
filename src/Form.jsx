
const Form = (props) =>{
    return (
        <form>
        <h2>Form</h2>
<input type="text" onChange={props.changeHandler} />
</form>
    );
};
export default Form;