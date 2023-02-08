export interface Parameter {
  name: string;
  in: string;
  description: string;
  schema?: {
    description?: string;
    nullable?: boolean;
    type?: string;
  };
}

export class GetParameter {

    parameter! : Parameter

    constructor(recivedParameter: Parameter) {
      
      this.parameter = {
      name: recivedParameter.name,
      description: recivedParameter.description,
      in: recivedParameter.in,
      schema: {
        description: recivedParameter.schema?.description,
        nullable: recivedParameter.schema?.nullable ? true : false,
        type: recivedParameter.schema?.type,
      },
      };
  }
}
