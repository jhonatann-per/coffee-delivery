import { Container, EnderecoForm, PedidoContent, TotalValues, FormDiv, CardItens, RemoveItem, CoffeesAddeds, HeaderLocation, ItemQuatitDiv, PaymentButton, PaymentHeader, OptionPayment, CofirmationButton } from "./styles";
import { 
  MapPin, 
  Minus, Plus, Trash, Bank,
  CreditCard,
  CurrencyDollar,
  Money } from '@phosphor-icons/react';
import { useCarrinho } from '../../contexts/CarrinhoContext';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';

export const Carrinho = () => {
  const { itens, removerItem, adicionarItem, formateValue, totalPreco } = useCarrinho();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buscarCep = async () => {
    const cepNumerico = formData.cep.replace(/\D/g, '');
    
    if (cepNumerico.length !== 8) {
      alert("Digite um CEP válido com 8 números!");
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepNumerico}/json/`);
      const data = await response.json();
  
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }
  
      setFormData(prevData => ({
        ...prevData,
        rua: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        uf: data.uf || '',
      }));
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao consultar CEP. Tente novamente.");
    }
  };

  const handleConfirmOrder = () => {
    if (!selectedPayment || !formData.cep) {
      setShowError(true);
      return;
    }
    
    console.log("Pedido confirmado!", {
      payment: selectedPayment,
      address: formData,
      items: itens,
      total: totalPreco
    });
    
    window.location.href = "/confirmacao-pedido";
  };

  const isConfirmDisabled = !selectedPayment || !formData.cep;

  return (
    <Container>
      <EnderecoForm>
        <header>Complete seu pedido</header>
        <section>
          <HeaderLocation>
            <MapPin size={22} color={'#C47F17'} style={{borderBottom:'2px solid #C47F17'}}/>
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderLocation>
          <FormDiv>
            <form>
              <IMaskInput
                mask="00000-000"
                name="cep"
                placeholder="00000-000"
                value={formData.cep}
                onAccept={(value) => setFormData({...formData, cep: value})}
                onBlur={buscarCep}
              />
              <input
                type="text"
                name="rua"
                placeholder="Rua"
                value={formData.rua}
                onChange={handleChange}
              />
              <input
                type="text"
                name="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
              />
              <input
                type="text"
                name="complemento"
                placeholder="Complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                readOnly 
              />
              <input
                type="text"
                name="uf"
                placeholder="UF"
                value={formData.uf}
                onChange={handleChange}
                readOnly 
              />
            </form>
          </FormDiv>
        </section>
        <article>
          <PaymentHeader>
            <CurrencyDollar color={"#8047F8"} size={22} />
            <div>
              <p> Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </PaymentHeader>

          <OptionPayment>
            <PaymentButton
              $isSelected={selectedPayment === "credit"}
              onClick={() => setSelectedPayment("credit")}
            >
              <CreditCard color={"#8047F8"} size={16} />
              <span>Cartão de crédito</span>
            </PaymentButton>

            <PaymentButton
              $isSelected={selectedPayment === "debit"}
              onClick={() => setSelectedPayment("debit")}
            >
              <Bank color={"#8047F8"} size={16} />
              <span>Cartão de Débito</span>
            </PaymentButton>

            <PaymentButton
              $isSelected={selectedPayment === "cash"}
              onClick={() => setSelectedPayment("cash")}
            >
              <Money color={"#8047F8"} size={16} />
              <span>Dinheiro</span>
            </PaymentButton>
          </OptionPayment>
        </article>
      </EnderecoForm>

      <PedidoContent>
        <header>Cafés selecionados</header>
        <section>
          <CardItens>
            {itens.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              itens.map((item, index) => (
                <CoffeesAddeds key={index}>
                  <img src={item.imagem} style={{width: '60px', height: '60px'}} alt={`Copo de ${item.nome}`} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <header>
                      <h3>{item.nome}</h3> 
                      <strong>{formateValue(item.quantidade * item.preco)}</strong>
                    </header>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem'}}>
                      <ItemQuatitDiv>
                        <button onClick={() => removerItem(item.id)}><Minus size={14} /></button>  
                        <span>{item.quantidade}</span>
                        <button onClick={() => adicionarItem(item)}><Plus size={14} /></button>                   
                      </ItemQuatitDiv>
                      <RemoveItem>
                          <button>
                            <Trash size={18} />
                            <span>REMOVER</span>
                          </button>
                      </RemoveItem>
                    </div>
                  </div>
                </CoffeesAddeds>
              ))
            )}
          </CardItens>
          
          <TotalValues>
              <div>
                <p>Total de itens:</p>
                <p>{formateValue(totalPreco)}</p>
              </div>
              <div>
                <p>Entrega:</p>
                <span>Calcular</span>
              </div>
              <div>
                <strong>Total:</strong>
                <strong>{formateValue(totalPreco)}</strong>
              </div>
              <div>
                <CofirmationButton
                  disabled={isConfirmDisabled}
                  onClick={handleConfirmOrder}
                >
                  CONFIRMAR PEDIDO
                </CofirmationButton>
                {showError && isConfirmDisabled && (
                  <p style={{ color: 'red', marginTop: '8px', textAlign: 'center' }}>
                    {!selectedPayment && "Selecione a forma de pagamento! "}
                    {!formData.cep && "Informe o CEP!"}
                  </p>
                )}
              </div>
          </TotalValues>
        </section>
      </PedidoContent>
    </Container>
  );
};