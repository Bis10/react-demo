const Form = (props) => {
  return (
    <form>
      <h2>Form</h2>
      <div>
        <label htmlFor="fname">First name: </label>
        <input 
        type="text"
         id="fname" 
         onChange={props.changeFormHandler} 
         name="fname"/>
      </div>
      <div>
        <label htmlFor="lname">Last name: </label>
        <input 
        type="text"
         id="lname" 
         onChange={props.changeFormHandler} 
         name="lname" />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input 
        type="number" 
        id ="phone"
        onChange={props.changeFormHandler} 
         name="phone" />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input 
        type="text"
         id="email" 
         onChange={props.changeFormHandler}  
         name="email" />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea 
        id ="message" 
        onChange={props.changeFormHandler}  
        name="message" />
      </div>
    </form>
  );
};
export default Form;
