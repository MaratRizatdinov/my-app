import { React, useRef, useState, useEffect } from 'react'
import ProgressBar from './ProgressBar/ProgressBar'
import ControlPanel from './ControlPanel/controlpanel'
import TrackPlayContain from './TrackPlayContain/trackplaycontain'
import TrackPlayLikeDiz from './TrackPlayLikeDiz/trackplaylikediz'
import Volumeblock from './Volumeblock/volumeblock'
import * as S from './bar.style'
import { useDispatch, useSelector } from 'react-redux'
import { stopTrack } from '../../store/actions/creators/stopTrack'
import { playTrack } from '../../store/actions/creators/playTrack'
import { setCurrentTrack } from '../../store/actions/creators/setCurrentTrack'

function Bar({ loading }) {
    const audioRef = useRef(null)
    const dispatch = useDispatch()
    const currentTrack = useSelector((s) => s.state.currentTrack)
    const playlist = useSelector((s) => s.state.playlist)
    const playingStatus = useSelector((s) => s.state.isPlaying)

    // Блок отвечает за логику Loop

    const [isLoop, setIsLoop] = useState(false)

    const toggleLoop = () => {
        // setIsLoop(!isLoop);
        setIsLoop((previsLoop) => !previsLoop)
    }

    //  Блок отвечает за логику кнопки Play/Pause

    // const [isPlaying, setIsPlaying] = useState(true)

    const handleStart = () => {
        audioRef.current.play()
        // setIsPlaying(true)
        dispatch(playTrack())
    }

    const handleStop = () => {
        audioRef.current.pause()
        // setIsPlaying(false)
        dispatch(stopTrack())
    }

    const togglePlay = playingStatus ? handleStop : handleStart

    // Блок отвечает за логику Bar и Volume

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)

    useEffect(() => {
        let ref = audioRef.current
        ref.volume = 0.2
        setVolume(ref.volume)
        const timeUpdate = (event) => {
            if (ref.currentTime && ref.duration) {
                setCurrentTime(ref.currentTime)
                setDuration(ref.duration)
            } else {
                setCurrentTime(0)
                setDuration(0)
            }
        }

        ref.addEventListener('timeupdate', timeUpdate)

        return () => {
            ref.removeEventListener('timeupdate', timeUpdate)
        }
    }, [])

    // Блок отвечает за запуск трека при смене трека

    useEffect(() => {
        audioRef.current.load()
        // dispatch(playTrack())
        // setIsPlaying(true)
    }, [currentTrack])

    //Блок визуализирует таймер

    const timerShow = (num) => {
        const timer = Math.floor(num)
        const timerMin = Math.floor(timer / 60)
        const timerSec = Math.floor(timer % 60)
        const timerZero = Math.floor(timer % 60) < 10 ? '0' : ''
        return '0' + timerMin + ':' + timerZero + timerSec
    }

    //Блок запуска следующего трека

    const playNextTrack = () => {
        // console.log('hi');
        const nextID = playlist.indexOf(currentTrack) + 1
        if (nextID === playlist.length) {
            dispatch(stopTrack())
            return
        }
        const nextTrack = playlist[nextID]
        dispatch(setCurrentTrack(nextTrack))
    }

    const setPlayingTime = () => {
        if (audioRef.current.currentTime < 5) {
            return (audioRef.current.currentTime = 0)
        } else return 1;
    }

    return (
        <S.Bar>
            <audio
                style={{ display: 'none' }}
                controls
                ref={audioRef}
                loop={isLoop}
                onEnded={playNextTrack}
                autoPlay
            >
                <source src={currentTrack.track_file} type="audio/mpeg" />
            </audio>
            <S.BarContent>
                <S.TimerBlock>
                    <S.Timer>
                        {timerShow(currentTime)} / {timerShow(duration)}
                    </S.Timer>
                </S.TimerBlock>
                <S.BarPlayerProgress>
                    <ProgressBar
                        audioRef={audioRef}
                        currentTime={currentTime}
                        duration={duration}
                    />
                </S.BarPlayerProgress>
                <S.BarPlayerBlock>
                    <S.BarPlayer>
                        <ControlPanel
                            isLoop={isLoop}
                            toggleLoop={toggleLoop}
                            togglePlay={togglePlay}
                            setPlayingTime={setPlayingTime}
                        />
                        <S.PlayerTrackPlay>
                            <TrackPlayContain
                                loading={loading}
                                trackSelect={currentTrack}
                            />
                            <TrackPlayLikeDiz />
                        </S.PlayerTrackPlay>
                    </S.BarPlayer>
                    <Volumeblock
                        audioRef={audioRef}
                        volume={volume}
                        setVolume={setVolume}
                    />
                </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
    )
}

export default Bar
