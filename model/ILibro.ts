interface ILibro {
    id: number;
    isbn: string;
    titulo: string;
    paginas: number;
    autor: string;
    digital: boolean;
    formatos?: Array<string>;
}