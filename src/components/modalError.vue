<template>
  <div
    class="modal-error"
    @mousedown="closeModal"
    :class="{ 'modal-error-visible': MODAL_ERROR_DATA.modalVisible }"
  >
    <div class="modal__window">
      <div class="modal__text">
        К сожалению города "<b class="modal__text-bold">{{
          WEATHER_DATA.sityError
        }}</b
        >" не найдено. Попробуйте еще раз. Вводить название города можно
        русскими и латинскими буквами.
      </div>
      <button class="modal__button">Понятно</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'ModalError',

  methods: {
    ...mapMutations(['SHOW_MODAL_ERROR']),

    closeModal(event) {
      if (
        event.target.classList.contains('modal-error') ||
        event.target.classList.contains('modal__button')
      ) {
        this.SHOW_MODAL_ERROR();
      }
    },
  },

  computed: {
    ...mapGetters(['MODAL_ERROR_DATA', 'WEATHER_DATA']),
  },
};
</script>

<style lang="scss">
.modal-error,
.modal-error-visible {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}

.modal-error-visible {
  opacity: 1;
  z-index: 2;
}

.modal__window {
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  background: rgba(75, 0, 130, 0.8);
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  position: relative;
  transition: 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid #fff;
    border-radius: 15px;
  }
}

.modal__text,
.modal__text-bold {
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-bottom: 30px;
  width: 95%;
}

.modal__text-bold {
  font-weight: bold;
}

.modal__button {
  background: transparent;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #fff;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

@media (max-width: 450px) {
  .modal__text,
  .modal__text-bold {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
