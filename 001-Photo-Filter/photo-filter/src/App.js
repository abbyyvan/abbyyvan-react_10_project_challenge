import Announcement from './components/Announcement'
import "./index.css"
import Navbar from './components/Navbar'
import {
  updateBrightness,
  updateContrast,
  updateSaturation,
  updateGrayscale,
  updateSepia,
  updateHueRotate,
  updateBlur,
  updateBackground,
} from './redux/filterSlice';
import {useSelector, useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state)=> state.filters)

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
          <span>Contrast</span>
          <input
              type="range"
              min={filters.contrast.range.min}
              max={filters.contrast.range.max}
              value={filters.contrast.value}
              onChange={(e) => dispatch(updateContrast(e.target.value))}
            />
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
          <span>Grayscale</span>
          <input
              type="range"
              min={filters.grayscale.range.min}
              max={filters.grayscale.range.max}
              value={filters.grayscale.value}
              onChange={(e) => dispatch(updateGrayscale(e.target.value))}
            />
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
          <span>Hue Rotate</span>
          <input
              type="range"
              min={filters.hueRotate.range.min}
              max={filters.hueRotate.range.max}
              value={filters.hueRotate.value}
              onChange={(e) => dispatch(updateHueRotate(e.target.value))}
            />
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
        </div>
      </div>
    </div>
    </div>

  )
}

export default App
