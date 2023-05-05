import React from 'react'
import { useState } from 'react';

import { Grid, Button, useMediaQuery, SwipeableDrawer, Typography, Card, TextField, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from '@mui/material/Link/Link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LoginIcon from '@mui/icons-material/Login';




import ocrImage from '../Assets/ocrImage.svg'
import icon1 from '../Assets/icon1.svg'
import icon2 from '../Assets/icon2.svg'
import icon3 from '../Assets/icon3.svg'
import sideImage1 from '../Assets/sideImage1.svg'
import sideImage2 from '../Assets/sideImage2.svg'
import sideImage3 from '../Assets/sideImage3.svg'
import sideImage4 from '../Assets/sideImage4.svg'
import checkIcon from '../Assets/checkRightIcon.svg'


import './LandingPage.css'
// import styling from './LandingPage.module.css'

const LandingPage = () => {

    const [drawer, setDrawer] = useState(false)


    const drawerList = () => {

        return (
            <Box sx={{ width: 250 }} role='presentation' onClick={() => setDrawer(false)}>
                <List>
                    {
                        ['Products', 'Solutions', 'Resources', 'Pricing', 'LogIn'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {
                                            index === 0 ? <ShoppingCartIcon sx={{color:'#032D75'}}/>
                                                : index === 1 ? <EmojiObjectsIcon  sx={{color:'#032D75'}} />
                                                    : index === 2 ? <WidgetsIcon sx={{color:'#032D75'}} />
                                                        : index === 3 ? <MonetizationOnIcon  sx={{color:'#032D75'}} />
                                                            : index === 4 ? <LoginIcon sx={{color:'#032D75'}} />
                                                                : ''
                                        }
                                    </ListItemIcon>
                                    <ListItemText><b>{text}</b></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        )
    }


    function CheckMedia(size: string): boolean {
        let numberSize: string = ''
        if (size === 'md') {
            numberSize = '(min-width:900px)'
        }
        if (size === 'sm') {
            numberSize = '(min-width:600px)'
        }
        if (size === 'xs') {
            numberSize = '(min-width:0px)'
        }
        const matches = useMediaQuery(numberSize);
        return matches

    }

    const getStartedForFreeButton = (buttonVariant: string) => {
        if (buttonVariant === 'outlined') {
            return (
                <Button variant={'outlined'} sx={{ borderRadius: "50px", fontSize: "10px", width: "200px", height: "40px" }}>
                    <b>Get Started for Free</b>
                </Button >
            )
        }
        if (buttonVariant === 'contained') {
            return (
                <Button variant={'contained'} sx={{ borderRadius: "50px", fontSize: "10px", width: "200px", height: "40px" }}>
                    <b>Get Started for Free</b>
                </Button >
            )
        }
    }







    return (
        <>
            <Grid sx={{ background: "#0C1128", position: 'fixed', zIndex: '1' }} container >
                <Grid item lg={4} md={4} sm={10} xs={10} ><h2 style={{ color: "white", textAlign: "center" }}>Business LOGO</h2></Grid>
                <Grid className='menubar' item lg={6} md={6} sm={12} marginTop={"1.4rem"} marginBottom={"1.6rem"} >
                    <Link href='' sx={{ fontSize: "13px", textDecoration: "none", color: 'white', paddingLeft: "20px", paddingRight: "20px" }}>Products</Link>
                    <Link href='' sx={{ fontSize: "13px", textDecoration: "none", color: 'white', paddingLeft: "20px", paddingRight: "20px" }}>Solutions</Link>
                    <Link href='' sx={{ fontSize: "13px", textDecoration: "none", color: 'white', paddingLeft: "20px", paddingRight: "20px" }}>Resources</Link>
                    <Link href='' sx={{ fontSize: "13px", textDecoration: "none", color: 'white', paddingLeft: "20px", paddingRight: "20px" }}>Pricing</Link>
                    <Link href='' sx={{ fontSize: "13px", textDecoration: "none", color: 'white', paddingLeft: "20px", paddingRight: "20px" }}>LogIn</Link>
                    <span style={{ marginTop: '-10px', marginLeft: '40px' }}>
                        {getStartedForFreeButton('contained')}
                    </span>
                </Grid>
                <Grid className='hamburgerbutton' item lg={2} md={2} sm={2} xs={2} sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Button sx={{ textAlign: 'right', border: 'none', backgroundColor: 'transparent' }} onClick={() => setDrawer(true)} >
                        <DehazeIcon sx={{ color: 'white' }} />
                    </Button>
                    <SwipeableDrawer PaperProps={{sx:{backgroundColor:'#FFFEE9', color:'#061838'}}}  anchor='right' open={drawer} onClose={() => setDrawer(false)} onOpen={() => setDrawer(true)}>
                        {drawerList()}
                    </SwipeableDrawer>
                </Grid>
            </Grid>



            <Grid className='imagecontainer' container sx={{ backgroundColor: "#0b1928", justifyContent: 'space-between' }}>
                <Grid container md={5} sm={5} xs={5} sx={{ justifyContent: "center", alignItems: 'center' }}>
                    <Grid item md={1} sm={1} xs={2}></Grid>
                    <Grid item md={8} sm={8} xs={8}>
                        <Typography variant='h4' color={'#FCF3CF'} sx={{ textAlign: 'left' }}>AUTOMATE MANUAL <br />DATA ENTRY USING AI </Typography>
                        <Typography variant='body1' color={'#FCF3CF'} sx={{ textAlign: 'left', paddingTop: '40px' }}>Capture data from documents instantly <br />Reduce turn around times and the manual effort required</Typography>
                    </Grid>
                    <Grid item md={3} sm={3} xs={4}></Grid>

                    <Grid container marginTop={'-40px'} marginLeft={'5%'}>
                        <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '2%' }}>
                            {getStartedForFreeButton('outlined')}
                        </div>
                        <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '2%' }}>
                            {getStartedForFreeButton('contained')}
                        </div>
                        <Grid item lg={12} md={12} sm={12}>
                            <div style={{ display: 'block', marginTop: "2%", marginLeft: '25px' }}>
                                <Typography variant='body2' color='white'>Free trial. Cancel anytime. No hidden charges.</Typography>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container md={4} sm={4}>
                    <Grid item>
                        <img className='ocrimage' src={ocrImage} alt="ocrImage" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid md={4} sm={12} xs={12} container sx={{ backgroundColor: "#FFFBEC", width: "100%", height: "250px" }}>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', marginBottom: '-20px', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='icon'>
                            <img src={icon1} alt="icon1" />
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '-60px', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 style={{ textAlign: 'center' }}>Understand Documents</h3>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <p style={{ fontSize: "12px", textAlign: 'center' }}>Use AI to read unseen, semi-structured documents that don't follow a<br />standard template like generic OCR software</p>
                    </Grid>
                </Grid>

                <Grid md={4} sm={12} xs={12} container sx={{ backgroundColor: "#FFFBEC", width: "100%", height: "250px" }}>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', marginBottom: '-20px', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='icon'>
                            <img src={icon2} alt="icon1" />
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '-60px', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 style={{ textAlign: 'center' }}>Slash Turn around Time</h3>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <p style={{ fontSize: "12px", textAlign: "center" }}>Use AI to read unseen, semi-structured documents that don't follow a<br />standard template like generic OCR software</p>
                    </Grid>
                </Grid>

                <Grid md={4} sm={12} xs={12} container sx={{ backgroundColor: "#FFFBEC", width: "100%", height: "250px" }}>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', marginBottom: '-20px', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='icon'>
                            <img src={icon3} alt="icon1" />
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', marginBottom: '-60px', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 style={{ textAlign: 'center' }}>Validate Extracted Time</h3>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <p style={{ fontSize: "12px", textAlign: 'center' }}>Use AI to read unseen, semi-structured documents that don't follow a<br />standard template like generic OCR software</p>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container sx={{ backgroundColor: '#E2DABC' }} paddingTop={'50px'} paddingLeft={'4%'} paddingRight={'4%'}>
                <Grid container md={12} sm={12} sx={{ justifyContent: 'space-between' }} >
                    <Grid item md={6} sm={12} sx={{ alignSelf: 'center' }}>
                        <Typography variant='h5'><b>Capture Only What You Want</b></Typography>
                        <Typography variant='body1' paddingTop={'25px'}>Keep your data clean and crisp – upload unstructured invoices from multiple customers but only<br />extract fields you need. You can also add new fields if required.</Typography>
                    </Grid>
                    <Grid item md={4} sm={12} paddingRight={'20%'}>
                        <img className='sideimage' src={sideImage1} alt='sideImage1' />
                    </Grid>
                </Grid>
                <Grid container md={12} sm={12} sx={{ justifyContent: 'space-between' }} paddingTop={'40px'}>
                    <Grid item md={4} sm={12}>
                        <img className='sideimage' src={sideImage2} alt='sideImage2' />
                    </Grid>
                    <Grid item md={6} sm={12} sx={{ alignSelf: 'center' }} >
                        <Typography variant='h5'><b>AI that Learns with every new Document</b></Typography>
                        <Typography variant='body1' paddingTop={'20px'}>
                            As your business grows, the more transactions and the more data you will deal with.<br />
                            The model keeps learning and will be able to understand and capture data with higher accuracy each time new<br />
                            documents are processed.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>



            <Grid container sx={{ backgroundColor: '#F7F5C8', justifyContent: 'space-between', paddingTop: '50px' }}>
                {
                    CheckMedia('sm') ?
                        <Grid container lg={6} md={6} rowSpacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={6} md={12}>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}><b>Seamlessly upload documents and export data</b></Typography>
                            </Grid>
                            <Grid item lg={6} md={12}>
                                <img src={sideImage3} alt='sideImage3' />
                            </Grid>
                        </Grid>
                        : ''
                }

                <Grid container lg={3} md={3} sm={12} marginRight={'50px'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item >
                        <Button variant={'contained'} sx={{ borderRadius: "50px", paddingLeft: "20px", paddingRight: "20px", fontSize: "10px", width: "200px", height: "40px" }}>
                            <b>Get Started for Free</b>
                        </Button >
                    </Grid>
                </Grid>
            </Grid>





            <Grid container md={12} sm={12} sx={{ justifyContent: 'space-between', backgroundColor: '#E2DABC' }} paddingLeft={'4%'} paddingRight={'4%'}>
                <Grid item md={6} sm={12} sx={{ alignSelf: 'center' }}>
                    <Typography variant='h5'><b>Seamlessly upload documents and export data</b></Typography>
                    <Typography variant='body1' paddingTop={'25px'}>
                        Customers send you documents only via email? This BRAND supports <br />platforms you can directly import from or export to your existing workflow <br />without disrupting your system
                    </Typography>
                </Grid>
                <Grid item md={4} sm={12} paddingRight={'20%'}>
                    <img className='sideimage' src={sideImage4} alt='sideImage4' />
                </Grid>
                <Grid item lg={12} md={12} sm={12} paddingTop={'100px'}>
                    <Typography variant='h3' color={'#0C1128'} textAlign={'center'}>Start now with your <b>FREE Plan!</b></Typography>
                </Grid>
            </Grid>



            <Grid container lg={12} md={12} sm={12} sx={{ backgroundColor: '#E2DABC' }} paddingTop={'60px'} paddingBottom={'100px'} >

                <Grid className='firstcard' container lg={4} md={4} sm={12} sx={{ alignItems: 'center' }}>
                    <Card className='plancard' sx={{ height: '550px', borderRadius: '10px', backgroundColor: '#ACA36D' }}>
                        <Grid lg={12} md={12} sx={{ backgroundColor: '#FFF8D1', height: '75px', paddingTop: '30px' }}>
                            <Typography variant='body1' textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: '17px' }}>Free</Typography>
                        </Grid>
                        <Grid container lg={12} md={12} flexDirection={'column'}>
                            <Grid item>
                                <Typography variant='body1' textAlign={'center'} paddingTop={'30px'} color={'whitesmoke'}><b>Have a try at the user-friendly OCR tool <br />we available now</b></Typography>
                            </Grid>
                            <Grid item paddingTop={'60px'}>
                                <h2 style={{ textAlign: 'center', color: 'white' }}>0 GBP</h2>
                            </Grid>
                            <Grid item paddingTop={'30px'} >
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ color: 'white', textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ color: 'white', textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ color: 'white', textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sx={{ textAlign: 'center' }} paddingTop={'20px'}>
                                <Button variant={'contained'} sx={{ borderRadius: "50px", paddingLeft: "20px", paddingRight: "20px", fontSize: "10px", width: "200px", height: "40px", backgroundColor: 'white', color: '#001341' }}>
                                    <b>Let's GO</b>
                                </Button >
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>


                <Grid className='middlecard' container lg={4} md={4} sm={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Card className='plancard' sx={{ height: '550px', borderRadius: '10px', backgroundColor: '#FFF9DC' }}>
                        <Grid lg={12} md={12} sx={{ backgroundColor: '#001341', height: '75px', paddingTop: '30px' }}>
                            <Typography variant='body1' textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: '17px' }} color={'white'}>Premium</Typography>
                        </Grid>
                        <Grid container lg={12} md={12} flexDirection={'column'}>
                            <Grid item>
                                <Typography variant='body1' textAlign={'center'} paddingTop={'30px'} ><b>When your business is ready for more customers and revenues.<br /> It’s time for this!</b></Typography>
                            </Grid>
                            <Grid item paddingTop={'40px'}>
                                <h2 style={{ textAlign: 'center' }}>12 GBP</h2>
                            </Grid>
                            <Grid item paddingTop={'30px'} >
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sx={{ textAlign: 'center' }} paddingTop={'20px'}>
                                <Button variant={'contained'} sx={{ borderRadius: "50px", paddingLeft: "20px", paddingRight: "20px", fontSize: "10px", width: "200px", height: "40px", backgroundColor: '#001341' }}>
                                    <b>Yes, Please!</b>
                                </Button >
                            </Grid>
                        </Grid>

                    </Card>

                </Grid>


                <Grid className='endcard' container lg={4} md={4} sm={12} sx={{ alignItems: 'center' }}>
                    <Card className='plancard' sx={{ height: '550px', borderRadius: '10px', backgroundColor: 'white' }}>

                        <Grid lg={12} md={12} sx={{ backgroundColor: '#001341', height: '75px', paddingTop: '30px' }}>
                            <Typography variant='body1' textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: '17px' }} color={'white'}>Custom</Typography>
                        </Grid>
                        <Grid container lg={12} md={12} flexDirection={'column'}>
                            <Grid item>
                                <Typography variant='body1' textAlign={'center'} paddingTop={'30px'}><b>Want more capabilities? Let’s talk with our business<br /> partners that will tailor your needs!</b></Typography>
                            </Grid>
                            <Grid item paddingTop={'60px'}>
                                <h2 style={{ textAlign: 'center' }}>CUSTOM</h2>
                            </Grid>
                            <Grid item paddingTop={'30px'} >
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Grid item paddingTop={'2px'} paddingRight={'15px'}>
                                        <img src={checkIcon} alt='check1' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ textAlign: 'center', display: 'inline' }}><b>Process 100 Pages</b></Typography><br />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sx={{ textAlign: 'center' }} paddingTop={'20px'}>
                                <Button variant={'contained'} sx={{ borderRadius: "50px", paddingLeft: "20px", paddingRight: "20px", fontSize: "10px", width: "200px", height: "40px", backgroundColor: '#001341' }}>
                                    <b> Call US !</b>
                                </Button >
                            </Grid>
                        </Grid>

                    </Card>

                </Grid>
            </Grid>





            <Grid className='imagecontainer2' container sx={{ backgroundColor: '#FFFAE8', justifyContent: 'center', alignItems: 'center' }}>
                <Grid className='firstgetintouchcardgrid' container lg={6} md={6} sm={12} >
                    <Card className='getintouchcards' sx={{ height: '700px', borderRadius: '10px', backgroundColor: 'white' }}>
                        <Typography variant='h4' fontWeight={'bold'} marginTop={'50px'} marginLeft={'40px'} marginBottom={'20px'}>Get In Touch</Typography>
                        <TextField variant='outlined' label='First Name*' size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <TextField variant='outlined' label='Last Name*' size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <TextField variant='outlined' label='Email Address*' size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <TextField variant='outlined' label='Phone Number*' size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <TextField variant='outlined' label='Company *' size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <TextField variant='outlined' label='How can we Help You? ' multiline rows={5} size='small' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }} ></TextField>
                        <Typography variant='body2' sx={{ width: '80%', marginLeft: '40px', marginBottom: '20px' }}>By sending this form I confirm that I have read and accept the Brand's &nbsp;
                            <Link href=''>Privacy Policy</Link>
                        </Typography>
                        <div style={{ textAlign: 'right', marginRight: '50px' }}>
                            <Button variant={'contained'} sx={{ borderRadius: "50px", fontSize: "10px", width: "200px", height: "40px", backgroundColor: '#001341' }}>
                                <b>Send</b>
                            </Button >
                        </div>
                    </Card>
                </Grid>
                <Grid className='secondgetintouchcardgrid' container lg={6} md={6} sm={12} >
                    <Card className='getintouchcards' sx={{ height: '500px', borderRadius: '10px', backgroundColor: '#001341' }}>
                        <Grid container marginBottom={'20px'} marginTop={'50px'}>
                            <Grid item paddingTop={'2px'} paddingRight={'15px'} md={2} lg={2} sm={2} textAlign={'right'}></Grid>
                            <Grid item md={10} lg={10} sm={10}>
                                <Typography variant='h5' fontWeight={'bold'} color={'white'}>What Happens Next</Typography>
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={'40px'} >
                            <Grid item paddingTop={'2px'} paddingRight={'15px'} md={2} lg={2} sm={2} xs={2} textAlign={'right'}>
                                <CircleTwoToneIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item md={10} lg={10} sm={10} xs={10}>
                                <Typography sx={{ textAlign: 'center', display: 'inline' }} color={'white'}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere risus egestas varius dolor elementum iaculis velits</b></Typography><br />
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={'40px'}>
                            <Grid item paddingTop={'2px'} paddingRight={'15px'} md={2} lg={2} sm={2} xs={2} textAlign={'right'}>
                                <CircleTwoToneIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item md={10} lg={10} sm={10} xs={10}>
                                <Typography sx={{ textAlign: 'center', display: 'inline' }} color={'white'}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere risus egestas varius dolor elementum iaculis velits</b></Typography><br />
                            </Grid>
                        </Grid>
                        <Grid container marginBottom={'40px'}>
                            <Grid item paddingTop={'2px'} paddingRight={'15px'} md={2} lg={2} sm={2} xs={2} textAlign={'right'}>
                                <CircleTwoToneIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item md={10} lg={10} sm={10} xs={10}>
                                <Typography sx={{ textAlign: 'center', display: 'inline' }} color={'white'}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui posuere risus egestas varius dolor elementum iaculis velits</b></Typography><br />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

            </Grid>





            <Grid container sx={{ backgroundColor: '#242B31' }}>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container sm={6} md={4} lg={2} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} marginTop={'20px'} marginBottom={'50px'}>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='h6' fontWeight={'bold'} >Products</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Invoice OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Driver License (US) OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>Passport OCR</Typography>
                    </Grid>
                    <Grid item paddingTop={'15px'}>
                        <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'10px'}>ID Card OCR</Typography>
                    </Grid>
                </Grid>
                <Grid container lg={12} md={12} sm={12} sx={{ justifyContent: 'center', alignItems: 'center' }} marginTop={'50px'} marginBottom={'30px'}>
                    <Typography textAlign={'center'} color={'white'} variant='body2' fontWeight={'bold'} fontSize={'12px'}>© 2022 BRAND Inc.</Typography>
                </Grid>

            </Grid>


        </>
    )
}

export default LandingPage
