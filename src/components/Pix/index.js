import { PixContainer, Title, PixExample, Card, CardTitle, Input, Button } from './styles';
import pixMobile from './pix-mobile.png';

const Pix = () => {
  return (
    <PixContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>Pix: um novo jeito de fazer transferências e pagamentos</Title>
            <a href="#">Saiba como funciona</a>
            <div className="text-center">
              <PixExample src={pixMobile}/>
            </div>
            <Card>
              <CardTitle>Peça sua conta e cartão de crédito do Nubank</CardTitle>
              <Input type="text" placeholder="Digite seu CPF"/> 
              <Button>Continuar</Button>
            </Card>
          </div>
        </div>
      </div>
    </PixContainer>
  );
};

export default Pix;
