import CartItem from "./cartItem";
import { useState } from "react";

import { Card, Button, CardContent, Checkbox, Grid, FormGroup, FormControlLabel, RadioGroup, Radio } from "@mui/material";
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
    const [checkedData, setCheckedData] = useState("")
    const [finalPrice, setFinalPrice] = useState(20);
    const [ecoChecked, setEcoChecked] = useState(false);
    const [value, setValue] = useState("");

    let chkJson = [{
        "_id": "64e5ff4fe3d35d1c40333a1de",
        "text": "Buy online pick up in stores/lockers - 12 grams of C02",
        "val": "1",
    }, {
        "_id": "64e5ff4fe3d35d1c404dd1de",
        "text": "Consolidate multiple orders -8 grams of CO2",
        "val": "3",
    }, {
        "_id": "64e5ff4fe3d35d1c4044a1ww",
        "text": "Standard delivery instead of same day delivery SDD/NDD -6 grams of Co2",
        "val": "4",
    }, {
        "_id": "64e5ff4few3d35d1c4044a1de",
        "text": "Normal delivery with all emissions",
        "val": "5",
    }]
    function handleClick(event) {
        if (event.target.value === value) {
            setValue("");
            setCheckedData("");
            setFinalPrice(parseInt(data[0].unitPrice));
        } else {
            setValue(event.target.value);
        }
    }
    const handleChange = (event) => {
        const ID = event.currentTarget.id;
        const value = event.currentTarget.value;
        if (event.currentTarget.type === "checkbox") {
            setEcoChecked(true);
            setValue("");
        } else {
            setEcoChecked(false);
        }
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
            setCheckedData(item);
            const fPrice = parseInt(data[0].unitPrice) + parseInt(value)
            setFinalPrice(fPrice);
        } else {
            setCheckedData("");
            const fPrice = parseInt(data[0].unitPrice) + parseInt(value)
            setFinalPrice(fPrice);
        }
    }
    return (
        <><div className="spnTotalCart">
            <span>{`Your Cart (${jsonData.length})`}</span>
        </div>
            <Grid container className="grdHeader">
                <Grid xs={4} className="clsItem">
                    <span>Item</span>
                </Grid>
                <Grid xs={3} className="clsPrice">
                    <span>Price</span>
                </Grid>
                <Grid xs={3} className="clsQuantity">
                    <span>Quantity</span>
                </Grid>
                <Grid xs={1} className="clsTotal">
                    <span> Total</span>
                </Grid>
            </Grid>
            <CartItem item={data[0]} />
            {
                checkedData && <CartItem item={checkedData} />

            }
            <Card className="cartContainer">
                <CardContent>
                    <Grid container >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={ecoChecked} value={2} onChange={(value) => handleChange(value)} />} label="Ecocart- carbon offsetting -2 USD" />
                        </FormGroup>
                    </Grid>
                    <Grid xs={12} container className="clsRadioButtonGroup">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={value}>
                            {
                                chkJson.map((item) => {
                                    return <FormControlLabel control={<Radio onClick={handleClick} value={item.val} id={item._id} onChange={(value) => handleChange(value)} />} label={item.text} />
                                })
                            }
                        </RadioGroup>
                        {/* <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup> */}

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