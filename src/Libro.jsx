import ListaLibros from "./ListaLibros";

const libros = [
    {
        id: 1,
        imagen: 'public\imagenes\el coronel.jpg',
        titulo: 'El coronel no tiene quien le escriba',
        descripcion: 'Descripción del libro 1',
        autor: 'Gabriel Garcia marquez',
        año: 1993
    },
    {
        id: 2,
        imagen: 'public\imagenes\aislyn suzanne walters.png',
        titulo: 'Aislyn',
        descripcion: 'Descripción del libro 2',
        autor: 'Suzanne Walters',
        año: 2003
    },
    {
        id: 3,
        imagen: 'public\imagenes\carrie stephen king.png',
        titulo: 'carrie',
        descripcion: 'Descripción del libro 3',
        autor: 'Stephen King',
        año: 1987
    },
    {
        id: 4,
        imagen: 'public\imagenes\codigo da vinci dan brown.jpg',
        titulo: 'Codigo Da Vinci',
        descripcion: 'Descripción del libro 4',
        autor: 'Dan Brown',
        año: 2001
    },
    {
        id: 5,
        imagen: 'public\imagenes\la naranja mecanica anthony burgess.jpg',
        titulo: 'La naranja mecanica ',
        descripcion: 'Descripción del libro 5',
        autor: 'Anthony Buguess',
        año: 1986
    },
    {
        id: 6,
        imagen: 'public\imagenes\lolita.jpg',
        titulo: 'Lolita',
        descripcion: 'Descripción del libro 6',
        autor: 'Vladimir Nabocov',
        año: 1981
    },
    {
        id: 7,
        imagen: 'public\imagenes\los hombres del norte john havwood.jpg',
        titulo: 'Los hombres del norte',
        descripcion: 'Descripción del libro 7',
        autor: 'john Havwood',
        año: 2000
    },
    {
        id: 8,
        imagen: 'public\imagenes\los ojos del otro esher pacual rodriguez.jpg',
        titulo: 'Los  ojos del otro esher',
        descripcion: 'Descripción del libro 8',
        autor: 'Pascual Rodriguez',
        año: 1993
    },
    {
        id: 9,
        imagen: 'public\imagenes\no puedo anne helen petersen.jpg',
        titulo: 'No puedo ',
        descripcion: 'Descripción del libro 9',
        autor: 'Anne Helen Petersen',
        año: 1963
    },
    {
        id: 10,
        imagen: 'public\imagenes\fausto johann wolfgang von goethe.jpg',
        titulo: 'Fausto',
        descripcion: 'Descripción del libro 10',
        autor: 'Johann Wolfgang Von Goethe',
        año: 1985
    },
    {
        id: 11,
        imagen: 'public\imagenes\la tregua mario benedetti.jpg',
        titulo: 'La tregua',
        descripcion: 'Descripción del libro 11',
        autor: 'Mario Benedetti',
        año: 1999
    },
    {
        id: 12,
        imagen: 'public\imagenes\de ejecutivo a trotamundos francisco po egea.jpeg',
        titulo: 'De ejecutivo a trotamundos',
        descripcion: 'Descripción del libro 12',
        autor: 'Francisco Po Egea',
        año: 1992
    },
];
function Libro() {
    return (
        <div className="libro">
            <h2>Listado de Libros</h2>
            {libros.map((libros) => {
                return (
                    <ListaLibros key={libros.id} {...libros} />
                )
            }

            )}

        </div>
    );
}

export default Libro;