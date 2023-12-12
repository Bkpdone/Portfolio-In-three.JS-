console.log('Jai Balaji!!!')
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json';
/**
 * Base
 */
// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()



//fog
const fog = new THREE.Fog('#262837', 1, 15);
scene.fog = fog
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Door
const colorDoorTexture = textureLoader.load('textures/door/color.jpg');
const alphaDoorTexture = textureLoader.load('textures/door/alpha.jpg');
const ambientOcclusionDoorTexture = textureLoader.load('textures/door/ambientOcclusion.jpg');
const heightDoorTexture = textureLoader.load('textures/door/height.jpg');
const metalnessDoorTexture = textureLoader.load('textures/door/metalness.jpg');
const normalDoorTexture = textureLoader.load('textures/door/normal.jpg');
const roughnessDoorTexture = textureLoader.load('textures/door/roughness.jpg');


//Walls
const colorWallTexture = textureLoader.load('textures/bricks/color.jpg');
const roughnessWallTexture = textureLoader.load('textures/bricks/roughness.jpg');
const ambientOcclusionWallTexture = textureLoader.load('textures/bricks/ambientOcclusion.jpg');
const normalWallTexture = textureLoader.load('textures/bricks/normal.jpg');

//grass
const colorgrassTexture = textureLoader.load('textures/grass/color.jpg');
const roughnessgrassTexture = textureLoader.load('textures/grass/roughness.jpg');
const ambientOcclusiongrassTexture = textureLoader.load('textures/grass/ambientOcclusion.jpg');
const normalgrassTexture = textureLoader.load('textures/grass/normal.jpg');


//Reapaet grass


colorgrassTexture.repeat.set(5, 5);
roughnessgrassTexture.repeat.set(5, 5);
ambientOcclusiongrassTexture.repeat.set(5, 5);
normalgrassTexture.repeat.set(5, 5);


colorgrassTexture.wrapS = THREE.RepeatWrapping;
roughnessgrassTexture.wrapS = THREE.RepeatWrapping;
ambientOcclusiongrassTexture.wrapS = THREE.RepeatWrapping;
normalgrassTexture.wrapS = THREE.RepeatWrapping;


colorgrassTexture.wrapT = THREE.RepeatWrapping;
roughnessgrassTexture.wrapT = THREE.RepeatWrapping;
ambientOcclusiongrassTexture.wrapT = THREE.RepeatWrapping;
normalgrassTexture.wrapT = THREE.RepeatWrapping;

//text

const matcapTexture = textureLoader.load('textures/matcaps/8.png');

//Pati

const pati1Texture = textureLoader.load('textures/pati/Linkedin.png');
const pati2Texture = textureLoader.load('textures/pati/Resume3.png');
const pati3Texture = textureLoader.load('textures/pati/cf.png');
/**
 * House
 */
// Temporary sphere


//Houe group



const base = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.5, 10),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82'
    })
);
scene.add(base);
base.receiveShadow = true;

const House = new THREE.Group();
scene.add(House);
House.position.y = 0.5 / 2;


const wallmaterial = new THREE.MeshStandardMaterial({
    map: colorWallTexture,
    aoMap: ambientOcclusionWallTexture,
    normalMap: normalWallTexture,
    roughnessMap: roughnessWallTexture
});

const chimani = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 4, 0.7),
    wallmaterial

);
chimani.position.set(-1.2, 5, 0)
House.add(chimani);

const topchimani = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.7, 1),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82'
    })
);
topchimani.position.set(-1.2, 7, 0)
House.add(topchimani);




const points = [];
for (let i = 0; i < 4; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 5 + 5, (i - 5) * 2));
}
const geometry = new THREE.LatheGeometry(points);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const lmap = new THREE.Mesh(geometry, material);
House.add(lmap);







const leftbase = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1.5, 1),
    wallmaterial
);
leftbase.position.set(1, 0, 4.5 - 0.2)
House.add(leftbase);


const rightbase = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1.5, 1),
    wallmaterial
);
rightbase.position.set(-1, 0, 4.5 - 0.2)
House.add(rightbase);


const headmidroof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(2.5, 1, 4),
    new THREE.MeshStandardMaterial({
        color: '#b35f45'
    })
);
headmidroof.rotation.y = Math.PI * 0.25;
headmidroof.position.y = 2.5 + 1 + 1.8;
headmidroof.position.z = 3.5
House.add(headmidroof);

