export interface Component {
    schemas: ComponentSchema;
    securitySchemes: SecuritySchemes;
}

export interface ComponentSchema {
    [key: string]: ComponentSchemaDetails;
}

export interface ComponentSchemaDetails{
    additionalProperties: boolean;
    properties: ComponentSchemaProperties;
    type: string;
}

export interface ComponentSchemaProperties{
    [key: string]: ComponentSchemaPropertiesDetails;
}

export interface ComponentSchemaPropertiesDetails{
    nullable: boolean;
    type: string;
    format: string;
    [key: string]: any;
}

export interface SecuritySchemes{
    [key: string]: SecuritySchemesSetails;
}

export interface SecuritySchemesSetails{
    description: string;
    in: string;
    name: string;
    type: string;
}