export class message {
    light: string;
    dark: string;

    constructor({light, dark} : {light:string, dark:string}) {
        this.light = light;
        this.dark = dark;
    }
}