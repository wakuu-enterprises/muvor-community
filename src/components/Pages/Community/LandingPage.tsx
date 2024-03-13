/* eslint-disable react-hooks/exhaustive-deps */
// LandingPage.tsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Text } from 'troika-three-text';
import ScrollTrigger from "gsap/ScrollTrigger";
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import socket from '../../../socket.tsx'
import Welcome from '../../../assets/images/white-diamond.jpg';
import WalletsAvail from '../../../assets/images/off-white.jpg';
import ComingSoon from '../../../assets/images/grey-off-white.jpg';
import Deals from '../../../assets/images/green-off-white.jpg';
// import Whitepaper from '../../../assets/images/yellow-off-white.jpg';
// import textureImg2 from '../../../assets/images/red_black_blocks.jpg';
// import textureImg3 from '../../../assets/images/red_black_flower.jpg';
// import textureImg4 from '../../../assets/images/red_black_streaks.jpg';
// import textureImg5 from '../../../assets/images/red_green_mist.jpg';
import Muvor1 from '../../../assets/images/MuvorWithout.png';
import Muvor2 from '../../../assets/images/MuvorLogo.png';
import Muvor3 from '../../../assets/images/muvorLIBanner.png';
import Muvor4 from '../../../assets/images/PHEANOM banner graphic.jpg';
import Muvor5 from '../../../assets/images/Muvor.png';
import ForSale from '../../../assets/images/stock-sale.jpg';

// import loadFont from '../../../assets/fonts/optimer_bold.typeface.json';
// import Displacement from '@pages/MyAssets/Maps/Displacement.tsx';