const midroof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(4, 2, 4),
    new THREE.MeshStandardMaterial({
        color: '#b35f45'
    })
);
midroof.rotation.y = Math.PI * 0.25;
midroof.position.y = 2.5 + 1 + 2;
House.add(midroof);

const roof = new THREE.Mesh(
    new THREE.ConeBufferGeometry(5.15, 2, 4),
    new THREE.MeshStandardMaterial({
        color: '#b35f45'
    })
);
roof.rotation.y = Math.PI * 0.25;
roof.position.y = 2.5 + 1 + 0.01;
House.add(roof);

const xmiddlewalls = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 3),
    wallmaterial
);
xmiddlewalls.position.y = 2.5 + 0.5 + 1.5;
xmiddlewalls.position.z = 3;
House.add(xmiddlewalls);

const middlewalls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 1, 4),
    wallmaterial
);
middlewalls.position.y = 2.5 + 0.5 + 1;
middlewalls.position.z = 0;
House.add(middlewalls);

const rightpiller = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.3, 6, 8),
    wallmaterial
);
rightpiller.position.set(1, 2, 4.5)
House.add(rightpiller);


const leftpiller = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.3, 6, 8),
    wallmaterial
);
leftpiller.position.set(-1, 2, 4.5)
House.add(leftpiller);

const topwalls = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 3),
    wallmaterial
);
topwalls.position.y = 2.5 + 0.5 + 1;
topwalls.position.z = 3;
House.add(topwalls);

const upperwalls = new THREE.Mesh(
    new THREE.BoxGeometry(3, 1, 3),
    wallmaterial
);
upperwalls.position.y = 2.5 + 0.5;
upperwalls.position.z = 3.5;
House.add(upperwalls);

const walls = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2.5, 6),
    wallmaterial
);
walls.position.y = 1.25;
House.add(walls);


//door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: colorDoorTexture,
        alphaMap: alphaDoorTexture,
        aoMap: ambientOcclusionDoorTexture,
        transparent: true,
        displacementMap: heightDoorTexture,
        displacementScale: 0.2,
        normalMap: normalDoorTexture,
        metalnessMap: metalnessDoorTexture,
        roughnessMap: roughnessDoorTexture
    })
);
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2));
door.position.y = 1;
door.position.z = 3;
House.add(door);



const topdoor = new THREE.Mesh(
    new THREE.PlaneGeometry(1.3, 1.3, 100, 100),
    new THREE.MeshStandardMaterial({
        map: colorDoorTexture,
        alphaMap: alphaDoorTexture,
        aoMap: ambientOcclusionDoorTexture,
        transparent: true,
        displacementMap: heightDoorTexture,
        displacementScale: 0.2,
        normalMap: normalDoorTexture,
        metalnessMap: metalnessDoorTexture,
        roughnessMap: roughnessDoorTexture
    })
);
topdoor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2));
topdoor.position.y = 4;
topdoor.position.z = 4.5;
House.add(topdoor);


//Bush
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
    color: '#89c854'
});

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.castShadow = true
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 3)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
// bush2.castShadow = true
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 3.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.castShadow = true
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(- 0.8, 0.1, 3.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
// bush4.castShadow = true
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(- 1, 0.05, 3.6)


const bushout1 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout1.castShadow = true
bushout1.scale.set(0.53, 0.53, 0.53)
bushout1.position.set(4.6, -0.2, 5)

const bushout2 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout2.castShadow = true
bushout2.scale.set(0.27, 0.27, 0.27)
bushout2.position.set(4.1, -0.2, 5.4)

const bushout3 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout3.castShadow = true
bushout3.scale.set(0.64, 0.64, 0.64)
bushout3.position.set(- 0.8, -0.3, 4.9)

const bushout4 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout4.castShadow = true
bushout4.scale.set(0.25, 0.25, 0.25)
bushout4.position.set(- 0.1, -0.15, 5.6)


const bushout5 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout5.castShadow = true
bushout5.scale.set(0.55, 0.55, 0.55)
bushout5.position.set(-4.8, -0.2, 4);


const bushout6 = new THREE.Mesh(bushGeometry, bushMaterial)
bushout6.castShadow = true
bushout6.scale.set(0.27, 0.27, 0.27)
bushout6.position.set(-4.2, -0.1, 4.1)

House.add(bushout6, bushout5, bush1, bush2, bush3, bush4, bushout1, bushout2, bushout3, bushout4);



const fontLoader = new FontLoader();





//Patis


const pati1group = new THREE.Group();
scene.add(pati1group);




const pati1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.6, 0.1),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        name: 'pati1'
    }),
);
pati1.name = 'pati1';
const smallpati1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.25, 0.05),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        map: pati1Texture,
        matcap: matcapTexture,
        name: 'pati1'
    })
)
smallpati1.name = 'pati1';
const pati1holder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.1, 2, 8),
    new THREE.MeshStandardMaterial({

        color: '#ac8e82'
    })
)
const x1 = 6;
const y1 = 1.5;
const z1 = 7;
const xR = -0.2;
let f1 = 0;

