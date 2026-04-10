import { atom } from 'nanostores';

export const isLegalModalOpen = atom(false);
export const legalModalType = atom('privacy');

export const openLegalModal = (type) => {
	legalModalType.set(type);
	isLegalModalOpen.set(true);
};

export const closeLegalModal = () => {
	isLegalModalOpen.set(false);
};