const LandingPage: React.FC = () => {
  THREE.Cache.enabled = true;
  const containerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  // const displacement: string = Displacement()
  // console.log(displacement)

  useEffect(() => {
    // initialize 3.js
    const mouseX = 0, mouseY = 0;
    const scene: THREE.Scene = new THREE.Scene(),
     camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(135, window.innerWidth / window.innerHeight, 0.1, 1000),
     renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer, clock: THREE.Clock = new THREE.Clock()/*, loader: THREE.TextureLoader = new THREE.TextureLoader()*/;
     const carouselRadius = 10;
     const carouselItemCount = 5;
     const carouselSpeed = 0.005; // Speed of rotation
     const particleGeometry = new THREE.BufferGeometry;
     const particleCount = 5000;

     socket.on('mvrx', m => {
      // set featured price 
      const isSet = sessionStorage.getItem('xprice') ? true : false;
      m && m.value != null && m.value > 0 && sessionStorage.setItem('xprice', m.value.toFixed(4));
      !isSet && window.location.reload(); 
     })
     
    const init = () => {
      // FIXME: Responsive Prototype
      function updateCameraPosition() {
        if (window.innerWidth < 600) {
          camera.position.z = 17; // Adjust for smaller screens
        } else if (window.innerWidth < 1200) {
          camera.position.z = 12; // Adjust for medium-sized screens
        } else {
          camera.position.z = 8; // Default for larger screens
        }
      }

      // Call the function initially
      updateCameraPosition();

      // Update camera position when the window is resized
      window.addEventListener('resize', updateCameraPosition);

      // track time
      const elapsedTime = clock.getElapsedTime();

      // Create a renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      // background
      renderer.setClearColor(new THREE.Color('#060b0c'), 1)

      // Initialize Particle variables
      const posArr = new Float32Array(particleCount * 3);
      const velArr = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        posArr[i] = (Math.random() - 0.5) * Math.random() * 1000;
        posArr[i+2] -= 250;  // Push particles back along the z-axis
        velArr[i] = (Math.random() - 0.5) * 0.001; // Adjusted velocity
      }
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1, // Increased particle size
      });
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleMesh);

      function animateParticles() {
        for (let i = 0; i < particleCount; i++) {
          // Apply random acceleration with reduced range and multiplier
          const accelerationFactor = 0.00005 + Math.random() * 0.00005; // Reduced range and multiplier
          velArr[i * 3] += (Math.random() - 0.5) * accelerationFactor;
          velArr[i * 3 + 1] += (Math.random() - 0.5) * accelerationFactor;
          velArr[i * 3 + 2] += (Math.random() - 0.5) * accelerationFactor;
      
          // Apply velocity to position
          posArr[i * 3] += velArr[i * 3];
          posArr[i * 3 + 1] += velArr[i * 3 + 1];
          posArr[i * 3 + 2] += velArr[i * 3 + 2];
      
          // Check boundaries and reset if needed
          if (
            Math.abs(posArr[i * 3]) > 1000 ||
            Math.abs(posArr[i * 3 + 1]) > 1000 ||
            Math.abs(posArr[i * 3 + 2]) > 1000
          ) {
            posArr[i * 3] = (Math.random() - 0.5) * Math.random() * 1000;
            posArr[i * 3 + 1] = (Math.random() - 0.5) * Math.random() * 1000;
            posArr[i * 3 + 2] = (Math.random() - 0.5) * Math.random() * 1000 - 250; // Adjusted z-position reset
          }
        }
      
        particleGeometry.attributes.position.needsUpdate = true; // Update buffer
      
        // Rotate the particles based on mouse input (you can adjust this part as needed)
        particleMesh.rotation.y += mouseY * elapsedTime;
        particleMesh.rotation.x += mouseX * elapsedTime;
      }
      
      // Load a font
      // const fontLoader = new FontLoader();

      // fontLoader.load('../../../assets/fonts/optimer_bold.typeface.json', function (font) {
      //   // Create 3D text
      //   const textGeometry = new TextGeometry('Your Text Here', {
      //     font: font,
      //     size: 5,
      //     height: 1,
      //     curveSegments: 12,
      //     bevelEnabled: true,
      //     bevelThickness: 0.2,
      //     bevelSize: 0.1,
      //     bevelOffset: 0,
      //     bevelSegments: 5
      //   });

      //   const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      //   // Set the position of the text
      //   textMesh.position.set(0, -10, -25); // Adjust position as needed
  
      //   scene.add(textMesh);
      // });
    

      // Define section width
      // const sectionWidth = window.innerWidth / 7;

      // for (let i = 0; i < 7; i++) {
      //   // Create starry night header
      //   const starryTexture = new THREE.TextureLoader().load(textureImg);
      //   const starryMaterial = new THREE.MeshBasicMaterial({ map: starryTexture, side: THREE.DoubleSide });
      //   const clickableGeometry = new THREE.PlaneGeometry(sectionWidth, 5);
      //   const clickableArea = new THREE.Mesh(clickableGeometry, starryMaterial);
      
      //   const x = (i * sectionWidth) - (window.innerWidth / 2) + (sectionWidth / 2);
      //   clickableArea.position.set(x, 20, -1);
        
      //   clickableArea.userData.sectionIndex = i; // Assign a unique index to each clickable area
      
      //   clickableArea.addEventListener('click', (event) => {
      //     const sectionIndex = event.target.userData.sectionIndex;
      //     console.log(`Clicked on section ${sectionIndex}`);
      //     // Add your action for each section click here
      //   });
      
      //   // Create a dynamic texture for text
      //   const canvas = document.createElement('canvas');
      //   const context = canvas.getContext('2d');
      //   context!.font = 'Bold 24px Arial';
      //   context!.fillStyle = 'white';
      //   context!.fillText(`Section ${i}`, 10, 30);
      
      //   const textTexture = new THREE.CanvasTexture(canvas);
      
      //   const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, side: THREE.DoubleSide });
      //   const textGeometry = new THREE.PlaneGeometry(sectionWidth, 5);
      //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      //   textMesh.position.set(x, 20, -2); // Adjust the z-position to make sure it's in front of the clickable area
      
      //   scene.add(clickableArea);
      //   scene.add(textMesh);
      // }      

      // Assuming `imagePaths` is an array of paths to your images loaded from a JSON file
      const imagePaths = [
        Welcome,
        ComingSoon,
        // Whitepaper
        WalletsAvail,
        Deals,
        // Add more paths as needed
      ];

      const textureLoader = new THREE.TextureLoader();
      const planeGroup = new THREE.Group();
      const planeWidth = 55; // Adjust as needed
      const planeHeight = 40; // Adjust as needed

      // Load textures and create planes
      for (let i = 0; i < 4; i++) {
        const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        const texture = textureLoader.load(imagePaths[i % imagePaths.length]);
        const planeMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);

        const x = i * (planeWidth + 1) - 50; // Adjust spacing between planes
        plane.position.set(x, -5, -25); // Adjust height and position
        planeGroup.add(plane);
      }

      scene.add(planeGroup);

      // Define rotation function
      const rotatePlanes = () => {
        const radius = 50;
        const totalPlanes = planeGroup.children.length;

        planeGroup.children.forEach((plane, index) => {
          const angle = (index / totalPlanes) * Math.PI * 2;
          const newX = radius * Math.cos(angle);
          const newZ = radius * Math.sin(angle);
          gsap.to(plane.position, { x: newX, z: newZ, duration: 5 });
        });
      };

      // Start the rotation animation
      let currentPlane = 0;

      const animateCarousel = () => {
        rotatePlanes();

        setTimeout(() => {
          gsap.to(planeGroup.children[currentPlane].position, { x: 0, z: -15, duration: 10 });
          currentPlane = (currentPlane + 1) % planeGroup.children.length;
        }, 5000);

        setTimeout(animateCarousel, 5000 + 2000); // Recursive call for next animation
      };
      
      animateCarousel();
      
      const featuredText = new Text()
      scene.add(featuredText)
      
      // Set properties to configure:
      featuredText.text = 'MVR        MVRX'
      featuredText.fontSize = 7
      featuredText.position.set(-25, -30, -8)
      featuredText.color = 0xdcdcdc
      
      // Update the rendering:
      featuredText.sync()

      // FIXME: AHEAD OF ITS TIME! NEEDS A 3D REDERER FOR DISPLACEMENT MAP!
      // // Displacement Plane
      // const priceGeometry = new THREE.PlaneGeometry(20, 20, 50, 50); // Adjust the size and segments as needed
      // const priceTexture1 = new THREE.TextureLoader()
      // const displacement1 = priceTexture1.load(displacement);
      // const priceTexture2 = new THREE.TextureLoader();
      // const displacement2 = priceTexture2.load(displacement);
      // const priceMaterial1 = new THREE.MeshPhongMaterial({ displacementMap: displacement1, displacementScale: 1 }); // Adjust the displacementScale as needed
      // const pricePlane1 = new THREE.Mesh(priceGeometry, priceMaterial1);
      // // pricePlane1.rotation.x = Math.PI / 2;
      // pricePlane1.position.set(-15, -50, 0)
      // scene.add(pricePlane1);
      // const priceMaterial2 = new THREE.MeshStandardMaterial({ displacementMap: displacement2, displacementScale: 1 }); // Adjust the displacementScale as needed
      // const pricePlane2 = new THREE.Mesh(priceGeometry, priceMaterial2);
      // // pricePlane2.rotation.x = Math.PI / 2;
      // pricePlane2.position.set(15, -50, 0)
      // scene.add(pricePlane2);

      // Create cubes for holding numbers
      const cubeGeometry = new THREE.BoxGeometry(15, 7, 2);

      // Make the material transparent with wireframes
      const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true, // Enable wireframes
        transparent: true, // Enable transparency
        opacity: 0.5 // Adjust the opacity level (0.0 to 1.0)
      });

      const cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);

      cube1.position.set(-10, -50, 0);
      cube2.position.set(10, -50, 0);

      scene.add(cube1);
      scene.add(cube2);

      // text inside boxes
      const price1 = new Text()
      const price2 = new Text()
      scene.add(price1)
      scene.add(price2)

      const xprice = sessionStorage.getItem('xprice') ? sessionStorage.getItem('xprice') : NaN

      // Set properties to configure:
      price1.text = `$${xprice}`
      price1.fontSize = 5
      price1.fontWeight = 'bold'
      price1.position.set(13, -45, -5)
      price1.color = 0xfffbf0
      
      // Set properties to configure:
      price2.text = '$NaN'
      price2.fontSize = 5
      price2.fontWeight = 'bold'
      price2.position.set(-23, -45, -5)
      price2.color = 0xfffbf0
      
      // Update the rendering:
      price1.sync()
      price2.sync()

        // const svgString = new XMLSerializer().serializeToString(containerRef.current!);
        // const svgTexture = new THREE.TextureLoader().load(`data:image/svg+xml;base64,${btoa(svgString)}`);
        // svgTexture.minFilter = THREE.NearestFilter;
        
        // const svgGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
        // const svgMaterial = new THREE.MeshStandardMaterial({ map: texture, displacementMap: texture, displacementScale: 30 });
        // const svgMesh = new THREE.Mesh(svgGeometry, svgMaterial);

        // document.body.appendChild(renderer.domElement);

        // scene.add(svgMesh);

        const servicesText = new Text()
        scene.add(servicesText)
        
        // Set properties to configure:
        servicesText.text = 'Muvor Services'
        servicesText.fontSize = 7
        servicesText.position.set(-23, -60, -10)
        servicesText.color = 0xdcdcdc
        
        // Update the rendering:
        servicesText.sync()

        // Assuming you have an array of image URLs in `carouselImages`
        const carouselImages = [
          Muvor1,
          Muvor2,
          Muvor3,
          Muvor4,
          Muvor5,
          // Add more paths as needed
        ];
        // Create a carousel
        const carouselGroup = new THREE.Group();

        for (let i = 0; i < carouselItemCount; i++) {
          const circleGeometry = new THREE.SphereGeometry(2, 32, 32);

          // Load the texture
          const texture = textureLoader.load(carouselImages[i % carouselImages.length]);
          const circleMaterial = new THREE.MeshBasicMaterial({ map: texture });

          const circle = new THREE.Mesh(circleGeometry, circleMaterial);

          const angle = (i / carouselItemCount) * Math.PI * 2;
          const x = Math.cos(angle) * carouselRadius;
          const z = Math.sin(angle) * carouselRadius;

          circle.lookAt(camera.position);
          circle.position.set(x, -70, z);
          carouselGroup.add(circle);
        }

        scene.add(carouselGroup);

        // Assuming you have an array of image URLs in `squareImages`
        const squareImages = [
          ForSale
          // Add more paths as needed
        ];

        // const popularText = new Text()
        // scene.add(popularText)
        
        // // Set properties to configure:
        // popularText.text = 'Popular'
        // popularText.fontSize = 7
        // popularText.position.set(-20, -90, -10)
        // popularText.color = 0xdcdcdc
        
        // // Update the rendering:
        // popularText.sync()

        // field of squares
        const cylRadius = 20; // Adjust this value for desired space
        const cylSize = 5; // Adjust this value for desired space
        const numCubes = cylSize * cylSize;
        const numWaypoints = 10; // Number of random waypoints per cube

        const generateRandomWaypoints = () => {
          const waypoints = [];

          for (let i = 0; i < numWaypoints; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const x = cylRadius * Math.sin(phi) * Math.cos(theta);
            const y = cylRadius * Math.sin(phi) * Math.sin(theta);
            const z = cylRadius * Math.cos(phi);

            waypoints.push(new THREE.Vector3(x, y, z));
          }

          return waypoints;
        };

        const smallCarouselGroup = new THREE.Group(); // Create a new group

        for (let i = 0; i < numCubes; i++) {
          const cubedGeometry = new THREE.BoxGeometry(2, 2, 2);

          // Load the texture
          const texture = textureLoader.load(squareImages[i % squareImages.length]);
          const cubedMaterial = new THREE.MeshBasicMaterial({ map: texture });

          const smallCube = new THREE.Mesh(cubedGeometry, cubedMaterial);

          const cubeWaypoints = generateRandomWaypoints();
          smallCarouselGroup.add(smallCube); // Add cube to the group

          smallCube.userData.waypoints = cubeWaypoints; // Store waypoints as user data
          smallCube.userData.currentWaypointIndex = 0; // Initialize current waypoint index

          // smallCube.addEventListener('mouseenter', () => {
          //   console.log("hello world!")
          //   // Add animation with gsap if desired
          // });

          // smallCube.addEventListener('mouseleave', () => {
          //   console.log("gb world!")
          //   // Add animation with gsap if desired
          // });
        }

        smallCarouselGroup.position.set(0, -100, -5); // Set the position

        scene.add(smallCarouselGroup);

        const rotateCarousel = () => {
          smallCarouselGroup.children.forEach(cube => {
            const waypoints = cube.userData.waypoints;
            let currentWaypointIndex = cube.userData.currentWaypointIndex;

            const targetWaypoint = waypoints[currentWaypointIndex];
            const direction = targetWaypoint.clone().sub(cube.position).normalize();
            const distance = targetWaypoint.distanceTo(cube.position);

            if (distance > 0.1) {
              cube.position.add(direction.multiplyScalar(0.1));
            } else {
              currentWaypointIndex = (currentWaypointIndex + 1) % numWaypoints;
              cube.userData.currentWaypointIndex = currentWaypointIndex;
            }

            cube.lookAt(camera.position);
          });
        };

        const extendedText = new Text()
        scene.add(extendedText)
        
        // Set properties to configure:
        extendedText.text = 'Popular & Beyond'
        extendedText.fontSize = 5
        extendedText.position.set(-23, -117, -10)
        extendedText.color = 0xdcdcdc
        
        // Update the rendering:
        extendedText.sync()

        // Assuming you have an array of image URLs in `imageList`
        const sphereImages = [
          ForSale
          // Add more paths as needed
        ];

        // Create rotating sphere of 2D planes
        const gridSize = 10;
        const sphereRadius = 50;
        const rotatingSquaresGroup = new THREE.Group();
        const rotationSpeeds: number[] = [];

        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const gridSquareGeometry = new THREE.PlaneGeometry(2.5, 2.5);

            // Load the texture
            const texture = textureLoader.load(sphereImages[(i * gridSize + j) % sphereImages.length]);
            const gridSquareMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

            const gridSquare = new THREE.Mesh(gridSquareGeometry, gridSquareMaterial);

            const theta = (i / gridSize) * Math.PI;
            const phi = (j / gridSize) * Math.PI * 2;

            const x = sphereRadius * Math.sin(theta) * Math.cos(phi);
            const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
            const z = sphereRadius * Math.cos(theta) * Math.random();

            rotationSpeeds.push(Math.random() * 0.02); // Store the speed in an array

            // Make the planes always face outward
            gridSquare.lookAt(camera.position);
            gridSquare.position.set(x, y, z);
            rotatingSquaresGroup.add(gridSquare);
          }
        }

        // Define rotation function
        const rotateSquares = () => {
          rotatingSquaresGroup.children.forEach((square, index) => {
            square.rotation.y += rotationSpeeds[index]; // Apply individual rotation speed
          });
          rotatingSquaresGroup.rotation.y += 0.01; // Adjust rotation speed
          // rotatingSquaresGroup.rotation.set(0, Math.PI / 2, 0); // Set the rotation center
          rotatingSquaresGroup.position.set(0, -170, -43); // Set the position
        };

        scene.add(rotatingSquaresGroup);

        // Assuming loadFont contains font data
        // fontLoader.load('../../../assets/fonts/Pixelify_Sans_Medium_Regular.json', function (font) {
        //   const textGeometry = new TextGeometry('Grass', {
        //     font: font,
        //     size: 10,
        //     height: 10,
        //   });
        //   const textMaterial = new THREE.MeshNormalMaterial();
        //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        //   textMesh.position.set(0, -150, -20);
        //   scene.add(textMesh);
        // });

        // add listeners
        // window.addEventListener('resize', (event) => {
        //   event.preventDefault();
        //   camera.aspect = window.innerWidth / window.innerHeight;
        //   camera.updateProjectionMatrix();
        //   renderer.setSize(window.innerWidth, window.innerHeight);      
        // })

        // Add a scroll listener to move the camera down the y-axis
        window.addEventListener('scroll', (event) => {
          event.preventDefault();
          const scrollOffsetY = window.scrollY;
          const scrollOffsetX = window.scrollX;
          camera.position.y = -scrollOffsetY * 2.5; // Adjust the factor as needed
          camera.position.x = -scrollOffsetX * 0.5; // Adjust the factor as needed  // Ensure the camera is looking at the center of the scene
        });

        // Render the scene
        const animate = function () {
          requestAnimationFrame(animate);
          carouselGroup.rotation.y += carouselSpeed;
          rotateSquares();
          rotateCarousel();
          animateParticles();
          renderer.render(scene, camera);
        };
        animate();
    }

    init();

    // gsap.registerPlugin(ScrollTrigger);
    
    // scene.rotation.set(0, 1.88, 0)
    // camera.position.set(2, 0, 5)
    
    // // let panelNum = 3;
    // ScrollTrigger.create({
    //   trigger: document.body,
    //   start: "top top",
    //   end: "bottom bottom",
    //   onUpdate: (self) => {
    //     console.log(self.progress)
    //     const progress: string = self.progress.toFixed(2);
    //     if (Number(progress) >= 0.9 && self.direction === 1) {
    //       // createPanel(panelNum++);
    //       ScrollTrigger.refresh();
    //     }
    //   },
    // });

    // const scene_anim = gsap.timeline()
    

    // // Full Height

    // scene_anim.to(scene.rotation, {y: 50, ease: "power1.inOut", scrollTrigger: {
      
    //   trigger: ".section-two",
    //   scrub: 1,

    //   endTrigger: ".section-four",
    //   end: "top bottom",

    // }});
  return () => {
      
      // Clean up Three.js resources (optional)
      renderer.dispose();
      scene.clear();
    };
  
  }, []);

  return <div ref={containerRef} />;
};

export default LandingPage;
