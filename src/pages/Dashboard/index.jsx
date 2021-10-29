import CardDecks from "../../components/CardDecks";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <CardDecks />
    </Container>
  );
}