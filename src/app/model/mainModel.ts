import { Paths } from "./paths";

export interface JsonData {
    info: Info;
    paths: Paths;
}

export interface Info {
    title: string;
    version: string;
}