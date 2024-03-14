import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";

function Computers(props){

  const Computer=useGLTF('./desktop_pc/scene.gltf');

  return(
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black"/>
      <spotLight
      position={[-10,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      <primitive object={Computer.scene}
        scale={props.isMobile ? 0.4 : 0.75}
        position={props.isMobile ? [0,-2,-0.8] :[0,-3.25,-1.5]}
        rotation={[-0.01, -0.2 , -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas=() =>{

  const [isMobile,setIsMobile]=useState(false);

  useEffect(() =>{

    //Add a listener for the change to the screen size

    const mediaQuery=window.matchMedia('(max-width:500px)');
    console.log(mediaQuery.matches);

    //Set the initial value of the 'isMobile' state Variable 
    setIsMobile(mediaQuery.matches)

    //callback function to handle media query
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    //callback function as listener for change to media queries
    mediaQuery.addEventListener ('change',handleMediaQueryChange);

    //removing the media query after applying the changes!
    return() => {
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  },[])



  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{position:[20,3,5] , fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
    <Suspense fallback={<CanvasLoader />}>

      <OrbitControls enableZoom={false} 
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      
      <Computers isMobile={isMobile}/>

    </Suspense>

    <Preload all />

    </Canvas>
  )
}

export default ComputerCanvas;