import React, { useState } from 'react'
import Announcement from './Announcement'
import "./index.css"
import Navbar from './Navbar'
import {
  updateBrightness,
  updateContrast,
  updateSaturation,
  updateGrayscale,
  updateSepia,
  updateHueRotate,
  updateBlur,
  updateBackground,
} from './filterSlice';
import {useSelector, useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state)=> state.filters)


  // const [brightness, setBrightness] = useState({
  //   name: 'Brightness',
  //   property: 'brightness',
  //   value: 100,
  //   range: {
  //     min: 0,
  //     max: 200
  //   },
  //   unit: '%'
  // })

  // const [contrast, setContrast] = useState({
  //   name: 'Contrast',
  //   property: 'contrast',
  //   value: 100,
  //   range: {
  //     min: 0,
  //     max: 200
  //   },
  //   unit: '%'
  // })
  // const [saturation, setSaturation] = useState({
  //   name: 'Saturation',
  //   property: 'saturate',
  //   value: 100,
  //   range: {
  //     min: 0,
  //     max: 200
  //   },
  //   unit: '%'
  // })
  // const [grayscale, setGreyscale] = useState({
  //   name: 'Grayscale',
  //   property: 'grayscale',
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 100
  //   },
  //   unit: '%'
  // })
  // const [sepia, setSepia] = useState({
  //   name: 'Sepia',
  //   property: 'sepia',
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 100
  //   },
  //   unit: '%'
  // })
  // const [hueRotate, setHueRotate] = useState({
  //   name: 'Hue Rotate',
  //   property: 'hue-rotate',
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 360
  //   },
  //   unit: 'deg'
  // })
  // const [blur, setBlur] = useState({
  //   name: 'Blur',
  //   property: 'blur',
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 20
  //   },
  //   unit: 'px'
  // })

  // const[background, setBackground] = useState('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg');

  return (
    <div>
    <Announcement />
    <Navbar setBackground={(url)=> dispatch(updateBackground(url))} />
      <div className='wrapper'>
      <div className='img_wrapper'>
        <div className='image' >

          <img src={filters.background}
            style={
              {
                filter: `
                ${filters.brightness.property}(${filters.brightness.value}${filters.brightness.unit})
                ${filters.contrast.property}(${filters.contrast.value}${filters.contrast.unit})
                ${filters.saturation.property}(${filters.saturation.value}${filters.saturation.unit})
                 ${filters.grayscale.property}(${filters.grayscale.value}${filters.grayscale.unit})
                  ${filters.sepia.property}(${filters.sepia.value}${filters.sepia.unit})
                   ${filters.blur.property}(${filters.blur.value}${filters.blur.unit})
                    ${filters.hueRotate.property}(${filters.hueRotate.value}${filters.hueRotate.unit})`
              }}
            alt="" />
        </div>
        </div>
        <div className='options'>
        <div className='mode'>
          <span>Brightness</span>
          <input
              type="range"
              min={filters.brightness.range.min}
              max={filters.brightness.range.max}
              value={filters.brightness.value}
              onChange={(e) => dispatch(updateBrightness(e.target.value))}
            />
          {/* <input type="range" min={brightness.range.min} max={brightness.range.max} value={brightness.value}
            onChange={(e) => { setBrightness({ ...brightness, value: `${e.target.value}` }) }} /> */}
          <span>Contrast</span>
          <input
              type="range"
              min={filters.contrast.range.min}
              max={filters.contrast.range.max}
              value={filters.contrast.value}
              onChange={(e) => dispatch(updateContrast(e.target.value))}
            />
          {/* <input type="range" min={contrast.range.min} max={contrast.range.max} value={contrast.value}
            onChange={(e) => { setContrast({ ...contrast, value: `${e.target.value}` }) }} /> */}
        </div>
        <div className='mode'>
          <span>Saturation</span>
          <input
              type="range"
              min={filters.saturation.range.min}
              max={filters.saturation.range.max}
              value={filters.saturation.value}
              onChange={(e) => dispatch(updateSaturation(e.target.value))}
            />
          {/* <input type="range" min={saturation.range.min} max={saturation.range.max} value={saturation.value}
            onChange={(e) => { setSaturation({ ...saturation, value: `${e.target.value}` }) }} /> */}
          <span>Grayscale</span>
          <input
              type="range"
              min={filters.grayscale.range.min}
              max={filters.grayscale.range.max}
              value={filters.grayscale.value}
              onChange={(e) => dispatch(updateGrayscale(e.target.value))}
            />
          {/* <input type="range" min={grayscale.range.min} max={grayscale.range.max} value={grayscale.value}
            onChange={(e) => { setGreyscale({ ...grayscale, value: `${e.target.value}` }) }} /> */}
        </div>
        <div className='mode'>
          <span>Sepia</span>
          <input
              type="range"
              min={filters.sepia.range.min}
              max={filters.sepia.range.max}
              value={filters.sepia.value}
              onChange={(e) => dispatch(updateSepia(e.target.value))}
            />
          {/* <input type="range" min={sepia.range.min} max={sepia.range.max} value={sepia.value}
            onChange={(e) => { setSepia({ ...sepia, value: `${e.target.value}` }) }} /> */}
          <span>Hue Rotate</span>
          <input
              type="range"
              min={filters.hueRotate.range.min}
              max={filters.hueRotate.range.max}
              value={filters.hueRotate.value}
              onChange={(e) => dispatch(updateHueRotate(e.target.value))}
            />
          {/* <input type="range" min={hueRotate.range.min} max={hueRotate.range.max} value={hueRotate.value}
            onChange={(e) => { setHueRotate({ ...hueRotate, value: `${e.target.value}` }) }} /> */}
        </div>
        <div className='mode blur'>
          <span>Blur</span>
          <input
              type="range"
              min={filters.blur.range.min}
              max={filters.blur.range.max}
              value={filters.blur.value}
              onChange={(e) => dispatch(updateBlur(e.target.value))}
            />
          {/* <input type="range" min={blur.range.min} max={blur.range.max} value={blur.value}
            onChange={(e) => { setBlur({ ...blur, value: `${e.target.value}` }) }} /> */}
        </div>
      </div>
    </div>
    </div>

  )
}

export default App
