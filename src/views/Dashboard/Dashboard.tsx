import React from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from '@tanstack/react-query';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

import { getProducts } from "../../api/productsAPI";
import { IProducts, IProduct } from "../../common/Iproduct";
import Product from "../../components/Product/Product";

const Container = styled("div")`
    padding: 10px
`

const Dashboard: React.FC = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    //setting fetched products in store using  queryclient which can be reused in other components
    queryClient.setQueryData(["users"], data);
    return <>
        <Container>
            <Grid container spacing={2}>
                {
                    data && data?.products?.map((item: IProduct) => {
                        return <Grid size={{ xs: 12, sm: 3, md: 3, lg: 3 }}>
                            <Product {...item} />
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    </>
}

export default Dashboard;