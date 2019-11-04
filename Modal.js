/**
 * Modal module
 * Module for showing & hiding the modal
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
**/

class Modal {
  constructor() {
    this.modal = document.getElementById('locationModal');
    this.openButton = document.getElementById('openModalButton');
    this.closeButton = document.querySelector('.delete');
  }

  toggle() {
    this.openButton.addEventListener('click', () => {
      document.documentElement.className = 'is-clipped';
      this.modal.classList.add('is-active');
    });

    this.closeButton.addEventListener('click', () => {
      document.documentElement.classList.remove('is-clipped');
      this.modal.classList.remove('is-active');
    });
  }
}