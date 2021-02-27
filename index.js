import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Modal, Image, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class OfflineScreen extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      internetview: false
    }
  }
  componentDidMount(){
    NetInfo.fetch().then(state => {
     this.setState({
      internetview: !state.isConnected
     })
    });
  }
  render() {
    const { internetview } = this.state
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={internetview}
      >
        <View style={styles.container}>
          <View style={styles.upperview}>
          <Image
          style={styles.wifiimage}
          source={require('./No_wifi.png')}
        />
            <Text style={styles.uppertext}>Oops!{'\n'}{'\n'}No internet available{'\n'}</Text>
           
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.Btn}
              onPress={() => this.setState({
                internetview: false
              })}>
              <Text style={styles.btntext}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090'
  },
  upperview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 0.3
  },
  bottom: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginBottom: windowWidth / 5
  },
  Btn: {
    padding: windowWidth / 19,
    backgroundColor: '#00000080',
    borderRadius: 25,
    borderColor: '#fff', borderWidth: 2
  }, btntext:
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  uppertext: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  }, 
  wifiimage:{
    height:windowHeight/2,
    width:windowWidth/1.2,
    resizeMode:'contain',
    tintColor:'#fff',
    
  }
}
)