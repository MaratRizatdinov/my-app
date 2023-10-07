import { React } from 'react'
import * as S from './controlpanel.style'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack } from '../../../store/actions/creators/setCurrentTrack'
import { toggleShuffle } from '../../../store/actions/creators/toggleShuffle'
import { useGetAllFavoritesQuery } from '../../../store/services/favorite'

function ControlPanel({ handleLoop, togglePlay, setPlayingTime }) {
    
    const dispatch = useDispatch()
    const playlist = useSelector((s) => s.state.playlist)
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const playingStatus = useSelector((s) => s.state.isPlaying)
    const loopStatus = useSelector((s) => s.state.isLoop)
    const shuffleStatus = useSelector((s) => s.state.isShuffleMode)
    const shufflePlaylist = useSelector((s) => s.state.shufflePlayList)
    const favoriteStatus = useSelector((s) => s.state.isFavoriteMode)
    const token = useSelector((s) => s.state.accessToken)
    const {data: favoritesPlaylist} = useGetAllFavoritesQuery(token)
    

    //  Логика кнопки Next

    const handleNextTrack = () => {
        const activeList = favoriteStatus
            ? favoritesPlaylist
            : shuffleStatus
            ? shufflePlaylist
            : playlist
        let nextID = activeList.indexOf(currentTrack) + 1
        if (nextID === activeList.length) {
            if (!shuffleStatus) return
            nextID = 0
        }
        const nextTrack = activeList[nextID]
        dispatch(setCurrentTrack(nextTrack))
    }

    //  Логика кнопки Prev

    const handlePrevTrack = () => {
        const activeList = favoriteStatus
            ? favoritesPlaylist
            : shuffleStatus
            ? shufflePlaylist
            : playlist
        let prevID = activeList.indexOf(currentTrack) - 1

        if (prevID === -1) {
            if (!shuffleStatus) return
            prevID = activeList.length - 1
        }
        const prevTrack = activeList[prevID]
        setPlayingTime() ? dispatch(setCurrentTrack(prevTrack)) : null
    }

    // Логика кнопки Shuffle

    const handleShuffleTrack = () => {
        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5)
        }

        shufflePlaylist.length !== 0
            ? dispatch(toggleShuffle([]))
            : dispatch(toggleShuffle(shuffle([...playlist])))
    }

    // Разметка

    return (
        <S.PlayerControls>
            <ControlButton
                component="player__btn-prev"
                class=" _btn"
                svg="player__btn-prev-svg"
                alt="prev"
                img="img/icon/sprite.svg#icon-prev"
                click={handlePrevTrack}
            />
            <ControlButton
                component="player__btn-play"
                class=" _btn"
                svg="player__btn-play-svg"
                alt="play"
                img={
                    !playingStatus
                        ? 'img/icon/sprite.svg#icon-play'
                        : 'img/icon/sprite.svg#icon-pause'
                }
                click={togglePlay}
            />
            <ControlButton
                component="player__btn-next"
                class="_btn"
                svg="player__btn-next-svg"
                alt="next"
                img="img/icon/sprite.svg#icon-next"
                click={handleNextTrack}
            />
            <ControlButton
                component="player__btn-repeat"
                class="_btn-icon"
                svg="player__btn-repeat-svg"
                alt="repeat"
                img="img/icon/sprite.svg#icon-repeat"
                click={handleLoop}
                button_color={loopStatus ? 'white' : 'grey'}
            />

            <ControlButton
                component="player__btn-shuffle"
                class="_btn-icon"
                svg="player__btn-shuffle-svg"
                alt="shuffle"
                img="img/icon/sprite.svg#icon-shuffle"
                button_color={shuffleStatus ? 'white' : 'grey'}
                click={handleShuffleTrack}
            />
        </S.PlayerControls>
    )
}
export default ControlPanel

// Вспомогательные функции

function ControlButton({ ...props }) {
    const buttonCollection = {
        'player__btn-prev': S.PlayerButtonPrev,
        'player__btn-play': S.PlayerButtonPlay,
        'player__btn-next': S.PlayerButtonNext,
        'player__btn-repeat': S.PlayerButtonRepeat,
        'player__btn-shuffle': S.PlayerButtonShuffle,
    }

    const Func = buttonCollection[props.component]

    return (
        <Func className={props.class} onClick={props.click}>
            <ControlButtonSVG props={props}></ControlButtonSVG>
        </Func>
    )
}

function ControlButtonSVG({ props }) {
    const buttonCollectionSvg = {
        'player__btn-prev-svg': S.PlayerButtonPrevSvg,
        'player__btn-play-svg': S.PlayerButtonPlaySvg,
        'player__btn-next-svg': S.PlayerButtonNextSvg,
        'player__btn-repeat-svg': S.PlayerButtonRepeatSvg,
        'player__btn-shuffle-svg': S.PlayerButtonShuffleSvg,
    }

    const Func = buttonCollectionSvg[props.svg]

    return (
        <Func alt={props.alt} button_color={props.button_color}>
            <use xlinkHref={props.img}></use>
        </Func>
    )
}
