import React from 'react'
import {BoxArrowUpRight} from 'react-bootstrap-icons'


export default function BuyLink({buyLink}) {
    return (
        <a href={buyLink} target='_blank' rel="noopener noreferrer" style={{fontSize: "1rem", marginRight: '.3rem'}}>Purchase<BoxArrowUpRight style={{paddingBottom: '.3rem'}}/></a>
    )
}
