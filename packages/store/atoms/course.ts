import { atom } from "recoil";

export interface Course{
    _id?: string | undefined,
    title: string | undefined,
    description: string | undefined,
    imageLink: string | undefined,
    price: string | undefined
};

export const courseState = atom<{isLoading: boolean, course: null | Course}>({
    key: 'courseState',
    default:{
        isLoading: true,
        course: null
    }
});