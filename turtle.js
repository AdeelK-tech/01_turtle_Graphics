export class turtle{
    constructor(cp,cd)
       {
           this.cp=cp;
           this.cd=cd;
           this.path=new THREE.Path()
           this.path.moveTo(this.cp.x,this.cp.y);
           this.points=this.path.getPoints()
           this.geometry=new THREE.BufferGeometry().setFromPoints(this.points);
           
           this.material=new THREE.LineBasicMaterial({color:0xffffff});
        //    this.line=new THREE.Line(this.geometry,this.material);
       }
       turn=(angle)=>{
           this.cd=angle;
       }
       turnTo=(angle)=>{
           this.cd+=angle;
       }
       forward=(distance,penUp)=>{
          const radTodeg=0.0175
           const x=this.cp.x+distance*Math.cos(this.cd*radTodeg)
           const y=this.cp.y+distance*Math.sin(this.cd*radTodeg);
           if(penUp){
               this.path.moveTo(x,y)
           }
           else{
               this.path.lineTo(x,y);
           }
           this.cp=new THREE.Vector2(x,y);
       }
       drawTurle=()=>{
           this.path.moveTo(this.cp.x,this.cp.y);
           this.points=this.path.getPoints();
           this.geometry=this.geometry.setFromPoints(this.points);
           this.line=new THREE.Line(this.geometry,this.material);
           return this.line

       }
   }
