import React from "react";
import { useQueryClient } from '@tanstack/react-query';




const Detail: React.FC = () => {
    const queryClient = useQueryClient();

    // 1. Get data synchronously (non-reactive)
    const cachedData = queryClient.getQueryData(['products']);
    console.log('Details Page', cachedData)

    return <>
        welcome to Product detail page.
    </>
}

export default Detail;