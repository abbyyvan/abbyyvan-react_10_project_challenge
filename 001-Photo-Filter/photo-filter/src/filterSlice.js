import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brightness:{
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
          min: 0,
          max: 200
        },
        unit: '%'
    },
    contrast:{
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
          min: 0,
          max: 200
        },
        unit: '%'
    },
    saturation:{
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
          min: 0,
          max: 200
        },
        unit: '%'
    },
    grayscale:{
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
          min: 0,
          max: 100
        },
        unit: '%'
    },
    sepia:{
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
          min: 0,
          max: 100
        },
        unit: '%'
    },
    hueRotate:{
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
          min: 0,
          max: 360
        },
        unit: 'deg'
    },
    blur:{
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
          min: 0,
          max: 20
        },
        unit: 'px'
    },
    background: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg',

}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      updateBrightness: (state, action) => {
        state.brightness.value = action.payload;
      },
      updateContrast: (state, action) => {
        state.contrast.value = action.payload;
      },
      updateSaturation: (state, action) => {
        state.saturation.value = action.payload;
      },
      updateGrayscale: (state, action) => {
        state.grayscale.value = action.payload;
      },
      updateSepia: (state, action) => {
        state.sepia.value = action.payload;
      },
      updateHueRotate: (state, action) => {
        state.hueRotate.value = action.payload;
      },
      updateBlur: (state, action) => {
        state.blur.value = action.payload;
      },
      updateBackground: (state, action) => {
        state.background = action.payload;
      },
      
    },
  });

export const {
    updateBrightness,
    updateContrast,
    updateSaturation,
    updateGrayscale,
    updateSepia,
    updateHueRotate,
    updateBlur,
    updateBackground,
  } = filterSlice.actions;

export default filterSlice.reducer;