import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, Grid, MenuItem, Select, Button } from "@mui/material";

const CartItem = (props) => {
    const { title, description, itemsize, qantity, unitPrice } = props.item;
    const [size, setSize] = useState(itemsize);
    const [production, setproduction] = useState('Standard');
    const [quantity, setQuantity] = useState(qantity);
    const [unitTotal, setUnitTotal] = useState();


    const handleChange = (event) => {
        setSize(event.target.value);
    };
    const handleChangeProduction = (event) => {
        setproduction(event.target.value);
    }
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
        updateTotalPrice(event.target.value); 
    }
    const updateTotalPrice = (quan) => {
        setUnitTotal(quan * unitPrice)
    }
    useEffect(() => {
        updateTotalPrice(quantity);
    }, [])
    return (
        <>
            <Card className="card">
                <CardContent >
                    <Grid container>
                        <Grid item xs={2} className="cardMedia">
                            <CardMedia
                                className="cardMedia"
                                component="img"
                                alt="Paella dish"
                                image="https://source.unsplash.com/random"
                                title="Live from space album cover"
                            />
                        </Grid>
                        <Grid item xs={3} className="">
                            <Typography
                                className="cardTitle"
                                color="textSecondary"
                                variant="div"
                                component="h3"
                            >
                                {title}
                            </Typography>
                            <Typography
                                className="cardDescription"
                                color="textSecondary"
                                variant="div"

                            >
                                {description}
                            </Typography>
                            <Button
                                className="btnRemove"
                                color="secondary"
                                size="medium"
                                variant="text"
                            >Remove</Button>
                        </Grid>
                        <Grid item xs={4} className="dropDownGrid">
                            <Grid className="sizeGrid">
                                <Grid item xs={4} className="gridLable">
                                    <span> Size</span>
                                </Grid>
                                <Grid item xs={8} className="gridDrop">
                                    <Select
                                        value={size}
                                        className="ddlcls"
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={"Small"}>Small</MenuItem>
                                        <MenuItem value={"Medium"}>Medium</MenuItem>
                                        <MenuItem value={"Large"}>Large</MenuItem>
                                        <MenuItem value={"ExtraLarge"}>Extra-Large</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            <Grid className="sizeGrid">
                                <Grid item xs={4} className="gridLable">
                                    <span> Quantity</span>
                                </Grid>
                                <Grid item xs={8} className="gridDrop">
                                    <Select
                                        value={quantity}
                                        className="ddlcls"
                                        onChange={handleChangeQuantity}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>

                            <Grid className="sizeGrid">
                                <Grid item xs={4} className="gridLable">
                                    <span> Production</span>
                                </Grid>
                                <Grid item xs={8} className="gridDrop">
                                    <Select
                                        value={production}
                                        className="ddlcls"
                                        onChange={handleChangeProduction}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={"Standard"}>Standard</MenuItem>
                                        <MenuItem value={"Rush"}>Rush</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className="clsGridPrice">
                            <Grid><span>Unit Price</span> <span className="spnPrice">{`$ ${Number(unitPrice).toFixed(2)}`}</span></Grid>
                            <Grid><span>Unit Total</span> <span className="spnPrice">{`$ ${Number(unitTotal).toFixed(2)}`}</span></Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default CartItem;