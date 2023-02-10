import { Component } from "./componentsModel";
import { Paths } from "./pathsModel";
import { Security } from "./securityModel";

export interface JsonData {
    components: Component;
    info: Info;
    openapi: string;
    paths: Paths;
    security: Security;
}

export interface Info {
    title: string;
    version: string;
}