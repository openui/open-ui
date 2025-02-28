import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const RangeAnatomy = () => {
    return (
        <AnatomyWrapper>
            <Host name="input type=range">
                <Part name="range-track">
                    <Part name="range-segment">Segment 1</Part>
                    <Part name="range-segment">Segment 2</Part>
                    <Part name="range-segment">Segment 3</Part>
                    <Part name="range-fill"></Part>
                    <Part name="range-thumb">Thumb 1</Part>
                    <Part name="range-thumb">Thumb 2</Part>
                    <Part name="range-thumb">Thumb 3</Part>
                    <Part name="range-tick">
                        <Part name="range-tick-label">0%</Part>
                    </Part>
                    <Part name="range-tick">
                        <Part name="range-tick-label">50%</Part>
                    </Part>
                    <Part name="range-tick">
                        <Part name="range-tick-label">100%</Part>
                    </Part>
                </Part>
            </Host>
        </AnatomyWrapper>
    )
}

export default RangeAnatomy