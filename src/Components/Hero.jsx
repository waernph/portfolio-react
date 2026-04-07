import Grainient from './Grainient';
import Logo from '../Media/logos/danish_ae.svg';
import DanishAe from '../Media/logos/danishAe';

function Hero() {
  return (
    <section className="Hero">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <div className='Logo'>
          <DanishAe />
          {/* <img src={Logo} alt="Logo with a danish ae" /> */}
          <h1>Philip Waern</h1>
        </div>

        <Grainient
          color1="#74ff86"
          color2="#1B3C53"
          color3="#b978ac"
          timeSpeed={0.7}
          colorBalance={-0.3}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={5}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.2}
          rotationAmount={500}
          noiseScale={0}
          grainAmount={0}
          grainScale={0.2}
          grainAnimated={false}
          contrast={1}
          gamma={1}
          saturation={1}
          centerX={0.3}
          centerY={0.2}
          zoom={1.2}
        />
      </div>
    </section>
  )
}
export default Hero;