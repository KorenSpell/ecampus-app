export class grade {
    light:string;
    dark:string;
    letter:string;
    quiz:string;
    exam:string;

    constructor({light, dark, letter,  quiz, exam} : {light:string, dark:string, letter:string, quiz:string, exam:string}) {
        this.light = light;
        this.dark = dark;
        this.letter = letter;
        this.quiz = quiz;
        this.exam = exam;
    }
}