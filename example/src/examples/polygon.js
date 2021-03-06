import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {MapView, Polygon} from 'react-native-amap3d'

export default class PolygonExample extends Component {
  static navigationOptions = {
    title: '绘制多边形',
  }

  render() {
    return <MapView style={StyleSheet.absoluteFill}>
      <Polygon
        strokeWidth={5}
        strokeColor='blue'
        fillColor='red'
        coordinates={[
          {
            latitude: 39.806901,
            longitude: 116.397972,
          },
          {
            latitude: 39.806901,
            longitude: 116.297972,
          },
          {
            latitude: 39.906901,
            longitude: 116.397972,
          },
        ]}/>
    </MapView>
  }
}