// const spotLight = new THREE.SpotLight(0xffffff, 5, 10, Math.PI * 0.1, 0.125, 4);
// spotLight.position.set(x1 + 2.1, y1, z1 + 2.1);
// pati1group.add(spotLight);
//gui.add(spotLight, 'intensity').min(0).max(50).step(0.01);

// const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0.2);
// pati1group.add(spotLight)


const lnpointLight = new THREE.PointLight('#ff00ff', 3, 3)
// lnpointLight.castShadow = true
// lnpointLight.shadow.mapSize.width = 256
// lnpointLight.shadow.mapSize.height = 256
// lnpointLight.shadow.camera.far = 7
lnpointLight.position.set(x1,2.8, z1);
scene.add(lnpointLight);



pati1holder.position.set(x1, y1 - 1, z1);
pati1holder.rotation.set(-0.1, 0, -0.2)
smallpati1.rotation.set(xR, 0, 0);
pati1.rotation.set(xR, 0, 0);
smallpati1.position.set(x1 + 0.15, y1, z1 + 0.07 - 0.09);
pati1.position.set(x1 + 0.15, y1, z1 - 0.09);
pati1group.add(pati1, smallpati1, pati1holder);

const pati1gravepati1Geometry = new THREE.BoxGeometry(0.6, 8, 0.2);
const pati1gravepati1Material = new THREE.MeshStandardMaterial({
    color: '#b2b6b1'
});




const graveGroup1 = new THREE.Group();
scene.add(graveGroup1);
const gravepati1 = new THREE.Mesh(pati1gravepati1Geometry, pati1gravepati1Material);
gravepati1.name = 'Linkedin';
gravepati1.position.set(x1 - 0.4, y1 - 5.6, z1 + 0.2);
graveGroup1.add(gravepati1);




let temp1;
//Pati 1
// fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//     // Material




// });



// fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//     // Material




// });
/////////////////////////////////////////////////////////////


const pati2group = new THREE.Group();
scene.add(pati2group);




const pati2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.6, 0.1),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        name: 'pati2'
    }),
);
pati2.name = 'pati2';
const smallpati2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.25, 0.05),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        map: pati2Texture,
        matcap: matcapTexture,
        name: 'pati2'
    })
)
smallpati2.name = 'pati2';
const pati2holder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.1, 2, 8),
    new THREE.MeshStandardMaterial({

        color: '#ac8e82'
    })
)
const x2 = -5;
const y2 = 1.5;
const z2 = 9;
// const xR =-0.2;
let f2 = 0;

// const spotLight2 = new THREE.SpotLight(0xffffff, 4, 10, Math.PI * 0.1, 0.125, 4);
// spotLight2.position.set(x2 - 1, y2, z2 + 2.0);
// pati2group.add(spotLight2);
// //gui.add(spotLight2, 'intensity').min(0).max(50).step(0.01);

// const spotLight2Helper = new THREE.SpotLightHelper(spotLight, 0.2);
// pati2group.add(spotLight2)

const cvpointLight = new THREE.PointLight('#ffffff', 2.5, 3)
// cvpointLight.castShadow = true
// cvpointLight.shadow.mapSize.width = 256
// cvpointLight.shadow.mapSize.height = 256
// cvpointLight.shadow.camera.far = 7
cvpointLight.position.set(x2, 2.8, z2);
pati2group.add(cvpointLight);

