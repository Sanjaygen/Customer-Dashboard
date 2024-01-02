import UpIconVariants from "./UpIconVariants";
export type UpIconSizeType = 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

export type UpIconNameType = keyof typeof UpIconVariants;
export type UpIconProps = {
    name: UpIconNameType;
    size?: UpIconSizeType;
    testId?: string;
    className?: string;
    colorOverride?: string;
    color?:string;
};
