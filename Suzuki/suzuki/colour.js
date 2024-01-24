import React, {  Component, useEffect, useState,setState, useMemo ,useCallback,useRef  } from 'react';
import {TouchableHighlight ,TouchableOpacity , Alert, Button, TextInput,View,Image,Modal,Text,Pressable,StatusBar,SafeAreaView,StyleSheet,navigation,FlatList,navigate,ScrollView } from 'react-native'
import { Link } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';



import 'react-native-gesture-handler';

import createenquiry from './createenquiry';
import leadFollowup from './leadFollowup';
import catagoriesModel from './catagoriesModel';





const data = [
  { label: 'Acces Dum wheel', value: 'Acces Dum wheel' },
  { label: 'Avenis', value: 'Avenis' },

];


function colour(navigation)  {

    const [showModal, setShowModal] = useState(false);

    
    const [value1, setValue1] = useState(null);     // variant
    const [isFocus, setIsFocus] = useState(false);

    const [colour_name, setColour_name] = useState(''); // colour name


// colour picker start
const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);          // choose colour value
  const colors = [
    { color: '#CD5C5C', name: 'IndianRed' },
    { color: '#F08080', name: 'LightCoral' },
    { color: '#FA8072', name: 'Salmon' },
    { color: '#E9967A', name: 'DarkSalmon' },
    { color: '#FFA07A', name: 'LightSalmon' },
    { color: '#DC143C', name: 'Crimson' },
    { color: '#FF0000', name: 'Red' },
    { color: '#B22222', name: 'FireBrick' },
    { color: '#8B0000', name: 'DarkRed' },
    { color: '#FFC0CB', name: 'Pink' },
    { color: '#FFB6C1', name: 'LightPink' },
    { color: '#FF69B4', name: 'HotPink' },
    { color: '#FF1493', name: 'DeepPink' },
    { color: '#C71585', name: 'MediumVioletRed' },
    { color: '#DB7093', name: 'PaleVioletRed' },
    { color: '#FFA07A', name: 'LightSalmon' },
    { color: '#FF7F50', name: 'Coral' },
    { color: '#FF6347', name: 'Tomato' },
    { color: '#FF4500', name: 'OrangeRed' },
    { color: '#FF8C00', name: 'DarkOrange' },
    { color: '#FFA500', name: 'Orange' },
    { color: '#FFD700', name: 'Gold' },
    { color: '#FFFF00', name: 'Yellow' },
    { color: '#FFFFE0', name: 'LightYellow' },
    { color: '#FFFACD', name: 'LemonChiffon' },
    { color: '#FAFAD2', name: 'LightGoldenrodYellow' },
    { color: '#FFEFD5', name: 'PapayaWhip' },
    { color: '#FFE4B5', name: 'Moccasin' },
    { color: '#FFDAB9', name: 'PeachPuff' },
    { color: '#EEE8AA', name: 'PaleGoldenrod' },
    { color: '#F0E68C', name: 'Khaki' },
    { color: '#BDB76B', name: 'DarkKhaki' },
    { color: '#E6E6FA', name: 'Lavender' },
    { color: '#D8BFD8', name: 'Thistle' },
    { color: '#DDA0DD', name: 'Plum' },
    { color: '#EE82EE', name: 'Violet' },
    { color: '#DA70D6', name: 'Orchid' },
    { color: '#FF00FF', name: 'Fuchsia' },
    { color: '#FF00FF', name: 'Magenta' },
    { color: '#BA55D3', name: 'MediumOrchid' },
    { color: '#9370DB', name: 'MediumPurple' },
    { color: '#663399', name: 'RebeccaPurple' },
    { color: '#8A2BE2', name: 'BlueViolet' },
    { color: '#9400D3', name: 'DarkViolet' },
    { color: '#9932CC', name: 'DarkOrchid' },
    { color: '#8B008B', name: 'DarkMagenta' },
    { color: '#800080', name: 'Purple' },
    { color: '#4B0082', name: 'Indigo' },
    { color: '#6A5ACD', name: 'SlateBlue' },
    { color: '#483D8B', name: 'DarkSlateBlue' },
    { color: '#7B68EE', name: 'MediumSlateBlue' },
    { color: '#ADFF2F', name: 'GreenYellow' },
    { color: '#7FFF00', name: 'Chartreuse' },
    { color: '#7CFC00', name: 'LawnGreen' },
    { color: '#00FF00', name: 'Lime' },
    { color: '#32CD32', name: 'LimeGreen' },
    { color: '#98FB98', name: 'PaleGreen' },
    { color: '#90EE90', name: 'LightGreen' },
    { color: '#00FA9A', name: 'MediumSpringGreen' },
    { color: '#00FF7F', name: 'SpringGreen' },
    { color: '#3CB371', name: 'MediumSeaGreen' },
    { color: '#2E8B57', name: 'SeaGreen' },
    { color: '#228B22', name: 'ForestGreen' },
    { color: '#008000', name: 'Green' },
    { color: '#006400', name: 'DarkGreen' },
    { color: '#9ACD32', name: 'YellowGreen' },
    { color: '#6B8E23', name: 'OliveDrab' },
    { color: '#808000', name: 'Olive' },
    { color: '#556B2F', name: 'DarkOliveGreen' },
    { color: '#66CDAA', name: 'MediumAquamarine' },
    { color: '#8FBC8B', name: 'DarkSeaGreen' },
    { color: '#20B2AA', name: 'LightSeaGreen' },
    { color: '#008B8B', name: 'DarkCyan' },
    { color: '#008080', name: 'Teal' },
    { color: '#00FFFF', name: 'Aqua' },
    { color: '#00FFFF', name: 'Cyan' },
    { color: '#E0FFFF', name: 'LightCyan' },
    { color: '#AFEEEE', name: 'PaleTurquoise' },
    { color: '#7FFFD4', name: 'Aquamarine' },
    { color: '#40E0D0', name: 'Turquoise' },
    { color: '#48D1CC', name: 'MediumTurquoise' },
    { color: '#00CED1', name: 'DarkTurquoise' },
    { color: '#5F9EA0', name: 'CadetBlue' },
    { color: '#4682B4', name: 'SteelBlue' },
    { color: '#B0C4DE', name: 'LightSteelBlue' },
    { color: '#B0E0E6', name: 'PowderBlue' },
    { color: '#ADD8E6', name: 'LightBlue' },
    { color: '#87CEEB', name: 'SkyBlue' },
    { color: '#87CEFA', name: 'LightSkyBlue' },
    { color: '#00BFFF', name: 'DeepSkyBlue' },
    { color: '#1E90FF', name: 'DodgerBlue' },
    { color: '#6495ED', name: 'CornflowerBlue' },
    { color: '#7B68EE', name: 'MediumSlateBlue' },
    { color: '#4169E1', name: 'RoyalBlue' },
    { color: '#0000FF', name: 'Blue' },
    { color: '#0000CD', name: 'MediumBlue' },
    { color: '#00008B', name: 'DarkBlue' },
    { color: '#000080', name: 'Navy' },
    { color: '#191970', name: 'MidnightBlue' },
    { color: '#FFF8DC', name: 'Cornsilk' },
    { color: '#FFEBCD', name: 'BlanchedAlmond' },
    { color: '#FFE4C4', name: 'Bisque' },
    { color: '#FFDEAD', name: 'NavajoWhite' },
    { color: '#F5DEB3', name: 'Wheat' },
    { color: '#DEB887', name: 'BurlyWood' },
    { color: '#D2B48C', name: 'Tan' },
    { color: '#BC8F8F', name: 'RosyBrown' },
    { color: '#F4A460', name: 'SandyBrown' },
    { color: '#DAA520', name: 'Goldenrod' },
    { color: '#B8860B', name: 'DarkGoldenrod' },
    { color: '#CD853F', name: 'Peru' },
    { color: '#D2691E', name: 'Chocolate' },
    { color: '#8B4513', name: 'SaddleBrown' },
    { color: '#A0522D', name: 'Sienna' },
    { color: '#A52A2A', name: 'Brown' },
    { color: '#800000', name: 'Maroon' },
    { color: '#FFFFFF', name: 'White' },
    { color: '#FFFAFA', name: 'Snow' },
    { color: '#F0FFF0', name: 'HoneyDew' },
    { color: '#F5FFFA', name: 'MintCream' },
    { color: '#F0FFFF', name: 'Azure' },
    { color: '#F0F8FF', name: 'AliceBlue' },
    { color: '#F8F8FF', name: 'GhostWhite' },
    { color: '#F5F5F5', name: 'WhiteSmoke' },
    { color: '#FFF5EE', name: 'SeaShell' },
    { color: '#F5F5DC', name: 'Beige' },
    { color: '#FDF5E6', name: 'OldLace' },
    { color: '#FFFAF0', name: 'FloralWhite' },
    { color: '#FFFFF0', name: 'Ivory' },
    { color: '#FAEBD7', name: 'AntiqueWhite' },
    { color: '#FAF0E6', name: 'Linen' },
    { color: '#FFF0F5', name: 'LavenderBlush' },
    { color: '#FFE4E1', name: 'MistyRose' },
    { color: '#DCDCDC', name: 'Gainsboro' },
    { color: '#D3D3D3', name: 'LightGray' },
    { color: '#C0C0C0', name: 'Silver' },
    { color: '#A9A9A9', name: 'DarkGray' },
    { color: '#808080', name: 'Gray' },
    { color: '#696969', name: 'DimGray' },
    { color: '#778899', name: 'LightSlateGray' },
    { color: '#708090', name: 'SlateGray' },
    { color: '#2F4F4F', name: 'DarkSlateGray' },
    { color: '#000000', name: 'Black' }
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorPicker(false);
  };

  const renderColorPickerItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleColorSelect(item)} style={[styles.colorPickerItem, { backgroundColor: item.color }]}>
      <Text style={styles.colorPickerText}>{item.name}</Text>
    </TouchableOpacity>
  );




