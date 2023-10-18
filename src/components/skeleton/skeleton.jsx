import React from 'react'
import * as S from './sceleton.style'

function Skeleton(props) {
    const container = {
        width: props.width,
        height: props.height,
    }

    return <S.SceletonContainer style={container}></S.SceletonContainer>
}

export default Skeleton
