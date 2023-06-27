import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker'; //installation required
import { AssetEntryContext } from '../../contexts/Contexts';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

/**
 * Type for state variable for the form
 */
type IState = {
    acquireDay: number | null;
    acquireMonth: number | null;
    acquireYear: number | null;

    acquireDayB: number | null;
    acquireMonthB: number | null;
    acquireYearB: number | null;

    acquireDayR: number | null;
    acquireMonthR: number | null;
    acquireYearR: number | null;
    date: Date;
    description: string;
    value: number;
    tangible: boolean;

    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: Date;
    homeAddress: string;
    dateOfRegistration: Date;
     _21120612479: boolean;
}

const AddEntry: React.FC = () => {

    const { createEntry } = useContext(AssetEntryContext)!;

    const navigation = useNavigation();

    const date = new Date(); // for initializing all the dates.
    const DOB = new Date();
    const DOR = new Date();
    const [state, setState] = useState<IState>({
        acquireDay: date.getDate(),
        acquireMonth: date.getMonth(),
        acquireYear: date.getFullYear(),

        acquireDayB: DOB.getDate(),
        acquireMonthB: DOB.getMonth(),
        acquireYearB: DOB.getFullYear(),

        acquireDayR: DOB.getDate(),
        acquireMonthR: DOB.getMonth(),
        acquireYearR: DOB.getFullYear(),

        
        date,
        description: '',
        value: 0,
        tangible: true,

        firstName: '',
        lastName: '',
        middleName: '',
        dateOfBirth: DOB,
        homeAddress: '',
        dateOfRegistration: DOR,
         _21120612479: true,

    })

   
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);
    const [showDatePicker1, setShowDatePicker1] = useState(Platform.OS === "ios" ? true : false);
    return (
        <ScrollView>
            <View style={styles.container}>
               
             
                <Input
                    label="FirstName"
                    placeholder="firstName"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'child' }}
                    onChangeText={firstName => setState({ ...state, firstName })}
                    style={styles.inputStyle}
                />
                <Input
                    label="lastName"
                    placeholder="lastName"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'child' }}
                    onChangeText={lastName => setState({ ...state, lastName})}
                    style={styles.inputStyle}
                />
                <Input
                    label="middleName"
                    placeholder="middleName"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'child' }}
                    onChangeText={middleName => setState({ ...state, middleName })}
                    style={styles.inputStyle}
                />
             
             <Input
               label="homeAddress"
               placeholder="Enter Address here"
               multiline
               inputContainerStyle={styles.inputContainerStyle}
               leftIcon={{ type: 'font-awesome', name: 'home' }}
               onChangeText={homeAddress => setState({ ...state, homeAddress})}
               style={styles.inputStyle}
           />
                  <Text 
                style = {styles.inputContainerStyle}
                
                > Date of Birth</Text>                
                <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                    {Platform.OS !== "ios" && <Button
                        radius={6}
                        title={moment(state.dateOfBirth).format("LL")}
                        onPress={() => {
                            setShowDatePicker(true);
                        }}
                    />}
                    {showDatePicker && <DateTimePicker
                        style={styles.inputContainerStyle}
                        value={state.dateOfBirth}
                        mode={'date'}
                        //is24Hour={true}
                        display="default"
                        onChange={(_event: any, selectedDate: any) => {
                            const DOB: Date = selectedDate as Date;
                            setState({
                                ...state,
                                dateOfBirth: selectedDate,
                                acquireDayB: DOB.getDate(),
                                acquireMonthB: DOB.getMonth(),
                                acquireYearB: DOB.getFullYear()
                            })
                            setShowDatePicker(Platform.OS === "ios" ? true : false);
                        }}
                    />}
                </View>
                
                <Text 
                style = {styles.inputContainerStyle}
                
                > Date of Registration</Text>                
                <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                    {Platform.OS !== "ios" && <Button
                    
                        radius={6}
                        title={moment(state.dateOfRegistration).format("LL")}
                        onPress={() => {
                            setShowDatePicker1(true);
                        }}
                    />}
                    {showDatePicker1 && <DateTimePicker
                        style={styles.inputContainerStyle}
                        
                        value={state.dateOfRegistration}
                        mode={'date'}
                        //is24Hour={true}
                        display="default"
                        onChange={(_event: any, selectedDate: any) => {
                            const DOR: Date = selectedDate as Date;
                            setState({
                                ...state,
                                dateOfRegistration: selectedDate,
                                acquireDayR: DOR.getDate(),
                                acquireMonthR: DOR.getMonth(),
                                acquireYearR: DOR.getFullYear()
                            })
                            setShowDatePicker1(Platform.OS === "ios" ? true : false);
                            
                        }}
                    />}
                </View>
                <CheckBox
                    title='_21120612479?'
                    
                    containerStyle={[styles.inputContainerStyle, { marginTop: 10 }]}
                    checked={!state.tangible}
                    onPress={() => { setState({ ...state, tangible: !state.tangible }) }}
                    style={styles.inputStyle}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Button style={[styles.inputContainerStyle, { paddingRight: 1 }]}
                        title="Submit"
                        onPress={() => {
                            //call create which will also make the form disappear
                            createEntry(state, navigation);
                            
                        }}
                        buttonStyle={{ backgroundColor: 'lightblue' }}
                    /><Button style={[styles.inputContainerStyle, { paddingLeft: 1 }]}
                        title="Cancel"
                        onPress={() => {
                            //call create which will also make the form disappear
                            navigation.goBack();
                        }}
                        buttonStyle={{ backgroundColor: 'lightpink' }}
                    
                  
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mistyrose',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 18
    },
    inputContainerStyle: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fffff2'
    },
    inputStyle: {
        backgroundColor: '#F2F3F5',
        borderRadius: 6,
        height: '100%',
        padding: 6
    },
    buttonStyle1:
    { 
        width: '100%',
        padding: 10,
        backgroundColor: 'mistyrose' }
});

export default AddEntry;