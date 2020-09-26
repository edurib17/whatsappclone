import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,ListItem,Thumbnail,View, Fab } from 'native-base';
import app1Styles from '../app1Styles';
export default class CallsScreen extends Component {
  render() {
    return (
      <Container>
       
      <Content>
       
      <ListItem avatar  >
                <Left>
                    <Thumbnail source={{ uri: 'https://scontent.fgyn6-1.fna.fbcdn.net/v/t1.0-9/117140864_10158647567077164_2713528768753429897_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_eui2=AeG2iHZehmtOJFGwCMbT0Z-eAhwIW4UP6T8CHAhbhQ_pPxmKmnr_2sr8oFGbfHrvLw_ykHtd-97uAB9JsNH-RlsI&_nc_ohc=tqR3EajM6b4AX_3P7yO&_nc_ht=scontent.fgyn6-1.fna&oh=ed0600b3394927e2a6634dea41d47ce1&oe=5F9580E4' }}>

                    </Thumbnail>
                 
                </Left>
                <Body>
                <Text>CR7</Text>
                   <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                     <Icon name='call-made' type='MaterialIcons' style={{color:'#25d366', marginRight:10, fontSize: 18}} />
                     <Text note>Yesterday, 08:07 PM</Text>
                   </View>
                </Body>
                <Right>
                  <Icon style={{color:'#25d366'}} name="call" type='MaterialIcons' />
                  </Right>     
            </ListItem>


            <ListItem avatar  >
                <Left>
                    <Thumbnail source={{ uri: 'https://scontent.fgyn6-1.fna.fbcdn.net/v/t1.0-9/38120028_1890413360994338_4406100884749025280_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_eui2=AeEcw6KF6qSzY_AAIKDXY-Kjag0X5zW8espqDRfnNbx6yosfZmGg8-qvOdYnM3XbZCuJs0S5T2F44LDPiCBquCRC&_nc_ohc=UIA3Lnc-yiEAX_uTuPI&_nc_ht=scontent.fgyn6-1.fna&oh=b0f3dd773deadb670afc51668879b002&oe=5F93C5EE' }}>

                    </Thumbnail>
                 
                </Left>
                <Body>
                <Text>Neymar</Text>
                   <View style={{flex:1, flexDirection:'row',alignItems:'center'}}>
                     <Icon name="call-received" type='MaterialIcons' style={{color:'red', marginRight:10, fontSize: 18}} />
                     <Text note>Yesterday, 08:00 PM</Text>
                   </View>
                </Body>
                <Right>
                  <Icon style={{color:'#25d366'}} name="videocam" type='MaterialIcons' />
                  </Right>     
            </ListItem>
      </Content>
      <Fab style={app1Styles.fabColor} position="bottomRight" >
        <Icon name="phone-in-talk" type='MaterialIcons' />

      </Fab>
      
    </Container>
    );
  }
}