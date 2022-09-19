import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect, useMemo, useCallback } from 'react'

interface UseModalProps {
    visibile?: boolean;
    buttonLabel?: string;
    runAsyncCalback?: () => Promise<any>;
    onUpdateAsync?: () => Promise<any>;
}

const useModal = ({ visibile, buttonLabel, runAsyncCalback, onUpdateAsync }: UseModalProps) => {
    const [isVisible, setIsVisible] = useState(visibile ?? false);
    const [label, setLabel] = useState(buttonLabel ?? "label not given");
    const isFocused = useIsFocused()

    useEffect(() => {
        isFocused && runAsyncCalback?.();
    }, [runAsyncCalback, isFocused])


    const open = useCallback(() => {
        setIsVisible(() => true)
    }, []);

    const close = useCallback(() => {
        setIsVisible(() => false)
    }, []);

    const onChange = useCallback(async (value: string) => {
        await onUpdateAsync?.();
        setLabel(value);
    }, [onUpdateAsync, setLabel]);

    const modal = useMemo(() => ({
        open,
        close,
        onChange
    }), []);


    return useMemo(() => ({ modal, label, isVisible }), [modal, label, isVisible])
}

export default useModal;