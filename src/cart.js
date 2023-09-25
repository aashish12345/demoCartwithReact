import CartItem from "./cartItem";
import { useState } from "react";

import { Card, Button, CardContent, Checkbox, Grid, FormGroup, FormControlLabel } from "@mui/material";
const Cart = () => {
    const vat = 2.0;
    let data = [{
        "_id": "64e5ff4fe3d35d1c4044a1de",
        "title": "Custom Shoe Boxes",
        "description": "Eco-friendly and Sustainable, the preferred packaging choice for Direct to Consumer and subscription box businesses.",
        "qantity": "1",
        "unitPrice": "20",
        "imageUrl": "./shoeBoxNew.jpeg"
    }]
    const [jsonData, setJsonData] = useState(data)
    const [finalPrice, setFinalPrice] = useState(20);

    let chkJson = [{
        "_id": "64e5ff4fe3d35d1c40333a1de",
        "text": "Buy online pick up in stores/lockers - 12 grams of C02",
        "val": "1",
    }, {
        "_id": "64e5ff4fe3d35d1cgg44a1de",
        "text": "Ecocart- carbon offsetting -2 USD",
        "val": "2",
    }, {
        "_id": "64e5ff4fe3d35d1c404dd1de",
        "text": "Consolidate multiple orders -8 grams of CO2",
        "val": "1",
    }, {
        "_id": "64e5ff4fe3d35d1c4044a1ww",
        "text": "Standard delivery instead of same day delivery SDD/NDD -6 grams of Co2",
        "val": "3",
    }, {
        "_id": "64e5ff4few3d35d1c4044a1de",
        "text": "Normal delivery with all emissions",
        "val": "1",
    }]
    const handleChange = (event) => {
        debugger;
        const ID = event.currentTarget.id;
        const value = event.currentTarget.value;
        if (event.currentTarget.checked) {
            const item = {
                "_id": ID,
                "title": "Ecocart- carbon offsetting ",
                "description": "",
                "qantity": "1",
                "unitPrice": value,
                "imageUrl": "./logo4.jpeg",
                "isFixed": true
            }
            setJsonData(current => [...current, item]);
            setFinalPrice(finalPrice + parseInt(value));
        } else {
            setJsonData(current =>
                current.filter(item => {
                    return item._id !== ID;
                }),
            );
        }


    }


    return (
        <><div className="spnTotalCart">
            <span>{`Your Cart (${jsonData.length})`}</span>
        </div>
            {
                jsonData.map((item) => {
                    return (<CartItem item={item} />)
                })
            }
            <Card className="cartContainer">
                <CardContent>
                    <Grid xs={12} container>
                        <FormGroup>
                            {
                                chkJson.map((item) => {
                                    return <FormControlLabel control={<Checkbox value={item.val} id={item._id} onChange={(value) => handleChange(value)} />} label={item.text} />
                                })
                            }
                        </FormGroup>
                    </Grid>
                    <Grid xs={12} className="clsGridPrice clsGridTotalPrice">
                        <Grid className="borderBottamDiv"> <span>Subtotal (Incl. VAT)</span> <span className="spnPrice">{`$ ${finalPrice.toFixed(2)}`}</span></Grid>
                        <Grid className="borderBottamDiv"> <span>Shipping</span> <span className="spnPrice">{ }</span></Grid>
                        <Grid className="borderBottamDiv"> <span>VAT</span> <span className="spnPrice">{`$ ${vat.toFixed(2)}`}</span></Grid>
                        <Grid className="borderBottamDiv"> <span>TOTAL (EUR)</span> <span className="spnPrice">{`$ ${finalPrice.toFixed(2)}`}</span></Grid>
                    </Grid>
                    <Grid container>
                        <Button className="btnCart" variant="contained">Checkout</Button>
                    </Grid>
                </CardContent>
            </Card>

        </>
    )
}
export default Cart;