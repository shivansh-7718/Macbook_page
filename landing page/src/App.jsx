import { Canvas } from '@react-three/fiber';
import React from 'react'
import  "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
  <div className="w-full h-screen font-['Helvetica_Now_Display']">
    <div className='navbar line flex gap-10 pt-10 pb-3  absolute top-0 left-1/2 -translate-x-1/2'>
      {["iPhone","iPad","services","ios","mac","products","iPhone","iPad","services","ios","mac","products"].map((e)=>(
        <a href="" className='text-white font-[400] text-sm capitalize'>{e}</a>
      ))}
    </div>
    <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
    <h3 className='masked text-7xl tracking-tighter font-[700]'>Macbook pro.</h3>
    <h5>Oh so pro!</h5>
    <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo cum maxim</p>
    </div>
    <Canvas camera={{fov:12,position:[0,-10,295]}}>
      <OrbitControls/>
      <Environment
         files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer/>
      </ScrollControls>
    </Canvas>
  </div> 
  )
};

export default App;