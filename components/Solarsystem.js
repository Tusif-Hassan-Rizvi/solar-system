import React from "react";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LightProbeHelper } from "three/addons/helpers/LightProbeHelper.js";
import {TeapotGeometry} from 'three/examples/jsm/geometries/TeapotGeometry'
import Stats from "three/examples/jsm/libs/stats.module";
import gsap from "gsap";
import * as THREE from "three";

export default function Solarsystem(props) {
  const canvasRef = useRef();
  const mediaQuery =
    typeof window !== "undefined" && window.matchMedia("(max-width: 500px)");
  useEffect(() => {
    // create a scene
    const scene = new THREE.Scene();

    //light
    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    //pointlight
    // const positionlight = new THREE.PointLight(0xffffff, 1, 100);
    // positionlight.position.set(30, 0, 0);
    // scene.add(positionlight);

    // pointLightHelper
    // const sphereSize = 1;
    // const pointLightHelper = new THREE.PointLightHelper(
    //   positionlight,
    //   sphereSize
    // );
    // scene.add(pointLightHelper);

    // create a sphere Moon
    const geometry = new THREE.SphereGeometry(
      mediaQuery.matches ? 3 : 5,
      64,
      64
    );
    const material = new THREE.MeshStandardMaterial({
      // color: "#00ff83",
      roughness: 0.6,
      // wireframe:true,
      map: new THREE.TextureLoader().load(props.imageurl),
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);


    //add a another gemetry on the screen
    // const cubeGemotry=new THREE.BoxGeometry( 5, 5, 5 )
    // const cubeMaterial=new THREE.MeshBasicMaterial( {color: 0x00ff00}, );
    // const cubebox= new THREE.Mesh( cubeGemotry, cubeMaterial );
    // cubebox.position.x=+10;
    // scene.add(cubebox)


    // teaport geometry 
    const teaportGeometry=new TeapotGeometry(1, 16);
    const teaportMaterial=new THREE.MeshNormalMaterial(
      {
        wireframe:true
      }
    )
    const teaportMesh=new THREE.Mesh(teaportGeometry, teaportMaterial);
    teaportMesh.position.x=+10;
    scene.add(teaportMesh)

    // size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // add background on scece
    const spaceTexture = new THREE.TextureLoader().load("./Space.jpg");
    scene.background = spaceTexture;

    //camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.5,
      100
    );
    camera.position.z = 20;
    scene.add(camera);

    //rendered
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    //controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false; //true/false
    controls.enableZoom = true;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 3;

    //stats
    const stats = Stats();
    document.body.appendChild(stats.dom);

    for(let i=0; i<stats.dom.children.length; i++){
      stats.dom.children[i].style.position="absolute";
      stats.dom.children[i].style.top="100px"; 
    }

    //Resize
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      //update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // creating a loop
    const loop = () => {
      // updating controls on every frame
      controls.update();
      // updating stats on every frame
      stats.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    //timeline
    const tl = gsap.timeline({ default: { duration: props.duration } });
    tl.fromTo(sphere.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  }, [props]);

  return <canvas className={props.style.canvasBox} ref={canvasRef} />;
}
