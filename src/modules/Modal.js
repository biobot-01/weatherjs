/**
 * Modal module
 * Module for showing & hiding the modal
 *
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 *
**/

export class Modal {
  constructor() {
    this.htmlElem = document.documentElement;
    this.modal = document.getElementById('the-modal');
    this.openButton = document.getElementById('open-modal');
    this.deleteButton = document.getElementById('delete');
    this.closeButton = document.getElementById('close-modal');
  }

  // Toggle the modal elements class
  toggleElemStyles() {
    this.htmlElem.classList.toggle('is-clipped');
    this.modal.classList.toggle('is-active');
  }

  // Add event listener to modal buttons
  handleClickButtons() {
    const buttons = [
      this.openButton,
      this.closeButton,
      this.deleteButton,
    ];

    buttons.forEach(button => {
      button.addEventListener('click', () => this.toggleElemStyles());
    });
  }
}
