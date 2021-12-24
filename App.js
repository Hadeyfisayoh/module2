
import React, { useState } from "react";
import { FlatList,Button,StyleSheet,style, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
	
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;
	
	const SApp = () => {
	
	// Our sample dropdown options
	const options = ['Monday', 'Tuesday', 'Thursday',
	'Friday', 'Saturday', 'Sunday']
	
	return (
		<div style={{ marginLeft: '40%', marginTop: '60px' }}>
		<Autocomplete
			multiple
			id="checkboxes-tags-demo"
			options={options}
			renderOption={(option, { selected }) => (
			<React.Fragment>
				<Checkbox
				icon={icon}
				checkedIcon={checkedIcon}
				style={{ marginRight: 8 }}
				checked={selected}
				/>
				{option}
			</React.Fragment>
			)}
			style={{ width: 500 }}
			renderInput={(params) => (
			<TextField {...params} variant="outlined"
				label="Checkboxes"
				placeholder="Favorites" />
			)}
		/>
		</div>
	);
	}
	
	
	

const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 paddingTop: 22
	},
	item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	},
  });

const List = () => {
	return (
	  <View style={styles.container}>
		<FlatList
		  data={[
			{key: 'Monday'},
			{key: 'Tuesday'},
			{key: 'Thursday'},
			{key: 'Friday'},
			{key: 'Saturday'},
			{key: 'Sunday'},
			
		  ]}
		  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
		/>
	  </View>
	);
  }
  
//function Notifications({ navigation }) {
	
	
//}

//export default  App;
const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={SApp} >
        <Tab.Screen name="SApp" component={SApp}  />
        <Tab.Screen name="List" 
                    component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}