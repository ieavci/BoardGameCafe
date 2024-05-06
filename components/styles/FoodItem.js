import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    foodItem: {
        margin: 12,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: {
            width: -2,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.9,
        backgroundColor: '#e6e6e6'
    },
    innerView: {},
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'normal',
        margin: 8,

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#f2f2f2'

    },
    detailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
        marginVertical: 5,
       

    },
    detailContainerText: {
        color: '#ff7a07'
    },
    detailContainerInlineText: {


    },
    detailItem: {

    },

})

export default styles;