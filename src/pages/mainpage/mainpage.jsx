import React, { useState, useEffect } from 'react'
import Main from '../../components/main/main'
import Bar from '../../components/bar/bar'
import Footer from '../../components/footer/footer'
import { Wrapper, Container } from '../../App.style'
import { workArray } from '../../workarray'
import { getAllTracks } from '../../api'
import { setPlaylist } from '../../store/actions/creators/setPlaylist'
import { useDispatch } from 'react-redux'

export const MainPage = ({ setIsUser }) => {
    const [loading, setLoading] = useState(true)
    const [trackList, setTrackList] = useState(workArray)
    const [trackSelect, setTrackSelect] = useState(null)
    const [addError, setAddError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getAllTracks()
            .then((tracks) => {
                setLoading(false)
                setTrackList(tracks)
                dispatch(setPlaylist(tracks))
            })
            .catch(() => {
                setAddError(true)
            })
    }, [])

    return (
        <Wrapper>
            <Container>
                <Main
                    loading={loading}
                    tracks={trackList}
                    setTrackSelect={setTrackSelect}
                    addError={addError}
                    setIsUser={setIsUser}
                />
                {trackSelect ? (
                    <Bar loading={loading} trackSelect={trackSelect} />
                ) : null}
                <Footer />
            </Container>
        </Wrapper>
    )
}
