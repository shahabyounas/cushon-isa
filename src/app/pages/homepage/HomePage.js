import Card from "../../components/card/Card";
import InvestmentPlanCard from "../../components/card/InvestmentPlanCard";
import Star from "../../components/star/Star";
import Container from "../../components/container";
import { Outlet } from "react-router-dom";

function HomePage() {
  const cards = [
    {
      title: "Independent Investment Account",
      description:
        "Become an independent Investor with our retail investment plans",
      icon: <Star />,
      detailsPath: "/independent-isa-detail",
    },
    {
      title: "Individual Saving Account",
      description: "Be the part of amazing investment plan with your employer",
      icon: null,
      detailsPath: "#",
    },
    {
      title: "Pension Scheme",
      description: "Be the part of amazing pension scheme with your employer",
      icon: null,
      detailsPath: "#",
    }
  ];
  return (
    <Container>
      {cards.map((card) => {
        return (
          <Card key={card.title}>
            <InvestmentPlanCard {...card} />
          </Card>
        );
      })}
      <Outlet />
    </Container>
  );
}

export default HomePage;
