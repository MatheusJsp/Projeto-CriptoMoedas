import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";

export const Container = styled.View`
    align-items: center;
    background-color: #363D45;
    flex: 1;
    padding:60px 0px;  
`;
export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: #2D3540;
    border: 1px solid white;
    border-radius: 20px;
    margin-top: 20px;
    padding: 10px;
    width: 60%;    
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;   
`;
export const styles = StyleSheet.create({
   text:{
    color:"white",
    fontSize:15,
    fontWeight:"bold",
   },
   btn:{
    flexDirection:"row",
    flexWrap:"wrap" ,
    justifyContent:"center" 
  
   },
   logo:{
    width:60,
    height:60,
    marginBottom:15
   },
   boxResultado:{
    paddingVertical:30,
   },
   resultado:{
    color:"white",
    fontSize:15,
    fontWeight:"bold",
    textAlign:"center",
    paddingHorizontal:20,
    paddingVertical:5
   },
   ggez:{
  

      
        flex: 1,
    
        flexDirection:"row",
        flexWrap:"wrap" ,
        justifyContent:"center" 
   
    
   }
  
});