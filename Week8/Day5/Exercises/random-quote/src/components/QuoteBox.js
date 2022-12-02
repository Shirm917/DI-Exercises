// Seperate the thing into two component, just make this one the layout of the quote box and make app get the quotes and send them here as props

const QuoteBox = (props) => {
    const {randomQuote, randomAuthor, randomColor} = props
    return (
        <section style={{
            color: randomColor
        }}>
            <h1>"{randomQuote}"</h1>
            <p>-{randomAuthor}-</p>
        </section>
    )
}

export default QuoteBox;