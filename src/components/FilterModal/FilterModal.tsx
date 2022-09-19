import React, { ReactElement } from "react";
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './FilterModal.styles';
import FilterModalButton from './FilterModalButton/FilterModalButton';
import useModal from "./FilterModalHook";
import FilterModalItem from "./FilterModalItem";

interface FilterModalProps {
    isVisible?: boolean;
    buttonLabel: string;
    run?: () => Promise<any>;
    onUpdate?: () => Promise<any>;
    data?: string[];
    hasIcon?: boolean;
    renderButton?: () => ReactElement;
}

const FilterModal: React.FC<FilterModalProps> = ({
    isVisible: visibile,
    buttonLabel,
    run,
    data = [],
    onUpdate,
    hasIcon = true,
    renderButton
}) => {
    const isEmpty = data.length === 0;
    const { modal, isVisible, label } = useModal({
        visibile,
        buttonLabel,
        runAsyncCalback: run,
        onUpdateAsync: onUpdate
    });


    const renderFilterModalItem = (value: string, key: number) => (
        <FilterModalItem
            title={value}
            key={key.toString()}
            onPress={() => modal.onChange(value)}
        />
    )



    return (
        <View style={styles.container}>
            {
                renderButton ? renderButton() : (
                    <FilterModalButton
                        onPress={modal.open}
                        title={label}
                        hasIcon={hasIcon}
                    />
                )
            }
            {
                !isEmpty && (
                    <Modal
                        isVisible={isVisible}
                        style={styles.rootModal}
                        onDismiss={modal.close}
                        onBackdropPress={modal.close}
                        swipeDirection="down"
                        onSwipeComplete={modal.close}
                        hideModalContentWhileAnimating={true}
                        supportedOrientations={['portrait', 'landscape']}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.line} />
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    data.map(renderFilterModalItem)
                                }
                            </ScrollView>
                        </View>
                    </Modal>
                )
            }
        </View >
    )
}

export default FilterModal;