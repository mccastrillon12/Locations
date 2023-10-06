export interface ResponseApi{
  address: string;
  lat: number;
  long: number;
  service_name: string;
  typology:Typology
}

export interface Typology{
  description_legend:string;
  typology_description:string;
}
