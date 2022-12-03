import React, { useState } from 'react';
import { Text,View,Image } from 'react-native';


import { Container,Button,ButtonText } from './styles';
import {  styles   } from './styles';

let organizado = []

export default function Home() {

  const [Dados, setDados] = useState(null);

    function puxarDados(moeda){

      handleLimpar()
      fetch(`https://www.mercadobitcoin.net/api/${moeda}/ticker/`)
      .then((response) => response.json())
      .then((data) => {
          organizado = []
          organizado.push(Number(data['ticker']["high"]))
          organizado.push(Number(data['ticker']["low"]))
          organizado.push(Number(data['ticker']["vol"]))
          organizado.push(Number(data['ticker']["last"]))
          organizado.push(Number(data['ticker']["buy"]))
          organizado.push(Number(data['ticker']["buy"]))
          organizado.push(Number(data['ticker']["sell"]))
          
          
          
        setDados(organizado);
        
  
      });
    }
 

    async function handleLimpar() {
      setDados(null);
    }

    return (
      <Container>

      <Image style={styles.logo}        
          source={{uri:'https://cdn-icons-png.flaticon.com/512/272/272525.png'}}
        />
        <Text style={styles.text}>Escolha uma moeda para verificar as informações</Text>

        <View style={styles.btn}>
          <Button    onPress={() => puxarDados('BTC')}            >
            <ButtonText>BitCoin</ButtonText>
          </Button>
        

          <Button onPress={() => puxarDados('ETH')} >
            <ButtonText>Ethereum</ButtonText> 
          </Button>

          
          <Button onPress={() => puxarDados('DOGE')} >
            <ButtonText>DogeCoin</ButtonText> 
          </Button>    
 
        </View>

        {Dados  ? (
          <View style={styles.boxResultado}>
                                
            <Text key={Dados[0]+"G1"} style={styles.resultado}>Maior preço unitário de negociação das últimas 24 horas: {'\n'} USD  {Dados[0].toFixed(2)}</Text>                                 
            <Text key={Dados[1]+"G2"} style={styles.resultado}> Menor preço unitário de negociação das últimas 24 horas:  {'\n'} USD {Dados[1].toFixed(2)}</Text>                                 
            <Text key={Dados[2]+"G3"} style={styles.resultado}>Quantidade negociada nas últimas 24 horas: {'\n'} {Dados[2].toFixed(2)}</Text>                                 
            <Text key={Dados[3]+"G4"} style={styles.resultado}>Preço unitário da última negociação: {'\n'} USD {Dados[3].toFixed(2)}</Text>                                 
            <Text key={Dados[4]+"G5"} style={styles.resultado}>Maior preço de oferta de compra das últimas 24 horas: {'\n'} USD {Dados[4].toFixed(2)}</Text>                                 
            <Text key={Dados[5]+"GG"} style={styles.resultado}>Menor preço de oferta de venda das últimas 24 horas: {'\n'} USD {Dados[5].toFixed(2)}</Text>   
            <View style={styles.ggez}> 
              <Button onPress={() => handleLimpar()}  >
                <ButtonText>Limpar</ButtonText>
              </Button>
            </View>                            
            
          </View>
          ) : (
          <></>
          )}
     
      </Container>
    );
  }
 