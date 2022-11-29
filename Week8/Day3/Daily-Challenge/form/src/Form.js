const Form = (props) => {
    const {handleChange} = props;
    return (
        <>
            <form onChange={handleChange}>
                <input type="text" name="fname" placeholder="First Name" /><br/>
                <input type="text" name="lname" placeholder="Last Name" /><br/>
                <input type="text" name="age" placeholder="Age" /><br/>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <br/>
                <select name="country">
                    <option value="choose"> -- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <br/>
                <p>Dietary restrictions:</p>
                <input type="checkbox" name="dietNf" />Nuts free
                <input type="checkbox" name="dietLf" />Lactose free
                <input type="checkbox" name="dietV" />Vegan
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </>

    )
}

export default Form;