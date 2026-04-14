let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');



var retangulo1= {
    x:50,
    y:10,
    largura:50,
    altura:10,
    cor: "red",

    desenha : function(){
       ctx.beginPath();
       ctx.fillStyle= this.cor;
       ctx.fillRect(this.x,this.y,this.largura,this.altura);
       ctx.closePath();}


}


var retangulo2= {
    x:200,
    y:300,
    largura:50,
    altura:30,
    cor: "blue",

    desenha : function(){
        ctx.beginPath();
        ctx.fillStyle= this.cor;
       ctx.fillRect(this.x,this.y,this.largura,this.altura);
       ctx.closePath();}
}



function animacao(){
ctx.clearRect(0,0,400,400)
retangulo1.x=retangulo1.x+1;
retangulo1.desenha();
retangulo2.x=retangulo2.x+1;
retangulo2.desenha();
requestAnimationFrame(animacao)
}
animacao();

