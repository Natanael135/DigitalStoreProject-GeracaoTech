import { Link } from "react-router-dom";


const HomePage = () => {
  return ( 
  <>
    <h1>conteudo principal</h1>
    <Link to="/ListaProdutos">Produtos</Link>
    <Link to="/DetalhesProdutos">Detalhes Produtos</Link>
  </> 
  );
}
 
export default HomePage;