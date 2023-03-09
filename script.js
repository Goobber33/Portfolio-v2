// create scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('loading-icon'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// add ambient light and point light to the scene
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// load character model
var loader = new THREE.GLTFLoader();
loader.load('https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb', function(gltf) {
  var character = gltf.scene;
  character.scale.set(1.0, 1.0, 0.1);
  character.position.y = -1;
  character.position.x = 0;
  character.position.z = -2;
  character.rotation.y = Math.PI;
  scene.add(character);

  // find and animate robot armature
  var mixer = new THREE.AnimationMixer(character);
  var action = mixer.clipAction(gltf.animations[0]);

  // make robot wave
  var tracks = action.getClip().tracks;
  var waveTrack = new THREE.NumberKeyframeTrack('.bones[0].rotation[x]', [0, 0.9, 1], [0, Math.PI / 4, 0]);
  tracks.push(waveTrack);

  action.loop = THREE.LoopRepeat;
  action.clampWhenFinished = true;
  action.play();

  // rotate robot to face the camera
  var lookAtVec = new THREE.Vector3(0, 0, 0);
  lookAtVec.subVectors(camera.position, character.position);
  character.rotation.y = Math.atan2(lookAtVec.x, lookAtVec.z);

  // hide loading bar and show about me section when page is loaded
  window.addEventListener('load', function() {
    document.getElementById('loading-bar').style.display = 'none';
    document.getElementById('about-me').style.display = 'flex';
  });

  function animate() {
    requestAnimationFrame(animate);
    mixer.update(clock.getDelta());
    renderer.render(scene, camera);
  }

  animate();
});

var clock = new THREE.Clock();

// update loading bar as assets load
loader.manager.onProgress = function(url, itemsLoaded, itemsTotal) {
  var progress = itemsLoaded / itemsTotal;
  document.getElementById('loading-bar').style.width = progress * 100 + '%';
};
// animate scrolling to about me section
var aboutMeLink = document.getElementById('about-me-link');
aboutMeLink.addEventListener('click', function(e) {
  e.preventDefault();
  var aboutMeSection = document.getElementById('about-me');
  var aboutMeSectionTop = aboutMeSection.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = aboutMeSectionTop - 60;
  var duration = 1000;
  var startTime = null;

  function scroll(timestamp) {
    if (startTime === null) {
      startTime = timestamp;
    }

    var timeElapsed = timestamp - startTime;
    var scrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
});

// easing function
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}
