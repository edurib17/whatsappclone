import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tabs,Tab, TabHeading, Badge, ScrollableTab } from 'native-base';

import app1Styles from './app1Styles'
import {StatusBar} from 'react-native'

import ChatsScreen  from './screens/chats'
import StatusScreen from './screens/status'
import CallsScreen from './screens/calls'

export default class App1 extends Component {

    constructor(props){
        super(props)
        setTimeout(()=>{
            StatusBar.setBackgroundColor('#128C7E')

        },100)
       
    }
  render() {
    return (
        //Parte de Cima e icones do aplicativo com tabs
      <Container>
        <Header noLeft style={app1Styles.headerBackgroundColor}>
            <Body>
                <Title style={app1Styles.appTitle}>WhatsApp</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon type='MaterialIcons' name='search' />
                </Button>

                <Button transparent>
                    <Icon type='MaterialIcons' name="more-vert" />
                </Button>
            </Right>
        </Header>
         
        <Tabs initialPage={1}  tabBarActiveTextColor='#075E54' tabContainerStyle={{elevation:0}} tabBarUnderlineStyle={app1Styles.tabBarUnderLine} renderTabBar={() => <ScrollableTab />} >

            <Tab  heading={ <TabHeading style={{backgroundColor:'#075E54'}}><Icon name="photo-camera" type='MaterialIcons' /></TabHeading>}>
                    <Text style={{textAlign:'center', flex:1,textAlignVertical:'center'}}>Camera screen</Text>
            </Tab>

            <Tab heading={ 
            <TabHeading style={{backgroundColor:'#075E54'}}><Text style={app1Styles.tabsText}>CHATS</Text> 
                <Badge style={app1Styles.badge}>
                  <Text style={app1Styles.badgeText} >2</Text>
                </Badge>
             </TabHeading>}>
                    <ChatsScreen />
                    
            </Tab>

            <Tab heading={ <TabHeading style={{backgroundColor:'#075E54'}}><Text style={app1Styles.tabsText}>STATUS</Text></TabHeading>}>
                    <StatusScreen />
            </Tab>

            <Tab heading={ <TabHeading style={{backgroundColor:'#075E54'}}><Text style={app1Styles.tabsText}>CALLS</Text></TabHeading>}>
                   <CallsScreen />
            </Tab>
        </Tabs>
      
      </Container>
    );
  }
}