const products = [
    {
        id: 1, 
        name: "Bioshock 2 Remastered",
        description: "Situado unos 10 años después de los eventos del Bioshock original, los ecos de los pecados pasados vuelven a resonar por las salas de Rapture. A lo largo de la costa del Atlántico, un monstruo ha estado secuestrando niñas pequeñas, llevándoselas de regreso a la ciudad submarina de Rapture.",
        price: 200,
        category: "accion",
        image: "../assets/generos/accion/bioshock-2-remastered.jpg"
    },
    {
        id: 2, 
        name: "Fallout 4",
        description: "Eres el único superviviente del Refugio 111 en un mundo destruido por la guerra nuclear. Cada segundo es una lucha por la supervivencia, y en tus manos estarán todas las decisiones. Solo tú puedes reconstruir el yermo y decidir su futuro. Bienvenido a casa.",
        price: 200,
        category: "accion",
        image: "../assets/generos/accion/fallout-4.jpg"
    },
    {
        id: 3, 
        name: "Sekiro - Shadow Die Twice",
        description: "Un guerrero desfigurado y caído en desgracia que ha sido rescatado al borde de la muerte. Tras jurar proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de despiadados enemigos, entre ellos el peligroso clan Ashina. Cuando el joven señor sea capturado, nada te detendrá en tu peligrosa aventura por restituir tu honor, ni siquiera la muerte.",
        price: 200,
        category: "accion",
        image: "../assets/generos/accion/sekiro-shadow-die-twice.webp"
    },
    {
        id: 4, 
        name: "The Last Of Us - Part I",
        description: "En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país.",
        price: 200,
        category: "accion",
        image: "../assets/generos/accion/the-last-of-us-part-I.webp"
    },
    {
        id: 5, 
        name: "Don't Starve",
        description: "Don’t Starve es un implacable juego de supervivencia en la naturaleza repleto de ciencia y magia. Juegas como Wilson, un intrépido caballero científico que ha sido atrapado por un demonio y transportado a un misterioso mundo en estado salvaje. Wilson deberá aprender a explotar su entorno y a sus habitantes si quiere albergar alguna esperanza de escapar y encontrar la forma de regresar a casa.",
        price: 200,
        category: "aventura",
        image: "../assets/generos/aventura/dont-starve.jpg"
    },
    {
        id: 6, 
        name: "Hollow Knight",
        description: "Hollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz amistad con extraños insectos y resuelve los antiguos misterios que yacen en el corazón de reino.",
        price: 200,
        category: "aventura",
        image: "../assets/generos/aventura/hollow-knight.webp"
    },
    {
    id: 7, 
        name: "Terraria",
        description: "¡Cava, lucha, explora, construye! Nada es imposible en este juego de aventuras repleto de acción. El mundo es tu lienzo y la tierra misma es tu pintura. ¡Coge tus herramientas y adelante! Crea armas para deshacerte de una gran variedad de enemigos en numerosos ecosistemas.",
        price: 200,
        category: "aventura",
        image: "../assets/generos/aventura/terraria.webp"
    },
    {
        id: 8, 
        name: "The Witcher 3 - Wild Hunt",
        description: "Eres Geralt de Rivia, cazador de monstruos. En un continente devastado por la guerra e infestado de criaturas, tu misión es encontrar a Ciri, la niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.",
        price: 200,
        category: "aventura",
        image: "../assets/generos/aventura/the-witcher-3-wild-hunt.webp"
    },
    {
        id: 9, 
        name: "Dead By Daylight",
        description: "Un juego de horror de multijugador en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados, torturados y asesinados. El objetivo del superviviente en cada encuentro es escapar del área de matanza sin que lo capture el asesino.",
        price: 200,
        category: "terror",
        image: "../assets/generos/terror/dead-by-daylight.jpg"
    },
    {
        id: 10, 
        name: "Dead Space",
        description: "Isaac Clarke, un ingeniero cualquiera con la misión de reparar la descomunal nave extractora USG Ishimura, pero descubrirá que algo ha ido terriblemente mal. La tripulación de la nave ha sido asesinada y su querida compañera Nicole está perdida en algún lugar a bordo. Sin nadie que lo acompañe y armado únicamente con sus herramientas y habilidades de ingeniería, Isaac tendrá que darse prisa para encontrar a Nicole mientras va desvelando el terrorífico misterio de lo sucedido a bordo del Ishimura.",
        price: 200,
        category: "terror",
        image: "../assets/generos/terror/dead-space.jpg"
    },
    {
        id: 11, 
        name: "Outlast",
        description: "Outlast es toda una experiencia de horror y supervivencia que pretende demostrar que los monstruos más terribles se originan en la mente humana. El horror aguarda en las lejanas montañas de Colorado, dentro del manicomio del monte Massive. Tras pasar años abandonado, el psiquiátrico ha vuelto a abrir sus puertas. El departamento de “investigación y caridad” de la corporación transnacional Murkoff ha estado trabajando en su interior en la más estricta clandestinidad... hasta ahora.",
        price: 200,
        category: "terror",
        image: "../assets/generos/terror/outlast.webp"
    },
    {
        id: 12, 
        name: "Until Dawn",
        description: "Until Dawn es un juego narrativo de terror y supervivencia lleno de ramificaciones en el que cualquier elección del jugador tendrá consecuencias a medida que avanza la historia. A lo largo de la partida, el jugador toma decisiones difíciles al enfrentarse a dilemas éticos y morales. Sus elecciones pueden desembocar en escenas totalmente distintas unas de otras.",
        price: 200,
        category: "terror",
        image: "../assets/generos/terror/until-dawn.jpg"
    }
]

const GetProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    });
};

export default GetProducts