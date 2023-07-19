import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Button, Text } from '@rneui/base'
import { StoreContext } from '../../App'
import { addMinutes, format } from 'date-fns'
import DateTimePicker from '@react-native-community/datetimepicker'

const ScheduleModal = ({display, setDisplay, schedule, setSchedule, setConfirmSchedule}) => {

    const [mode, setMode] = React.useState("date")
    const [innerDisplay, setInnerDisplay] = React.useState(false)

    React.useEffect(() => {
        setConfirmSchedule({
            continue: true
        })
    }, [])

    const showDatePicker = () => {
        setMode("date")
        setInnerDisplay(true)
    }

    const showTimePicker = () => {
        setMode("time")
        setInnerDisplay(true)
    }

    const onSchduleChange = (event, selectedDate) => {
        setSchedule(selectedDate)
        setInnerDisplay(false)
    }

    const closeModal = () => {
        setInnerDisplay(false)
        setDisplay(false)
    }

    const confirmSchedule = () => {
        closeModal()
        setConfirmSchedule({
            continue: true
        })
    }

    const styles = StyleSheet.create({
        modalStyle: {
            justifyContent: 'flex-end',
            margin: 0,
        },
        textWrapper: {
            borderWidth: 1, 
            borderStyle: "solid", 
            borderColor: "whitesmoke"
        },
        textStyle: {
            fontWeight: 'normal',
            textAlign: "center",
            marginVertical: 20,
        }
    })

    return (
        <>
            <Modal
                isVisible={display}
                swipeDirection={"down"}
                swipeThreshold={50}
                onSwipeComplete={closeModal}
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
                style={styles.modalStyle}
            >
                <View style={{flex: 0.5, backgroundColor: "white"}}>
                    <View style={styles.textWrapper}>
                        <Text h3 h3Style={styles.textStyle}>Schedule a Appointment</Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={styles.textWrapper} onPress={showDatePicker}>
                        <Text h4 h4Style={styles.textStyle}>
                            {format(schedule, "iii, dd MMM")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.textWrapper} onPress={showTimePicker}>
                        <Text h4 h4Style={styles.textStyle}>
                            {format(schedule, "p")} - {format(addMinutes(schedule, 60), "p")}
                        </Text>
                    </TouchableOpacity>
                    
                    <Button
                        containerStyle={{
                            paddingVertical: 13,
                            paddingHorizontal: 20,
                        }}
                        buttonStyle={{
                            borderRadius: 50
                        }}
                        title="Continue"
                        size="lg"
                        color="#AE8447"
                        onPress={confirmSchedule}
                    />
                </View>
            </Modal>
            {
                innerDisplay &&
                <DateTimePicker 
                    mode={mode}
                    value={schedule}
                    minimumDate={new Date()}
                    onChange={onSchduleChange}
                />
            }

        </>

  )
}

export default ScheduleModal