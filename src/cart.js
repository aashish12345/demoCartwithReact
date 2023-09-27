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
        "unitPrice": "100",
        "imageUrl": "./shoeBoxNew.jpeg"
    }]
    const [jsonData, setJsonData] = useState(data)
    const [checkedData, setCheckedData] = useState("")
    const [finalPrice, setFinalPrice] = useState(100);
    const [ecoChecked, setEcoChecked] = useState(false);
    const [value, setValue] = useState("");

    let chkJson = [{
        "_id": "64e5ff4fe3d35d1c40333a1de",
        "text": "Pick up in stores/lockers - 5 grams of C02",
        "val": "5",
    }, {
        "_id": "64e5ff4fe3d35d1c404dd1de",
        "text": "Normal 2 Day delivery -10 grams of CO2",
        "val": "10",
    }, {
        "_id": "64e5ff4fe3d35d1c4044a1ww",
        "text": "Consolidate and deliver multiple orders-15 grams of Co2",
        "val": "15",
    }, {
        "_id": "64e5ff4few3d35d1c4044a1de",
        "text": "Express delivery -20 grams of Co2",
        "val": "20",
    }]
    // function handleClick(event) {
    //     if (event.target.value === value) {
    //         setValue("");
    //         setCheckedData("");
    //         setFinalPrice(parseInt(data[0].unitPrice));
    //     } else {
    //         setValue(event.target.value);
    //     }
    // }

    const handleChange = (event) => {
        let ID = event.currentTarget.id;
        let value = event.currentTarget.value;
        let item = ""
        if (event.currentTarget.type === "checkbox" && event.currentTarget.checked) {
            setEcoChecked(true);
            setValue(5);
            item = {
                "_id": chkJson[0]._id,
                "title": "Ecocart- carbon offsetting ",
                "description": "",
                "qantity": "1",
                "unitPrice": chkJson[0].val,
                "imageUrl": "./logo4.jpeg",
            }
            const fPrice = parseInt(data[0].unitPrice) + parseInt(chkJson[0].val)
            setFinalPrice(fPrice);

        } else if (event.currentTarget.type === "checkbox" && !event.currentTarget.checked) {
            setEcoChecked(false);
            setValue("");
            item = "";
            const fPrice = parseInt(data[0].unitPrice);
            setFinalPrice(fPrice);
        }
        if (ecoChecked && event.currentTarget.type === "radio" && event.currentTarget.checked) {
            item = {
                "_id": ID,
                "title": "Ecocart- carbon offsetting ",
                "description": "",
                "qantity": "1",
                "unitPrice": value,
                "imageUrl": "./logo4.jpeg",
            }
            const fPrice = parseInt(data[0].unitPrice) + parseInt(value)
            setValue(event.target.value);
            setFinalPrice(fPrice);
        }
        setCheckedData(item);
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
                            <FormControlLabel className="grdCheck" control={<Checkbox checked={ecoChecked} value={2} onChange={(value) => handleChange(value)} />} label="Ecocart- carbon offsetting -2 USD" />
                        </FormGroup>
                    </Grid>
                    <Grid xs={12} container className="clsRadioButtonGroup">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={value}>
                            {
                                chkJson.map((item) => {
                                    return <FormControlLabel control={<Radio value={item.val} id={item._id} onChange={(value) => handleChange(value)} />} label={item.text} />
                                })
                            }
                        </RadioGroup>

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