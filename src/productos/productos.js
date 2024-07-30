const producto = [
    {
      id: 1,
      nombre: "Dune",
      descripcion: "Dune relata la historia del planeta desértico Arrakis, única fuente de melange, la especia necesaria para el viaje interestelar y que además garantiza longevidad y poderes psíquicos.",
      precio: 32.899,
      categoria: "ficcion",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_951620-MLA43677613114_102020-O.webp"
    },
    {
      id: 2,
      nombre: "Despues De Diciembre",
      descripcion: "A Jenna Brown el último año se le ha hecho eterno. superarlo, centrarse en sí misma y convertirse en una Jenna renovada que tiene un nuevo objetivo vital: terminar los estudios. Aunque suponga volver al lugar donde todo empezó y que tantos recuerdos le evoca.",
      precio: 27.694,
      categoria: "romance",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_832788-MLA52251857705_112022-O.webp"
    },
    {
      id: 3,
      nombre: "Las Luces De Febrero",
      descripcion: "Las luces de febrero nos sumerge en la vida de Ellie Ross, una ferviente jugadora de baloncesto determinada a romper estereotipos de género. Este verano, su objetivo es ingresar al equipo masculino de su ciudad, pero Víctor, un compañero de equipo, pone a prueba tanto su habilidad como su paciencia.",
      precio: 16.899,
      categoria: "romance",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_872387-MLU72972263999_112023-O.webp"
    },
    {
      id: 4,
      nombre: "Boulevard",
      descripcion: "Luke y Hasley no corresponden al prototipo de una pareja perfecta: Uno es tormenta y el otro un día soleado. Como si cada uno fuese un cielo. Sin embargo, juntos ponerle nombre a lo que habían creado. Una historia de amor tan única que te marcará para el resto de tus días.",
      precio: 23.999,
      categoria: "romance",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_841592-MLU72591482049_102023-O.webp"
    },
    {
      id: 5,
      nombre: "Harry Potter",
      descripcion: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia.",
      precio: 27.799,
      categoria: "ficcion",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_671208-MLC42135034663_062020-O.webp"
    },
    {
      id: 6,
      nombre: "Los juegos del hambre",
      descripcion: "Un pasado de guerras ha dejado los 12 distritos que dividen Panem bajo el poder tiránico del “Capitolio”. Sin libertad y en la pobreza, nadie puede salir de los límites de su distrito. Sólo una chica de 16 años, Katniss Everdeen, osa desafiar las normas para conseguir comida.",
      precio: 31.199,
      categoria: "ficcion",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_680582-MCO44229906245_122020-O.webp"
    },
    {
      id: 7,
      nombre: "La Paciente Silenciosa",
      descripcion: "Alicia Berenson, una pintora de éxito, dispara cinco tiros en la cabeza de su marido, y no vuelve a hablar nunca más. Su negativa a emitir palabra alguna convierte una tragedia doméstica en un misterio que atrapa la imaginación de toda Inglaterra.",
      precio: 23.179,
      categoria: "suspenso",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_683784-MLU73672371667_122023-O.webp"
    },
    {
      id: 8,
      nombre: "El Instituto",
      descripcion: "En mitad de la noche en un barrio tranquilo de Minneapolis raptan a Luke Ellis, de doce años, tras haber asesinado a sus padres. Una operación que dura menos de dos minutos. Luke se despierta en la siniestra institución conocida como el Instituto, en un cuarto que se asemeja al suyo pero sin ventanas.",
      precio:  23.999,
      categoria: "suspenso",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_804319-MLU72592257659_102023-O.webp"
    },
    {
      id: 9,
      nombre: "Holly",
      descripcion: "Holly Gibney, uno de los personajes más cautivadores e ingeniosos de Stephen King, regresa en esta trepidante novela para descubrir la verdad que se esconde tras múltiples desapariciones en una ciudad del Medio Oeste. Cuando Penny Dahl contacta con Finders Keepers para que la ayuden a encontrar a su hija, algo en la voz desesperada de la mujer hace que Holly Gibney se vea obligada a aceptar el trabajo.",
      precio: 42.299,
      categoria: "suspenso",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_884512-MLU74994562578_032024-O.webp"
    },
    {
      id: 10,
      nombre: "Antes De Diciembre",
      descripcion: "UNA HISTORIA DE AMOR Y PASIÓN CON FECHA DE CADUCIDAD: TODO ACABARÁ ANTES DE DICIEMBRE. Para Jenna Brown, su primer año en la universidad supone alejarse de su familia y de sus amigos y enfrentarse al mundo por primera vez en su vida.",
      precio: 14.934,
      categoria: "romance",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_742621-MLU69748266570_062023-O.webp"
    }, 
    {
      id: 11,
      nombre: "Percy Jackson I",
      descripcion: "Percy Jackson es un adolescente que no está acostumbrado a que las cosas le salgan bien. Su vida es bastante rutinaria y sus compañeros de clase no le comprenden. Todo cambiará el día que descubre un impensable secreto sobre su progenitor. Resulta que es hijo del mismísimo dios griego Poseidón, nada más y nada menos.",
      precio: 21.999,
      categoria: "fantasia",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_845122-MLA41973764616_052020-O.webp"
    }, 
    {
      id: 12,
      nombre: "Alas De Sangre",
      descripcion: "Alas de sangre, la primera entrega de la saga, introduce a los lectores en un mundo oscuro y complejo lleno de violencia, dragones, poderes. La acción se desarrolla en el Colegio de Guerra Basgiath, donde los cadetes buscan convertirse en jinetes y vincularse con un dragón.",
      precio: 27.799,
      categoria: "fantasia",
      stock: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_849364-MLU72972407903_112023-O.webp"
    },  
  ]

  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout (() => {
        resolve(producto)
      }, 1500);
    });
  };

  export default obtenerProductos