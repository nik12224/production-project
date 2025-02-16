import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}>
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo
                obcaecati, odit ipsa laborum vel? Voluptate, explicabo. Corrupti nam reprehenderit
                rerum, perspiciatis ipsam veniam inventore id maiores doloribus perferendis ullam!
            </Modal>
        </div>
    );
};
