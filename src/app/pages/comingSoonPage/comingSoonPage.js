import Container from "../../components/container";
function ComingSoonPage(props) {
  return (
    <Container>
      <h1> {props.name.toUpperCase()} page Coming Soon... </h1>
      <h5> {props.name} page is in progress </h5>
    </Container>
  );
}

export default ComingSoonPage;
