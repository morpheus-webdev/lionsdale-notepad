import { IntRange } from 'type-fest';

export type TextSizeType = 1 | 1.5 | 2;

export type TextColorType = "red" | "Chartreuse" | "Coral";

///export type SmileyIntType = null | IntRange<0, 55>;

export type SmileyIntType = -1 | 128512 | 128513 | 128514;

export const defaultNote: INote = {
    text: '',
    color: 'red',
    size: 1,
    smiley: -1
}

export interface INote {
    text: string;
    size: TextSizeType;
    color: TextColorType;
    smiley: SmileyIntType
}

export interface IUser {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

export const defaultUser: IUser = {
    name: '',
    age: 0,
    email: '',
    isAdmin: false
}