pati2holder.position.set(x2, y2 - 1, z2);
pati2holder.rotation.set(-0.1, 0, -0.2)
smallpati2.rotation.set(xR, -0.5, 0);
pati2.rotation.set(xR, -0.5, 0);
smallpati2.position.set(x2 + 0.15, y2, z2 + 0.07 - 0.09);
pati2.position.set(x2 + 0.15, y2, z2 - 0.09);
pati2group.add(pati2, smallpati2, pati2holder);

const pati2gravepati2Geometry = new THREE.BoxGeometry(0.6, 8, 0.2);
const pati2gravepati2Material = new THREE.MeshStandardMaterial({
    color: '#b2b6b1'
});




const graveGroup2 = new THREE.Group();
scene.add(graveGroup2);
const gravepati2 = new THREE.Mesh(pati2gravepati2Geometry, pati2gravepati2Material);
gravepati2.name = 'CV';
gravepati2.position.set(x2 - 0.4, y2 - 5.6, z2 + 0.2);
graveGroup2.add(gravepati2);


let temp2;
//Pati 1
// fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//     // Material




// });




// fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//     // Material




// });






//////////////////////////////////////////////////////////////////////////////////////////////////////////





const pati3group = new THREE.Group();
scene.add(pati3group);




const pati3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.6, 0.1),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        name: 'pati3'
    }),
);
pati3.name = 'pati3';
const smallpati3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.25, 0.05),
    new THREE.MeshStandardMaterial({
        color: '#ac8e82',
        map: pati3Texture,
        matcap: matcapTexture,
        name: 'pati3'
    })
)
smallpati3.name = 'pati3';
const pati3holder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.1, 2, 8),
    new THREE.MeshStandardMaterial({

        color: '#ac8e82'
    })
)
const x3 = -6;
const y3 = 1.5;
const z3 = -7;
const xR1 = -0.2;
let f3 = 0;

// const spotLight3 = new THREE.SpotLight(0xffffff, 10, 10, Math.PI * 0.1, 0.125, 5);
// spotLight3.position.set(x3 - 2, y3, -z3 - 16);
// pati3group.add(spotLight3);
// //gui.add(spotLight3, 'intensity').min(0).max(50).step(0.01);

// const spotLight3Helper = new THREE.SpotLightHelper(spotLight, 0.2);
// pati3group.add(spotLight3)

chimani.castShadow = true;
topchimani.castShadow = true;

pati3holder.position.set(x3, y3 - 1, z3);
pati3holder.rotation.set(-0.1, 0, -0.2)
smallpati3.rotation.set(xR1, -1.25, 0);
pati3.rotation.set(xR1, -1.25, 0);
smallpati3.position.set(x3 - 0.08 + 0.15, y3, z3 - 0.2);
pati3.position.set(x3 + 0.15, y3, z3 - 0.09);
pati3group.add(pati3, smallpati3, pati3holder);

const pati3gravepati3Geometry = new THREE.BoxGeometry(1, 8, 0.2);
const pati3gravepati3Material = new THREE.MeshStandardMaterial({
    color: '#b2b6b1'
});




const graveGroup3 = new THREE.Group();
scene.add(graveGroup3);
const gravepati3 = new THREE.Mesh(pati3gravepati3Geometry, pati3gravepati3Material);
gravepati3.name = 'CF';
gravepati3.position.set(x3 - 0.4, y3 - 5.6, z3 + 0.2);
graveGroup3.add(gravepati3);


let temp3;
//Pati 1
// fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
//     // Material




// });



const cfpointLight = new THREE.PointLight('#00ffff', 3, 3)
// cfpointLight.castShadow = true
// cfpointLight.shadow.mapSize.width = 256
// cfpointLight.shadow.mapSize.height = 256
// cfpointLight.shadow.camera.far = 7
cfpointLight.position.set(-7, 3, -7);
pati3group.add(cfpointLight);

fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
    // Material
    const material = new THREE.MeshMatcapMaterial({
        matcap: matcapTexture,

    });

    const textGeometryOn = new TextGeometry('Click On Me.!', {

        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    });
    textGeometryOn.center();



    const text = new THREE.Mesh(textGeometryOn, material);
    temp2 = text
    // text.castShadow = true;
    text.position.set(x3 + 0.07, y3 + 0.2, z3 - 0.17);
    text.scale.set(0.21, 0.21, 0.21);
    text.rotation.set(xR, -0.5, 0);
    text.rotation.set(xR1, -1.25, 0);
    pati3group.add(text);

    ////////////////////////////////////////////////////////////////


    const textGeometry0 = new TextGeometry('LinkedIn', {
        name: 'Linked',
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    });
    textGeometry0.center();



    const text0 = new THREE.Mesh(textGeometry0, material);
    temp1 = text
    // text0.castShadow = true;
    text0.position.set(x1 - 0.4, y1 + 3.8 - 5.6, z1 + 0.29);
    text0.scale.set(0.21, 0.21, 0.21);

    graveGroup1.add(text0);


    ////////////////////////////////////////////////////////////////






    const text2 = new THREE.Mesh(textGeometryOn, material);

    text2.position.set(x1 + 0.15, y1 + 0.20, z1 - 0.09);
    text2.scale.set(0.21, 0.21, 0.21);
    text2.rotation.set(xR, 0, 0);
    pati1group.add(text2);




    ////////////////////////////////////////////////////////////////////////


    const textGeometry3 = new TextGeometry('Resume', {
        name: 'CV',
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    });
    textGeometry3.center();



    const text3 = new THREE.Mesh(textGeometry3, material);
  
    text3.position.set(x2 - 0.4, y2 + 3.8 - 5.6, z2 + 0.29);
    text3.scale.set(0.21, 0.21, 0.21);
    graveGroup2.add(text3);



    //////////////////////////////////////////////////////////////////////////////////








    const text4 = new THREE.Mesh(textGeometryOn, material);

    text4.position.set(x2 + 0.06, y2 + 0.2, z2 - 0.15);
    text4.scale.set(0.21, 0.21, 0.21);
    text4.rotation.set(xR, -0.5, 0);
    pati2group.add(text4);


    //////////////////////////////////////////////////



    const textGeometry5 = new TextGeometry('CodeForces', {
        name: 'CF',
        font: font,
        size: 0.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    });
    textGeometry5.center();



    const text5 = new THREE.Mesh(textGeometry5, material);


    text5.position.set(x3 - 0.4, y3 + 3.8 - 5.6, z3 + 0.29);
    text5.scale.set(0.21, 0.21, 0.21);

    graveGroup3.add(text5);


});




//graves froups
const graves = new THREE.Group();
scene.add(graves);

const graveGeometry = new THREE.BoxGeometry(0.6, 1, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
    color: '#b2b6b1'
    // color:0xff0000
});

for (let i = 0; i < 69; ++i) {

    //make random + circle
    const angle = Math.random() * Math.PI * 2;
    const radius = 7 + Math.random() * 6.5;
    const x = Math.sin(angle) * radius + 0;
    const z = Math.cos(angle) * radius + 0;
    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    graves.add(grave);
    grave.position.set(x, 0.2, z);
    grave.rotation.y = (Math.random() - 0.5) * 0.4;
    grave.rotation.z = (Math.random() - 0.5) * 0.4;
    grave.castShadow = true
    // grave.position.x=Math.sin(angle);
    // grave.position.x=Math.cos(angle);

}
// pati2.receiveShadow = true;
// pati1.receiveShadow = true;
// pati3.receiveShadow = true;
// House.receiveShadow = true;
// gravepati1.castShadow = true;
// gravepati2.castShadow = true;
// gravepati3.castShadow = true;
// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(28, 28),
    new THREE.MeshStandardMaterial({
        map: colorgrassTexture,
        aoMap: ambientOcclusiongrassTexture,
        normalMap: normalgrassTexture,
        roughnessMap: roughnessgrassTexture,
    })
);
floor.receiveShadow = true;
floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2));
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
//gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);

scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2);
moonLight.castShadow = true;
moonLight.shadow.mapSize.width = 256
moonLight.shadow.mapSize.height = 256
moonLight.shadow.camera.far = 7
//gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
//gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
//gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
//gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)




// doorLight
const doorLight = new THREE.PointLight('#ff7d46', 2, 7);
doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7
doorLight.position.set(0, 2.2, 3.9)
House.add(doorLight);

const chimanidoorLight = new THREE.PointLight('#ffffff', 2.2, 7);
// chimanidoorLight.castShadow = true;
// chimanidoorLight.shadow.mapSize.width = 256
// chimanidoorLight.shadow.mapSize.height = 256
// chimanidoorLight.shadow.camera.far = 7
chimanidoorLight.position.set(-3, 9, -3)
House.add(chimanidoorLight);


