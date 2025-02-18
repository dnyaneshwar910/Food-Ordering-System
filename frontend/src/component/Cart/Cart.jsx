import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocation from '@mui/icons-material/AddLocation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
};

// const items = [1, 1,]
const Cart = () => {
    const createOrderUsingSelectedAddress = () => { };
    const handleOpenAddressModal = () => setOpen(true);

    const [open, setOpen] = useState(false);
    const {cart} = useSelector(store=>store)

    const handleClose = () => setOpen(false);
    const handleSumit = (value) => { 
        console.log( " from value", value);
        setOpen(false);
    };

    return (
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {cart.cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p> ₹ 599</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Fee</p>
                                <p> ₹ 21</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Charges</p>
                                <p> ₹ 33</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total Pay</p>
                            <p> ₹ 653</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className="lg:w-[70%] flex justify-between  px-5 pb-10 lg:pb-0">
                    <div className="">
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivary Address</h1>
                        <div className="flex flex-wrap justify-center">
                            {[1, 1, 1, 1, 1].map((item, index) => (
                                <AddressCard 
                                    key={index}
                                    handleSelectAddress={createOrderUsingSelectedAddress} 
                                    item={item} 
                                    showButton={true} 
                                />
                            ))}
                            <Card className='flex w-64 p-5 gap-5 m-3'>
                                <AddLocation />
                                <div className="space-y-3 text-gray-500 ">
                                    <h1 className="font-semibold text-lg text-white">Add New Address</h1>

                                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add

                                    </Button>
                                </div>
                            </Card>

                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        onSubmit={handleSumit}>

                        <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    name="streetAddress"
                                    as={TextField}
                                    label="Street Address"
                                    variant="outlined"
                                    fullWidth
                                />
                                <ErrorMessage name="streetAddress" component="div" className="error-message" />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name="state"
                                    as={TextField}
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                />
                                <ErrorMessage name="state" component="div" className="error-message" />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name="city"
                                    as={TextField}
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                />
                                <ErrorMessage name="city" component="div" className="error-message" />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    name="pincode"
                                    as={TextField}
                                    label="Pincode"
                                    variant="outlined"
                                    fullWidth
                                />
                                <ErrorMessage name="pincode" component="div" className="error-message" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit"
                                fullWidth variant="contained" color="primary">
                                    Deliver Here
                                </Button>
                            </Grid>
                        </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    )
}

export default Cart
