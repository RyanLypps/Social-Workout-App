import { StyleSheet } from 'react-native'

export const login = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 250,
    backgroundColor: '#3282b8'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    height: 40,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
  }
})

export const register = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 250,
    backgroundColor: '#3282b8'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    height: 40,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
  }
})

export const landingPage = StyleSheet.create({
  container: {
    alignContent: 'space-around',
    backgroundColor: '#3282b8',
    paddingTop: 100,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  header: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
  },
  photo: {
    height: 100,
    width: 100
  },
  containerItemInfo: {
    marginLeft: 0,
    flexDirection: 'column',
    paddingLeft: 10,
    width: '75%',
  }
})

export const schedulePage = StyleSheet.create({
  container: {
    backgroundColor: '#3282b8',
    paddingTop: 100,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderWidth: .25,
    margin: 10,
    paddingBottom: 50,
    height: 80,
  },
  text: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    marginLeft: 5,
    paddingTop: 5,
    fontSize:20
  },
  button: {
    alignSelf: 'flex-end',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  }
})

export const scheduleDetails =StyleSheet.create({
  container: {
    backgroundColor: '#3282b8', 
    flex: 1,
    alignContent: 'stretch',
    paddingTop: 100,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: 'black',
    borderWidth: .25,
    margin: 10,
    paddingBottom: 50,
    height: 190,
  },
  text: {
    flexGrow: 1,
    marginLeft: 5,
    paddingTop: 5,
    fontSize:20
  },
  button: {
    alignSelf: 'flex-end',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  }
})
