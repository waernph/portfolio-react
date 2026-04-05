import Grainient from './Grainient';
function Hero() {
  return (
    <section className="Hero">
      <div className='heroLogo'>
        <img src="src\Media\logos\danish_ae.svg" alt="" />
      </div>
      {/* color1= "#74ff86"
      color2="#b978ac"
      color3="#1B3C53" */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
          centerX={0.5}
          centerY={0.5}
          zoom={1}
        />
      </div>
    </section>
  )
}
export default Hero;