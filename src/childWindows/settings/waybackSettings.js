import React, { Component, PropTypes } from 'react'
import { ipcRenderer, remote } from 'electron'
import { ListItem } from 'material-ui/List'
import NumberPicker from './numberPicker'
import Avatar from 'material-ui/Avatar'

export default class WaybackSettings extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired
  }

  render () {
    return (
      <ListItem
        leftAvatar={<Avatar backgroundColor={'transparent'} src="../../icons/openWB.png"/>}
        primaryText="Wayback"
        primaryTogglesNestedList={true}
        nestedItems={
          [
            <NumberPicker key={'Numpicker'} counter={1} hint='Port' settings={this.props.settings} warnOnChange={false}
                          whichSetting="wayback.port"/>
          ]
        }
      />
    )
  }
}
