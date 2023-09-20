import CartItem from "./cartItem";
import jsonData from "./mock.json";
import { Card, Button, CardContent, Checkbox, Grid, FormGroup, FormControlLabel } from "@mui/material";
const Cart = () => {
    const data = jsonData.data;
    const finalPrice = 600;
    return (
        <><div className="spnTotalCart">
            <span>{`Your Cart (${data.length})`}</span>
        </div>
            {
                data.map((item) => {
                    return (<CartItem item={item} />)
                })
            }
            <Card className="cartContainer">
                <CardContent>
                    <Grid container>
                        <Grid xs={6}>
                            <div>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Special PriceGet extra 19% off" />
                                    <FormControlLabel required control={<Checkbox />} label="Partner OfferSign-up for Flipkart Pay Later & get free" />
                                    <FormControlLabel control={<Checkbox />} label="Bank OfferFlat $20 off on Bank Credit/Debit Card" />
                                </FormGroup>
                            </div>
                        </Grid>
                        <Grid xs={6} className="clsGridPrice">
                            <span>Cart Total</span> <span className="spnPrice">{`$ ${finalPrice.toFixed(2)}`}</span>
                            <Button className="btnCart" variant="contained">Checkout</Button>

                        </Grid>

                    </Grid>
                </CardContent>
            </Card>

        </>
    )
}
export default Cart;