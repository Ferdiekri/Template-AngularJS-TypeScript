interface IFormato {
    id: number;
    titulo: string;
}

interface ILibro {
    id: number;
    isbn: string;
    titulo: string;
    paginas: number;
    autor: string;
    digital: boolean;
    formatos?: Array<string>;
}