//colour picker end
 
       

  

  return(
    <ScrollView>

<Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
        
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
        <ScrollView>
          <View style={{ padding:10 }}>
            <View style={{ backgroundColor:'white'}}>
             




<View style={{margin:10,padding:10}}>
    <View style={{borderColor:'', borderWidth: 2, backgroundColor:'white',
            shadowColor: '#171717',
            shadowOffset: {width:110, height: 40},
            shadowOpacity: 14,
            shadowRadius: 12,padding:20}}>

    <View style={{borderColor:'', borderWidth: 0, backgroundColor:'',
            shadowColor: '',}}>
        <Text style={{ fontSize:22,  fontWeight:"900",resizeMode: 'cover', color:'blue',marginLeft:40}}>Create Suzuki Color</Text>
    </View>



  
    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
            <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
            Variant * :</Text>
        </View>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'white',color:'black', }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          placeholderTextColor='black'
          itemTextStyle={styles.dropdowndata}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Variant' : '...'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue1(item.value);
            setIsFocus(false);
          }}
         
        />



    <View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                Color  name* :</Text>
            </View>
            <TextInput style={{ borderColor: "gray",color:'black',
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}  placeholder="Enter Color  name*" placeholderTextColor='black'
        value={colour_name}
        onChangeText={(text)=>setColour_name(text)} 
        />


<View style={{marginTop:20,flexDirection:'row',marginBottom:10}}>
                <Text style={{fontWeight:600,fontSize:15,marginTop:0,color:'black',}}>
                chooes colour shade :</Text>
            </View>
            
<View style={styles.container11}>
      <TouchableOpacity onPress={() => setShowColorPicker(true)} style={[styles.colorButton, { backgroundColor: selectedColor?.color || '#ffffff' }]} />
      <Text style={styles.selectedColorText}>{selectedColor?.name || 'Select a color'}</Text>

      <Modal
        transparent={true}
        animationType="slide"
        visible={showColorPicker}
        onRequestClose={() => setShowColorPicker(false)}
      >
        <View style={styles.colorPickerModal}>
          <FlatList
            data={colors}
            keyExtractor={(item) => item.color}
            numColumns={3}
            renderItem={renderColorPickerItem}
          />
          <TouchableOpacity onPress={() => setShowColorPicker(false)} style={styles.closeButton}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>








              <View style={{flexDirection:'row',marginTop:20}}>
              <Button
              title="Back"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
            <Text style={{marginLeft:140, }} ></Text>

            <Button
              title="Save"
            />
           
            </View>


            </View>
   </View>
  
              
              </View>


          </View>
          </ScrollView>

        </Modal>



<View style={{ flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10}}>
  <Text style={{ fontWeight:700,fontSize:20,marginTop:0, color: 'black' }}>Colors </Text>
  </View>


<View style={{flexDirection:'row'}}>



<View style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
                shadowColor: '#171717',
                shadowOffset: {width:110, height: 40},
                shadowOpacity: 14,
                backgroundColor:'#0a0c37',
                width: 120,
                shadowRadius: 12,}}>
     <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}  onPress={() => {
      setShowModal(!showModal);
    }} > 🚀 Create New </Text>
    </View>



 <View style={{marginLeft: 20,marginTop:20 , borderColor:'blue', borderWidth: 2,paddingTop:10,paddingBottom:10,paddingLeft:10,
            shadowColor: '#171717',
            shadowOffset: {width:60, height: 40},
            shadowOpacity: 14,
            backgroundColor:'#0a0c37',
            width: 120,
            shadowRadius: 12,}}>
 <Text style={{fontSize:12,  fontWeight:"600",resizeMode: 'cover', color:'white'}}  onPress={() => {
  
}} > Bulk Uplode 👇</Text>
</View>
</View>
   
  <ScrollView
  horizontal={true}
  >
<DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Color Name</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Variant</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Color Shade</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Edit</DataTable.Title>
        <DataTable.Title style = {{marginRight:0,marginLeft:0}}>Delete</DataTable.Title>
       
      </DataTable.Header>



      <DataTable.Row>
     
        <DataTable.Cell  style={{ marginLeft:40 ,}}> Blue </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}>Access Disk/Alloy  </DataTable.Cell>
        <DataTable.Cell  style={{ marginLeft:70 ,}}> 
        <View style={{ width: '70%',  height: 10,backgroundColor: 'gray',  marginVertical: 10,}} />

          </DataTable.Cell>


        <DataTable.Cell  style={{marginLeft:30}}> 
        
        <Link to={{ screen: '', params: { id: '' } }}  style={{}}>
        <Text style={{fontSize:15,
        fontWeight:"600", color:'orange'}}
        >    Edit </Text>  
        </Link>
        </DataTable.Cell>

        <DataTable.Cell  style = {{ marginLeft:70 ,marginRight:70}}> 	 <Text style={{fontSize:15,
        fontWeight:"600", color:'red'}}
        >    Delete </Text> </DataTable.Cell>
      
      </DataTable.Row>



      </DataTable>
</ScrollView>





</ScrollView>
  );


}
export default colour


const styles = StyleSheet.create({

  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  colorPickerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  colorPickerItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPickerText: {
    color: 'white',
  },
  selectedColorText: {
    marginTop: 10,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20,
  },




    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    dropdowndata:{
      color: 'black'
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'black'
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'black'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },




  });