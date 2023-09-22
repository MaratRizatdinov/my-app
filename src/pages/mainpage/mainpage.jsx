import React, { useState, useEffect } from 'react'
import Main from '../../components/main/main'
import Bar from '../../components/bar/bar'
import Footer from '../../components/footer/footer'
import { Wrapper, Container } from '../../App.style'
import { getAllTracks } from '../../api'
import { setPlaylist } from '../../store/actions/creators/setPlaylist'
import { toggleLoadingMode } from '../../store/actions/creators/toggleLoadingMode'
import { useDispatch, useSelector } from 'react-redux'

export const MainPage = ({ setIsUser }) => {
    const [addError, setAddError] = useState(false)
    const dispatch = useDispatch()
    const currentTrack = useSelector((s) => s.state.currentTrack)

    useEffect(() => {
        getAllTracks()
            .then((tracks) => {
                dispatch(setPlaylist(tracks))
                dispatch(toggleLoadingMode())
            })
            .catch(() => {
                setAddError(true)
            })
    }, [])

    return (
        <Wrapper>
            <Container>
                <Main addError={addError} setIsUser={setIsUser} />
                {currentTrack ? <Bar /> : null}
                <Footer />
            </Container>
        </Wrapper>
    )
}
