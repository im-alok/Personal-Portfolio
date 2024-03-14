import { Suspense,useState,useEffect } from "react";
import CanvasLoader from '../Loader'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
function Earth(props){
  const Earth = useGLTF("./planet/scene.gltf");
  return(
    <primitive 
      object={Earth.scene}
      scale={1.5}
      position={0}
      rotation-y={0}
    />
  )
}


function EarthCanvas(){

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

  return(
    <Canvas
    shadows
    frameloop="demand"
    gl={ {preserveDrawingBuffer:true}}
    camera={{ 
      fov:45,
      near:0.1,
      far:200,
      position:[-4,3,6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />
            <Earth isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas; 