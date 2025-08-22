import { useEffect, useState } from "react"

export const Contactos = () => {
    const personas = [
        {
            id: 1,
            nombre: "María González",
            edad: 28,
            profesion: "Ingeniera de Software",
            ciudad: "Buenos Aires",
            email: "maria.gonzalez@email.com",
            telefono: "+54 11 1234-5678",
            salario: 85000,
            estado_civil: "Soltera"
        },
        {
            id: 2,
            nombre: "Carlos Rodríguez",
            edad: 35,
            profesion: "Médico",
            ciudad: "Córdoba",
            email: "carlos.rodriguez@hospital.com",
            telefono: "+54 351 987-6543",
            salario: 120000,
            estado_civil: "Casado"
        },
        {
            id: 3,
            nombre: "Ana Fernández",
            edad: 42,
            profesion: "Abogada",
            ciudad: "Rosario",
            email: "ana.fernandez@bufete.com",
            telefono: "+54 341 456-7890",
            salario: 95000,
            estado_civil: "Divorciada"
        },
        {
            id: 4,
            nombre: "Luis Martín",
            edad: 31,
            profesion: "Arquitecto",
            ciudad: "Mendoza",
            email: "luis.martin@arquitectura.com",
            telefono: "+54 261 234-5678",
            salario: 78000,
            estado_civil: "Soltero"
        },
        {
            id: 5,
            nombre: "Sofia López",
            edad: 26,
            profesion: "Diseñadora Gráfica",
            ciudad: "La Plata",
            email: "sofia.lopez@design.com",
            telefono: "+54 221 345-6789",
            salario: 65000,
            estado_civil: "Soltera"
        },
        {
            id: 6,
            nombre: "Roberto Díaz",
            edad: 45,
            profesion: "Contador",
            ciudad: "Tucumán",
            email: "roberto.diaz@contabilidad.com",
            telefono: "+54 381 567-8901",
            salario: 70000,
            estado_civil: "Casado"
        },
        {
            id: 7,
            nombre: "Elena Morales",
            edad: 33,
            profesion: "Psicóloga",
            ciudad: "Salta",
            email: "elena.morales@psicologia.com",
            telefono: "+54 387 678-9012",
            salario: 60000,
            estado_civil: "Casada"
        },
        {
            id: 8,
            nombre: "Diego Torres",
            edad: 29,
            profesion: "Chef",
            ciudad: "Mar del Plata",
            email: "diego.torres@restaurant.com",
            telefono: "+54 223 789-0123",
            salario: 55000,
            estado_civil: "Soltero"
        },
        {
            id: 9,
            nombre: "Carmen Silva",
            edad: 38,
            profesion: "Profesora",
            ciudad: "San Juan",
            email: "carmen.silva@escuela.edu.ar",
            telefono: "+54 264 890-1234",
            salario: 48000,
            estado_civil: "Casada"
        },
        {
            id: 10,
            nombre: "Alejandro Ruiz",
            edad: 27,
            profesion: "Programador",
            ciudad: "Neuquén",
            email: "alejandro.ruiz@tech.com",
            telefono: "+54 299 901-2345",
            salario: 82000,
            estado_civil: "Soltero"
        },
        {
            id: 11,
            nombre: "Patricia Herrera",
            edad: 41,
            profesion: "Enfermera",
            ciudad: "Santa Fe",
            email: "patricia.herrera@hospital.com",
            telefono: "+54 342 012-3456",
            salario: 52000,
            estado_civil: "Divorciada"
        },
        {
            id: 12,
            nombre: "Fernando Castro",
            edad: 36,
            profesion: "Periodista",
            ciudad: "Corrientes",
            email: "fernando.castro@diario.com",
            telefono: "+54 379 123-4567",
            salario: 58000,
            estado_civil: "Casado"
        },
        {
            id: 13,
            nombre: "Lucía Romero",
            edad: 24,
            profesion: "Estudiante de Medicina",
            ciudad: "Buenos Aires",
            email: "lucia.romero@universidad.edu.ar",
            telefono: "+54 11 234-5679",
            salario: 25000,
            estado_civil: "Soltera"
        },
        {
            id: 14,
            nombre: "Manuel Vargas",
            edad: 50,
            profesion: "Gerente de Ventas",
            ciudad: "Córdoba",
            email: "manuel.vargas@empresa.com",
            telefono: "+54 351 345-6780",
            salario: 110000,
            estado_civil: "Casado"
        },
        {
            id: 15,
            nombre: "Gabriela Méndez",
            edad: 32,
            profesion: "Farmacéutica",
            ciudad: "Bahía Blanca",
            email: "gabriela.mendez@farmacia.com",
            telefono: "+54 291 456-7891",
            salario: 68000,
            estado_civil: "Soltera"
        },
        {
            id: 16,
            nombre: "Rodrigo Peña",
            edad: 39,
            profesion: "Electricista",
            ciudad: "Posadas",
            email: "rodrigo.pena@electricidad.com",
            telefono: "+54 376 567-8902",
            salario: 62000,
            estado_civil: "Casado"
        },
        {
            id: 17,
            nombre: "Valentina Ortiz",
            edad: 25,
            profesion: "Marketing Digital",
            ciudad: "Tandil",
            email: "valentina.ortiz@marketing.com",
            telefono: "+54 249 678-9013",
            salario: 72000,
            estado_civil: "Soltera"
        },
        {
            id: 18,
            nombre: "Nicolás Jiménez",
            edad: 44,
            profesion: "Veterinario",
            ciudad: "Río Cuarto",
            email: "nicolas.jimenez@veterinaria.com",
            telefono: "+54 358 789-0124",
            salario: 75000,
            estado_civil: "Divorciado"
        },
        {
            id: 19,
            nombre: "Isabella Cruz",
            edad: 30,
            profesion: "Fotógrafa",
            ciudad: "Ushuaia",
            email: "isabella.cruz@fotografia.com",
            telefono: "+54 2901 890-1235",
            salario: 45000,
            estado_civil: "Soltera"
        },
        {
            id: 20,
            nombre: "Emilio Sánchez",
            edad: 37,
            profesion: "Mecánico",
            ciudad: "Paraná",
            email: "emilio.sanchez@taller.com",
            telefono: "+54 343 901-2346",
            salario: 58000,
            estado_civil: "Casado"
        },
        {
            id: 21,
            nombre: "Camila Ramos",
            edad: 23,
            profesion: "Bailarina",
            ciudad: "San Luis",
            email: "camila.ramos@danza.com",
            telefono: "+54 266 012-3457",
            salario: 35000,
            estado_civil: "Soltera"
        },
        {
            id: 22,
            nombre: "Sebastián Flores",
            edad: 48,
            profesion: "Piloto Comercial",
            ciudad: "Comodoro Rivadavia",
            email: "sebastian.flores@aerolinea.com",
            telefono: "+54 297 123-4568",
            salario: 150000,
            estado_civil: "Casado"
        },
        {
            id: 23,
            nombre: "Natalia Aguilar",
            edad: 34,
            profesion: "Nutricionista",
            ciudad: "Formosa",
            email: "natalia.aguilar@nutricion.com",
            telefono: "+54 370 234-5679",
            salario: 55000,
            estado_civil: "Casada"
        },
        {
            id: 24,
            nombre: "Mateo Guerrero",
            edad: 26,
            profesion: "Músico",
            ciudad: "Villa Carlos Paz",
            email: "mateo.guerrero@musica.com",
            telefono: "+54 3541 345-6780",
            salario: 42000,
            estado_civil: "Soltero"
        },
        {
            id: 25,
            nombre: "Andrea Molina",
            edad: 40,
            profesion: "Directora de Escuela",
            ciudad: "Catamarca",
            email: "andrea.molina@educacion.gov.ar",
            telefono: "+54 383 456-7891",
            salario: 85000,
            estado_civil: "Divorciada"
        },
        {
            id: 26,
            nombre: "Joaquín Vega",
            edad: 33,
            profesion: "Ingeniero Civil",
            ciudad: "Jujuy",
            email: "joaquin.vega@construccion.com",
            telefono: "+54 388 567-8902",
            salario: 88000,
            estado_civil: "Casado"
        },
        {
            id: 27,
            nombre: "Florencia Rey",
            edad: 28,
            profesion: "Traductora",
            ciudad: "Río Gallegos",
            email: "florencia.rey@idiomas.com",
            telefono: "+54 2966 678-9013",
            salario: 50000,
            estado_civil: "Soltera"
        },
        {
            id: 28,
            nombre: "Maximiliano León",
            edad: 43,
            profesion: "Bombero",
            ciudad: "Resistencia",
            email: "maximiliano.leon@bomberos.gov.ar",
            telefono: "+54 362 789-0124",
            salario: 65000,
            estado_civil: "Casado"
        },
        {
            id: 29,
            nombre: "Julieta Cabrera",
            edad: 31,
            profesion: "Bióloga",
            ciudad: "Puerto Madryn",
            email: "julieta.cabrera@biologia.com",
            telefono: "+54 280 890-1235",
            salario: 70000,
            estado_civil: "Soltera"
        },
        {
            id: 30,
            nombre: "Santiago Moreno",
            edad: 35,
            profesion: "Comerciante",
            ciudad: "La Rioja",
            email: "santiago.moreno@comercio.com",
            telefono: "+54 380 901-2346",
            salario: 95000,
            estado_civil: "Casado"
        }

    ];
    function Persona({ persona }) {
        return (
            <div>
                <h3>{persona.nombre}</h3>
                <p>Edad: {persona.edad}</p>
                <p>Ciudad: {persona.ciudad}</p>
                <p>profesion: {persona.profesion}</p>
                <p>email: {persona.email}</p>
                <p>telefono: {persona.telefono}</p>
                
            </div>
        );
    }
    function ListaPersonas({ personas }) {
        return (
            <div>
                {personas.map((persona) => (
                    <Persona key={persona.id} persona={persona} />
                ))}
            </div>
        );
    }
    function BuscadorPersonas({ personas }) {
        const [busqueda, setBusqueda] = useState('');
        const [resultados, setResultados] = useState(personas);

        const handleInputChange = (event) => {
            const nuevoValor = event.target.value;
            setBusqueda(nuevoValor);

            const resultadosFiltrados = personas.filter((persona) =>
                persona.nombre.toLowerCase().includes(nuevoValor.toLowerCase()),
            );
            setResultados(resultadosFiltrados);
        };

        return (
            <div>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <ListaPersonas personas={resultados} />
            </div>
        );
    }
    return(
        <div>
      <h1>Diccionario de Personas</h1>
      <BuscadorPersonas personas={personas} />
    </div>
    )
}