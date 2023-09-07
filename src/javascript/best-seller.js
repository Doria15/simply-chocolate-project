(() => {
  const refs = {
    openModalBtn: document.querySelector('[best-seller-data-modal-open]'),
    closeModalBtn: document.querySelector('[best-seller-data-modal-close]'),
    modal: document.querySelector('[best-seller-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
