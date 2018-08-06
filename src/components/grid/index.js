import React, { Component } from 'react';
import View from '../view';

export default ({ children }) => (
  <View className="container">
    <View className="row">{children}</View>
  </View>
);
