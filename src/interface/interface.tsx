export interface DataFromFetch {

    str: string, 
    max: number, 
    page: number

}

export interface DataRedux {

    RowOrColumn: RowOrColumn,
    DataInfo: DataInfo

}

export interface RowOrColumn {

    row: boolean

}

export interface DataInfo {

    data: Book,
    load: boolean

}

export interface Book {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result {
    id:             number;
    title:          string;
    authors:        Author[];
    translators:    Author[];
    subjects:       string[];
    bookshelves:    string[];
    languages:      Language[];
    copyright:      boolean;
    media_type:     MediaType;
    formats:        Formats;
    download_count: number;
}

export interface Author {
    name:       string;
    birth_year: number | null;
    death_year: number | null;
}

export interface Formats {
    "application/epub+zip":            string;
    "application/rdf+xml":             string;
    "text/plain"?:                     string;
    "application/x-mobipocket-ebook":  string;
    "text/html":                       string;
    "application/octet-stream"?:       string;
    "image/jpeg":                      string;
    "application/zip"?:                string;
    "text/plain; charset=us-ascii"?:   string;
    "text/html; charset=utf-8"?:       string;
    "text/plain; charset=iso-8859-1"?: string;
    "text/plain; charset=utf-8"?:      string;
    "text/html; charset=us-ascii"?:    string;
    "text/html; charset=iso-8859-1"?:  string;
}

export enum Language {
    En = "en",
}

export enum MediaType {
    Text = "Text",
}
