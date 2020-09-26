import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    //comman styles
    appTitle:{
        fontSize:22,
        color:'snow',

    },

    headerBackgroundColor:{
        backgroundColor:'#075E54'
    },

    //tabs
    tabBarUnderLine:{
        height:2
    },
    tabsText:{
        fontWeight:'bold',
        fontSize:14
        
    },
    //Badge style numero de mensagens 
    badge:{
        height:22,
        width:22,
        backgroundColor:'#ECE5DD',
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
        marginLeft:-4
    },
    badgeText:{
        fontSize:12,
        color:'#075E54'
    },
    
    //Chats page
    badgeChats:{
        backgroundColor:'#25D366',
        justifyContent:'center',
        textAlign: 'center',
        alignSelf: 'center',
        height:21,
        width:21,
        marginTop: 4

    },
    badgeTextChats:{
        fontSize:12,
        color:'snow'
    },
    fabColor:{
        backgroundColor:'#25D366'
    },
    //Status styles
    addStatusIcon:{
     color: '#25D366',
     alignSelf:'flex-end',
     position:'absolute',
     marginLeft: 40,
     bottom:-5,
     width:20,
     fontSize:20

    },
    listItemDivider:{
        marginTop: 10,
        height: 10

    }
})