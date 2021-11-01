import * as Turtle from './turtle.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.z = 15
// camera.position.x=0;
const angle = 0
const intialPoints = new THREE.Vector2(0, 0)
const t = new Turtle.turtle(intialPoints, angle)
// t.turnTo(90)
// t.forward(3,true);
// t.turnTo(-45)
// t.forward(5,false)
// scene.add(t.drawTurle())
t.turn(-90)
// t.forward(5,false);
// scene.add(t.drawTurle())
const drawPattern = (pattern) => {
  for (let p of pattern) {
    switch (p) {
      case 'F':
        t.forward(3, false)
        scene.add(t.drawTurle())
        break
      case '+':
        t.turnTo(90)
        break
      case '-':
        t.turnTo(-90)
        break

      default:
        console.log('only F and plus minus aree valid inputs')
        break
    }
  }
}
drawPattern('FFF+FF')
renderer.render(scene, camera)
