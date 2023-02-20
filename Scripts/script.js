//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}






// Descarga del documento
const downloadCVBtn = document.querySelector('.btn_downloadCV');

downloadCVBtn.addEventListener('click', () => {
    const url = '../../Documents/Curiculum_Vitae.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'Curiculum_Vitae.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});




//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=10;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let java = document.getElementById("java");
crearBarra(java);
let kotlin = document.getElementById("kotlin");
crearBarra(kotlin);
let sql = document.getElementById("sql");
crearBarra(sql);
let c = document.getElementById("c");
crearBarra(c);
let murex = document.getElementById("murex");
crearBarra(murex);
let cobol = document.getElementById("cobol");
crearBarra(cobol);
let android_studio = document.getElementById("android_studio");
crearBarra(android_studio);
let eclipse = document.getElementById("eclipse");
crearBarra(eclipse);
let ensamblador = document.getElementById("ensamblador");
crearBarra(ensamblador);
let swift = document.getElementById("swift");
crearBarra(swift);
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let cocoa = document.getElementById("cocoa");
crearBarra(cocoa);
let javascript = document.getElementById("javascript");
crearBarra(javascript);



//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const interval_java = setInterval(function(){
            pintarBarra(java, 6, 0, interval_java);
        },100);
        const interval_kotlin = setInterval(function(){
            pintarBarra(kotlin, 6, 1, interval_kotlin);
        },100);
        const interval_sql = setInterval(function(){
            pintarBarra(sql, 6, 2, interval_sql);
        },100);
        const interval_c = setInterval(function(){
            pintarBarra(c, 6, 3, interval_c);
        },100);
        const interval_murex = setInterval(function(){
            pintarBarra(murex, 6, 4, interval_murex);
        },100);
        const interval_cobol = setInterval(function(){
            pintarBarra(cobol, 4, 5, interval_cobol);
        },100);
        const interval_android_studio = setInterval(function(){
            pintarBarra(android_studio, 6, 6, interval_android_studio);
        },100);
        const interval_eclipse = setInterval(function(){
            pintarBarra(eclipse, 6, 7, interval_eclipse);
        },100);
        const interval_ensamblador = setInterval(function(){
            pintarBarra(ensamblador, 4, 8, interval_ensamblador);
        },100);
        const interval_swift = setInterval(function(){
            pintarBarra(swift, 4, 9, interval_swift);
        },100);
        const interval_html = setInterval(function(){
            pintarBarra(html, 4, 10, interval_html);
        },100);
        const interval_css = setInterval(function(){
            pintarBarra(css, 4, 11, interval_css);
        },100);
        const interval_javascript = setInterval(function(){
            pintarBarra(javascript, 3, 12, interval_javascript);
        },100);
        const interval_cocoa = setInterval(function(){
            pintarBarra(cocoa, 2, 13, interval_cocoa);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}