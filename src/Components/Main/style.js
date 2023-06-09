import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        backgroundColor:'#4DFF7E',
        height:160,
        borderRadius:15,
        padding:20,
        justifyContent:'space-between'
    },
    button_wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    empty:{
        marginTop:100,
    },
    main:{
        // height:500,
        alignItems:'center',
    },
    header:{
        // height:'35%'
    },
    data:{
        marginTop:20,
        // height:'65%',
    },
    price:{
        color:'#161616',
        fontWeight:700,
        fontSize:40,
        lineHeight:50
    },
    price_$:{
        fontWeight:400,
        fontSize:12,
        lineHeight:15,
        color:'#161616'
    },
    price_wrapper:{
        flexDirection:'row',
        alignItems:'flex-end',
    },
    token_wrapper:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
    },
    plus_minus:{
        fontWeight:400,
        fontSize:30,
        lineHeight:37.5,
        marginBottom:10,
    },
    plus_date:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    date:{
        fontWeight:300,
        fontSize:13,
        color:'#EAEAEA'
    },
    data_iten:{
        // marginBottom:50,
        // height:'100%',
    },
    token:{
        color:'#8A8A8A',
        fontWeight:300,
        fontSize:13,
        lineHeight:16.25
    },
    token_text_wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    item:{
        minHeight:90,
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#313131',
    }
})