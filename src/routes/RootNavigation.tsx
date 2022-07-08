import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()


export const navigatRequest = {
    navigate: (name: string, params: any) => {
        if (navigationRef.isReady()) {
            navigationRef.navigate(name, params)
        }
    },
    goBack: () => {
        if (navigationRef.isReady()) {
            navigationRef.goBack()
        }
    },
    canGoBack: () => {
        if (navigationRef.isReady()) {
            navigationRef.canGoBack()
        }
    }
}