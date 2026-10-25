const title = document.getElementById("titulo-principal");
const contenedorGlobal = document.getElementById("contenedor-global");
const boton = document.getElementById("boton");

let dark = false;

function cambiar() {
    const parrafos = document.querySelectorAll(".parrafo");

    if (dark === false) {
        
        document.body.style.background = "#121212";
        contenedorGlobal.style.background = "black"; 
        title.style.color = "white";


        parrafos.forEach(p => {
            p.style.color = "white";
        });


        dark = true;
    } else {
      
        document.body.style.background = "white";
        contenedorGlobal.style.background = "white";
        title.style.color = "black";

      
        parrafos.forEach(p => {
            p.style.color = "black";
        });


        dark = false;
    }
}

boton.addEventListener("click", cambiar);

const traducciones = {
    es: {
        titulo: "La Evolución de Fortnite: De un juego de supervivencia a un Metaverso",
        sub1: "1. Los verdaderos orígenes",
        p1: "Actualmente Fortnite, su modo de juego principal es el Battle Royale, pero no es lo que realmente tenian pensado los desarolladores era lo siguiente; su principal juego era Salvar al mundo y en aquel entonces se puso de moda los battle royale, querian hacer un enganche hacia el juego que habian desarollado durante años.",
        p2: "Anunciado por primera vez en 2011 por Epic Games, Salvar el Mundo era un título cooperativo donde los jugadores debían recolectar recursos durante el día y construir fuertes para defenderse de hordas de monstruos durante la noche. El desarrollo fue extremadamente largo y complejo, sufriendo múltiples retrasos y cambios internos para adaptarse al novedoso motor gráfico Unreal Engine 4.",
        sub2: "2. El boom del Battle Royale y la mecánica de construcción",
        p3: "En septiembre de 2017, viendo el arrollador éxito de juegos como PlayerUnknown's Battlegrounds (PUBG), el equipo de Epic Games desarrolló su propio modo Battle Royale en tan solo un par de meses. La decisión de lanzarlo de forma gratuita e independiente (modelo Free-to-Play) democratizó el acceso y supuso el mayor acierto de la historia de la compañía.",
        p4: "Lo que diferenció radicalmente a Fortnite de sus competidores fue la integración de las mecánicas de construcción heredadas de Salvar el Mundo. Los jugadores descubrieron rápidamente que podían usar las rampas y paredes no solo para crear refugios, sino como herramientas ofensivas, defensivas y de movilidad en pleno combate, elevando el nivel competitivo a un estándar nunca antes visto en los juegos de disparos.",
        sub3: "3. Colaboraciones masivas y el Metaverso",
        p5: "Fortnite dejó de ser un simple videojuego cuando empezó a contar una historia en tiempo real a través de los cambios en su propio mapa. Todo comenzó con la caída de un meteorito, pero las temporadas fueron escalando hasta llegar a eventos masivos en vivo. Momentos icónicos como el concierto de Marshmello o el evento astronómico de Travis Scott lograron reunir a más de 12 millones de jugadores simultáneos en el mundo virtual.",
        p6: "El fin del Capítulo 1 marcó otro hito en la historia de internet: un agujero negro se tragó todo el juego, dejándolo inaccesible durante días y generando una expectación mundial. Hoy en día, gracias a modos como LEGO Fortnite, Rocket Racing, Fortnite Festival y las herramientas del Unreal Editor (UEFN), Fortnite ha trascendido el Battle Royale para convertirse en una plataforma de entretenimiento global, un lugar donde conviven franquicias tan dispares como Marvel, Star Wars o Dragon Ball."
    },
    en: {
        titulo: "The Evolution of Fortnite: From a Survival Game to a Metaverse",
        sub1: "1. The True Origins",
        p1: "Currently, Fortnite's main game mode is Battle Royale, but that wasn't what the developers originally planned; their main game was Save the World, and back then battle royales became trendy, so they wanted to hook players into the game they had spent years developing.",
        p2: "Announced for the first time in 2011 by Epic Games, Save the World was a cooperative title where players had to gather resources during the day and build forts to defend themselves from hordes of monsters at night. The development was extremely long and complex, suffering multiple delays and internal changes to adapt to the novel Unreal Engine 4 graphic engine.",
        sub2: "2. The Battle Royale Boom and Building Mechanics",
        p3: "In September 2017, seeing the overwhelming success of games like PlayerUnknown's Battlegrounds (PUBG), the Epic Games team developed their own Battle Royale mode in just a couple of months. The decision to release it for free and independently (Free-to-Play model) democratized access and proved to be the greatest success in the company's history.",
        p4: "What radically differentiated Fortnite from its competitors was the integration of building mechanics inherited from Save the World. Players quickly discovered they could use ramps and walls not just for shelter, but as offensive, defensive, and mobility tools in the heat of combat, elevating the competitive level to a standard never before seen in shooter games.",
        sub3: "3. Massive Collaborations and the Metaverse",
        p5: "Fortnite stopped being a simple video game when it started telling a real-time story through changes on its own map. It all started with the fall of a meteorite, but the seasons escalated until reaching massive live events. Iconic moments like Marshmello's concert or Travis Scott's astronomical event managed to gather over 12 million simultaneous players in the virtual world.",
        p6: "The end of Chapter 1 marked another milestone in internet history: a black hole swallowed the entire game, leaving it inaccessible for days and generating global expectation. Today, thanks to modes like LEGO Fortnite, Rocket Racing, Fortnite Festival, and Unreal Editor tools (UEFN), Fortnite has transcended Battle Royale to become a global entertainment platform, a place where disparate franchises like Marvel, Star Wars, or Dragon Ball coexist."
    }
};

const selectorIdioma = document.getElementById("selector-idioma");

selectorIdioma.addEventListener("change", (e) => {
    const lang = e.target.value;
    
   
    title.innerText = traducciones[lang].titulo;
    document.getElementById("sub1").innerText = traducciones[lang].sub1;
    document.getElementById("p1").innerText = traducciones[lang].p1;
    document.getElementById("p2").innerText = traducciones[lang].p2;
    document.getElementById("sub2").innerText = traducciones[lang].sub2;
    document.getElementById("p3").innerText = traducciones[lang].p3;
    document.getElementById("p4").innerText = traducciones[lang].p4;
    document.getElementById("sub3").innerText = traducciones[lang].sub3;
    document.getElementById("p5").innerText = traducciones[lang].p5;
    document.getElementById("p6").innerText = traducciones[lang].p6;
});