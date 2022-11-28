// Exercise 4
// Instructions
// PART I:

// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.

// PART II:

// Add the below object to the component Exercise4. Use this object to style the <h1>.
// What I did before style={{ color: "red",
// backgroundColor: "lightblue"}}
import "./Exercise4.css"
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function Exercise4() {
    return (
        <div>
            <h1 style={style_header}>
            This is a Header
            </h1>
            <p className="para">This is a Paragraph</p>
            <a href="#">This is a Link</a>
            <form>
                <label for="name">Enter your name:</label><br/>
                <input type="text" id="name"/>
                <input type="submit" value="Submit"/>
            </form>
            <h3>Here is an Image:</h3>
            <img src="https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1.png"/>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}

export default Exercise4;

// PART III:

// Create a new css file named Exercise4.css and import it in your Exercise4 component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }