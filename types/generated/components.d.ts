import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticlesArticulos extends Schema.Component {
  collectionName: 'components_articles_articulos';
  info: {
    displayName: 'Articulos';
  };
  attributes: {
    Fuente: Attribute.String;
    Fecha: Attribute.Date;
    URL: Attribute.String;
    URL2: Attribute.String;
  };
}

export interface CandidatoCandidatos extends Schema.Component {
  collectionName: 'components_candidato_candidatos';
  info: {
    displayName: 'Candidatos';
  };
  attributes: {
    Nombre: Attribute.String;
    Descripcion: Attribute.Blocks;
    Candidatos: Attribute.Component<'candidatos.candidatos', true>;
  };
}

export interface CandidatosCandidatos extends Schema.Component {
  collectionName: 'components_candidatos_candidatos';
  info: {
    displayName: 'Candidatos';
  };
  attributes: {
    Nombre: Attribute.String;
    Descripcion: Attribute.Blocks;
    Imagen: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Enlaces: Attribute.String;
  };
}

export interface ExtrasExtras extends Schema.Component {
  collectionName: 'components_extras_extras';
  info: {
    displayName: 'Extras';
  };
  attributes: {
    Letra: Attribute.Blocks;
    Autor: Attribute.String;
    ArticulosRelacionados: Attribute.Component<'articles.articulos', true>;
  };
}

export interface NombreCandidatos extends Schema.Component {
  collectionName: 'components_nombre_candidatos';
  info: {
    displayName: 'Candidatos';
  };
  attributes: {
    Articulos: Attribute.Component<'articles.articulos', true>;
    Nombre: Attribute.String;
    Description: Attribute.Blocks;
    Medios: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Videos: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface NoticiasNoticiaMedio extends Schema.Component {
  collectionName: 'components_noticias_medio';
  info: {
    displayName: 'Noticia Medio';
    description: 'Noticias publicadas en medios';
  };
  attributes: {
    fecha: Attribute.Date & Attribute.Required;
    fuente: Attribute.String & Attribute.Required;
    enlace: Attribute.String & Attribute.Required;
    titulo: Attribute.String & Attribute.Required;
  };
}

export interface PremioBabayu extends Schema.Component {
  collectionName: 'components_premio_babayu';
  info: {
    displayName: 'Babayu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    recipient: Attribute.String;
    Medios: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.Blocks;
  };
}

export interface PremioCancion extends Schema.Component {
  collectionName: 'components_premio_cancion';
  info: {
    displayName: 'Canci\u00F3n 2024';
    description: 'Canci\u00F3n libre';
  };
  attributes: {
    title: Attribute.String;
    recipient: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface PremioComadreOro extends Schema.Component {
  collectionName: 'components_premio_comadre_oro';
  info: {
    displayName: 'Comadre Oro';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Medios: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    recipient: Attribute.String;
    description: Attribute.Blocks;
    candidatos: Attribute.Component<'nombre.candidatos', true>;
  };
}

export interface PremioFelpeyu extends Schema.Component {
  collectionName: 'components_premio_felpeyu';
  info: {
    displayName: 'Felpeyu';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    recipient: Attribute.String;
    Medios: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.Blocks;
    candidatos: Attribute.Component<'nombre.candidatos', true>;
  };
}

export interface PremiosBabayu extends Schema.Component {
  collectionName: 'components_premios_babayus';
  info: {
    displayName: 'Babayu';
  };
  attributes: {};
}

export interface PremiosFelpeyu extends Schema.Component {
  collectionName: 'components_premios_felpeyus';
  info: {
    displayName: 'Felpeyu';
  };
  attributes: {};
}

export interface PremiosPremios extends Schema.Component {
  collectionName: 'components_premios_premios';
  info: {
    displayName: 'Premios';
  };
  attributes: {
    cancion: Attribute.Component<'premio.cancion'>;
    noticias: Attribute.Component<'noticias.noticia-medio', true>;
  };
}

export interface SharedEnlace extends Schema.Component {
  collectionName: 'components_shared_enlaces';
  info: {
    displayName: 'Enlace';
    description: 'Enlaces externos';
  };
  attributes: {
    titulo: Attribute.String;
    url: Attribute.String & Attribute.Required;
    tipo: Attribute.Enumeration<['noticia', 'video', 'web', 'otro']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articles.articulos': ArticlesArticulos;
      'candidato.candidatos': CandidatoCandidatos;
      'candidatos.candidatos': CandidatosCandidatos;
      'extras.extras': ExtrasExtras;
      'nombre.candidatos': NombreCandidatos;
      'noticias.noticia-medio': NoticiasNoticiaMedio;
      'premio.babayu': PremioBabayu;
      'premio.cancion': PremioCancion;
      'premio.comadre-oro': PremioComadreOro;
      'premio.felpeyu': PremioFelpeyu;
      'premios.babayu': PremiosBabayu;
      'premios.felpeyu': PremiosFelpeyu;
      'premios.premios': PremiosPremios;
      'shared.enlace': SharedEnlace;
    }
  }
}