const topdoorLight = new THREE.PointLight('#ff7d46', 1.5, 7);
// topdoorLight.castShadow = true;
// topdoorLight.shadow.mapSize.width = 256
// topdoorLight.shadow.mapSize.height = 256
// topdoorLight.shadow.camera.far = 7
topdoorLight.position.set(0, 5, 5.9)
House.add(topdoorLight);

///Ghosts
const Raja = new THREE.Group();
scene.add(Raja);
const Raja2 = new THREE.Group();
scene.add(Raja2);
const Hero = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 32, 32),
    new THREE.MeshStandardMaterial()
)
const Hero2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial()
)
const Hero3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 32, 32),
    new THREE.MeshStandardMaterial()
)
const Hero4 = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshStandardMaterial()
)
const Hghost1 = new THREE.PointLight('#ff00ff', 9, 3)
// Hghost1.castShadow = true
// Hghost1.shadow.mapSize.width = 256
// Hghost1.shadow.mapSize.height = 256
// Hghost1.shadow.camera.far = 7
Hghost1.position.set(7, 7, 7);


const Hghost2 = new THREE.PointLight('#ffffff', 8, 4)
Hghost2.castShadow = true
Hghost2.shadow.mapSize.width = 256
Hghost2.shadow.mapSize.height = 256
Hghost2.shadow.camera.far = 7
Hghost2.position.set(7, 8.5, 7);
Hero.position.set(7, 7, 7);
Hero2.position.set(7, 7 - 0.5, 7);
Hero3.position.set(7, 7 - 0.8, 7);
Hero4.position.set(7, 7 - 1.5, 7);
Raja.add(Hero, Hero2, Hero3, Hero4, Hghost1, Hghost2);







const ghost1 = new THREE.PointLight('#ff00ff', 5, 3)
ghost1.castShadow = true
ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7
scene.add(ghost1)

const ghost2 = new THREE.PointLight('#00ffff', 3.5, 3)
ghost2.castShadow = true
ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7
scene.add(ghost2)

const ghost3 = new THREE.PointLight('#ff7800', 3.5, 3)
ghost3.castShadow = true
ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7
scene.add(ghost3)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))
renderer.shadowMap.enabled = true;
renderer.setClearColor('#262837');



/////////////////Sound

const listener = new THREE.AudioListener();
camera.add(listener);

// create an Audio source
const sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load('effects/sound2.mp3', function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(2);
    // sound.play();
});

// create an AudioAnalyser, passing in the sound and desired fftSize
const analyser = new THREE.AudioAnalyser(sound, 32);


///////////////////////////////////////////////////
const listener1 = new THREE.AudioListener();
camera.add(listener1);

// create an Audio source
const sound1 = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader1 = new THREE.AudioLoader();
audioLoader1.load('effects/sound1.mp3', function (buffer) {
    sound1.setBuffer(buffer);
    sound1.setLoop(true);
    sound1.setVolume(2);
    sound1.play();
});


// create an AudioAnalyser, passing in the sound and desired fftSize
const analyser1 = new THREE.AudioAnalyser(sound1, 32);



//Event
const clock = new THREE.Clock();
const clock1 = new THREE.Clock()
const clock2 = new THREE.Clock()
const clock3 = new THREE.Clock()
let clockTemp1;


// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Handle mouse click event
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    //sound chalu kar
    sound.play();
    sound1.setVolume(0.001);
    // Calculate objects intersecting the picking ray
    ////console.log(scene.children);
    const intersects = raycaster.intersectObjects(scene.children);

    

    if (intersects.length > 0) {
        // You clicked on a mesh, perform redirection
        ////console.log("ram=> ", intersects[0].object.name);
        ////console.log("Balaji => ", intersects[0].object.geometry);

        if (intersects[0].object.name == 'pati1') {


            if (f1 == 0) {
                clock1.start()
            }
            f1 = !f1;
            console.log('Jai Balaji 1 => ', f1);
        }
        else if (intersects[0].object.name == 'Linkedin') {
            window.open('https://www.linkedin.com/in/bhavesh-pharate-452b04217/?originalSubdomain=in', '_blank');
        }
        else if (intersects[0].object.name == 'pati2') {

            if (f2 == 0) {
                clock2.start()
            }
            f2 = !f2;
            //console.log('Jai Balaji 2 => ', f2);
        }
        else if (intersects[0].object.name == 'CV') {
            window.open('https://drive.google.com/file/d/1BbaKGX-aZp-B4bCEZZBZVoJEsXr_cxzf/view?usp=sharing', '_blank');
        }
        else if (intersects[0].object.name == 'pati3') {

            ////console.log('Jai Balaji33333333 \n');
            if (f3 == 0) {
                clock3.start()
            }
            f3 = !f3;
            //console.log('Jai Balaji 3 => ', f3);
        }
        else if (intersects[0].object.name == 'CF') {
            window.open('https://codeforces.com/profile/Bhaveshpharate', '_blank');
        }
    }
}

// Add event listener for mouse clicks
window.addEventListener('click', onMouseClick);





/**
 * Animate
 */


const tick = () => {

    controls.update();
    const elapsedTime = clock.getElapsedTime();
    const elapsedTime1 = clock1.getElapsedTime()
    const elapsedTime2 = clock2.getElapsedTime()
    const elapsedTime3 = clock3.getElapsedTime()



    if (analyser) {
        const data = analyser.getFrequencyData();
        // Use 'data' for visualization or other purposes
    }

    if (analyser1) {
        const data = analyser1.getFrequencyData();
        // Use 'data' for visualization or other purposes
    }



    // ////console.log(elapsedTime)
    const gostspeed1 = elapsedTime * 0.25;
    ghost1.position.x = Math.sin(gostspeed1) * 9;
    ghost1.position.z = Math.cos(gostspeed1) * 9;
    ghost1.position.y = Math.sin(elapsedTime) * 6




    const ghost2Angle = - elapsedTime * 0.35;
    ghost2.position.x = Math.cos(ghost2Angle) * 11.5;
    ghost2.position.z = Math.sin(ghost2Angle) * 11.5;
    ghost2.position.y = Math.sin(elapsedTime * 2.4) + Math.sin(elapsedTime * 2.5)

    const ghost3Angle = - elapsedTime * 0.5
    ghost3.position.x = Math.cos(ghost3Angle) * (12.5 + Math.sin(elapsedTime * 0.32))
    ghost3.position.z = Math.sin(ghost3Angle) * (12.5 + Math.sin(elapsedTime * 0.5))
    ghost3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)



    Raja.position.x = Math.sin(elapsedTime*0.35) * 9.5 - 6;
    Raja.position.z = Math.cos(elapsedTime*0.35) * 8.5 - 6;
    Raja.position.y = Math.sin(elapsedTime ) * 8;


    if (f1 && graveGroup1.position.y < 5) {

        graveGroup1.position.y = +elapsedTime1 * 0.5;


        if (f2 && graveGroup2.position.y < 5) {
            graveGroup2.position.y = +elapsedTime2 * 0.5;
        }
        if (f3 && graveGroup3.position.y < 8) {

            graveGroup3.position.y = +elapsedTime3 * 0.5;

        }

    }
    else if (f2 && graveGroup2.position.y < 5) {

        graveGroup2.position.y = +elapsedTime2 * 0.5;


        if (f3 && graveGroup3.position.y < 8) {

            graveGroup3.position.y = +elapsedTime3 * 0.5;

        }

        if (f1 && graveGroup1.position.y < 5) {
            graveGroup1.position.y = +elapsedTime1 * 0.5;
        }

    }
    else if (f3 && graveGroup3.position.y < 8) {

        graveGroup3.position.y = +elapsedTime3 * 0.5;


        if (f1 && graveGroup1.position.y < 5) {
            graveGroup1.position.y = +elapsedTime1 * 0.5;
        }

        if (f2 && graveGroup2.position.y < 5) {
            graveGroup2.position.y = +elapsedTime2 * 0.5;
        }
    }
    else {

        if (sound.isPlaying) {
            sound.stop();
            sound1.setVolume(2);
        }
        if (f1) {
            f1 = 0;
            clock1.stop();
        }
        if (f2) {
            f2 = 0;
            clock2.stop();
        }
        if (f3) {
            f3 = 0;
            clock3.stop();
        }

    }
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick();