import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const GameLayout = (props) => {
    const {superheroesArr, shuffleAndGetScore, score, topScore} = props;
    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container>
                <Navbar.Brand>Superheroes Memory Game</Navbar.Brand>
                <Nav className="mr-auto">
                    <Navbar.Text className="navbarText">Score: {score}</Navbar.Text>
                    <Navbar.Text>Top Score: {topScore}</Navbar.Text>
                </Nav>
                </Container>
            </Navbar>
            <p className="instructions">Get points by clicking on an image but don't click on any more than once!</p>
            <section className="cardsContainer">
                {
                    superheroesArr.map(element => {
                        return (
                            <div key={element.id} onClick={() => shuffleAndGetScore(element)} id={element.id} className="cards">
                                <img src={element.image} alt={element.name} />
                                <p><span>Name:</span> {element.name}</p>
                                <p><span>Occupation:</span> {element.occupation}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default GameLayout;