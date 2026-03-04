import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// const H1 = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: yellow;
// `;
// const Button = styled.button`
//   background-color: var(--color-brand-600);
//   color: var(--color-brand-50);
//   padding: 1.2rem 1.6rem;
//   border: none;
//   box-shadow: var(--shadow-sm);
//   border-radius: var(--border-radius-sm);
//   cursor: pointer;
//   font-size: 1.4rem;
//   font-weight: 500;
// `;

// const Input = styled.input`
//   padding: 0.8rem 1.2rem;
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   font-size: 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

const StyledApp = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; */

  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis 1</Heading>
            <div>
              <Heading as="h2">The Wild Oasis 2</Heading>
              <Button onClick={() => alert("You Check in")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("You Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">The Wild Oasis</Heading>
            <form>
              <Input type="number" placeholder="Enter number of guests" />
              <Input type="number" placeholder="Enter number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
Row.defaultProps = {
  type: "vertical",
};
export default App;
