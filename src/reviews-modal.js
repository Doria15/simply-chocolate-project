(() => {
  const refs = {
    openModalBtn: document.querySelector('[reviews-modal-open]'),
    closeModalBtn: document.querySelector('[reviews-modal-close]'),
    modal: document.querySelector('[reviews-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
