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
    this.modal = document.getElementById('locationModal');
    this.openButton = document.getElementById('openModalButton');
    this.deleteButton = document.querySelector('.delete');
    this.closeButton = document.getElementById('wClose');
  }

  toggle() {
    const closeButtons = [this.deleteButton, this.closeButton];

    this.openButton.addEventListener('click', () => {
      document.documentElement.className = 'is-clipped';
      this.modal.classList.add('is-active');
    });

    for (let i = 0; i < closeButtons.length; i++) {
      const close = closeButtons[i];

      close.addEventListener('click', () => {
        document.documentElement.classList.remove('is-clipped');
        this.modal.classList.remove('is-active');
      });
    }
  }

  close() {
    document.documentElement.classList.remove('is-clipped');
    this.modal.classList.remove('is-active');
  }
}
