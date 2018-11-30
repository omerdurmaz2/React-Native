import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#414e63'
    },
   //Cevap - Textbox Stil
    cevap:{
      flex:1,
      padding:5,
      backgroundColor:'#a4bfb7',

   },
    cvptext:{
    flex:1,
    borderRadius:10,
    fontWeight:'bold',
    fontSize:30,
    textAlign:'right',
    textTransform:'uppercase',
  },
  //Cevap Alanı Stilleri
  cvpalani:{
    flex:1,
    backgroundColor:'#a4bfb7',
    padding:10,
    justifyContent:'center',
    alignItems:"flex-end",
    borderBottomWidth:3,
    borderColor:'#000',

  },
  cvpalanitext:{
    textAlign:'right',
    fontWeight:'bold',
    fontSize:25,
    opacity:0.5,
    color:'#646a72'
    
  },
  //Cevap Alanı Stilleri Sonu
  //Tuslar Stil
  tuslar:{
    flex:6,
    padding:5,
    flexDirection:'row',
  },
  
  //Satırlar Stil
  stn1:{
    flex:5,
  },
  stn2:{
    flex:2,
  },
  stn1str:{
    flex:1,
    flexDirection:'row',
  },
  stn2silme:{
    flex:1
  },
  stn2str:{
    flex:3,
    
  },
  stn2str1:{
    flex:1,
  },

  //BUTONLAR STİL
  btn:{
    padding:10,
    flex:1,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:'#ebf2cb',
    shadowColor: '#fff',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowOpacity: 1,
    borderWidth:3,
    borderColor:'#000'

  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  },
  islemrenk:{
    backgroundColor:"#bec8ce"
  },
  silmerenk:{
    backgroundColor:"#e20003",
  },
  silmeyazirenk:{
    color:'#fff',
    fontSize:40,

  },
  esittirrenk:{
    backgroundColor:"#301c1c"
  },
  esittiryazirenk:{
    color:'#fff'
  },
});