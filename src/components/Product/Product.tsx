import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

import { IProduct } from "../../common/Iproduct";

const Thumbnail = styled("div")`
    height: 200px;
    width: 200px;
    overflow: hidden;
    margin: 0 auto;
    img {
        width: 100%;
    }
`

const Product: React.FC<Partial<IProduct>> = ({ ...props }) => {

    return <>
        <CardContent sx={{ border: "1px solid #ccc" }}>
            <Thumbnail>
                <img src={props?.thumbnail} />
            </Thumbnail>

            <Typography variant="h6" component="div" sx={{textAlign: "center"}}>
                {props?.title} <br />
            <Rating name="read-only" value={props?.rating} readOnly />
            </Typography>

        </CardContent>
        <CardActions>
            {/* <Button size="small">Learn More</Button>
            <Button size="small">Learn More</Button> */}
        </CardActions>
    </>
}

export default Product;