import { IconContainer } from './UpIcon.styled';
import IconVariants from './UpIconVariants';
import { UpIconProps } from './type';


const UpIcon = ({
    name,
    size = 'large',
    color = 'primary',
    testId = 'icon',
    className,
    colorOverride,
}: UpIconProps) => {
    const Icon = IconVariants[name];

    if (!Icon) {
        return null;
    }

    return (
        <IconContainer data-testid={testId} size={size} className={className}>
            <Icon color={colorOverride ? colorOverride : (color as any)} />
        </IconContainer>
    );
};

export default UpIcon;
