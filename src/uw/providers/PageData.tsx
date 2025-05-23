import { createContext, useContext, useState } from 'react';

export interface PageDataContextModel {
    isLoggedIn?: boolean;
    setIsLoggedIn?: any;
    setCart?: any;
    cart?: any;
}

const PageDataContext = createContext<PageDataContextModel>({
    setIsLoggedIn: (variables: boolean) => { },
    setCart: (variables: boolean) => { },
});

const PageDataProvider = ({ children }: any) => {
    // states
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [cart, setCart] = useState<any>([]);


    const initialState: PageDataContextModel = {
        cart,
        setCart,
        isLoggedIn,
        setIsLoggedIn,
    };
    return (
        <PageDataContext.Provider value={initialState}>
            {children}
        </PageDataContext.Provider>
    );
};

const usePageData = () => {
    return useContext(PageDataContext);
};

export { usePageData, PageDataProvider };
