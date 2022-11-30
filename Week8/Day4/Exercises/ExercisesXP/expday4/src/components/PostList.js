// Exercise 2
// Create a json file, and copy/paste this data.
// Create a component named PostList.js that displays the title and the content of each object from the json file.
// Render the PostList component in your App.js file.

function PostList() {
    const json = require("../example.json");
    return (
        <>
            <h1>Hi This is a Title</h1>
            {
                json.map(element => {
                    return (
                        <div key={element.id}>
                            <h1>{element.title}</h1>
                            <p>{element.content}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList;