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
    kind:       string;
    totalItems: number;
    items:      Item[];
}

export interface Item {
    kind:        Kind;
    id:          string;
    etag:        string;
    selfLink:    string;
    volumeInfo:  VolumeInfo;
    saleInfo:    SaleInfo;
    accessInfo:  AccessInfo;
    searchInfo?: SearchInfo;
}

export interface AccessInfo {
    country:                Country;
    viewability:            Viewability;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: TextToSpeechPermission;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       AccessViewStatus;
    quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
    None = "NONE",
    Sample = "SAMPLE",
}

export enum Country {
    Ru = "RU",
}

export interface Epub {
    isAvailable:   boolean;
    acsTokenLink?: string;
}

export enum TextToSpeechPermission {
    Allowed = "ALLOWED",
}

export enum Viewability {
    NoPages = "NO_PAGES",
    Partial = "PARTIAL",
}

export enum Kind {
    BooksVolume = "books#volume",
}

export interface SaleInfo {
    country:      Country;
    saleability:  Saleability;
    isEbook:      boolean;
    listPrice?:   SaleInfoListPrice;
    retailPrice?: SaleInfoListPrice;
    buyLink?:     string;
    offers?:      Offer[];
}

export interface SaleInfoListPrice {
    amount:       number;
    currencyCode: string;
}

export interface Offer {
    finskyOfferType: number;
    listPrice:       OfferListPrice;
    retailPrice:     OfferListPrice;
}

export interface OfferListPrice {
    amountInMicros: number;
    currencyCode:   string;
}

export enum Saleability {
    ForSale = "FOR_SALE",
    NotForSale = "NOT_FOR_SALE",
}

export interface SearchInfo {
    textSnippet: string;
}

export interface VolumeInfo {
    title:                string;
    authors?:             string[];
    publisher?:           string;
    description?:         string;
    industryIdentifiers:  IndustryIdentifier[];
    readingModes:         ReadingModes;
    printType:            PrintType;
    categories?:          string[];
    maturityRating:       MaturityRating;
    allowAnonLogging:     boolean;
    contentVersion:       string;
    panelizationSummary?: PanelizationSummary;
    imageLinks?:          ImageLinks;
    language:             Language;
    previewLink:          string;
    infoLink:             string;
    canonicalVolumeLink:  string;
    subtitle?:            string;
    publishedDate?:       string;
    pageCount?:           number;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

export interface IndustryIdentifier {
    type:       Type;
    identifier: string;
}

export enum Type {
    Isbn10 = "ISBN_10",
    Isbn13 = "ISBN_13",
    Other = "OTHER",
}

export enum Language {
    Be = "be",
    Ru = "ru",
}

export enum MaturityRating {
    NotMature = "NOT_MATURE",
}

export interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export enum PrintType {
    Book = "BOOK",
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}
