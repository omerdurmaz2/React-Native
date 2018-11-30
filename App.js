/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
        Platform, 
        StyleSheet, 
        Text,
        TextInput, 
        View,
        TouchableHighlight,
        Keyboard,
  } from 'react-native';
import stlyes from './style.js';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
      this.state = {  
                      textbox:"",
                      nokta:".",
                      bolme:"÷",
                      carpma:"*",
                      cikarma:"-",
                      toplama:"+", 
                      cevap:"",
                      cevapyedek:"",
    }
  }
    cevapsorgu(){
      if(this.state.cevap!=""){
        arti=this.state.cevap.indexOf("+")
        eksi=this.state.cevap.indexOf("-")
        carpi=this.state.cevap.indexOf("*")
        bolu=this.state.cevap.indexOf("÷")
        if(arti!="-1" || eksi !="-1" || carpi!="-1" || bolu!="-1"){
          return true
        }else{
          return false
        }
      }
      else{
        return true
      }
    }
    //Sayilar
    sifir = () => {
      if(this.state.textbox==""){
        if(this.state.cevap!=""){
          this.setState({
            textbox:this.state.textbox+"0",
            cevap:this.state.cevap+"0"
          })
        }
        else{
          this.setState({
            textbox:"0",
            cevap:"0",
          })
        }
      }
      else{
        if(this.state.textbox!="0"){
          this.setState({
            textbox:this.state.textbox+"0",
            cevap:this.state.cevap +"0"
          })
        }
      }
    }
    bir = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"1",
          cevap:"1"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "1" , textbox:"1"})
        }else{this.setState({cevap:this.state.cevap + "1" , textbox: "1"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"1"
          }else{
            deger=this.state.cevap+"1"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"1"
          })
        }        
      }
    }
    iki = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"2",
          cevap:"2"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "2" , textbox:"2"})
        }else{this.setState({cevap:this.state.cevap + "2" , textbox: "2"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"2"
          }else{
            deger=this.state.cevap+"2"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"2"
          })
        }        
      }
    }
    uc = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"3",
          cevap:"3"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "3" , textbox:"3"})
        }else{this.setState({cevap:this.state.cevap + "3" , textbox: "3"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"3"
          }else{
            deger=this.state.cevap+"3"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"3"
          })
        }        
      }
    }
    dort = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"4",
          cevap:"4"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "4" , textbox:"4"})
        }else{this.setState({cevap:this.state.cevap + "4" , textbox: "4"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"4"
          }else{
            deger=this.state.cevap+"4"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"4"
          })
        }        
      }
    }
    bes = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"5",
          cevap:"5"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "5" , textbox:"5"})
        }else{this.setState({cevap:this.state.cevap + "5" , textbox: "5"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"5"
          }else{
            deger=this.state.cevap+"5"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"5"
          })
        }        
      }
    }
    alti = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"6",
          cevap:"6"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "6" , textbox:"6"})
        }else{this.setState({cevap:this.state.cevap + "6" , textbox: "6"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"6"
          }else{
            deger=this.state.cevap+"6"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"6"
          })
        }        
      }
    }
    yedi = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"7",
          cevap:"7"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "7" , textbox:"7"})
        }else{this.setState({cevap:this.state.cevap + "7" , textbox: "7"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"7"
          }else{
            deger=this.state.cevap+"7"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"7"
          })
        }        
      }
    }
    sekiz = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"8",
          cevap:"8"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "8" , textbox:"8"})
        }else{this.setState({cevap:this.state.cevap + "8" , textbox: "8"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"8"
          }else{
            deger=this.state.cevap+"8"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"8"
          })
        }        
      }
    }
    dokuz = () => { 
      if(this.state.textbox=="0" && this.state.cevap=="0"){
        this.setState({
          textbox:"9",
          cevap:"9"
        })
      }else if(this.state.textbox=="0" && this.state.cevap!="0"){
        sonuc=this.cevapsorgu();
        deger=""
        if(sonuc==true){
          if(this.state.cevap.indexOf("+")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("+")+1)}
          else if(this.state.cevap.indexOf("-")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("-")+1)}
          else if(this.state.cevap.indexOf("*")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("*")+1)}
          else if(this.state.cevap.indexOf("÷")!="-1"){deger=this.state.cevap.slice(0,this.state.cevap.indexOf("÷")+1)}
          else{deger=this.state.cevap}
          this.setState({cevap:deger + "9" , textbox:"9"})
        }else{this.setState({cevap:this.state.cevap + "9" , textbox: "9"})}
      }else{
        if(this.state.textbox.length<22){
          sonuc=this.cevapsorgu()
          var deger=""
          if(sonuc==true){
            deger= this.state.textbox+"9"
          }else{
            deger=this.state.cevap+"9"
          }
          this.setState({
            textbox:deger,
            cevap:this.state.cevap+"9"
          })
        }        
      }
    }
    //Sayilar Sonu
    //Nokta Ekleme
    nokta = () => {
      if(this.state.textbox!=""){
        if(this.state.textbox.indexOf(".")=="-1"){
          this.setState({
            textbox:this.state.textbox+".",
            cevap:this.state.cevap+".",
          })
        }
      }else{
        if(this.state.cevap!=""){
          if(this.state.cevap.indexOf(".")=="-1"){
            uzunluk=this.state.cevap.length
            sonkarakter=this.state.cevap.slice(uzunluk-1,uzunluk)
            if(sonkarakter=="+" || sonkarakter=="-" || sonkarakter=="*" || sonkarakter=="÷"){
              sonhali=this.state.cevap.slice(0,uzunluk-1)
              this.setState({
                textbox:sonhali+".",
                cevap:sonhali+".",
              })
            }
            else{
              this.setState({
                textbox:this.state.cevap+".",
                cevap:this.state.cevap+".",
              })
            }
          }
        }
      }
    }
    //Nokta Ekleme Sonu
    //Silme 
    silme = () => {
      if(this.state.textbox!=""){
        tuzunluk=this.state.textbox.length
        cuzunluk=this.state.cevap.length
        tson=this.state.textbox.slice(0,tuzunluk-1)
        cson=this.state.cevap.slice(0,cuzunluk-1)
        this.setState({
          textbox:tson,
          cevap:cson,
        })
      }
      else{
        this.setState({
          textbox:"",
          cevap:"",
          cevapyedek:"",
        })
      } 
        /*Son Karakter dört işlem ya da virgül olursa son karakteri de silmesi için yapılmış kod parçası
        ancak bu işlemi eşittire basıldığında yapmaya karar verdim
        a=b.length;
        c=b.slice(a-1,a)
        if(c=="÷" || c=="*" || c== "+" || c=="-" || c==","){
          b=b.substring(0,(a-1))
        }
        */
      
    } 
    //Hepsini Silme
    hepsinisil =() => {
        this.setState({
          textbox:"",
          cevap:"",
          cevapyedek:"",
        })  
    }
    //Silme Sonu
    //İşlemlerin Asıl Yapıldığı Yer
    islem(){
      arti=this.state.cevap.indexOf("+")
      eksi=this.state.cevap.indexOf("-")
      carpi=this.state.cevap.indexOf("*")
      bolu=this.state.cevap.indexOf("÷")
      if(arti!="-1" || eksi!="-1" || carpi!="-1" || bolu!="-1"){
        deger1=parseFloat(this.state.cevapyedek)
        deger2=parseFloat(this.state.textbox)
        var sonuc=0
        if(arti!="-1"){
          sonuc=deger1+deger2
        }else if(eksi!="-1"){
          sonuc=deger1-deger2
        }else if(carpi!="-1"){
          sonuc=deger1*deger2
        }else if(bolu!="-1"){
          sonuc=deger1/deger2
        }
        return sonuc.toString()
      }else{
        return false
      }
    }
    //İşlemlerin Asıl Yapıldığı Yer Sonu
    //Dört İşlem
    bolme =() => {
      if(this.state.textbox!=""){
        deger1uzunluk=this.state.cevap.length
        var sondeger=""
        if(deger1uzunluk>1){
          sondeger=this.state.cevap.slice(deger1uzunluk-1,deger1uzunluk)
          if(sondeger=="÷" || sondeger=="*" || sondeger=="-" || sondeger=="+" || sondeger=="."){
            sonhali=this.state.cevap.slice(0,deger1uzunluk-1)
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "÷",
              textbox:""
            })
          }else{
          sonhali=this.state.cevap
           sonuc=this.islem().toString()
           if(sonuc=="false"){
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "÷",
              textbox:""
            })
           }else{
            this.setState({
              cevapyedek:sonuc,
              cevap:sonuc + "÷",
              textbox:""
            })
           }
          }
        }else{
          this.setState({
            cevapyedek:this.state.cevap,
            cevap:this.state.cevap+ "÷",
            textbox:""
          })
        }
      }else{
        if(this.state.cevap!=""){
          uzunluk=this.state.cevap.length
          if(uzunluk>1){
            sonparca=this.state.cevap.slice(uzunluk-1,uzunluk)
            if(sonparca=="÷" || sonparca=="*" || sonparca=="-" || sonparca=="+" || sonparca=="."){
              sonhali=this.state.cevap.slice(0,uzunluk-1)
              this.setState({
                cevap:sonhali+ "÷"
              })
            }
            else{
              sonhali=this.state.cevap
              this.setState({
                cevap:sonhali+"÷"
              })
            }
          }else{
            this.setState({
              cevap:this.state.cevap+"÷"
            })
          }
        }else{

        }
      }
    }
    carpma =() =>{
      if(this.state.textbox!=""){
        deger1uzunluk=this.state.cevap.length
        var sondeger=""
        if(deger1uzunluk>1){
          sondeger=this.state.cevap.slice(deger1uzunluk-1,deger1uzunluk)
          if(sondeger=="÷" || sondeger=="*" || sondeger=="-" || sondeger=="+" || sondeger=="."){
            sonhali=this.state.cevap.slice(0,deger1uzunluk-1)
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "*",
              textbox:""
            })
          }else{
          sonhali=this.state.cevap
           sonuc=this.islem().toString()
           if(sonuc=="false"){
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "*",
              textbox:""
            })
           }else{
            this.setState({
              cevapyedek:sonuc,
              cevap:sonuc + "*",
              textbox:""
            })
           }
          }
        }else{
          this.setState({
            cevapyedek:this.state.cevap,
            cevap:this.state.cevap+ "*",
            textbox:""
          })
        }
      }else{
      if(this.state.cevap!=""){
        uzunluk=this.state.cevap.length
        if(uzunluk>1){
          sonparca=this.state.cevap.slice(uzunluk-1,uzunluk)
          if(sonparca=="÷" || sonparca=="*" || sonparca=="-" || sonparca=="+" || sonparca=="."){
            sonhali=this.state.cevap.slice(0,uzunluk-1)
            this.setState({
              cevap:sonhali+ "*"
            })
          }
          else{
            sonhali=this.state.cevap
            this.setState({
              cevap:sonhali+"*"
            })
          }
      }else{
          this.setState({
            cevap:this.state.cevap+"*"
          })
        }
      }else{

      }
      }
    }
    cikarma =() =>{
      if(this.state.textbox!=""){
        deger1uzunluk=this.state.cevap.length
        var sondeger=""
        if(deger1uzunluk>1){
          sondeger=this.state.cevap.slice(deger1uzunluk-1,deger1uzunluk)
          if(sondeger=="÷" || sondeger=="*" || sondeger=="-" || sondeger=="+" || sondeger=="."){
            sonhali=this.state.cevap.slice(0,deger1uzunluk-1)
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "-",
              textbox:""
            })
          }else{
          sonhali=this.state.cevap
           sonuc=this.islem().toString()
           if(sonuc=="false"){
            this.setState({
              cevapyedek:sonhali,
              cevap:sonhali + "-",
              textbox:""
            })
           }else{
            this.setState({
              cevapyedek:sonuc,
              cevap:sonuc + "-",
              textbox:""
            })
           }
          }
        }else{
          this.setState({
            cevapyedek:this.state.cevap,
            cevap:this.state.cevap+ "-",
            textbox:""
          })
        }
      }else{
      if(this.state.cevap!=""){
        uzunluk=this.state.cevap.length
        if(uzunluk>1){
          sonparca=this.state.cevap.slice(uzunluk-1,uzunluk)
          if(sonparca=="÷" || sonparca=="*" || sonparca=="-" || sonparca=="+" || sonparca=="."){
            sonhali=this.state.cevap.slice(0,uzunluk-1)
            this.setState({
              cevap:sonhali+ "-"
            })
          }
          else{
            sonhali=this.state.cevap
            this.setState({
              cevap:sonhali+"-"
            })
          }
      }else{
          this.setState({
            cevap:this.state.cevap+"-"
          })
        }
      }else{

      }
      }
    }
    toplama =() =>{
      if(this.state.textbox!=""){
          deger1uzunluk=this.state.cevap.length
          var sondeger=""
          if(deger1uzunluk>1){
            sondeger=this.state.cevap.slice(deger1uzunluk-1,deger1uzunluk)
            if(sondeger=="÷" || sondeger=="*" || sondeger=="-" || sondeger=="+" || sondeger=="."){
              sonhali=this.state.cevap.slice(0,deger1uzunluk-1)
              this.setState({
                cevapyedek:sonhali,
                cevap:sonhali + "+",
                textbox:""
              })
            }else{
            sonhali=this.state.cevap
              sonuc=this.islem().toString()
              if(sonuc=="false"){
              this.setState({
                cevapyedek:sonhali,
                cevap:sonhali + "+",
                textbox:""
              })
              }else{
              this.setState({
                cevapyedek:sonuc,
                cevap:sonuc + "+",
                textbox:""
              })
              }
            }
          }else{
            this.setState({
              cevapyedek:this.state.cevap,
              cevap:this.state.cevap+ "+",
              textbox:""
            })
          }
      }else{
        if(this.state.cevap!=""){
          uzunluk=this.state.cevap.length
          if(uzunluk>1){
            sonparca=this.state.cevap.slice(uzunluk-1,uzunluk)
            if(sonparca=="÷" || sonparca=="*" || sonparca=="-" || sonparca=="+" || sonparca=="."){
              sonhali=this.state.cevap.slice(0,uzunluk-1)
              this.setState({
                cevap:sonhali+ "+"
              })
            }
            else{
              sonhali=this.state.cevap
              this.setState({
                cevap:sonhali+"+"
              })
            }
          }else{
            this.setState({
              cevap:this.state.cevap+"+"
            })
          }
        }else{

        }
      }
    }
    esittir=() =>{
      if(this.state.textbox!=""){
        uzunluk=this.state.cevap.length
        if(uzunluk>1){
          sonuc=this.islem().toString()
          if(sonuc!="false") {
            this.setState({
              cevap:sonuc,
              cevapyedek:sonuc,
              textbox:""
            })
          }else{
            this.setState({
              textbox:"",
              cevapyedek:this.state.cevap,
              cevap:this.state.cevap
            })
          }
        }
      }
      else{
        if(this.state.cevap!=""){
          uzunluk=this.state.cevap.length
          if(uzunluk>1){
           sonuc=this.islem()
           if(sonuc!=false) {
              this.setState({
                cevap:sonuc,
                cevapyedek:sonuc,
              })
           }
          }
        }
      }
    }
    //Dört İşlem Sonu
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.cevap}>
          <TextInput
            style={styles.cvptext}
            value={this.state.textbox.toString()}
            maxLength={22}
          />
          </View>
          <View style={[styles.cvpalani]}>
            <Text style={[styles.cvpalanitext]} >{this.state.cevap.toString()}</Text>
          </View>
          <View style={styles.tuslar}>
            <View style={stlyes.stn1}>
              <View style={[styles.stn1str]} >
                  <TouchableHighlight style={[styles.btn]} onPress={this.bir}>
                    <Text style={[styles.text]}> 1 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.iki}>
                    <Text style={[styles.text]}> 2 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.uc}>
                    <Text style={[styles.text]}> 3 </Text>
                  </TouchableHighlight>
              </View>
              <View style={[styles.stn1str]} >
                  <TouchableHighlight style={[styles.btn]} onPress={this.dort}>
                    <Text style={[styles.text]}> 4 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.bes}>
                    <Text style={[styles.text]}> 5 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.alti}>
                    <Text style={[styles.text]}> 6 </Text>
                  </TouchableHighlight>
              </View>
              <View style={[styles.stn1str]} >
                  <TouchableHighlight style={[styles.btn]} onPress={this.yedi}>
                    <Text style={[styles.text]}> 7 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.sekiz}>
                    <Text style={[styles.text]}> 8 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.dokuz}>
                    <Text style={[styles.text]}> 9 </Text>
                  </TouchableHighlight>
              </View>
              <View style={[styles.stn1str]} >
                  <TouchableHighlight style={[styles.btn]} onPress={this.nokta}>
                    <Text style={[styles.text]}> . </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn]} onPress={this.sifir}>
                    <Text style={[styles.text]}> 0 </Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={[styles.btn,styles.esittirrenk]} onPress={this.esittir}>
                    <Text style={[styles.text,styles.esittiryazirenk]}> = </Text>
                  </TouchableHighlight>
              </View>
            </View>
            <View style={stlyes.stn2}>
              <View style={stlyes.stn2silme}>
                <TouchableHighlight style={[styles.btn,styles.silmerenk]} onLongPress={this.hepsinisil} onPress={this.silme}>
                      <Text style={[styles.text,styles.silmeyazirenk]}> C </Text>
                </TouchableHighlight>
              </View>
              <View style={stlyes.stn2str}>
                <View style={stlyes.stn2str1}>
                  <TouchableHighlight style={[styles.btn,styles.islemrenk]} onPress={this.bolme}>
                          <Text style={[styles.text]}> ÷ </Text>
                    </TouchableHighlight>
                </View>
                <View style={stlyes.stn2str1}>
                  <TouchableHighlight style={[styles.btn,styles.islemrenk]} onPress={this.carpma}>
                          <Text style={[styles.text]}> x </Text>
                    </TouchableHighlight>
                </View>
                <View style={stlyes.stn2str1}>
                  <TouchableHighlight style={[styles.btn,styles.islemrenk]} onPress={this.cikarma}>
                          <Text style={[styles.text]}> - </Text>
                    </TouchableHighlight>
                </View>
                <View style={stlyes.stn2str1}>
                  <TouchableHighlight style={[styles.btn,styles.islemrenk]} onPress={this.toplama}>
                          <Text style={[styles.text]}> + </Text>
                    </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
      </View>
    );
  }
}


