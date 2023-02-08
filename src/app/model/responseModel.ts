export interface ResponseDescription {
  code: number;
  description: string;
}

export class GetResponseDescription {
  resObject!: ResponseDescription;
  constructor(desciption: string, code: number) {
    this.resObject = {
      code: code,
      description: desciption,
    };
  }
}
