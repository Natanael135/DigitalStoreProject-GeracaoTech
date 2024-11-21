const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 220px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.2rem;
`;

const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 10px;
  color: #333;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente de lista de cards
const CardList = ({ items }) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <Card key={item.id}>
          <CardImage src={item.image} alt={item.title} />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardPrice>{item.price}</CardPrice>
            <CardLink href={item.link}>Saiba mais</CardLink>
          </CardBody>
        </Card>
      ))}
    </CardContainer>
  );
};
