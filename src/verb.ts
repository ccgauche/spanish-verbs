import latinise from "./latinise";
import Swal from 'sweetalert2';
import $ from './query';
import { addPoints } from './points';

const display: HTMLTitleElement = <HTMLTitleElement>$("app__display");

const inputs: Array<HTMLInputElement> = (function () {
    let array: Array<HTMLInputElement> = new Array<HTMLInputElement>();
    for (let input = 0; input < 6; input++) {
        array.push(<HTMLInputElement>$("app__input_" + input))
    }
    return array;
})();

export default class Verb {

    french: string;
    forms: { present: string[] }; // Yo Tu El Nosotros Vosotros Ellos

    constructor(french: string, forms: { present: string[] }) {
        this.french = french;
        this.forms = forms;
    }

    check(): boolean {
        let status: boolean = true;
        for (const i in inputs) {
            const input = inputs[i];
            const text: string = latinise(input.value).toLowerCase().trim();
            if (text === this.forms.present[i]) {
                input.className = "form-control is-valid";
            } else {
                input.className = "form-control is-invalid";
                status = false;
            }
        }
        if (status) {
            Swal.fire({
                icon: 'success',
                title: '¡Bien jugado!',
                text: '¡Ganas 3 puntos!',
            })
            addPoints(3);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Cometiste un error, pierdes 1 punto!'
            })
            addPoints(-1);
        }
        return status;
    }

    display() {
        for (const input of inputs) {
            input.className = "form-control";
            input.value = "";
        }
        display.innerText = "Conjugez : " + this.french;
    }

    displayAnswers() {
        for (const index in inputs) {
            const input = inputs[index];
            input.className = "form-control is-valid";
            input.value = this.forms.present[index];
            Swal.fire({
                icon: 'warning',
                title: '¡Se muestran las respuestas!',
                text: '¡Pierdes 3 puntos!',
            })
            addPoints(-3);
        }
    }

}