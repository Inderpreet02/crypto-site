import millify from 'millify'
import React from 'react'

function DisplayValue({ amount }) {
    return (
        <div>
            {millify(amount)}
        </div>
    )
}

export default DisplayValue
