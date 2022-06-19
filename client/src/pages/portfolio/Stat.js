/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Web3 from 'web3';
// material
import {
    Stack, Grid, Typography, CircularProgress, FormGroup, FormControlLabel, Checkbox, Box
} from '@mui/material';

import PLGraph from './PLGraph'

const mainnet = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const web3 = new Web3(mainnet)

const Card = ({ title, content }) => {
    return (
        <Stack direction='column' alignItems='center' sx={{ border: '1px solid white' }}>
            <Typography variant='h3' color='main'>{title}</Typography>
            <Typography variant='h6'>{content}</Typography>
        </Stack>
    )
}

const StatsCard = ({ icon, title, value, subTitle, info, color = 'white' }) => {
    return (
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={3}
            sx={{
                border: '1px solid grey',
                background: 'linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)',
                borderRadius: `10.8521px`,
                py: 2
            }}
        >
            <Box component='img' src={icon} width='48px' height='48px' />
            <Stack direction='column' sx={{ width: '60%' }}>
                <Stack direction='row' justifyContent='space-between' >
                    <Typography variant='body1' color='text.secondary'>{title}</Typography>
                    <Box component='img' src='/static/icons/info.svg' width='22px' height='22px' />
                </Stack>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Box component='img' src='/static/icons/eth.svg' width='14px' height='28px' />
                    <Typography variant='h6' color={color}>{value}</Typography>
                </Stack>
                {
                    subTitle &&
                    <Typography variant='caption'>{subTitle}</Typography>
                }
            </Stack>
        </Stack >
    )
}

const FeeItem = ({ title, percent, icon, value }) => {
    return (
        <Stack direction='column' spacing={1}>
            <Typography variant='body2'>{title}</Typography>
            <Stack direction='row' spacing={1}>
                <Stack direction='row' alignItems='center' sx={{
                    border: '1px solid grey',
                    background: 'linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)',
                    borderRadius: `10.8521px`,
                    p: 1,
                    width: 0.3
                }}>
                    <Typography variant='body2'>{`${percent}%`}</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={2}
                    sx={{
                        border: '1px solid grey',
                        background: 'linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)',
                        borderRadius: `10.8521px`,
                        p: 1,
                        width: 0.7
                    }}>
                    <Box component='img' src={icon} width='32px' height='32px' />
                    <Typography variant='body2'>{`${value} ETH`}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

// ----------------------------------------------------------------------

export default function Stat() {
    const stats = useSelector(state => state.manager.stats)
    const [includeGas, setIncludeGas] = useState(true)

    const changeIncludeGas = (e) => {
        setIncludeGas(e.target.checked)
    }

    return (
        <Box>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={includeGas} onChange={changeIncludeGas} />} label="Include Total Fee in P/L" />
            </FormGroup>
            <Stack direction='row' alignItems='center' spacing={3} sx={{ my: 3 }}>
                <Box component='img' src='/static/icons/balance.svg' width='48px' height='48px' />
                <Stack direction='column'>
                    <Typography variant='h6' color='text.secondary'>Available Balance</Typography>
                    <Stack direction='row' spacing={3}>
                        <Box component='img' src='/static/icons/eth.svg' width='14px' height='28px' />
                        <Typography variant='h5'>{`${stats?.balance || 0} ETH`}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <StatsCard
                        icon='/static/icons/pnl.svg'
                        title='Closed PNL'
                        value={includeGas ? `${stats?.closePL || 0} ETH` : `${stats?.closePL_noFee || 0} ETH`}
                        color={includeGas ?
                            (stats?.closePL || 0) >= 0 ? 'success.main' : 'error.main'
                            :
                            (stats?.closePL_noFee || 0) >= 0 ? 'success.main' : 'error.main'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatsCard
                        icon='/static/icons/pnl.svg'
                        title='Open PNL'
                        value={includeGas ? `${stats?.openPL || 0} ETH` : `${stats?.openPL_noFee || 0} ETH`}
                        color={includeGas ?
                            (stats?.openPL || 0) >= 0 ? 'success.main' : 'error.main'
                            :
                            (stats?.openPL_noFee || 0) >= 0 ? 'success.main' : 'error.main'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatsCard icon='/static/icons/holding.svg' title='Total Holding Value' value={`${stats?.totalHoldingValue || 0} ETH`} />
                </Grid>
            </Grid>
            <PLGraph />
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <StatsCard icon='/static/icons/total-buy.svg' title='Total Buy' value={`${stats?.totalBuy || 0} ETH`} subTitle={`${stats?.buyCount || 0} Items bought`} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatsCard icon='/static/icons/total-sell.svg' title='Total Sell' value={`${stats?.totalSell || 0} ETH`} subTitle={`${stats?.sellCount || 0} Items sold`} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatsCard icon='/static/icons/total-mint.svg' title='Total Mint' value={`${stats?.totalMint || 0} ETH`} subTitle={`${stats?.mintCount || 0} Items minted`} />
                </Grid>
            </Grid>
            <Stack direction='column'
                sx={{
                    border: '1px solid grey',
                    background: 'linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)',
                    borderRadius: `10.8521px`,
                    p: 2,
                    my: 3
                }}
            >
                <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' alignItems='center' spacing={3} >
                        <Box component='img' src='/static/icons/total-fee.svg' width='48px' height='48px' />
                        <Typography variant='body1' color='text.secondary'>Total Fees</Typography>
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <Box component='img' src='/static/icons/eth.svg' width='14px' height='28px' />
                            <Typography variant='h6'>{`${stats?.totalFee ? stats.totalFee.total : 0} ETH`}</Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Box component='img' src='/static/icons/info.svg' width='22px' height='22px' />
                    </Stack>
                </Stack>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeeItem title='Gas Fee' percent={stats?.totalFee ? (stats.totalFee.gas / stats.totalFee.total * 100).toFixed(0) : 0} icon='/static/icons/gas.svg' value={stats?.totalFee ? stats.totalFee.gas : 0} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeeItem title='Marketplace Fee' percent={stats?.totalFee ? (stats.totalFee.market / stats.totalFee.total * 100).toFixed(0) : 0} icon='/static/icons/market.svg' value={stats?.totalFee ? stats.totalFee.market : 0} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeeItem title='Creator Fee' percent={stats?.totalFee ? (stats.totalFee.creator / stats.totalFee.total * 100).toFixed(0) : 0} icon='/static/icons/creator.svg' value={stats?.totalFee ? stats.totalFee.creator : 0} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FeeItem title='Listing Fee' percent={stats?.totalFee ? (stats.totalFee.listing / stats.totalFee.total * 100).toFixed(0) : 0} icon='/static/icons/listing.svg' value={stats?.totalFee ? stats.totalFee.listing : 0} />
                    </Grid>
                </Grid>
            </Stack >
        </Box>
    );
}