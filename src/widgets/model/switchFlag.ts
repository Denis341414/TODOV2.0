import { useModalStore } from "../ui/modal/store/modalStore";

export const switchFlag = () => {
  useModalStore().flagModal = !useModalStore().flagModal;
};
