import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminder, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar'

class History extends Component {
    componentDidMount() {
        const { dispatch } = this.props // get access to dispatch through connect 

        fetchCalendarResults()
            .then(entries => dispatch(receiveEntries(entries))) // add all entries from storage to current state
            .then(({ entries }) => { // will return entries property on an object
                if (!entries[timeToString()]) {
                    dispatch(addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                }
            })
    }

    renderItem = ({ today, ...metrics }, formattedDate, key) => (
        <View>
            {today
                ? <Text>{JSON.stringify(today)}</Text>
                : <Text>{JSON.stringify(metrics)}</Text>
            }
        </View>
    )

    renderEmptyDate(formattedDate) {
        return (
            <View>
                <Text>No Data for this day</Text>
            </View>
        )
    }

    render() {
        const { entries } = this.props
        return (
            <UdaciFitnessCalendar
                items={entries}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate}
            />
        )
    }
}

function mapStateToProps(entries) { // could be named anything but needs to align with fetchCalendarResults
    return { // mapStateToProps you are passing read-only properties for a component to consume
        entries
    }
}

export default connect(mapStateToProps)(History)
/*  connect()(History), provides access to dispatch on this.props

    connect(mapStateToProps)(History) allows us to specify which data we are listening
    to (through mapStateToProps), 
    and which component we are providing the data. */